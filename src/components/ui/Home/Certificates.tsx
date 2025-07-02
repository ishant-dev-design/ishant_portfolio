"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { certifications } from "@/data/certifications";
import { X } from "lucide-react";
import Image from "next/image";

const Certifications = () => {
  const [selected, setSelected] = useState<number | null>(null);

  useEffect(() => {
    if (selected !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  const selectedCert = selected !== null ? certifications[selected] : null;

  return (
    <LayoutGroup>
      <div className="w-full flex flex-col items-center justify-center gap-6 py-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circInOut" }}
          className="text-5xl md:text-7xl font-bold text-center text-foreground mb-6"
        >
          My Certifications
        </motion.h1>

        {/* Grid of Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circInOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl bg-muted/10 p-4 cursor-pointer text-center "
              onClick={() => setSelected(index)}
            >
              <motion.div
                layoutId={`cert-${index}`}
                className="flex flex-col items-center overflow-hidden"
              >
                <motion.div
                  layoutId={`cert-${index}-image`}
                  className="relative w-full aspect-[4/3] mb-4"
                >
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-semibold text-primary">
                {cert.name}
              </h3>
              <p className="text-sm text-foreground mt-2 line-clamp-2">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Centered Modal Panel */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed flex-col md:flex-row inset-0 z-[100] bg-black/60 flex items-center justify-center p-4"
              onClick={() => setSelected(null)}
            >
              <motion.div
                layoutId={`cert-${selected}`}
                className="bg-background w-full max-w-5xl h-fit rounded-3xl p-6 flex flex-col md:flex-row gap-6 overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
                data-lenis-prevent
              >
                {/* Image */}
                <motion.div
                  layoutId={`cert-${selected}-image`}
                  className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-auto md:max-h-[80vh] h-full rounded-lg"
                >
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    width={1000}
                    height={1000}
                    className="object-cover rounded-lg h-fit w-fit"
                  />
                </motion.div>

                {/* Details */}
                <div className="pr-2 h-fit flex flex-col justify-between w-full md:w-1/2">
                  <div className="flex justify-between items-start mb-6">
                    <h2 className="text-2xl font-bold text-primary">
                      {selectedCert.name}
                    </h2>
                    <button
                      onClick={() => setSelected(null)}
                      className="text-muted-foreground hover:text-foreground"
                      aria-label="Close Certification Panel"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <div className="text-sm space-y-2 text-foreground">
                    <p>{selectedCert.description}</p>
                    {selectedCert.issuedBy && (
                      <p>
                        <strong>Issued by:</strong> {selectedCert.issuedBy}
                      </p>
                    )}
                    {selectedCert.recipient && (
                      <p>
                        <strong>Recipient:</strong> {selectedCert.recipient}
                      </p>
                    )}
                    {selectedCert.issueDate && (
                      <p>
                        <strong>Issue Date:</strong> {selectedCert.issueDate}
                      </p>
                    )}
                    {selectedCert.completionDate && (
                      <p>
                        <strong>Completion Date:</strong>{" "}
                        {selectedCert.completionDate}
                      </p>
                    )}
                    {selectedCert.expirationDate && (
                      <p>
                        <strong>Expiration Date:</strong>{" "}
                        {selectedCert.expirationDate}
                      </p>
                    )}
                    {selectedCert.testDate && (
                      <p>
                        <strong>Test Date:</strong> {selectedCert.testDate}
                      </p>
                    )}
                    {selectedCert.intendedMajor && (
                      <p>
                        <strong>Intended Major:</strong>{" "}
                        {selectedCert.intendedMajor}
                      </p>
                    )}
                    {selectedCert.internshipDuration && (
                      <p>
                        <strong>Internship:</strong>{" "}
                        {selectedCert.internshipDuration}
                      </p>
                    )}
                    {selectedCert.validationNumber && (
                      <p>
                        <strong>Validation Number:</strong>{" "}
                        {selectedCert.validationNumber}
                      </p>
                    )}
                    {selectedCert.certificateID && (
                      <p>
                        <strong>Certificate ID:</strong>{" "}
                        {selectedCert.certificateID}
                      </p>
                    )}
                    {selectedCert.verificationLink && (
                      <p>
                        <a
                          href={selectedCert.verificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Verify Certificate
                        </a>
                      </p>
                    )}
                    {selectedCert.scores && (
                      <div className="mt-2">
                        <strong>Scores:</strong>
                        <ul className="list-disc ml-6">
                          {Object.entries(selectedCert.scores).map(
                            ([key, value]) => (
                              <li key={key}>
                                {key.replace(/([A-Z])/g, " $1")}: {value}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LayoutGroup>
  );
};

export default Certifications;
