import type { ReactNode } from "react";
export function HighlightText({ children }: { children: ReactNode }) {
  return <span className="highlight">{children}</span>;
}
