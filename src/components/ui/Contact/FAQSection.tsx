"use client";

import { motion } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How can I book a trip?",
    answer:
      "You can book a trip through our website by selecting a destination, choosing your preferred travel dates, and following the checkout process. Once your booking is confirmed, you'll receive a confirmation email with all the details. Need help? Contact our support team via chat, phone, or email.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy depends on the type of booking. Some reservations are fully refundable if canceled within a certain period, while others may have cancellation fees or be non-refundable. Please review our cancellation policy on the booking page or contact support for specific details.",
  },
  {
    question: "Do you offer travel insurance?",
    answer:
      "Yes! We offer optional travel insurance that covers trip cancellations, medical emergencies, lost luggage, and other unexpected changes. You can add insurance during checkout for peace of mind during your travels.",
  },
  {
    question: "Are there any loyalty benefits?",
    answer:
      "Absolutely! Our exclusive members enjoy perks such as priority booking, special discounts, complimentary lounge access, and personalized travel assistance. Sign up for our membership program to unlock these benefits!",
  },
  {
    question: "Can I modify my booking after confirmation?",
    answer:
      "Yes, you can modify your booking in most cases. Depending on the type of reservation, you may be able to change travel dates, upgrade accommodations, or make other adjustments. Some modifications may incur additional charges. Visit the 'Manage Booking' section or contact our support team for assistance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit cards (Visa, Mastercard, American Express), PayPal, and select digital wallets. For certain bookings, we may offer installment payment plans. Contact our team if you need assistance with payment options.",
  },
  {
    question: "Do you provide visa assistance?",
    answer:
      "Yes! We offer guidance on visa requirements for various destinations. While we do not process visas directly, we can provide necessary documentation and recommendations for visa services.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our customer support team 24/7 via live chat on our website, phone support, or email. Visit our 'Contact Us' page for more details on how to get in touch.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div className="flex flex-col items-center justify-center text-foreground md:px-6 py-16">
      {/* Section Header */}
      <motion.h1 className="text-5xl md:text-7xl font-bold text-center">
        Frequently Asked Questions.
      </motion.h1>

      <motion.p className="mt-4 text-lg md:text-xl text-foreground mx-auto max-w-3xl text-center">
        Have questions? We&rsquo;ve got answers! Check out our most commonly
        asked questions below or contact us directly.
      </motion.p>

      {/* Two-Column Layout */}
      <div className="mt-8 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* FAQ List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.1,
              },
            },
            hidden: { opacity: 0, y: 50 },
          }}
          className="w-full"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              onClick={() => toggleFAQ(index)}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="py-4 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <motion.h3 className="text-lg font-semibold flex items-center">
                  <HelpCircle className="mr-2 text-primary" /> {faq.question}
                </motion.h3>
                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <motion.p className="mt-2 text-md text-foreground px-2 pb-2">
                  {faq.answer}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full h-full rounded-3xl text-center"
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-0 rounded-3xl overflow-hidden h-full">
            {/* Heading (Row 1, Col 1, spanning 2 cols) */}
            <div className="p-4 border-b border-r text-start border-gray-300">
              <h3 className="text-2xl font-semibold text-primary">
                Need More Help?
              </h3>
              <p className="text-md text-foreground mt-1">
                Reach out to our support team anytime!
              </p>
            </div>

            {/* Chat Button (Row 2, Col 1) */}
            <motion.button className="flex flex-col items-center justify-center px-6 py-3 border-b border-gray-300 text-primary text-2xl font-medium transition-all duration-300">
              <MessageCircle className="" /> Chat Now
            </motion.button>

            {/* Call Button (Row 2, Col 2) */}
            <motion.button className="flex flex-col items-center justify-center border-r px-6 py-3 text-blue-500 text-2xl font-medium transition-all duration-300">
              <Phone className="" /> Call Us
            </motion.button>

            {/* Email Button (Row 3, spanning 2 cols) */}
            <motion.button className="flex flex-col items-center justify-center px-6 py-3 border-gray-300 text-foreground text-2xl font-medium transition-all duration-300">
              <Mail className="" /> Email Support
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQSection;
