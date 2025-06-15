"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Routes that should not show Navbar and Footer
  const hideLayoutForRoutes = [
    "/donation/success",
    "/donation/failed",
    "/donation/canceled",
  ];

  // Check if current pathname starts with any route above
  const hideLayout = hideLayoutForRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (hideLayout) {
    return <>{children}</>; // No Navbar/Footer
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </>
  );
}
