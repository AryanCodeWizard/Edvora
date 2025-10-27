import { FiAlertCircle, FiCheckCircle, FiMail, FiMessageSquare, FiPhone, FiSend, FiUser } from "react-icons/fi"
import React, { useEffect, useState } from "react"

import CountryCode from "../../data/countrycode.json"
// import { apiConnector } from "../../services/apiConnector"
// import { contactusEndpoint } from "../../services/apis"
import { useForm } from "react-hook-form"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const submitContactForm = async (data) => {
    try {
      setLoading(true)
      setSubmitStatus(null)
      // await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data)
      // console.log(data);
      setLoading(false)
      setSubmitStatus('success')
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setLoading(false)
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
        countrycode: "+91"
      })
    }
  }, [reset, isSubmitSuccessful])

  return (
    <div className="relative">
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 rounded-lg bg-green-900/30 border border-green-600/50 flex items-center gap-3 backdrop-blur-sm">
          <FiCheckCircle className="text-green-400 text-xl flex-shrink-0" />
          <p className="text-green-200">Message sent successfully! We'll get back to you soon.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 rounded-lg bg-pink-900/30 border border-pink-600/50 flex items-center gap-3 backdrop-blur-sm">
          <FiAlertCircle className="text-pink-400 text-xl flex-shrink-0" />
          <p className="text-pink-200">Something went wrong. Please try again later.</p>
        </div>
      )}

      <form
        className="flex flex-col gap-6"
        onSubmit={handleSubmit(submitContactForm)}
      >
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[48%] relative">
            <label htmlFor="firstname" className="text-richblack-5 text-sm font-medium mb-1">
              First Name <span className="text-pink-400">*</span>
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-richblack-400 text-lg" />
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter first name"
                className={`w-full py-3 pl-10 pr-4 rounded-lg bg-richblack-800 border-2 
                  ${errors.firstname ? 'border-pink-500' : 'border-richblack-600 focus:border-yellow-500'} 
                  text-richblack-5 placeholder-richblack-400 outline-none transition-colors`}
                {...register("firstname", { 
                  required: "First name is required",
                  minLength: { value: 2, message: "First name must be at least 2 characters" }
                })}
              />
            </div>
            {errors.firstname && (
              <span className="text-sm text-pink-300 mt-1 flex items-center gap-1">
                <FiAlertCircle className="text-sm" />
                {errors.firstname.message}
              </span>
            )}
          </div>
          
          <div className="flex flex-col gap-2 lg:w-[48%] relative">
            <label htmlFor="lastname" className="text-richblack-5 text-sm font-medium mb-1">
              Last Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-richblack-400 text-lg" />
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter last name"
                className="w-full py-3 pl-10 pr-4 rounded-lg bg-richblack-800 border-2 border-richblack-600 
                  focus:border-yellow-500 text-richblack-5 placeholder-richblack-400 outline-none transition-colors"
                {...register("lastname", {
                  minLength: { value: 2, message: "Last name must be at least 2 characters" }
                })}
              />
            </div>
            {errors.lastname && (
              <span className="text-sm text-pink-300 mt-1 flex items-center gap-1">
                <FiAlertCircle className="text-sm" />
                {errors.lastname.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2 relative">
          <label htmlFor="email" className="text-richblack-5 text-sm font-medium mb-1">
            Email Address <span className="text-pink-400">*</span>
          </label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-richblack-400 text-lg" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              className={`w-full py-3 pl-10 pr-4 rounded-lg bg-richblack-800 border-2 
                ${errors.email ? 'border-pink-500' : 'border-richblack-600 focus:border-yellow-500'} 
                text-richblack-5 placeholder-richblack-400 outline-none transition-colors`}
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
          </div>
          {errors.email && (
            <span className="text-sm text-pink-300 mt-1 flex items-center gap-1">
              <FiAlertCircle className="text-sm" />
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phonenumber" className="text-richblack-5 text-sm font-medium mb-1">
            Phone Number
          </label>

          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-28">
              <div className="relative">
                <FiPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-richblack-400 text-lg" />
                <select
                  className="w-full py-3 pl-10 pr-4 rounded-lg bg-richblack-800 border-2 border-richblack-600 
                    focus:border-yellow-500 text-richblack-5 outline-none appearance-none transition-colors"
                  {...register("countrycode", { required: true })}
                >
                  {CountryCode.map((ele, i) => (
                    <option key={i} value={ele.code}>
                      {ele.code}
                    </option>
                  ))}
                </select>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg className="w-4 h-4 text-richblack-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-2 flex-1 relative">
              <input
                type="tel"
                name="phonenumber"
                id="phonenumber"
                placeholder="12345 67890"
                className={`w-full py-3 px-4 rounded-lg bg-richblack-800 border-2 
                  ${errors.phoneNo ? 'border-pink-500' : 'border-richblack-600 focus:border-yellow-500'} 
                  text-richblack-5 placeholder-richblack-400 outline-none transition-colors`}
                {...register("phoneNo", {
                  pattern: { value: /^[0-9]+$/, message: "Please enter numbers only" },
                  minLength: { value: 5, message: "Phone number must be at least 5 digits" },
                  maxLength: { value: 15, message: "Phone number too long" }
                })}
              />
            </div>
          </div>
          
          {errors.phoneNo && (
            <span className="text-sm text-pink-300 mt-1 flex items-center gap-1">
              <FiAlertCircle className="text-sm" />
              {errors.phoneNo.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2 relative">
          <label htmlFor="message" className="text-richblack-5 text-sm font-medium mb-1">
            Message <span className="text-pink-400">*</span>
          </label>
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-4 text-richblack-400 text-lg" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Enter your message here..."
              className={`w-full py-3 pl-10 pr-4 rounded-lg bg-richblack-800 border-2 
                ${errors.message ? 'border-pink-500' : 'border-richblack-600 focus:border-yellow-500'} 
                text-richblack-5 placeholder-richblack-400 outline-none transition-colors resize-none`}
              {...register("message", { 
                required: "Message is required",
                minLength: { value: 10, message: "Message must be at least 10 characters" },
                maxLength: { value: 500, message: "Message cannot exceed 500 characters" }
              })}
            />
          </div>
          {errors.message && (
            <span className="text-sm text-pink-300 mt-1 flex items-center gap-1">
              <FiAlertCircle className="text-sm" />
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          disabled={loading}
          type="submit"
          className={`w-full py-3.5 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2
            ${loading 
              ? 'bg-richblack-700 text-richblack-300 cursor-not-allowed' 
              : 'bg-yellow-500 text-richblack-900 hover:bg-yellow-400 hover:shadow-lg active:scale-95 shadow-[0_4px_0_0_rgba(0,0,0,0.1)]'
            } mt-2`}
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-richblack-900 border-t-transparent rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              <FiSend className="text-lg" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  )
}

export default ContactUsForm