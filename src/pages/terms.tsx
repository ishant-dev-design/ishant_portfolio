"use client";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Headset, Mailbox } from "lucide-react";

export default function Terms() {
  return (
    <motion.div className="bg-background p-3 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div className="flex pt-20 md:pt-28 pb-16 justify-center w-full">
        <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-foreground text-center">
          Terms & Conditions.
        </AnimatedHeading>
      </motion.div>

      {/* Content Section */}
      <motion.div className="text-foreground max-w-6xl mx-auto text-lg leading-relaxed space-y-6">
        <p>
          Welcome to **AirSea Travels**. These Terms and Conditions govern your
          use of our website and services. By accessing this website, you agree
          to be bound by these terms. If you do not agree with any part of these
          terms, you must discontinue using our services.
        </p>

        {/* 1. Booking & Payments */}
        <h2 className="text-2xl font-bold mt-8">1. Booking & Payments</h2>
        <p>
          - All flight and hotel bookings must be made in advance and are
          subject to availability. - Full payment is required at the time of
          booking unless stated otherwise. - We accept major credit/debit cards
          and other secure payment methods. - Any additional charges, such as
          baggage fees or in-flight services, are to be paid separately.
        </p>

        {/* 2. Cancellations & Refunds */}
        <h2 className="text-2xl font-bold mt-8">2. Cancellations & Refunds</h2>
        <p>
          - Cancellation policies vary depending on the airline, hotel, or
          service provider. - Refunds will be processed based on the
          provider&#39;s refund policies. - Some bookings may be non-refundable
          or subject to cancellation fees. - To request a cancellation, please
          contact our support team at least 48 hours before departure.
        </p>

        {/* 3. Travel Requirements */}
        <h2 className="text-2xl font-bold mt-8">3. Travel Requirements</h2>
        <p>
          - You are responsible for ensuring that you have valid passports,
          visas, and other required travel documents. - AirSea Travels is not
          liable for any denied boarding or penalties due to missing travel
          documents. - Certain destinations may have vaccination or entry
          requirements. Please check with local authorities before traveling.
        </p>

        {/* 4. Liability & Disclaimer */}
        <h2 className="text-2xl font-bold mt-8">4. Liability & Disclaimer</h2>
        <p>
          - We act as an intermediary between travelers and service providers
          (airlines, hotels, etc.) and are not responsible for delays,
          cancellations, or other service disruptions. - AirSea Travels is not
          liable for any loss, injury, or damage resulting from travel
          arrangements made through our platform. - Any complaints regarding
          services provided should be directed to the respective provider.
        </p>

        {/* 5. Changes to Terms */}
        <h2 className="text-2xl font-bold mt-8">5. Changes to Terms</h2>
        <p>
          - AirSea Travels reserves the right to modify these Terms and
          Conditions at any time. - It is your responsibility to review the
          terms periodically for any updates. - Continued use of our website
          after changes are posted constitutes acceptance of the revised terms.
        </p>

        {/* 6. Contact Us */}
        <h2 className="text-2xl font-bold mt-8">6. Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please
          contact us at:
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
