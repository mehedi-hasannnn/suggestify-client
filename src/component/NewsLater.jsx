import { useState } from "react";

const NewsLater = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage("Subscription successful! Check your email.");
    setEmail("");
  };

  const faqs = [
    {
      question: "What kind of content will I receive?",
      answer: "You'll receive updates on trending products, curated recommendations, and exclusive shopping tips tailored just for you.",
    },
    {
      question: "How often will I get emails?",
      answer: "We typically send out one newsletter per week to keep you updated without overwhelming your inbox.",
    },
    {
      question: "Can I unsubscribe anytime?",
      answer: "Yes, you can unsubscribe with a single click from the link at the bottom of any email we send.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 my-10 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold sm:text-3xl text-[#8C52FF] dark:text-violet-400">
            Hot Picks & Smart Tips – Straight to You. <br /> What’s New? Find Out First!
          </strong>

          <form className="mt-6" onSubmit={handleSubscribe}>
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email"> Email </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 dark:bg-gray-800 dark:border-gray-700 p-4 pe-32 text-sm font-medium text-gray-800 dark:text-white"
                id="email"
                type="email"
                placeholder="john@doe.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button
                type="submit"
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-[#8C52FF] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#9274ca]"
              >
                Subscribe
              </button>
            </div>
          </form>

          {message && <p className="mt-4 text-center text-sm text-green-600 dark:text-green-400">{message}</p>}
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="max-w-screen-md mx-auto px-4 pb-20">
        <h3 className="text-2xl font-bold mb-6 text-center text-[#8C52FF] dark:text-gray-100">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden border-gray-200 dark:border-gray-700">
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left text-sm font-medium bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              >
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 bg-white dark:bg-gray-900 text-sm text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsLater;
