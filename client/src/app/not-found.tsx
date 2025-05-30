"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Add a class to detect not-found
    document.body.classList.add("not-found-page");
    return () => {
      document.body.classList.remove("not-found-page");
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center flex-col bg-white">
      <h1 className="text-4xl font-bold text-red-600 mb-6">
        404 | Page Not Found
      </h1>
      <button
        onClick={() => router.push("/")}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Home
      </button>
    </div>
  );
}
