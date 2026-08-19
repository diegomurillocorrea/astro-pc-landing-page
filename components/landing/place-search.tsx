"use client";

import { useId, useState } from "react";
import {
  formatSurchargeLabel,
  searchPlaces,
  type PlaceHit,
} from "@/lib/el-salvador";
import { quoteCopy } from "@/lib/landing-content";

type PlaceSearchProps = {
  selectedLabel: string | null;
  selectedSurcharge?: number | null;
  onSelect: (hit: PlaceHit) => void;
};

export function PlaceSearch({
  selectedLabel,
  selectedSurcharge,
  onSelect,
}: PlaceSearchProps) {
  const listId = useId();
  const hintId = useId();
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const hits = searchPlaces(query);
  const isOpen = query.trim().length >= 2;

  function choose(hit: PlaceHit) {
    onSelect(hit);
    setQuery("");
    setActiveIndex(0);
  }

  return (
    <div>
      <label className="block">
        <span className="text-xs font-semibold uppercase tracking-wide text-paper/62">
          {quoteCopy.placeSearchLegend}
        </span>
        <input
          type="search"
          name="astro-place"
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isOpen}
          aria-controls={listId}
          aria-activedescendant={
            isOpen && hits[activeIndex]
              ? `${listId}-opt-${activeIndex}`
              : undefined
          }
          aria-describedby={hintId}
          autoComplete="off"
          spellCheck={false}
          placeholder={quoteCopy.placeSearchPlaceholder}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
          }}
          onKeyDown={(event) => {
            if (!isOpen) {
              return;
            }

            if (event.key === "ArrowDown") {
              event.preventDefault();
              setActiveIndex((index) =>
                hits.length === 0 ? 0 : (index + 1) % hits.length,
              );
            } else if (event.key === "ArrowUp") {
              event.preventDefault();
              setActiveIndex((index) =>
                hits.length === 0
                  ? 0
                  : (index - 1 + hits.length) % hits.length,
              );
            } else if (event.key === "Enter") {
              const hit = hits[activeIndex];
              if (hit) {
                event.preventDefault();
                choose(hit);
              }
            } else if (event.key === "Escape") {
              setQuery("");
            }
          }}
          className="mt-2 h-12 w-full border-2 border-paper/15 bg-navy-mid px-3 font-sans text-sm font-semibold text-paper placeholder:font-medium placeholder:text-paper/40 focus-visible:border-mint disabled:opacity-40"
        />
      </label>
      <p id={hintId} className="mt-2 text-sm leading-relaxed text-paper/62">
        {quoteCopy.placeSearchHint}
      </p>
      {selectedLabel ? (
        <p className="mt-2 text-sm font-semibold text-mint">
          {quoteCopy.placeSelectedPrefix} {selectedLabel}
          {selectedSurcharge === undefined
            ? null
            : ` · ${formatSurchargeLabel(selectedSurcharge)}`}
        </p>
      ) : null}
      {isOpen ? (
        hits.length > 0 ? (
          <ul
            id={listId}
            role="listbox"
            className="mt-3 border-2 border-paper/15 bg-navy-mid"
          >
            {hits.map((hit, index) => {
              const isActive = index === activeIndex;

              return (
                <li
                  key={`${hit.departmentName}-${hit.municipalityName}-${hit.district.name}`}
                  id={`${listId}-opt-${index}`}
                  role="option"
                  aria-selected={isActive}
                >
                  <button
                    type="button"
                    onMouseDown={(event) => event.preventDefault()}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => choose(hit)}
                    className={`flex w-full items-start justify-between gap-3 px-3 py-3 text-left ${
                      isActive
                        ? "bg-mint text-navy"
                        : "text-paper hover:bg-paper/8"
                    }`}
                  >
                    <span>
                      <span className="block font-sans text-sm font-semibold">
                        {hit.district.name}
                      </span>
                      <span
                        className={`mt-0.5 block text-xs ${
                          isActive ? "text-navy/70" : "text-paper/55"
                        }`}
                      >
                        {hit.municipalityName} · {hit.departmentName}
                      </span>
                    </span>
                    <span
                      className={`shrink-0 text-xs font-semibold ${
                        isActive ? "text-navy/80" : "text-mint"
                      }`}
                    >
                      {formatSurchargeLabel(hit.district.surcharge)}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-paper/62">
            {quoteCopy.placeSearchEmpty}
          </p>
        )
      ) : null}
    </div>
  );
}
