import type { ReactNode } from "react";
export function SectionHeading({ children }: { children: ReactNode }) {
  return <h2 className="section-heading">{children}</h2>;
}
