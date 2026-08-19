import {
  coverageExcluded,
  coverageZones,
  joystickService,
  maintenanceServices,
} from "@/lib/landing-content";

export type QuoteEquipmentId = "ps5" | "pc" | "dualsense";
export type DualSenseTierId = (typeof joystickService.tiers)[number]["id"];
export type CoverageZoneId =
  | (typeof coverageZones)[number]["id"]
  | typeof coverageExcluded.id;

type MoneyRange = {
  min: number;
  max: number;
};

const ps5 = maintenanceServices[0];
const pc = maintenanceServices[1];

export const quoteEquipment = [
  {
    id: "ps5" as const,
    code: "01",
    label: "PlayStation 5",
    short: "PS5",
    service: ps5.title,
    min: ps5.amount,
    max: ps5.amount,
  },
  {
    id: "pc" as const,
    code: "02",
    label: "PC Gamer",
    short: "PC",
    service: pc.title,
    min: pc.amount,
    max: pc.amount,
  },
  {
    id: "dualsense" as const,
    code: "03",
    label: "Mando DualSense",
    short: "DualSense",
    service: joystickService.title,
    min: joystickService.tiers[0].min,
    max: joystickService.tiers[2].max,
  },
] as const;

const equipmentById = new Map(
  quoteEquipment.map((item) => [item.id, item] as const),
);
const zoneById = new Map(coverageZones.map((zone) => [zone.id, zone] as const));
const tierById = new Map(
  joystickService.tiers.map((tier) => [tier.id, tier] as const),
);

export const DEFAULT_DUALSENSE_TIER: DualSenseTierId = "two-sticks";

export function isZoneCovered(zoneId: CoverageZoneId): boolean {
  return zoneId !== coverageExcluded.id;
}

export function getEquipmentRange(
  equipmentId: QuoteEquipmentId,
  dualsenseTierId: DualSenseTierId,
): MoneyRange {
  if (equipmentId === "dualsense") {
    const tier = tierById.get(dualsenseTierId) ?? joystickService.tiers[1];
    return { min: tier.min, max: tier.max };
  }

  const equipment = equipmentById.get(equipmentId);
  return equipment
    ? { min: equipment.min, max: equipment.max }
    : { min: 0, max: 0 };
}

/** Recargo fijo de la matriz. `null` si la zona no tiene servicio. */
export function getZoneSurcharge(zoneId: CoverageZoneId): number | null {
  if (zoneId === coverageExcluded.id) {
    return null;
  }

  return zoneById.get(zoneId)?.surcharge ?? 0;
}

export function addSurcharge(base: MoneyRange, surcharge: number): MoneyRange {
  return {
    min: base.min + surcharge,
    max: base.max + surcharge,
  };
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatUsdRange(range: MoneyRange): string {
  if (range.min === range.max) {
    return formatUsd(range.min);
  }

  return `${formatUsd(range.min)} – ${formatUsd(range.max)}`;
}

export function formatSurcharge(amount: number): string {
  if (amount === 0) {
    return "sin recargo";
  }

  return `+${formatUsd(amount)}`;
}

type QuoteMessageInput = {
  equipmentId: QuoteEquipmentId;
  dualsenseTierId: DualSenseTierId;
  municipality: string | null;
  serviceLabel: string;
  zoneLabel: string;
  baseRange: MoneyRange;
  surcharge: number;
  totalRange: MoneyRange;
};

/**
 * Mensaje de WhatsApp con la selección del cotizador, para que el agendamiento
 * llegue con equipo, zona y tarifa ya escritos.
 */
export function buildQuoteMessage({
  equipmentId,
  dualsenseTierId,
  municipality,
  serviceLabel,
  zoneLabel,
  baseRange,
  surcharge,
  totalRange,
}: QuoteMessageInput): string {
  const place = municipality ?? zoneLabel;
  const service =
    equipmentId === "dualsense"
      ? `${serviceLabel} (${tierById.get(dualsenseTierId)?.label ?? ""})`
      : serviceLabel;

  if (surcharge === 0) {
    return `Hola Astro PC, quiero agendar: ${service} en ${place}. Precio ${formatUsdRange(totalRange)} (sin recargo de traslado). ¿Me confirman disponibilidad?`;
  }

  return `Hola Astro PC, quiero agendar: ${service} en ${place}. Precio ${formatUsdRange(totalRange)} (servicio ${formatUsdRange(baseRange)} + traslado ${formatUsd(surcharge)}). ¿Me confirman disponibilidad?`;
}
