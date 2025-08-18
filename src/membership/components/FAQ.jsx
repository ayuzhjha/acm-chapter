import React from "react";

const FAQ = () => {
  const [open, setOpen] = React.useState(false);

  const faqData = [
    {
      question: "What is ACM Membership?",
      answer:
        "ACM Membership gives you access to exclusive resources, events, and a network of professionals. It helps you grow your skills and connect with the computing community.",
    },
    {
      question: "Who can join ACM?",
      answer:
        "Anyone interested in computing and technology can join ACM, including students and professionals from all backgrounds.",
    },
    {
      question: "How do I become a member?",
      answer:
        "You can become a member by signing up on the ACM website and paying the membership fee.",
    },
    {
      question: "What are the benefits of joining ACM?",
      answer:
        "Benefits include access to digital libraries, networking opportunities, career resources, and discounts on conferences.",
    },
    {
      question: "Is there a student discount?",
      answer:
        "Yes, ACM offers discounted membership rates for students. Check the ACM website for eligibility and details.",
    },
  ];

  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="h-full">
      <h1 className="text-4xl md:text-9xl font-bebas-neue">FAQ</h1>
      <div className="mt-8 max-w-7xl mx-auto ">
        {faqData.map((item, idx) => (
          <div className="border-b" key={idx}>
            <button
              className="w-full text-left py-4 font-semibold flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion(idx)}
            >
              <span >{item.question}</span>
              <span>{openIndex === idx ? "-" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div className="pb-4 text-sm md:text-xl text-gray-600">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
