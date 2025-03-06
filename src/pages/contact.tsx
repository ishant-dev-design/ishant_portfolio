// src/pages/contact.tsx (Contact Page)
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import ContactForm from "@/components/ui/Contact/ContactForm";
import FAQSection from "@/components/ui/Contact/FAQSection";
import NewsletterSignup from "@/components/ui/NewsletterSignup";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div className="bg-background p-3 max-w-7xl mx-auto">
      <motion.div className="flex pt-16 md:pt-24 pb-12 justify-center w-full">
        <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-foreground text-center">
          Let&#39;s Connect.
        </AnimatedHeading>
      </motion.div>
      <ContactForm />
      <FAQSection />
      <NewsletterSignup />
    </motion.div>
  );
}
