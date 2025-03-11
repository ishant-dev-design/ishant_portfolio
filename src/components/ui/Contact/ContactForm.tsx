import { useState } from "react";
import { SendHorizonal, X, Loader2, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonState, setButtonState] = useState("Send Message");
  const [buttonColor, setButtonColor] = useState("bg-accent");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);
    setButtonState("Sending...");
    setButtonColor("bg-yellow-500");

    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      setButtonState("All fields are required");
      setButtonColor("bg-red-500");
      setLoading(false);
      setTimeout(() => {
        setButtonState("Send Message");
        setButtonColor("bg-accent");
      }, 3000);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setButtonState("Sent!");
        setButtonColor("bg-green-500");
        setTimeout(() => {
          setButtonState("Send Message");
          setButtonColor("bg-accent");
        }, 3000);
      } else {
        setError("Failed to send message. Please try again.");
        setButtonState("Failed to send");
        setButtonColor("bg-red-500");
        setTimeout(() => {
          setButtonState("Send Message");
          setButtonColor("bg-accent");
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Something went wrong. Try again later.");
      setButtonState("Error! Try again");
      setButtonColor("bg-red-500");
      setTimeout(() => {
        setButtonState("Send Message");
        setButtonColor("bg-accent");
      }, 3000);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto rounded-2xl md:pt-16 md:pb-64">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border-gray-300 border px-6 py-4 pr-16 rounded-full outline-none ring-2 ring-transparent bg-textfield focus:ring-primary"
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

        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-6 border-gray-300 border py-4 pr-16 rounded-full outline-none ring-2 ring-transparent bg-textfield focus:ring-primary"
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

        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            className="w-full border-gray-300 border px-6 py-4 pr-16 rounded-3xl custom-scrollbar outline-none ring-2 ring-transparent bg-textfield focus:ring-primary resize-y"
          />
          {formData.message && (
            <button
              type="button"
              className="absolute right-3 rounded-full p-2 top-8 transform -translate-y-1/2 text-gray-500 hover:text-white hover:bg-red-600"
              onClick={() => setFormData({ ...formData, message: "" })}
            >
              <X size={20} />
            </button>
          )}
        </div>
        <div className="flex w-full justify-center items-center">
          <button
            type="submit"
            className={`w-full px-6 py-3 flex justify-center items-center font-bold rounded-full ${buttonColor} text-[#101010] transition-all duration-300 ease-in-out text-md group $ {loading ? "!w-14 !px-3" : "w-full"}`}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="animate-spin h-6 w-6" />
            ) : (
              buttonState
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
