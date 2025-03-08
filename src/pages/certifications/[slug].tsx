"use client";

import { useRouter } from "next/router";
import { certifications } from "@/data/certifications";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CertificationPage() {
  const router = useRouter();
  const { slug } = router.query; // Get the slug from URL

  // Find the matching certification
  const certification = certifications.find((cert) => cert.slug === slug);

  if (!certification) {
    return (
      <div className="flex items-center justify-center min-h-screen text-center text-white">
        <h1 className="text-4xl font-bold">Certification Not Found</h1>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-background min-h-screen p-6 md:p-12 lg:p-20 text-foreground max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header */}
      <motion.h1
        className="text-5xl font-bold text-center text-primary mb-8"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {certification.name}
      </motion.h1>

      {/* Certification Image */}
      <motion.div
        className="relative w-full rounded-lg overflow-hidden"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Image
          width={1000}
          height={700}
          src={certification.image}
          alt={certification.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>

      {/* Certification Details */}
      <motion.div
        className="mt-10 space-y-4 text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="text-xl">{certification.description}</p>
        {certification.issuedBy && (
          <p>
            <strong>Issued by:</strong> {certification.issuedBy}
          </p>
        )}
        {certification.recipient && (
          <p>
            <strong>Recipient:</strong> {certification.recipient}
          </p>
        )}
        {certification.issueDate && (
          <p>
            <strong>Issue Date:</strong> {certification.issueDate}
          </p>
        )}
        {certification.expirationDate && (
          <p>
            <strong>Expiration Date:</strong> {certification.expirationDate}
          </p>
        )}
        {certification.completionDate && (
          <p>
            <strong>Completion Date:</strong> {certification.completionDate}
          </p>
        )}
        {certification.testDate && (
          <p>
            <strong>Test Date:</strong> {certification.testDate}
          </p>
        )}
        {certification.intendedMajor && (
          <p>
            <strong>Intended Major:</strong> {certification.intendedMajor}
          </p>
        )}
        {certification.scores && (
          <div>
            <strong>Scores:</strong>
            <ul className="ml-5 list-disc">
              {certification.scores.verbalReasoning && (
                <li>
                  Verbal Reasoning: {certification.scores.verbalReasoning}
                </li>
              )}
              {certification.scores.quantitativeReasoning && (
                <li>
                  Quantitative Reasoning:{" "}
                  {certification.scores.quantitativeReasoning}
                </li>
              )}
              {certification.scores.analyticalWriting && (
                <li>
                  Analytical Writing: {certification.scores.analyticalWriting}
                </li>
              )}
              {certification.scores.listening && (
                <li>Listening: {certification.scores.listening}</li>
              )}
              {certification.scores.reading && (
                <li>Reading: {certification.scores.reading}</li>
              )}
              {certification.scores.writing && (
                <li>Writing: {certification.scores.writing}</li>
              )}
              {certification.scores.speaking && (
                <li>Speaking: {certification.scores.speaking}</li>
              )}
              {certification.scores.overallBandScore && (
                <li>
                  Overall Band Score: {certification.scores.overallBandScore}
                </li>
              )}
            </ul>
          </div>
        )}
        {certification.verificationLink && (
          <p>
            <a
              href={certification.verificationLink}
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Verify Certification
            </a>
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
