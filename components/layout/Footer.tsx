const services = [
  "Incident Responder",
  "Secure Managed IT",
  "Check Website UI",
  "Local Security",
];
const about = [
  "Payment Plans",
  "Make saving More",
  "Tax Calculator",
  "Talk To Us",
];
function FooterList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3>{title}</h3>
      {items.map((item) => (
        <a href="#top" key={item}>
          {item}
        </a>
      ))}
    </div>
  );
}
export function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-grid">
        <div className="footer-intro">
          <img src="/assets/logo.png" alt="Sark Logo" />
          <p>
            There are many variations of passages of Lorem the Ipsum available
            it majority.
          </p>
          <form>
            <input aria-label="Email address" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>
        <FooterList title="Services" items={services} />
        <FooterList title="About Us" items={about} />
        <div>
          <h3>Contact Info</h3>
          <p>
            455 West Orchard Street
            <br />
            King Mountain, NC 28687
          </p>
          <p className="contact-green">
            Phone: +088 (246) 642-2710
            <br />
            example@gmail.com
          </p>
        </div>
      </div>
      <p className="copyright">© 2022 Sharko All Rights Reserved. Designed by Finestdevs</p>
    </footer>
  );
}
