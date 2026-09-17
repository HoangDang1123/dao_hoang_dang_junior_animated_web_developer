export function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="64 64 896 896"
      focusable="false"
      width="14"
      height="14"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0013.8 31.3 32.34 32.34 0 0034.3 1.9l227.1-119.4 227.1 119.4c6.2 3.3 13.4 4.7 20.4 4.1 17.5-1.6 30.6-17.1 29-34.6l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.4z" />
    </svg>
  );
}

export function StarRating({
  count = 5,
  label = "Rating",
}: {
  count?: number;
  label?: string;
}) {
  return (
    <div className="hero-rating">
      <span className="star-icons" aria-label={`${count} out of 5 stars`}>
        {Array.from({ length: count }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </span>
      {label && <span className="rating-label">{label}</span>}
    </div>
  );
}
