import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      formErrors.email = "Invalid email address";
    }
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const data = {
        FirstName: formData.firstName,
        LastName: formData.lastName,
        Email: formData.email,
        Subject: formData.subject,
        Message: formData.message,
      };

      try {
        const response = await axios.post(
          "https://api.sheetbest.com/sheets/a1887015-0698-4519-b469-0d436230c9b4",
          data
          
        );
        console.log("Response from Google Sheets:", response.data);
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
        console.error("Error saving to Google Sheets:", error);
        toast.error("Failed to submit the form. Please check your API or network settings.");
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-20 py-10">
      {/* Contact Info */}
      <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Your Ideas, My Skills</h1>
        <p className="mb-6 text-gray-600">Looking forward to hearing from you</p>
        <p className="mb-2">
          <strong>Phone:</strong> +91 9638724826
        </p>
        <p>
          <strong>Email:</strong> parvashah305@gmail.com
        </p>
      </div>


      <div className="md:w-1/2  p-6 md:p-8 rounded-md ">
        <form onSubmit={handleSubmit}>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

         
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-md p-2 border-gray-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
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

          <button
            type="submit"
            className="mt-6 w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-md hover:bg-yellow-600"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactPage;