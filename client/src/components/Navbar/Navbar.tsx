"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import {
  IoCloseOutline,
  IoSearchOutline,
  IoChevronDownOutline,
  IoChevronUpOutline,
} from "react-icons/io5";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const focusDropdownRef = useRef<HTMLDivElement>(null);
  const projectDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdown(mobileDropdown === dropdown ? null : dropdown);
  };

  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setSearchModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isHovering) {
        if (
          (activeDropdown === "focus" &&
            focusDropdownRef.current &&
            !focusDropdownRef.current.contains(event.target as Node)) ||
          (activeDropdown === "project" &&
            projectDropdownRef.current &&
            !projectDropdownRef.current.contains(event.target as Node)) ||
          (activeDropdown === "about" &&
            aboutDropdownRef.current &&
            !aboutDropdownRef.current.contains(event.target as Node))
        ) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown, isHovering]);

  // Focus input when modal opens
  useEffect(() => {
    if (searchModalOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchModalOpen]);

  const dropdownItems = {
    focus: [
      {
        name: "Education and Digital Learning",
        href: "/focus/Education and Digital Learning",
      },
      {
        name: "Youth and Skill Development",
        href: "/focus/Youth and Skill Development",
      },
      { name: "Women Empowerment", href: "/focus/Women Empowerment" },
      { name: "Environment", href: "/focus/environment" },
      {
        name: "Governance and Advocacy",
        href: "/focus/Governance and Advocacy",
      },
    ],
    project: [
      { name: "Current Projects", href: "/projects/current" },
      { name: "Completed Projects", href: "/projects/completed" },
    ],
    about: [
      { name: "Our Team", href: "/about/team" },
      { name: "Awards & Recognitions", href: "/about/awards" },
      { name: "FAQ", href: "/about/faq" },
      { name: "Contact", href: "/about/contact" },
    ],
  };

  return (
    <>
      {/* Enhanced Navbar with glass morphism effect */}
      <nav
        className={`w-full fixed top-0 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md py-2"
            : "bg-white/80 backdrop-blur-sm py-3"
        } px-4 sm:px-6 lg:px-8 flex items-center justify-between z-50`}
      >
        {/* Logo with animation */}
        <div className="flex items-center gap-2">
          <Link href="/" className="group">
            <Image
              src="https://i.postimg.cc/50mcMLR3/BP-Foundation-2.png"
              alt="BP Foundation Logo"
              width={scrolled ? 100 : 120}
              height={scrolled ? 100 : 120}
              className="object-contain transition-all duration-300"
            />
          </Link>
        </div>

        {/* Desktop Navigation with animated underline */}
        <div className="hidden md:flex gap-8 text-gray-800 font-medium items-center">
          <Link
            href="/"
            className="relative group px-1 py-2 hover:text-blue-600 transition-colors"
          >
            Home
            <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* Focus Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => {
              setActiveDropdown("focus");
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setTimeout(() => {
                if (!isHovering) {
                  setActiveDropdown(null);
                }
              }, 100);
            }}
          >
            <button className="flex items-center gap-1 px-1 py-2 hover:text-blue-600 transition-colors">
              <span className="relative">
                Involment
                <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
              </span>
              {activeDropdown === "focus" ? (
                <IoChevronUpOutline className="text-sm" />
              ) : (
                <IoChevronDownOutline className="text-sm" />
              )}
            </button>
            {activeDropdown === "focus" && (
              <div
                ref={focusDropdownRef}
                className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-100"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setActiveDropdown(null);
                }}
              >
                {dropdownItems.focus.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="relative">{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Project Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => {
              setActiveDropdown("project");
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setTimeout(() => {
                if (!isHovering) {
                  setActiveDropdown(null);
                }
              }, 100);
            }}
          >
            <button className="flex items-center gap-1 px-1 py-2 hover:text-blue-600 transition-colors">
              <span className="relative">
                Project
                <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
              </span>
              {activeDropdown === "project" ? (
                <IoChevronUpOutline className="text-sm" />
              ) : (
                <IoChevronDownOutline className="text-sm" />
              )}
            </button>
            {activeDropdown === "project" && (
              <div
                ref={projectDropdownRef}
                className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-100"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setActiveDropdown(null);
                }}
              >
                {dropdownItems.project.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="relative">{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/wwd"
            className="relative group px-1 py-2 hover:text-blue-600 transition-colors"
          >
            What We Do
            <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
          </Link>

          {/* About Us Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => {
              setActiveDropdown("about");
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
              setTimeout(() => {
                if (!isHovering) {
                  setActiveDropdown(null);
                }
              }, 100);
            }}
          >
            <button className="flex items-center gap-1 px-1 py-2 hover:text-blue-600 transition-colors">
              <span className="relative">
                About Us
                <span className="absolute bottom-0 left-0 h-0.5 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
              </span>
              {activeDropdown === "about" ? (
                <IoChevronUpOutline className="text-sm" />
              ) : (
                <IoChevronDownOutline className="text-sm" />
              )}
            </button>
            {activeDropdown === "about" && (
              <div
                ref={aboutDropdownRef}
                className="absolute left-0 mt-2 w-64 bg-white shadow-xl rounded-lg py-2 z-50 border border-gray-100"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => {
                  setIsHovering(false);
                  setActiveDropdown(null);
                }}
              >
                {dropdownItems.about.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors group"
                    onClick={() => setActiveDropdown(null)}
                  >
                    <span className="relative">{item.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Animated Search Input */}
          <div className="hidden sm:flex items-center relative group">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={openSearchModal}
              placeholder="Search..."
              className="pl-4 pr-10 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm text-gray-800 w-40 lg:w-52 transition-all duration-300 group-hover:w-52 lg:group-hover:w-64 bg-white/80 backdrop-blur-sm"
            />
            <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-blue-500 transition-colors" />
          </div>

          {/* Mobile Search Button */}
          <button
            onClick={openSearchModal}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
          >
            <IoSearchOutline className="text-xl" />
          </button>

          {/* Glowing Donate Button */}
          <Link
            href="/donate"
            className="hidden sm:inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 whitespace-nowrap relative overflow-hidden group"
          >
            <span className="relative z-10">DONATE</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>

          {/* Animated Hamburger Menu */}
          <button
            onClick={toggleSidebar}
            aria-label={sidebarOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-full bg-blue-50 hover:bg-blue-100 transition-colors group"
          >
            {sidebarOpen ? (
              <IoCloseOutline className="text-2xl text-blue-600" />
            ) : (
              <>
                <span className="block w-5 h-0.5 bg-blue-600 mb-1.5 transition-all group-hover:w-6"></span>
                <span className="block w-6 h-0.5 bg-blue-600 mb-1.5 transition-all group-hover:w-5"></span>
                <span className="block w-4 h-0.5 bg-blue-600 transition-all group-hover:w-6"></span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Premium Search Modal */}
      {searchModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div
            ref={modalRef}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl transform transition-all duration-300 scale-95"
          >
            <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex justify-between items-center">
              <h2 className="text-xl font-bold">Search BP Foundation</h2>
              <button
                onClick={closeSearchModal}
                className="text-white hover:text-blue-100 text-2xl p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <IoCloseOutline />
              </button>
            </div>

            <div className="p-6">
              <div className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search projects, initiatives, or resources..."
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-800 placeholder-gray-400 pr-12"
                  autoFocus
                />
                <IoSearchOutline className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              </div>

              {/* Recent searches section */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Recent Searches
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Education", "Donation", "Projects", "Volunteer"].map(
                    (term) => (
                      <button
                        key={term}
                        onClick={() => setSearch(term)}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors flex items-center gap-1"
                      >
                        <IoSearchOutline className="text-gray-500" />
                        {term}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Quick links */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Quick Links
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {dropdownItems.focus.slice(0, 4).map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeSearchModal}
                      className="p-3 rounded-lg hover:bg-blue-50 transition-colors border border-gray-100 flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        {item.name.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-700">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modern Mobile Sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={toggleSidebar}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="p-5 flex justify-between items-center border-b border-gray-100">
          <Link href="/" onClick={toggleSidebar} className="flex items-center">
            <Image
              src="https://i.postimg.cc/50mcMLR3/BP-Foundation-2.png"
              alt="BP Foundation Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
          <button
            onClick={toggleSidebar}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-700"
          >
            <IoCloseOutline className="text-2xl" />
          </button>
        </div>

        <div className="h-[calc(100%-80px)] overflow-y-auto pb-6">
          <nav className="flex flex-col p-5 gap-1">
            <Link
              href="/"
              className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium text-gray-800 flex items-center gap-3"
              onClick={toggleSidebar}
            >
              <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                H
              </span>
              Home
            </Link>

            {/* Mobile Focus Dropdown */}
            <div className="border-b border-gray-100 py-1">
              <button
                onClick={() => toggleMobileDropdown("focus")}
                className="w-full px-4 py-3 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium text-gray-800 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    F
                  </span>
                  Focus Areas
                </div>
                {mobileDropdown === "focus" ? (
                  <IoChevronUpOutline className="text-gray-500" />
                ) : (
                  <IoChevronDownOutline className="text-gray-500" />
                )}
              </button>
              {mobileDropdown === "focus" && (
                <div className="pl-14 py-1 space-y-1">
                  {dropdownItems.focus.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      onClick={toggleSidebar}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Project Dropdown */}
            <div className="border-b border-gray-100 py-1">
              <button
                onClick={() => toggleMobileDropdown("project")}
                className="w-full px-4 py-3 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium text-gray-800 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    P
                  </span>
                  Our Projects
                </div>
                {mobileDropdown === "project" ? (
                  <IoChevronUpOutline className="text-gray-500" />
                ) : (
                  <IoChevronDownOutline className="text-gray-500" />
                )}
              </button>
              {mobileDropdown === "project" && (
                <div className="pl-14 py-1 space-y-1">
                  {dropdownItems.project.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      onClick={toggleSidebar}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/what-we-do"
              className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium text-gray-800 flex items-center gap-3"
              onClick={toggleSidebar}
            >
              <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                W
              </span>
              What We Do
            </Link>

            {/* Mobile About Us Dropdown */}
            <div className="border-b border-gray-100 py-1">
              <button
                onClick={() => toggleMobileDropdown("about")}
                className="w-full px-4 py-3 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium text-gray-800 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    A
                  </span>
                  About Us
                </div>
                {mobileDropdown === "about" ? (
                  <IoChevronUpOutline className="text-gray-500" />
                ) : (
                  <IoChevronDownOutline className="text-gray-500" />
                )}
              </button>
              {mobileDropdown === "about" && (
                <div className="pl-14 py-1 space-y-1">
                  {dropdownItems.about.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                      onClick={toggleSidebar}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Donate Button in Sidebar */}
            <div className="px-4 pt-6">
              <Link
                href="/donate"
                className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-6 py-3 rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all font-medium"
                onClick={toggleSidebar}
              >
                DONATE NOW
              </Link>
            </div>

            {/* Contact Info */}
            <div className="px-4 pt-8">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Contact Us
              </h4>
              <div className="space-y-2">
                <a
                  href="mailto:info@bpf.org"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    @
                  </span>
                  info@bpf.org
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    📞
                  </span>
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
