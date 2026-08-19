type MarkProps = {
  className?: string;
};

/** Destello de cuatro puntas usado como separador y marca editorial. */
export function Sparkle({ className = "size-4" }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 0c0 6.63 5.37 12 12 12-6.63 0-12 5.37-12 12 0-6.63-5.37-12-12-12C6.63 12 12 6.63 12 0Z" />
    </svg>
  );
}

export function ArrowUpRight({ className = "size-4" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="square"
      aria-hidden="true"
      className={className}
    >
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </svg>
  );
}

export function ArrowRight({ className = "size-4" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="square"
      aria-hidden="true"
      className={className}
    >
      <path d="M3 12h17M13.5 5.5 20 12l-6.5 6.5" />
    </svg>
  );
}

export function Check({ className = "size-4" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="square"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 12.5 9.5 18 20 6" />
    </svg>
  );
}

export function Plus({ className = "size-4" }: MarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 3v18M3 12h18" />
    </svg>
  );
}

/** Esquinas tipo corchete para encuadrar bloques como una ficha técnica. */
export function Brackets({ className = "size-4" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className={className}
    >
      <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
    </svg>
  );
}
