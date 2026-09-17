import type { ReactNode } from "react";
export function Button({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <a className={`button ${dark ? "button-dark" : ""}`} href="#contact">
      {children}
    </a>
  );
}
