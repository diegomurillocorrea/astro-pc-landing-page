import { type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Superficie con un levantado ligero al pasar el cursor.
 * CSS en lugar de motion para no hidratar mal los SVG de dentro.
 */
export function TiltCard({ children, className = "" }: TiltCardProps) {
  return (
    <div
      className={`transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:scale-[1.01] motion-reduce:transform-none motion-reduce:transition-none ${className}`}
    >
      {children}
    </div>
  );
}
