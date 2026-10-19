import { useState } from 'react';
import { ChevronDown, HelpCircle, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'How do project milestones and payments work?',
      answer: 'We operate on transparent milestone-based stages: 30% initial commitment upon scope and architecture sign-off, 40% only after you test the working staging release on your phone or laptop, and the remaining 30% upon live production deployment and full source code handover. No hidden fees.',
    },
    {
      question: 'Do I get 100% ownership of the source code and intellectual property?',
      answer: 'Yes, completely. Every line of TypeScript, React, and Python code, Figma design system file, database schema, and deployment credential belongs entirely to your business upon milestone settlement. We transfer the complete GitHub repository so you have zero vendor lock-in.',
    },
    {
      question: 'Can we meet in person in Karvenagar, Pune?',
      answer: `Yes! Co-founders Ram Chavan and Varad Edke are based near Cummins College Road, Karvenagar, Pune. We welcome in-person discussions across Pune (Karvenagar, Kothrud, Baner, Hinjawadi), as well as structured video calls over Google Meet.`,
    },
    {
      question: 'How fast can we launch our Minimum Viable Product (MVP)?',
      answer: 'For focused websites, cross-platform mobile apps, or autonomous WhatsApp AI bots, our typical sprint turnaround is 10 to 20 business days. We deploy working staging releases every Friday so you test real software every week instead of waiting months.',
    },
    {
      question: 'What support and warranty do you provide after launch?',
      answer: 'Every project includes 30 days of complimentary post-launch warranty covering any bug fixes, security audits, and deployment assistance. We also offer affordable monthly support retainers for continuous feature iterations and database maintenance.',
    },
    {
      question: 'Can you integrate AI chatbots directly with WhatsApp and our internal CRM/Tally?',
      answer: 'Yes! Using Meta’s WhatsApp Cloud API, LangChain, and Python backends, we build automated customer bots that answer client inquiries 24/7, book appointments, and sync leads directly into your Google Sheets, Tally, or custom CRM.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Clear Answers Before We Kick Off
          </h3>
          <p className="text-xs text-slate-500 mt-2">
            Honest details regarding our working process, milestone pricing, and Karvenagar office support.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl bg-white transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-blue-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : 'text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
