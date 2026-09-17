import { HighlightText } from "@/components/ui/HighlightText";
import { QualityItem } from "@/components/ui/QualityItem";
import { SectionHeading } from "@/components/ui/SectionHeading";
const qualities = [
  [
    "Target Analysis",
    "Target analysis is an examination of potential targets to determine priority.",
  ],
  [
    "Content Optimization",
    "Content optimization makes sure content is written to reach the right audience.",
  ],
  [
    "Keyword Research",
    "Research popular terms and phrases your customers use in search engines.",
  ],
  [
    "Continuous Testing",
    "Continuously test and refine SEO improvements as part of delivery.",
  ],
  [
    "E-Commerce SEO",
    "Make your online store more visible throughout the search engine.",
  ],
  [
    "Website Migrations",
    "Protect organic performance during a website migration or redesign.",
  ],
];
export function QualitiesSection() {
  return (
    <section className="qualities">
      <div className="container">
        <SectionHeading>
          Qualities and customizable
          <br />
          <HighlightText>ideal SEO services</HighlightText>
        </SectionHeading>
        <div className="qualities-grid">
          {qualities.map(([title, text]) => (
            <QualityItem key={title} title={title} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}
