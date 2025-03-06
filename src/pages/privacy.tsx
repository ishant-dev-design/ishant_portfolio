"use client";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Headset, Mailbox } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <motion.div className="bg-background p-3 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div className="flex pt-20 md:pt-28 pb-16 justify-center w-full">
        <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-foreground text-center">
          Privacy Policy.
        </AnimatedHeading>
      </motion.div>

      {/* Content Section */}
      <motion.div className="text-foreground max-w-6xl mx-auto text-lg leading-relaxed space-y-6">
        <p>
          Your privacy is of utmost importance to **AirSea Travels**. This
          Privacy Policy explains how we collect, use, and protect your personal
          information when you use our services.
        </p>

        {/* 1. Information We Collect */}
        <h2 className="text-2xl font-bold mt-8">1. Information We Collect</h2>
        <p>
          - We collect personal details such as your **name, email, phone
          number, payment details, and travel preferences** when you make a
          booking. - We also gather **browsing data** (cookies, IP addresses,
          device information) to enhance your experience on our website.
        </p>

        {/* 2. How We Use Your Information */}
        <h2 className="text-2xl font-bold mt-8">
          2. How We Use Your Information
        </h2>
        <p>
          - To **process bookings and payments** securely. - To send booking
          confirmations, flight updates, and promotional offers. - To improve
          our website, personalize user experiences, and ensure site security.
        </p>

        {/* 3. Data Protection & Security */}
        <h2 className="text-2xl font-bold mt-8">
          3. Data Protection & Security
        </h2>
        <p>
          - We use **encryption and secure servers** to protect your personal
          data. - Your payment details are processed through **trusted payment
          gateways** with industry-standard security. - We do **not** sell,
          rent, or share your data with third parties without your consent.
        </p>

        {/* 4. Cookies & Tracking */}
        <h2 className="text-2xl font-bold mt-8">4. Cookies & Tracking</h2>
        <p>
          - Our website uses **cookies** to store preferences and track website
          traffic. - You can disable cookies in your browser settings, but this
          may affect certain features of the site.
        </p>

        {/* 5. Third-Party Links */}
        <h2 className="text-2xl font-bold mt-8">5. Third-Party Links</h2>
        <p>
          - Our website may contain links to third-party services or
          advertisers. - We are not responsible for the **privacy policies** of
          external websites.
        </p>

        {/* 6. Your Rights & Choices */}
        <h2 className="text-2xl font-bold mt-8">6. Your Rights & Choices</h2>
        <p>
          - You can request access to or deletion of your personal data at any
          time. - To update your preferences or unsubscribe from promotional
          emails, contact us at **privacy@airseatravels.com**.
        </p>

        {/* 7. Contact Us */}
        <h2 className="text-2xl font-bold mt-8">7. Contact Us</h2>
        <p>
          If you have any concerns about your data privacy, reach out to us:{" "}
          <span className="flex items-center mt-2 gap-2">
            <Mailbox /> Email: support@airseatravels.com
          </span>
          <span className="flex items-center mt-2 gap-2">
            <Headset /> Phone: +1-800-123-4567
          </span>
        </p>
      </motion.div>
    </motion.div>
  );
}
