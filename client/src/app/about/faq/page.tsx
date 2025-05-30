"use client"
import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I get started with your services?",
      answer:
        "Getting started is easy! Simply contact us through our contact form or give us a call. We'll schedule a consultation to understand your needs and provide a tailored solution.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All transactions are securely processed.",
    },
    {
      question: "Can I cancel or change my plan anytime?",
      answer:
        "Yes, you can upgrade, downgrade, or cancel your plan at any time with no hidden fees. Changes will take effect at the start of your next billing cycle.",
    },
    {
      question: "Do you offer 24/7 customer support?",
      answer:
        "We provide 24/7 emergency support for critical issues. For non-urgent matters, our support team is available Monday-Friday from 9AM to 6PM in your local timezone.",
    },
    {
      question: "How secure is my data with your company?",
      answer:
        "We use enterprise-grade encryption and follow strict security protocols. Your data is stored in SOC 2 compliant data centers with regular security audits.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our services and
            policies.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 border border-blue-100 ${
                activeIndex === index ? "ring-2 ring-blue-400" : ""
              }`}
            >
              <button
                className={`w-full flex justify-between items-center p-6 text-left focus:outline-none ${
                  activeIndex === index ? "bg-blue-50" : "hover:bg-blue-50"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-blue-800">
                  {faq.question}
                </h3>
                <span className="text-blue-500">
                  {activeIndex === index ? (
                    <FiChevronUp className="w-5 h-5" />
                  ) : (
                    <FiChevronDown className="w-5 h-5" />
                  )}
                </span>
              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  activeIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-blue-600">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-600 mb-6">
            Still have questions? We are happy to help!
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
