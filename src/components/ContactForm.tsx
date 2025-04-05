import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ContactForm() {
  const serviceId = "service_vgwchdb";
  const tempId = "template_oc4x27c";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true); // Set sending state to true

    emailjs
      .send(serviceId, tempId, formData, "YqJqCQzupELm5xJuR")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        console.log("Form submitted:", formData); // Log form data after successful send
        toast.success("Email sent successfully!"); // Show success toast
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("FAILED...", error); // Log the error
        toast.error("Failed to send email. Please try again."); // Show error toast
      })
      .finally(() => {
        setIsSending(false); // Reset sending state
      });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm p-2
                       focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white
                       transition duration-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm p-2 
                       focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white
                       transition duration-300"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm 
                     focus:border-blue-500 p-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white
                     transition duration-300"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="mt-1 block w-full rounded-lg border-gray-300 dark:border-gray-600 shadow-sm 
                     focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:text-white
                     transition duration-300"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full button-primary dark:bg-blue-700 dark:hover:bg-blue-600"
            disabled={isSending} // Disable the button while sending
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </>
  );
}
