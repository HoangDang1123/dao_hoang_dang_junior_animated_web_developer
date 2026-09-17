export function QualityItem({ title, text }: { title: string; text: string }) {
  return (
    <article className="quality">
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#contact">
        Discover More <span>-&gt;</span>
      </a>
    </article>
  );
}
