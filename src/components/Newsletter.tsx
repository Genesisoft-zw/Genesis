import React, { useState } from "react";
import { Send } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.error ||
            "Error subscribing to newsletter. Please try again later."
        );
      } else {
        setSubscribed(true);
        setEmail("");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }

    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubscribed(false);
      setError("");
    }, 5000);
  };

  return (
    <div className="bg-blue-600 dark:bg-gray-800 rounded-xl p-7 border-4 border-blue-500 shadow-lg transition-colors duration-300">
      <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
      <p className="text-gray-200 mb-6">
        Subscribe to our newsletter for the latest tech insights, industry
        trends, and exclusive offers.
      </p>

      {subscribed ? (
        <div className="bg-green-500 text-white p-4 rounded-lg mb-4 fade-in">
          Thank you for subscribing! We'll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 transition-colors duration-300 max-w-full"
                aria-label="Email address"
                disabled={isSubmitting}
              />
              <button
                aria-label="subscribe"
                type="submit"
                disabled={isSubmitting}
                className="bg-gray-900 dark:bg-white text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-r-lg font-semibold transition-colors duration-300 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="hidden md:inline">
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </span>
                <Send className="ml-2 w-4 h-4" />
              </button>
            </div>
            {error && <p className="text-red-200 text-sm mt-2">{error}</p>}
          </div>
          <p className="text-gray-300 text-xs">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
}
