"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    const check404 = () => {
      const hasClass = document.body.classList.contains("not-found-page");
      setIs404(hasClass);
    };

    check404(); // Initial check

    // Observe class changes
    const observer = new MutationObserver(check404);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  if (is404) {
    return <>{children}</>; // ❌ No Navbar/Footer
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
