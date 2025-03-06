import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  Eye,
  File,
  FilePlus2,
  SendHorizonal,
  X,
} from "lucide-react";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
    attachments: [],
  });

  const [attachments, setAttachments] = useState<File[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const files = Array.from(e.target.files).filter(
      (file) =>
        file.type.startsWith("image/") || file.type === "application/pdf"
    );

    setAttachments((prev) => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!formData.category) {
      alert("Please select a category.");
      return;
    }
    if (!formData.message.trim()) {
      alert("Please enter a message.");
      return;
    }

    // Construct the email preview content
    const emailContent = `
      <html>
        <head><title>Email Preview</title></head>
        <body style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>📩 Contact Form Submission</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Category:</strong> ${formData.category}</p>
          <p><strong>Message:</strong></p>
          <p style="border-left: 4px solid #007bff; padding-left: 10px;">${
            formData.message
          }</p>
  
          <h3>📎 Attachments</h3>
          ${
            attachments.length > 0
              ? attachments
                  .map((file) =>
                    file.type.startsWith("image/")
                      ? `<p><strong>${
                          file.name
                        }</strong><br><img src="${URL.createObjectURL(
                          file
                        )}" style="max-width: 300px; border-radius: 10px; margin-top: 5px;"/></p>`
                      : `<p><strong>${
                          file.name
                        }</strong><br><iframe src="${URL.createObjectURL(
                          file
                        )}" style="width: 100%; height: 300px; border: 1px solid #ccc;"></iframe></p>`
                  )
                  .join("")
              : "<p>No attachments</p>"
          }          
        </body>
      </html>
    `;

    // Open a new window with the email preview
    const previewWindow = window.open("", "_blank");

    if (previewWindow) {
      previewWindow.document.write(emailContent);
      previewWindow.document.close();
    } else {
      alert("Popup blocked! Please allow pop-ups to see the email preview.");
    }
  };

  return (
    <div className="max-w-xl mx-auto rounded-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full border-gray-300 border px-6 py-4 rounded-full outline-none ring-2 ring-transparent bg-textfield focus:ring-primary"
          />
          {formData.name && (
            <button
              type="button"
              className="absolute right-3 rounded-full p-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white hover:bg-red-600"
              onClick={() => setFormData({ ...formData, name: "" })}
            >
              <X size={20} />
            </button>
          )}
        </div>
        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-6 border-gray-300 border py-4 rounded-full outline-none ring-2 ring-transparent bg-textfield focus:ring-primary"
          />
          {formData.email && (
            <button
              type="button"
              className="absolute right-3 rounded-full p-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white hover:bg-red-600"
              onClick={() => setFormData({ ...formData, email: "" })}
            >
              <X size={20} />
            </button>
          )}
        </div>
        {/* Dropdown Selection */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex border-gray-300 border items-center justify-between px-6 py-4 bg-textfield rounded-full ring-2 ring-transparent focus:ring-primary cursor-pointer"
          >
            <span>{formData.category || "Select a category"}</span>
            <ArrowDown
              size={20}
              className={`transition-all ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-16 left-0 w-full bg-background border-2 border-primary p-4 rounded-3xl z-50"
              >
                {[
                  "General Inquiry",
                  "Pricing Issues",
                  "Booking Support",
                  "Refund Request",
                  "Other",
                ].map((category) => (
                  <div
                    key={category}
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, category }));
                      setIsDropdownOpen(false);
                    }}
                    className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-background rounded-2xl transition-all"
                  >
                    {category}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Message Textarea with Buttons */}
        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            required
            className="w-full border-gray-300 border px-6 py-4 pb-16 rounded-3xl outline-none ring-2 ring-transparent bg-textfield custom-scrollbar focus:ring-primary"
          />
          <div className="absolute bottom-6 left-4 flex space-x-2">
            {/* File Upload Button */}
            <button
              type="button"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => fileInputRef.current?.click()}
            >
              <FilePlus2 size={20} />
            </button>

            {/* Clear Message Button */}
            {formData.message && (
              <button
                type="button"
                className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600"
                onClick={() =>
                  setFormData((prev) => ({ ...prev, message: "" }))
                }
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        <input
          type="file"
          ref={fileInputRef}
          multiple
          accept="image/png, image/jpeg, image/jpg, application/pdf"
          className="hidden"
          onChange={handleFileChange}
        />

        {attachments.length > 0 && (
          <div className="p-5 bg-textfield rounded-3xl border-gray-300 border">
            <div className="p-1 bg-textfield rounded-lg overflow-x-auto file-scrollbar">
              <div className="flex space-x-3 w-max">
                {attachments.map((file, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col items-center cursor-pointer w-24 h-24 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0"
                  >
                    {/* Image Preview */}
                    {file.type.startsWith("image/") ? (
                      <Image
                        width={100}
                        height={100}
                        src={URL.createObjectURL(file)}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      // PDF Preview (using iframe)
                      <iframe
                        src={URL.createObjectURL(file)}
                        className="w-full h-full"
                        title={file.name}
                      ></iframe>
                    )}

                    {/* Buttons: Preview & Remove */}
                    <div className="absolute bottom-1 flex space-x-2 bg-white p-1 rounded-full">
                      {/* Preview Button */}
                      <button
                        type="button"
                        className="p-1 rounded-full bg-blue-500 text-white hover:bg-blue-600"
                        onClick={() => setPreviewFile(file)}
                      >
                        <Eye size={16} />
                      </button>

                      {/* Remove Button */}
                      <button
                        type="button"
                        className="p-1 rounded-full bg-red-500 text-white hover:bg-red-600"
                        onClick={() => removeFile(index)}
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* File Preview Modal */}
        {previewFile && (
          <div className="fixed inset-0 -top-4 bg-black bg-opacity-80 flex items-center justify-center z-[5000]">
            <div className="relative p-4 rounded-3xl bg-background">
              {previewFile.type.startsWith("image/") ? (
                <Image
                  src={URL.createObjectURL(previewFile)}
                  alt="Preview"
                  width={0}
                  height={0}
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "90vw",
                    maxHeight: "80vh",
                  }}
                  className="rounded-3xl object-contain"
                />
              ) : (
                <iframe
                  src={URL.createObjectURL(previewFile)}
                  className="w-[90vw] h-[80vh] rounded-3xl"
                  title="File Preview"
                />
              )}
              <button
                className="mt-4 w-fit py-2 px-6 rounded-full h-full text-center border border-red-500 bg-red-500 hover:text-red-500 hover:bg-transparent"
                onClick={() => setPreviewFile(null)}
              >
                Close Preview
              </button>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 flex justify-center items-center rounded-full bg-primary text-background hover:bg-background hover:border-primary border-2 border-transparent font-semibold transition-colors text-md group hover:text-primary duration-300"
        >
          Send Message
          <span className="overflow-hidden max-w-fit w-0 group-hover:w-12 group-hover:pl-3 transition-all duration-300">
            <SendHorizonal className="h-4 text-primary" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
