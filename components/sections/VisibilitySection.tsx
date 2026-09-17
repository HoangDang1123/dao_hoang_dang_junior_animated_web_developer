import { HighlightText } from "@/components/ui/HighlightText";
import { StatItem } from "@/components/ui/StatItem";
export function VisibilitySection() {
  return (
    <section className="visibility">
      <div className="container visibility-grid">
        <div className="video-arch">
          <button aria-label="Play video">Play</button>
        </div>
        <div className="visibility-copy">
          <h2>
            We favor increasing the
            <br />
            <HighlightText>visibility of the website</HighlightText>
          </h2>
          <p>
            At its core, the meaning of search engine optimization is increasing
            your website&apos;s visibility in the results of major search
            engines and your customers when they want or need.
          </p>
          <div className="big-stats">
            <StatItem value="70k+" label="SEO Projects completed" />
            <StatItem value="156+" label="Satisfied Customers" />
          </div>
        </div>
      </div>
    </section>
  );
}
