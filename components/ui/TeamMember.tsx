export function TeamMember({
  name,
  role,
  tone,
}: {
  name: string;
  role: string;
  tone: "esther" | "empty" | "savannah";
}) {
  const imageSrc =
    tone === "esther"
      ? "/assets/Esther Howard.png"
      : tone === "savannah"
        ? "/assets/Savannah Nguyen.png"
        : null;

  return (
    <article className="member">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={name}
          className="portrait portrait-photo"
        />
      ) : (
        <div className={`portrait ${tone}`} aria-hidden="true" />
      )}
      <h3>{name}</h3>
      {role && <p>{role}</p>}
    </article>
  );
}
