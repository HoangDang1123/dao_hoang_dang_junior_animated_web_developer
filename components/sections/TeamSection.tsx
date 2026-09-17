import { HighlightText } from "@/components/ui/HighlightText";
import { TeamMember } from "@/components/ui/TeamMember";
export function TeamSection() {
  return (
    <section className="team" id="about">
      <div className="container">
        <div className="team-heading">
          <h2>
            <HighlightText>Meet our amazing SEO</HighlightText>
            <br />
            team for your business
          </h2>
          <p>
            Our SEO team takes time to truly understand your business, your
            goals, and your mission. We recognize that your needs are unique.
          </p>
        </div>
        <div className="team-grid">
          <TeamMember
            name="Esther Howard"
            role="Senior SEO Manager"
            tone="esther"
          />
          <TeamMember name="Leslie Alexander" role="" tone="empty" />
          <TeamMember
            name="Savannah Nguyen"
            role="Account Manager"
            tone="savannah"
          />
        </div>
      </div>
    </section>
  );
}
