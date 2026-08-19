"use client";

import { useMemo, useState } from "react";
import { Check, Sparkle } from "@/components/landing/marks";
import {
  DualSenseMark,
  PcMark,
  Ps5Mark,
} from "@/components/landing/hardware-art";
import { WhatsAppButton } from "@/components/landing/whatsapp-button";
import {
  coverageExcluded,
  coverageZones,
  joystickService,
  quoteCopy,
} from "@/lib/landing-content";
import {
  addSurcharge,
  buildQuoteMessage,
  DEFAULT_DUALSENSE_TIER,
  formatUsd,
  formatUsdRange,
  getEquipmentRange,
  getZoneSurcharge,
  isZoneCovered,
  quoteEquipment,
  type CoverageZoneId,
  type DualSenseTierId,
  type QuoteEquipmentId,
} from "@/lib/quote";
import { getWhatsAppTextUrl } from "@/lib/whatsapp";

const zoneOptions = [...coverageZones, coverageExcluded];

const equipmentMark = {
  ps5: Ps5Mark,
  pc: PcMark,
  dualsense: DualSenseMark,
} as const;

type OptionCardProps = {
  label: string;
  hint: string;
  isSelected: boolean;
  onSelect: () => void;
  Mark?: typeof Ps5Mark;
};

function OptionCard({
  label,
  hint,
  isSelected,
  onSelect,
  Mark,
}: OptionCardProps) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onClick={onSelect}
      className={`flex min-h-28 flex-col items-start border-2 p-4 text-left transition-[background-color,border-color,color] duration-200 sm:min-h-32 sm:p-5 ${
        isSelected
          ? "border-mint bg-mint text-navy"
          : "border-paper/15 bg-navy-mid text-paper hover:border-mint/45"
      }`}
    >
      <span className="flex w-full items-start justify-between gap-3">
        {Mark ? (
          <Mark
            className={`h-10 w-10 shrink-0 ${
              isSelected ? "text-navy" : "text-mint"
            }`}
          />
        ) : (
          <span />
        )}
        {isSelected ? <Check className="size-4" /> : null}
      </span>
      <span className="t-heading mt-3 text-[clamp(1.125rem,2vw,1.5rem)] uppercase">
        {label}
      </span>
      <span
        className={`mt-2 text-sm leading-snug ${
          isSelected ? "text-navy/70" : "text-paper/62"
        }`}
      >
        {hint}
      </span>
    </button>
  );
}

export function QuoteCalculator() {
  const [equipmentId, setEquipmentId] = useState<QuoteEquipmentId | null>(
    null,
  );
  const [dualsenseTierId, setDualsenseTierId] = useState<DualSenseTierId>(
    DEFAULT_DUALSENSE_TIER,
  );
  const [zoneId, setZoneId] = useState<CoverageZoneId | null>(null);
  const [municipality, setMunicipality] = useState<string | null>(null);

  const selectedEquipment = quoteEquipment.find(
    (item) => item.id === equipmentId,
  );
  const selectedZone = zoneOptions.find((zone) => zone.id === zoneId);
  const selectedTier = joystickService.tiers.find(
    (tier) => tier.id === dualsenseTierId,
  );

  const estimate = useMemo(() => {
    if (!equipmentId || !zoneId || !selectedEquipment) {
      return null;
    }

    const baseRange = getEquipmentRange(equipmentId, dualsenseTierId);
    const covered = isZoneCovered(zoneId);
    const surcharge = getZoneSurcharge(zoneId);

    if (!covered || surcharge === null) {
      return {
        uncovered: true as const,
        baseRange,
        surcharge: null,
        totalRange: null,
      };
    }

    return {
      uncovered: false as const,
      baseRange,
      surcharge,
      totalRange: addSurcharge(baseRange, surcharge),
    };
  }, [dualsenseTierId, equipmentId, selectedEquipment, zoneId]);

  const quoteUrl = useMemo(() => {
    if (
      !equipmentId ||
      !zoneId ||
      !selectedEquipment ||
      !selectedZone ||
      !estimate ||
      estimate.uncovered ||
      estimate.totalRange === null ||
      estimate.surcharge === null
    ) {
      return null;
    }

    const serviceLabel =
      equipmentId === "dualsense"
        ? joystickService.title
        : selectedEquipment.service;

    return getWhatsAppTextUrl(
      buildQuoteMessage({
        equipmentId,
        dualsenseTierId,
        municipality,
        serviceLabel,
        zoneLabel: selectedZone.name,
        baseRange: estimate.baseRange,
        surcharge: estimate.surcharge,
        totalRange: estimate.totalRange,
      }),
    );
  }, [
    dualsenseTierId,
    equipmentId,
    estimate,
    municipality,
    selectedEquipment,
    selectedZone,
    zoneId,
  ]);

  const municipalities =
    selectedZone && "municipalities" in selectedZone
      ? selectedZone.municipalities
      : [];

  function selectEquipment(id: QuoteEquipmentId) {
    setEquipmentId(id);
    if (id !== "dualsense") {
      setDualsenseTierId(DEFAULT_DUALSENSE_TIER);
    }
  }

  function selectZone(id: CoverageZoneId) {
    setZoneId(id);
    setMunicipality(null);
  }

  const priceText = !estimate
    ? "—"
    : estimate.uncovered
      ? quoteCopy.resultUncovered
      : formatUsdRange(estimate.totalRange);

  return (
    <div className="grid gap-4">
      <fieldset>
        <legend className="text-sm font-semibold text-mint">
          {quoteCopy.equipmentLegend}
        </legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {quoteEquipment.map((item) => (
            <OptionCard
              key={item.id}
              Mark={equipmentMark[item.id]}
              label={item.label}
              hint={
                item.id === "dualsense"
                  ? selectedTier?.price ?? item.service
                  : formatUsdRange({ min: item.min, max: item.max })
              }
              isSelected={equipmentId === item.id}
              onSelect={() => selectEquipment(item.id)}
            />
          ))}
        </div>
      </fieldset>

      {equipmentId === "dualsense" ? (
        <fieldset className="border-2 border-paper/12 bg-navy-mid p-5">
          <legend className="px-2 text-sm font-semibold text-mint">
            {quoteCopy.dualsenseLegend}
          </legend>
          <div className="grid gap-2 sm:grid-cols-3">
            {joystickService.tiers.map((tier) => {
              const isSelected = dualsenseTierId === tier.id;

              return (
                <button
                  key={tier.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setDualsenseTierId(tier.id)}
                  className={`border px-4 py-3 text-left transition-colors duration-200 ${
                    isSelected
                      ? "border-mint bg-mint text-navy"
                      : "border-paper/15 text-paper hover:border-mint/45"
                  }`}
                >
                  <span className="block font-sans text-sm font-semibold uppercase tracking-tight">
                    {tier.label}
                  </span>
                  <span
                    className={`mt-1 block text-xs ${
                      isSelected ? "text-navy/70" : "text-paper/62"
                    }`}
                  >
                    {tier.price}
                  </span>
                </button>
              );
            })}
          </div>
        </fieldset>
      ) : null}

      <fieldset disabled={!equipmentId} className={equipmentId ? "" : "opacity-40"}>
        <legend className="text-sm font-semibold text-mint">
          {quoteCopy.zoneLegend}
        </legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {zoneOptions.map((zone) => (
            <OptionCard
              key={zone.id}
              label={zone.name}
              hint={zone.surchargeLabel}
              isSelected={zoneId === zone.id}
              onSelect={() => selectZone(zone.id)}
            />
          ))}
        </div>
      </fieldset>

      {municipalities.length > 0 ? (
        <fieldset>
          <legend className="text-sm font-semibold text-mint">
            {quoteCopy.municipalityLegend}
          </legend>
          <select
            value={municipality ?? ""}
            onChange={(event) => setMunicipality(event.target.value || null)}
            className="mt-3 h-12 w-full max-w-md border-2 border-paper/15 bg-navy-mid px-3 font-sans text-sm font-semibold uppercase tracking-tight text-paper scheme-dark focus-visible:border-mint"
          >
            <option value="">{quoteCopy.municipalityPlaceholder}</option>
            {municipalities.map((place) => (
              <option key={place.name} value={place.name}>
                {"note" in place && place.note
                  ? `${place.name} — ${place.note}`
                  : place.name}
              </option>
            ))}
          </select>
        </fieldset>
      ) : null}

      <div
        aria-live="polite"
        className={`relative overflow-hidden p-7 sm:p-9 ${
          estimate?.uncovered
            ? "border-2 border-dashed border-paper/25 bg-navy-mid text-paper"
            : "bg-mint text-navy"
        }`}
      >
        {estimate?.uncovered ? null : (
          <Sparkle className="pointer-events-none absolute -bottom-10 -right-8 size-40 text-navy/10" />
        )}
        <p className="text-sm font-semibold">
          {estimate?.uncovered
            ? coverageExcluded.surchargeLabel
            : quoteCopy.resultLabel}
        </p>
        <p
          className={`t-numeral mt-4 ${
            estimate?.uncovered
              ? "text-[clamp(2rem,6vw,4rem)] text-paper"
              : "text-[clamp(2.5rem,8vw,5.5rem)]"
          }`}
        >
          {estimate ? priceText : "—"}
        </p>
        <p
          className={`mt-3 max-w-md text-sm leading-relaxed ${
            estimate?.uncovered ? "text-paper/70" : "text-navy/70"
          }`}
        >
          {estimate && selectedEquipment && selectedZone ? (
            estimate.uncovered ? (
              quoteCopy.uncoveredBody
            ) : (
              <>
                {selectedEquipment.label}
                {equipmentId === "dualsense" && selectedTier
                  ? ` · ${selectedTier.label}`
                  : null}
                {" · "}
                {municipality ?? selectedZone.name}
                {`. Servicio ${formatUsdRange(estimate.baseRange)}`}
                {estimate.surcharge !== null && estimate.surcharge > 0
                  ? ` · ${formatUsd(estimate.surcharge)} por el viaje.`
                  : " · viaje incluido."}
              </>
            )
          ) : (
            quoteCopy.resultEmpty
          )}
        </p>
        {estimate?.uncovered ? null : (
          <p className="mt-2 max-w-md text-xs leading-relaxed text-navy/60">
            {quoteCopy.disclaimer}
          </p>
        )}
        <div className="mt-8">
          {quoteUrl ? (
            <WhatsAppButton href={quoteUrl} variant="ink">
              {quoteCopy.cta}
            </WhatsAppButton>
          ) : (
            <span
              className={`inline-flex h-14 items-center border-2 px-6 font-sans text-sm font-semibold uppercase tracking-[0.06em] ${
                estimate?.uncovered
                  ? "border-paper/20 text-paper/40"
                  : "border-navy/20 text-navy/40"
              }`}
            >
              {quoteCopy.cta}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
