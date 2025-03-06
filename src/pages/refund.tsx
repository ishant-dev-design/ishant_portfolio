"use client";
import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import { Headset, Mailbox } from "lucide-react";

export default function RefundPolicy() {
  return (
    <motion.div className="bg-background p-3 max-w-7xl mx-auto">
      {/* Heading */}
      <motion.div className="flex pt-20 md:pt-28 pb-16 justify-center w-full">
        <AnimatedHeading className="text-3xl md:text-5xl lg:text-8xl text-foreground text-center">
          Refund Policy.
        </AnimatedHeading>
      </motion.div>

      {/* Content Section */}
      <motion.div className="text-foreground max-w-6xl mx-auto text-lg leading-relaxed space-y-6">
        <p>
          At **AirSea Travels**, we strive to provide a seamless travel
          experience. However, we understand that plans may change, and you may
          need to cancel or modify your bookings. This Refund Policy outlines
          the conditions under which refunds may be granted.
        </p>

        {/* 1. Eligibility for Refunds */}
        <h2 className="text-2xl font-bold mt-8">1. Eligibility for Refunds</h2>
        <p>
          - Refunds are subject to the cancellation policy of the airline,
          hotel, or service provider. - Some bookings may be **non-refundable**
          or may incur cancellation fees. - Refund eligibility depends on the
          time of cancellation. Cancellations made **within 24 hours of
          booking** may be eligible for a full refund (subject to provider
          policies).
        </p>

        {/* 2. Partial Refunds & Fees */}
        <h2 className="text-2xl font-bold mt-8">2. Partial Refunds & Fees</h2>
        <p>
          - In some cases, **partial refunds** may be issued based on the
          provider&#39;s terms. - Administrative or processing fees may be deducted
          from the refund. - If a flight is missed due to the traveler&#39;s fault,
          **no refund** will be provided.
        </p>

        {/* 3. Refund Process */}
        <h2 className="text-2xl font-bold mt-8">3. Refund Process</h2>
        <p>
          - To request a refund, please contact our **customer support team** at
          least 48 hours before departure. - Refund processing times vary but
          may take **7-14 business days** to reflect in your account. - Refunds
          will be credited to the original payment method used at the time of
          booking.
        </p>

        {/* 4. Non-Refundable Bookings */}
        <h2 className="text-2xl font-bold mt-8">4. Non-Refundable Bookings</h2>
        <p>
          - Discounted or promotional fares are often **non-refundable**. - If a
          booking is labeled as &quot;non-refundable&quot; at the time of purchase, no
          refunds will be processed.
        </p>

        {/* 5. Contact Us */}
        <h2 className="text-2xl font-bold mt-8">5. Contact Us</h2>
        <p>
          For any refund-related inquiries, reach out to us:{" "}
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
