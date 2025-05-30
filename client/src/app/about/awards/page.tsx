import {
  FaTrophy,
  FaAward,
  FaHandsHelping,
  FaGlobeAfrica,
  FaHeart,
} from "react-icons/fa";

const FoundationAwards = () => {
  const awards = [
    {
      id: 1,
      title: "Humanitarian Excellence",
      issuer: "Global Peace Foundation",
      year: "2023",
      icon: <FaHandsHelping className="text-3xl text-amber-600" />,
      bg: "bg-gradient-to-br from-amber-50 to-amber-100",
      description:
        "Recognized for outstanding community development in Sub-Saharan Africa",
    },
    {
      id: 2,
      title: "Education Pioneer",
      issuer: "UNESCO",
      year: "2022",
      icon: <FaGlobeAfrica className="text-3xl text-blue-600" />,
      bg: "bg-gradient-to-br from-blue-50 to-blue-100",
      description:
        "Awarded for innovative educational programs reaching 50,000+ children",
    },
    {
      id: 3,
      title: "Philanthropy Leadership",
      issuer: "African Union",
      year: "2023",
      icon: <FaHeart className="text-3xl text-red-500" />,
      bg: "bg-gradient-to-br from-red-50 to-red-100",
      description:
        "Honored for transformative impact across 12 African nations",
    },
    {
      id: 4,
      title: "Sustainable Development",
      issuer: "World Bank",
      year: "2021",
      icon: <FaAward className="text-3xl text-green-600" />,
      bg: "bg-gradient-to-br from-green-50 to-green-100",
      description: "Pioneering eco-friendly community projects award",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* African pattern decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMjAgMjBjMTAgMTAgMTAgMjAgMCAzMHMtMjAgMTAtMzAgMGMxMC0xMCAxMC0yMCAwLTMwczIwLTEwIDMwIDB6TTcwIDcwYzEwIDEwIDEwIDIwIDAgMzBzLTIwIDEwLTMwIDBjMTAtMTAgMTAtMjAgMC0zMHMxMC0yMCAzMCAweiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==')]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNMjAgMjBjMTAgMTAgMTAgMjAgMCAzMHMtMjAgMTAtMzAgMGMxMC0xMCAxMC0yMCAwLTMwczIwLTEwIDMwIDB6TTcwIDcwYzEwIDEwIDEwIDIwIDAgMzBzLTIwIDEwLTMwIDBjMTAtMTAgMTAtMjAgMC0zMHMxMC0yMCAzMCAweiIgZmlsbD0iIzAwMCIvPjwvc3ZnPg==')]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-serif">
            <span className="border-b-4 border-amber-500 pb-2">
              Our Recognitions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The Bondi Patsha Foundations impact has been honored by leading
            global organizations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {awards.map((award) => (
            <div
              key={award.id}
              className={`${award.bg} rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
            >
              {/* Award ribbon */}
              <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-8 bg-amber-500 transform rotate-45 translate-x-8 -translate-y-2 shadow-sm flex items-center justify-center">
                  <span className="text-xs  font-bold text-white">
                    {award.year}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 rounded-lg bg-white shadow-sm border border-gray-100">
                  {award.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {award.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 mb-3">
                    {award.issuer}
                  </p>
                  <p className="text-gray-600">{award.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center mx-auto">
            <FaTrophy className="mr-2" />
            Explore Our Impact Reports
          </button>
        </div>
      </div>
    </section>
  );
};

export default FoundationAwards;
