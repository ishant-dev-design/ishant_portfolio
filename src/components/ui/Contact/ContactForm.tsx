import { useState } from "react";
import { X, Loader2 } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    setLoading(true);
    setButtonState("Sending...");
    setButtonColor("bg-yellow-500");

    if (!formData.name || !formData.email || !formData.message) {
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
        setFormData({ name: "", email: "", message: "" });
        setButtonState("Sent!");
        setButtonColor("bg-green-500");
      } else {
        setButtonState("Failed to send");
        setButtonColor("bg-red-500");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setButtonState("Error! Try again");
      setButtonColor("bg-red-500");
    }

    setLoading(false);
    setTimeout(() => {
      setButtonState("Send Message");
      setButtonColor("bg-accent");
    }, 3000);
  };

  return (
    <div className="max-w-xl mx-auto rounded-2xl pt-16 pb-64">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/** Name Input **/}
        <div className="relative">
          <input
            type="text"
            name="name"
            data-cursor="text"
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

        {/** Email Input **/}
        <div className="relative">
          <input
            type="email"
            name="email"
            data-cursor="text"
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

        {/** Message Input **/}
        <div className="relative">
          <textarea
            name="message"
            data-cursor="text"
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

        {/** Submit Button **/}
        <div className="flex w-full justify-center items-center">
          <button
            type="submit"
            data-cursor="pointer"
            className={`w-full px-6 py-3 flex justify-center items-center font-bold rounded-full ${buttonColor} text-background transition-all duration-300 ease-in-out text-md ${
              loading ? "!w-14 !px-3" : "w-full"
            }`}
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
