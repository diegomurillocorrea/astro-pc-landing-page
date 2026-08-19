"use client";

import {
  memo,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { createPortal } from "react-dom";
import { departments } from "@/lib/el-salvador";
import { quoteCopy } from "@/lib/landing-content";

type FieldId = "department" | "municipality" | "district";

type FieldOption = {
  value: string;
  label: string;
};

type PlaceSelectsProps = {
  departmentName: string;
  municipalityName: string;
  districtName: string;
  onDepartmentChange: (name: string) => void;
  onMunicipalityChange: (name: string) => void;
  onDistrictChange: (name: string) => void;
};

const MENU_MAX_HEIGHT = 280;

const departmentOptions: FieldOption[] = departments.map((department) => ({
  value: department.name,
  label: department.name,
}));

const municipalityByDepartment = new Map(
  departments.map((department) => [
    department.name,
    department.municipalities.map((municipality) => ({
      value: municipality.name,
      label: municipality.name,
    })),
  ]),
);

const districtByPlace = new Map(
  departments.flatMap((department) =>
    department.municipalities.map((municipality) => [
      `${department.name}::${municipality.name}`,
      municipality.districts.map((district) => ({
        value: district.name,
        label: district.name,
      })),
    ]),
  ),
);

const triggerClass =
  "mt-2 flex h-12 w-full items-center justify-between gap-3 border-2 border-paper/15 bg-navy-mid px-3 text-left font-sans text-sm font-semibold uppercase tracking-tight text-paper focus-visible:border-mint disabled:opacity-40";

function Chevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`size-3.5 shrink-0 text-paper/55 ${isOpen ? "rotate-180" : ""}`}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 6l5 5 5-5" />
    </svg>
  );
}

type MenuBox = {
  top: number;
  left: number;
  width: number;
  maxHeight: number;
  openUp: boolean;
};

function measureMenu(button: HTMLButtonElement): MenuBox {
  const rect = button.getBoundingClientRect();
  const spaceBelow = window.innerHeight - rect.bottom - 8;
  const spaceAbove = rect.top - 8;
  const openUp =
    spaceBelow < Math.min(MENU_MAX_HEIGHT, 160) && spaceAbove > spaceBelow;

  return {
    top: openUp ? rect.top - 4 : rect.bottom + 4,
    left: rect.left,
    width: rect.width,
    maxHeight: Math.min(MENU_MAX_HEIGHT, Math.max(spaceBelow, spaceAbove)),
    openUp,
  };
}

type FieldSelectProps = {
  label: string;
  value: string;
  placeholder: string;
  options: readonly FieldOption[];
  disabled?: boolean;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onChange: (value: string) => void;
};

const FieldSelect = memo(function FieldSelect({
  label,
  value,
  placeholder,
  options,
  disabled = false,
  isOpen,
  onOpenChange,
  onChange,
}: FieldSelectProps) {
  const labelId = useId();
  const listId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const onOpenChangeRef = useRef(onOpenChange);
  onOpenChangeRef.current = onOpenChange;

  const selectedIndex = options.findIndex((option) => option.value === value);
  const [menuBox, setMenuBox] = useState<MenuBox | null>(null);
  const [activeIndex, setActiveIndex] = useState(
    selectedIndex >= 0 ? selectedIndex : 0,
  );

  const selectedLabel =
    options.find((option) => option.value === value)?.label ?? "";

  function openMenu() {
    if (disabled || options.length === 0) {
      return;
    }

    onOpenChange(true);
  }

  function closeMenu() {
    onOpenChangeRef.current(false);
  }

  function choose(next: string) {
    onChange(next);
    buttonRef.current?.focus();
  }

  useLayoutEffect(() => {
    if (!isOpen) {
      setMenuBox(null);
      return;
    }

    const button = buttonRef.current;

    if (button) {
      setMenuBox(measureMenu(button));
      setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    }
  }, [isOpen, selectedIndex]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const close = () => onOpenChangeRef.current(false);

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;

      if (
        buttonRef.current?.contains(target) ||
        menuRef.current?.contains(target)
      ) {
        return;
      }

      close();
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        buttonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", close);
    window.addEventListener("scroll", close, true);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", close);
      window.removeEventListener("scroll", close, true);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    menuRef.current
      ?.querySelector<HTMLElement>(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex, isOpen]);

  function onButtonKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>) {
    if (disabled) {
      return;
    }

    if (
      event.key !== "ArrowDown" &&
      event.key !== "ArrowUp" &&
      event.key !== "Enter" &&
      event.key !== " "
    ) {
      return;
    }

    event.preventDefault();

    if (!isOpen) {
      openMenu();
      return;
    }

    if (event.key === "ArrowDown") {
      setActiveIndex((index) =>
        options.length === 0 ? 0 : (index + 1) % options.length,
      );
      return;
    }

    if (event.key === "ArrowUp") {
      setActiveIndex((index) =>
        options.length === 0
          ? 0
          : (index - 1 + options.length) % options.length,
      );
      return;
    }

    const option = options[activeIndex];

    if (option) {
      choose(option.value);
    }
  }

  const menu =
    isOpen && menuBox
      ? createPortal(
          <div
            ref={menuRef}
            id={listId}
            role="listbox"
            aria-labelledby={labelId}
            style={{
              position: "fixed",
              top: menuBox.top,
              left: menuBox.left,
              width: menuBox.width,
              maxHeight: menuBox.maxHeight,
              transform: menuBox.openUp ? "translateY(-100%)" : undefined,
              zIndex: 80,
            }}
            className="overflow-y-auto border-2 border-paper/15 bg-navy-mid"
          >
            {options.map((option, index) => {
              const isActive = index === activeIndex;
              const isSelected = option.value === value;

              return (
                <div
                  key={option.value}
                  data-index={index}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => choose(option.value)}
                  className={`cursor-pointer px-3 py-3 font-sans text-sm font-semibold uppercase tracking-tight ${
                    isActive ? "bg-mint text-navy" : "text-paper"
                  }`}
                >
                  {option.label}
                </div>
              );
            })}
          </div>,
          document.body,
        )
      : null;

  return (
    <div>
      <span
        id={labelId}
        className="text-xs font-semibold uppercase tracking-wide text-paper/62"
      >
        {label}
      </span>
      <button
        ref={buttonRef}
        type="button"
        disabled={disabled}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? listId : undefined}
        aria-labelledby={labelId}
        onClick={() => {
          if (isOpen) {
            closeMenu();
            return;
          }

          openMenu();
        }}
        onKeyDown={onButtonKeyDown}
        className={triggerClass}
      >
        <span className={`min-w-0 truncate ${value ? "" : "text-paper/40"}`}>
          {value ? selectedLabel : placeholder}
        </span>
        <Chevron isOpen={isOpen} />
      </button>
      {menu}
    </div>
  );
});

export const PlaceSelects = memo(function PlaceSelects({
  departmentName,
  municipalityName,
  districtName,
  onDepartmentChange,
  onMunicipalityChange,
  onDistrictChange,
}: PlaceSelectsProps) {
  const [openField, setOpenField] = useState<FieldId | null>(null);

  const municipalityOptions = useMemo(
    () => municipalityByDepartment.get(departmentName) ?? [],
    [departmentName],
  );
  const districtOptions = useMemo(
    () => districtByPlace.get(`${departmentName}::${municipalityName}`) ?? [],
    [departmentName, municipalityName],
  );

  return (
    <div className="grid gap-3 border-t border-paper/12 px-4 py-4 sm:grid-cols-3">
      <FieldSelect
        label={quoteCopy.departmentLegend}
        value={departmentName}
        placeholder={quoteCopy.placePlaceholder}
        options={departmentOptions}
        isOpen={openField === "department"}
        onOpenChange={(open) => setOpenField(open ? "department" : null)}
        onChange={(name) => {
          onDepartmentChange(name);
          setOpenField(name ? "municipality" : null);
        }}
      />
      <FieldSelect
        label={quoteCopy.municipalityLegend}
        value={municipalityName}
        placeholder={quoteCopy.placePlaceholder}
        options={municipalityOptions}
        disabled={!departmentName}
        isOpen={openField === "municipality"}
        onOpenChange={(open) => setOpenField(open ? "municipality" : null)}
        onChange={(name) => {
          onMunicipalityChange(name);
          setOpenField(name ? "district" : null);
        }}
      />
      <FieldSelect
        label={quoteCopy.districtLegend}
        value={districtName}
        placeholder={quoteCopy.placePlaceholder}
        options={districtOptions}
        disabled={!municipalityName}
        isOpen={openField === "district"}
        onOpenChange={(open) => setOpenField(open ? "district" : null)}
        onChange={(name) => {
          onDistrictChange(name);
          setOpenField(null);
        }}
      />
    </div>
  );
});
