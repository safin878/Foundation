 
"use client";

import { useParams } from "next/navigation";
import { CheckCircle2, Heart } from "lucide-react";

export default function DonationSuccess() {
  const params = useParams();
  const transactionId = params.transactionId;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-6">
              <CheckCircle2 className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
              Thank You for Your Generosity!
            </h1>
            <p className="text-green-600 font-medium mb-6 text-center">
              Your payment was successful
            </p>

            <div className="bg-blue-50 p-4 rounded-lg w-full mb-6">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Transaction ID:</span>{" "}
                {transactionId}
              </p>
              <p className="text-sm text-gray-500">
                A receipt has been sent to your email
              </p>
            </div>

            <div className="flex items-center text-pink-500 mt-4">
              <Heart className="h-5 w-5 mr-1" fill="currentColor" />
              <span className="text-sm font-medium">
                Your support makes a difference!
              </span>
            </div>

            <button
              onClick={() => (window.location.href = "/")}
              className="mt-8 px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-300"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
