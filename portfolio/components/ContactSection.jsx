import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to API)
    console.log(formData);
  };

  return (
    <div className="min-h-screen  flex  flex-start items-center justify-center p-4 ">
      <div className="max-w-md  w-full justify-center mt-10  bg-slate-800 rounded-md p-6 shadow-lg">
        <h1 className="text-3xl text-white font-bold ">contact me.</h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white 
                         focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white 
                         focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-300 mb-1">
              Leave feedback about the site, career opportunities or just to say
              hello etc.
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md bg-gray-900 border border-gray-700 text-white 
                         focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 transition-colors
                       focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 
                       focus:ring-offset-gray-800"
          >
            Send Message &gt;
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-4">
          By submitting this form, I agree to the{" "}
          <a href="/privacy-policy" className="underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
