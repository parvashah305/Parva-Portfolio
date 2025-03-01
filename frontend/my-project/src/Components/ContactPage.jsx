import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa"; // Import spinner icon

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName.trim()) formErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) formErrors.lastName = "Last Name is required";
    if (!formData.email.trim()) {
      formErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      formErrors.email = "Invalid email address";
    }
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setLoading(true); // Show loader
      try {
        const response = await axios.post("https://parva-portfolio-backend.vercel.app/contact", formData);
        console.log("Response from backend:", response.data);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
        setErrors({});
        toast.success("Form submitted successfully!");
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Failed to submit the form. Please try again.");
      } finally {
        setLoading(false); 
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-20 py-10">
      <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left text-black">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Ideas, My Skills</h1>
        <p className="mb-6 text-gray-600">Looking forward to hearing from you</p>
        <p className="mb-2"><strong>Phone:</strong> +91 9638724826</p>
        <p><strong>Email:</strong> parvashah305@gmail.com</p>
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          <a href="https://www.linkedin.com/in/parvashah305/" target='_blank' className="hover:text-gray-900 text-gray-700">
            <i className="ri-linkedin-fill text-4xl"></i>
          </a>
          <a href="https://github.com/parvashah305?tab=repositories" target='_blank' className="hover:text-gray-900 text-gray-700">
            <i className="ri-github-fill text-4xl"></i>
          </a>
          <a href="https://www.instagram.com/parvashah/" target='_blank' className="hover:text-gray-900 text-gray-700">
            <i className="ri-instagram-fill text-4xl"></i>
          </a>
          <a href="https://wa.me/919638724826" target="_blank" className="hover:text-gray-900 text-gray-700">
            <i className="ri-whatsapp-line text-4xl"></i>
          </a>
        </div>
      </div>

      <div className="md:w-1/2 p-6 md:p-8 rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 ${errors.firstName ? "border-red-500" : ""}`}
              />
              {errors.firstName && <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 ${errors.lastName ? "border-red-500" : ""}`}
              />
              {errors.lastName && <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 ${errors.email ? "border-red-500" : ""}`}
            />
            {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          {/* Submit Button with Loader */}
          <button type="submit" 
            className="mt-6 w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600 flex justify-center items-center"
            disabled={loading} 
          >
            {loading ? <FaSpinner className="animate-spin text-xl mr-2" /> : "Submit"}
          </button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactPage;