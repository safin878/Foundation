"use client";

import { useParams } from "next/navigation";
import { XCircle, AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function DonationFailed() {
  const { transactionId } = useParams(); // ✅ Now this will have a value
  console.log("Params:", transactionId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-yellow-50 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white border border-red-200 shadow-xl rounded-2xl p-8 animate-fade-in">
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-100 p-5 rounded-full mb-6 shadow-inner">
            <XCircle className="h-12 w-12 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-red-700 mb-2">
            Payment Failed
          </h1>
          <p className="text-gray-600 text-lg mb-6 max-w-md">
            We couldn{`'`}t process your donation. Please check your connection
            or try again later.
          </p>

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg w-full mb-6 text-left">
            <p className="text-gray-700 font-medium">
              <span className="text-gray-900 font-semibold">
                Transaction ID:
              </span>{" "}
              {transactionId || "Unavailable"}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              If the issue continues, please contact support.
            </p>
          </div>

          <div className="flex items-center text-yellow-600 mt-2 mb-6">
            <AlertTriangle className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">
              Need help? We{`'`}re here for you.
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <button
              onClick={() => (window.location.href = "/")}
              className="flex items-center justify-center gap-2 px-6 py-3 w-full bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-900 transition-all duration-300"
            >
              <Home className="h-5 w-5" />
              Return Home
            </button>

            <button
              onClick={() => (window.location.href = "/donate")}
              className="flex items-center justify-center gap-2 px-6 py-3 w-full bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300"
            >
              <RotateCcw className="h-5 w-5" />
              Try Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
