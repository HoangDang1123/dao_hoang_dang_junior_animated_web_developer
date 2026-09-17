"use client";
import { useState } from "react";
import { FAQItem } from "@/components/ui/FAQItem";
import { HighlightText } from "@/components/ui/HighlightText";
import { SectionHeading } from "@/components/ui/SectionHeading";
const faqs = [
  "What is SEO and does my business need SEO?",
  "What are Google's most important ranking factors?",
  "What is the difference between On-Page SEO and technical SEO?",
  "Does social media help to increase my website's rank?",
  "How do I create SEO-friendly content?",
  "Why has my organic traffic dropped?",
];
const answer =
  "Search Engine Optimization is the practice of improving how a website appears in search results. It is a sustainable way to increase relevant traffic without paying for every click.";
export function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq">
      <div className="narrow">
        <SectionHeading>
          <HighlightText>Frequently asked</HighlightText>
          <br />
          question
        </SectionHeading>
        <div className="faq-list">
          {faqs.map((question, index) => (
            <FAQItem
              key={question}
              question={question}
              answer={answer}
              isOpen={open === index}
              onToggle={() => setOpen(open === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
