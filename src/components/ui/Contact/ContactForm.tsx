import { useEffect, useRef, useState } from "react";
import { Eye, FilePlus2, SendHorizonal, X } from "lucide-react";
import Image from "next/image";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [attachments, setAttachments] = useState<File[]>([]);
  const [previewFile, setPreviewFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files).filter((file) =>
      file.type.startsWith("image/")
    );
    setAttachments((prev) => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    return () => {
      attachments.forEach((file) =>
        URL.revokeObjectURL(URL.createObjectURL(file))
      );
    };
  }, [attachments]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields.");
      return;
    }

    const attachmentData = await Promise.all(
      attachments.map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            resolve({
              name: file.name,
              data: reader.result.split(",")[1], // Extract Base64 data
            });
          };
        });
      })
    );

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        attachments: attachmentData,
      }),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Your message has been sent!");
      setFormData({ name: "", email: "", message: "" });
      setAttachments([]);
    } else {
      alert("Error sending message. Please try again.");
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const startDragging = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      startX =
        "touches" in e
          ? e.touches[0].pageX - container.offsetLeft
          : e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const stopDragging = () => {
      isDown = false;
    };

    const move = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x =
        "touches" in e
          ? e.touches[0].pageX - container.offsetLeft
          : e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener("mousedown", startDragging);
    container.addEventListener("touchstart", startDragging);
    container.addEventListener("mouseup", stopDragging);
    container.addEventListener("touchend", stopDragging);
    container.addEventListener("mouseleave", stopDragging);
    container.addEventListener("mousemove", move);
    container.addEventListener("touchmove", move);

    return () => {
      container.removeEventListener("mousedown", startDragging);
      container.removeEventListener("touchstart", startDragging);
      container.removeEventListener("mouseup", stopDragging);
      container.removeEventListener("touchend", stopDragging);
      container.removeEventListener("mouseleave", stopDragging);
      container.removeEventListener("mousemove", move);
      container.removeEventListener("touchmove", move);
    };
  }, []);

  return (
    <div className="max-w-xl mx-auto rounded-2xl">
      <form onSubmit={handleSubmit} className="space-y-4">
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

        <div className="relative">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={4}
            required
            className="w-full border-gray-300 border px-6 py-4 !pb-16 rounded-3xl outline-none ring-2 ring-transparent bg-textfield custom-scrollbar focus:ring-primary resize-y"
          />
          <div className="absolute w-fit bottom-6 left-4 flex space-x-2">
            <button
              type="button"
              className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => fileInputRef.current?.click()}
            >
              <FilePlus2 size={20} />
            </button>
            {formData.message && (
              <button
                type="button"
                className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600"
                onClick={() => setFormData({ ...formData, message: "" })}
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
          accept="image/png, image/jpeg, image/jpg"
          className="hidden"
          onChange={handleFileChange}
        />

        {attachments.length > 0 && (
          <div
            ref={scrollContainerRef}
            className="bg-textfield rounded-3xl border-gray-300 border overflow-x-auto custom-scrollbar cursor-grab"
          >
            <div className="p-5 flex space-x-3 w-max">
              {attachments.map((file, index) => (
                <div
                  key={index}
                  className="relative w-24 h-24 bg-gray-200 rounded-lg overflow-hidden"
                >
                  <Image
                    width={100}
                    height={100}
                    src={URL.createObjectURL(file)}
                    alt={file.name}
                    className="w-full h-full object-cover !pointer-events-none !select-none"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                    onClick={() => removeFile(index)}
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {attachments.length > 0 && (
          <script>
            {`
              (function() {
                const container = document.querySelector('[ref="scrollContainerRef"]');
                if (!container) return;
                let isDown = false;
                let startX;
                let scrollLeft;

                const startDragging = (e) => {
                  isDown = true;
                  startX = e.pageX - container.offsetLeft;
                  scrollLeft = container.scrollLeft;
                };

                const stopDragging = () => {
                  isDown = false;
                };

                const move = (e) => {
                  if (!isDown) return;
                  e.preventDefault();
                  const x = e.pageX - container.offsetLeft;
                  const walk = (x - startX) * 2;
                  container.scrollLeft = scrollLeft - walk;
                };

                container.addEventListener('mousedown', startDragging);
                container.addEventListener('mouseup', stopDragging);
                container.addEventListener('mouseleave', stopDragging);
                container.addEventListener('mousemove', move);
              })();
            `}
          </script>
        )}

        {/* Submit Button */}
        <button
          data-cursor="pointer"
          type="submit"
          className="w-full px-6 py-3 flex justify-center items-center rounded-full bg-accent text-[#101010] hover:bg-background hover:border-accent border-2 border-transparent font-semibold transition-colors text-md group hover:text-accent duration-300"
        >
          Send Message
          <span className="overflow-hidden max-w-fit w-0 group-hover:w-12 group-hover:pl-3 transition-all duration-300">
            <SendHorizonal className="h-4 text-accent" />
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
