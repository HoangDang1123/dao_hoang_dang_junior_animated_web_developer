"use client";
export function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="faq-item">
      <button aria-expanded={isOpen}>
        <b>Q. {question}</b>
        <span>{isOpen ? "-" : "+"}</span>
      </button>
      {isOpen && <p>{answer}</p>}
    </article>
  );
}
