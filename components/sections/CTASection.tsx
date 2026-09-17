import { Button } from "@/components/ui/Button";
export function CTASection() {
  return (
    <section className="cta">
      <div className="container cta-box">
        <h2>
          Are you interested in
          <br />
          boosting your SEO ranking?
        </h2>
        <p>
          If you want to see your digital performance and learn more about
          <br />
          how our SEO services can help, get in touch with the team today.
        </p>
        <Button dark>Contact With Us</Button>
      </div>
    </section>
  );
}
