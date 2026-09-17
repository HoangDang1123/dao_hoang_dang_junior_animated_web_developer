import { Button } from "@/components/ui/Button";
export function Navbar() {
  return (
    <header className="nav-wrap" id="top">
      <nav className="nav container">
        <img src="/assets/logo.png" alt="Sark Logo" />
        <div className="nav-links">
          <a href="#demos">Demos</a>
          <a href="#about">About</a>
          <a href="#blog">Blog</a>
          <a href="#pages">Pages</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <a href="#login">Login</a>
          <Button dark>Get Started Free</Button>
        </div>
        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <div>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <Button dark>Get Started Free</Button>
          </div>
        </details>
      </nav>
    </header>
  );
}
