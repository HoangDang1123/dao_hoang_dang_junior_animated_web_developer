import { Hero3D } from "@/components/3d/Hero3D";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { HighlightText } from "@/components/ui/HighlightText";
import { StarRating } from "@/components/ui/StarRating";
import { StatItem } from "@/components/ui/StatItem";

export function HeroSection() {
  return (
    <section className="hero">
      <Navbar />
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>
            The right SEO to
            <br />
            boost <HighlightText>your rankings</HighlightText>
          </h1>
          <p>
            Search engine optimization is an ever-changing practice dictated by
            updates in algorithms and technological innovation. Get discovered
            by the right SEO agency.
          </p>
          <Button>Get Started Free</Button>
          <div className="hero-stats">
            <div className="avatars">
              <div className="avatar">
                <img
                  src="/assets/avatar.png"
                  alt="Rating person"
                  width={60.52}
                  height={60.52}
                />
              </div>

              <div className="avatar" />
              <div className="avatar" />
            </div>
            <StatItem value="38,482" label="Happy Customers" />
            <div className="stat-divider" />
            <div>
              <strong>4.8/5</strong>
              <StarRating count={5} label="Rating" />
            </div>
          </div>
        </div>
        <Hero3D />
      </div>
    </section>
  );
}
