"use client";
import { FaGift, FaHeart, FaLock, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Script from "next/script";

const DonationPage = () => {
  const donationAmounts = [500, 2500, 5000];
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2500);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    if (selectedAmount !== null) {
      setCustomAmount(selectedAmount.toString());
    }
  }, [selectedAmount]);

  const giftOptions = [
    {
      id: 1,
      name: "School Supplies Kit",
      description: "Provide notebooks, pens, and pencils for 1 student",
      amount: 800,
      icon: <FaGift className="text-sky-500" />,
    },
    {
      id: 2,
      name: "Textbook Bundle",
      description: "Fund a set of textbooks for a classroom",
      amount: 2500,
      icon: <FaGift className="text-sky-500" />,
    },
    {
      id: 3,
      name: "Digital Learning",
      description: "Support access to digital learning tools",
      amount: 5000,
      icon: <FaGift className="text-sky-500" />,
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      phone: "",
      email: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain only digits";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleDonateNow = () => {
    setShowModal(true);
  };

  // const handleProceedToPayment = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!validateForm()) return;

  //   setIsProcessing(true);

  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/donations/create-session`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           amount: selectedAmount || customAmount,
  //           name: formData.name,
  //           phone: formData.phone,
  //           email: formData.email,
  //         }),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(`Payment failed: ${response.status}`);
  //     }

  //     const data = await response.json();

  //     if (data.GatewayPageURL) {
  //       window.location.href = data.GatewayPageURL;
  //     } else {
  //       throw new Error("Payment gateway URL not received");
  //     }
  //   } catch (error) {
  //     console.error("Payment error:", error);
  //     alert("Payment failed. Please try again.");
  //   } finally {
  //     setIsProcessing(false);
  //   }
  // };
  const handleProceedToPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/donations/create-session`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: selectedAmount || customAmount,
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Payment failed");
      }

      if (data.GatewayPageURL) {
        window.location.href = data.GatewayPageURL;
      } else {
        throw new Error("Payment gateway URL not received");
      }
    } catch (error: any) {
      console.error("Payment error:", error);
      alert(error.message || "Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-sky-50 to-white min-h-screen">
      {/* SSLCommerz Script */}
      <Script
        src="https://sandbox.sslcommerz.com/embed.min.js"
        strategy="beforeInteractive"
      />

      {/* Floating bubbles background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: [0, 0.2, 0],
              y: [100, -100],
              x: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute rounded-full bg-sky-200/30"
            style={{
              width: `${10 + Math.random() * 30}px`,
              height: `${10 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center mb-4 px-4 py-1 bg-sky-100 rounded-full">
            <FaHeart className="text-sky-600 mr-2" />
            <span className="text-sm font-medium text-sky-700">
              Make a Difference
            </span>
          </div>
          <h1 className="text-4xl font-bold text-sky-900 mb-4">
            Support Our <span className="text-sky-600">Mission</span>
          </h1>
          <p className="text-lg text-sky-700 max-w-2xl mx-auto">
            Your donation helps provide quality education to children across
            Africa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Donation Amount Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-md border border-sky-100"
          >
            <h2 className="text-xl font-bold text-sky-900 mb-6">
              Select Donation Amount (BDT)
            </h2>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {donationAmounts.map((amount) => (
                <motion.button
                  key={amount}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedAmount(amount);
                    setCustomAmount(amount.toString());
                  }}
                  className={`relative cursor-pointer py-3 px-2 rounded-lg font-medium text-sky-800 border transition-all ${
                    selectedAmount === amount
                      ? "bg-green-50 border-green-400"
                      : "bg-sky-50 border-sky-200 hover:bg-sky-100"
                  }`}
                >
                  {amount.toLocaleString()}
                  {selectedAmount === amount && (
                    <div className="absolute top-0 right-0 w-6 h-6 bg-green-500 rounded-bl-lg rounded-tr-lg flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </motion.button>
              ))}
            </div>

            <div className="mb-6">
              <label
                htmlFor="customAmount"
                className="block text-sm font-medium text-sky-700 mb-2"
              >
                Or enter custom amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sky-500">
                  ৳
                </span>
                <input
                  type="number"
                  id="customAmount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  onFocus={() => setSelectedAmount(null)}
                  className="appearance-none w-full pl-8 pr-4 py-3 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300 text-gray-700"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleDonateNow}
              className="w-full py-3 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all"
            >
              Donate Now
            </motion.button>

            <div className="flex items-center justify-center mt-4 text-sky-600 text-sm">
              <FaLock className="mr-2" />
              <span>Secure payment processing</span>
            </div>
          </motion.div>

          {/* Gift Options Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl p-6 shadow-md border border-sky-100"
          >
            <h2 className="text-xl font-bold text-sky-900 mb-6">
              Give the Gift of Education
            </h2>

            <div className="space-y-4">
              {giftOptions.map((gift) => (
                <motion.div
                  key={gift.id}
                  whileHover={{ y: -3 }}
                  className="flex items-start p-4 border border-sky-100 rounded-lg hover:bg-sky-50 transition-colors cursor-pointer"
                >
                  <div className="bg-sky-100 p-3 rounded-full mr-4">
                    {gift.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-sky-900">{gift.name}</h3>
                    <p className="text-sm text-sky-600 mb-1">
                      {gift.description}
                    </p>
                    <span className="text-sky-700 font-medium">
                      ৳{gift.amount.toLocaleString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-sky-600 mb-3">
                Each gift comes with a personalized thank you certificate
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-6 py-2 border border-sky-300 text-sky-700 font-medium rounded-lg hover:bg-sky-50 transition-colors"
              >
                <FaGift className="mr-2" />
                Give as Gift
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Glass Morphism Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white/80 backdrop-blur-lg rounded-xl p-6 w-full max-w-md relative border border-white/20 shadow-xl"
          >
            <h2 className="text-2xl font-bold text-sky-900 mb-4">
              Complete Your Donation
            </h2>
            <div className="mb-6 p-3 bg-sky-50/50 rounded-lg border border-sky-100">
              <p className="text-sm text-sky-600">Your Donation Amount</p>
              <p className="text-xl font-bold text-sky-800">
                ৳
                {selectedAmount
                  ? selectedAmount.toLocaleString()
                  : customAmount}
              </p>
            </div>

            <form onSubmit={handleProceedToPayment}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300 bg-white/70 text-gray-700 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300 bg-white/70 text-gray-700 ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300 bg-white/70 text-gray-700 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-gray-100/70 transition-colors"
                >
                  Cancel
                </button>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-2 bg-gradient-to-r from-sky-500 to-sky-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Processing..." : "Proceed to Payment"}
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default DonationPage;
