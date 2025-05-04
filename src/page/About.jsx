import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-white to-[#f3f4f6] dark:from-slate-900 dark:to-slate-800 py-16">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-[#6836c7] mb-6"
          data-aos="fade-up"
        >
          About Us
        </h2>

        <p
          className="text-lg md:text-xl text-center text-gray-700 dark:text-gray-200 max-w-4xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At <span className="font-semibold text-[#8C52FF]">Suggestify</span>, we believe in smart shopping backed by data. Our AI-powered recommendation engine ensures you always find products that perfectly suit your needs—quickly, easily, and reliably.
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#6836c7] mb-3">
              AI-Driven Insights
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              Our smart algorithms analyze your preferences and recommend the best-suited products just for you—no more guesswork.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#6836c7] mb-3">
              Trusted by Shoppers
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              We’ve helped countless users make better shopping decisions by providing honest, accurate, and data-backed suggestions.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#6836c7] mb-3">
              Built for You
            </h3>
            <p className="text-gray-700 dark:text-gray-200">
              Whether you're tech-savvy or just browsing, Suggestify delivers a seamless experience tailored to your interests and goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
