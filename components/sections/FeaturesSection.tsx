import { Feature3D } from "@/components/3d/Feature3D";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { HighlightText } from "@/components/ui/HighlightText";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: "01",
    title: "Initial SEO Project",
    text: "Set up your site on an SEO-centric digital foundation and strategic roadmap.",
  },
  {
    icon: "02",
    title: "SEO Audit & Strategy",
    text: "Campaign data informs a strategy that keeps your business one step ahead.",
  },
  {
    icon: "03",
    title: "Local SEO Project",
    text: "Improve local visibility and make it easier for people to find your business.",
  },
];

export function FeaturesSection() {
  return (
    <section className="features">
      <div className="container">
        <SectionHeading>
          <HighlightText>Awesome features</HighlightText>
          <br />
          optimizing your website
        </SectionHeading>
        <Feature3D />
        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
