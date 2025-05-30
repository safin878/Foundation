"use client";
import { FaGift, FaHeart, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const DonationPage = () => {
  const donationAmounts = [500, 2500, 5000];
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

  return (
    <section className="relative py-16 px-4 bg-gradient-to-b from-sky-50 to-white min-h-screen">
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
                  className="py-3 px-2 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg font-medium text-sky-800 transition-colors"
                >
                  {amount.toLocaleString()}
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
                  className="w-full pl-8 pr-4 py-3 border border-sky-200 rounded-lg focus:ring-2 focus:ring-sky-300 focus:border-sky-300"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
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

        {/* Impact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="mt-16 bg-sky-100/50 rounded-xl p-8 text-center border border-sky-200"
        >
          <h2 className="text-2xl font-bold text-sky-900 mb-4">Your Impact</h2>
          <p className="text-sky-700 max-w-2xl mx-auto mb-6">
            Every contribution makes a real difference in children s lives
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-sky-200">
              <div className="text-2xl font-bold text-sky-600">500+</div>
              <div className="text-sm text-sky-700">Students Supported</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-sky-200">
              <div className="text-2xl font-bold text-sky-600">25+</div>
              <div className="text-sm text-sky-700">Schools Built</div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-sky-200">
              <div className="text-2xl font-bold text-sky-600">100%</div>
              <div className="text-sm text-sky-700">
                Funds Direct to Programs
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationPage;
