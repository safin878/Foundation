"use client";

import { useParams } from "next/navigation";
import { XCircle, RotateCcw, Home } from "lucide-react";

export default function DonationCanceled() {
  const { transactionId } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-gray-100 to-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white border border-red-200 shadow-xl rounded-2xl p-8 animate-fade-in">
        <div className="flex flex-col items-center text-center">
          <div className="bg-red-100 p-5 rounded-full mb-6 shadow-inner">
            <XCircle className="h-12 w-12 text-red-600" />
          </div>
          <h1 className="text-4xl font-bold text-red-700 mb-2">
            Payment Canceled
          </h1>
          <p className="text-gray-600 text-lg mb-6 max-w-md">
            Your donation attempt was not completed. If this was a mistake or
            you wish to try again, please use the options below.
          </p>

          <div className="bg-red-50 border border-red-200 p-4 rounded-lg w-full mb-6 text-left">
            <p className="text-gray-700 font-medium">
              <span className="text-gray-900 font-semibold">
                Transaction ID:
              </span>{" "}
              {transactionId || "Unavailable"}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              This ID helps us identify your transaction in case of issues.
            </p>
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
