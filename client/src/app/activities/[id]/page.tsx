import React from "react";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaBullseye,
  FaChartLine,
  FaHandsHelping,
  FaSchool,
  FaShieldAlt,
} from "react-icons/fa";

interface Params {
  params: {
    id: number;
  };
}

const ActivityDetailsPage = ({ params }: Params) => {
  return (
    <div className="min-h-screen  bg-gradient-to-b from-white to-blue-50 text-gray-800">
      {/* Animated Banner Section */}
      <section className="relative rounded-b-3xl h-80 md:h-[28rem] w-full overflow-hidden shadow-2xl bg-blue-600">
        <Image
          src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1470&q=80"
          alt="Flood Recovery Project Banner"
          width={1470}
          height={600}
          className="object-cover w-full h-full opacity-90 animate-zoom-pan"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-800/50 to-transparent" />
        <div className="absolute bottom-[40%] left-0 right-0 p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-xl animate-fade-in-up">
              The Rising Hope: Flood Recovery & Resilience Project
            </h1>
          </div>
        </div>
      </section>

      {/* Floating Navigation */}
      <div className="container mx-auto px-6 -mt-10 z-10 relative">
        <div className="bg-white rounded-xl shadow-xl p-4 flex overflow-x-auto scrollbar-hide space-x-4">
          {["Overview", "Objectives", "Outcomes"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="flex-shrink-0 px-6 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg font-medium transition-all duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <section className="container mx-auto px-6 md:px-12 py-12 space-y-16">
        {/* Project Location */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500 transform transition-all hover:shadow-xl hover:-translate-y-1">
          <div className="flex items-center mb-6">
            <FaMapMarkerAlt className="text-blue-500 text-3xl mr-4" />
            <h2 className="text-3xl font-bold text-blue-700">
              Project Location
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <p className="text-gray-700 text-lg leading-relaxed">
                Bangladesh, Chattogram Division, Feni District, Chhagalnaiya
                Upazila
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-600 mb-2">
                  Impact Area
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    26,910 direct beneficiaries
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    25,000 indirect beneficiaries
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    12 schools
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    15 communities
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl overflow-hidden shadow-md h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.11604781453!2d91.5236435!3d22.3006841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a2a0000001%3A0x7d3c9a1a1b1b1b1b!2sChhagalnaiya%20Upazila!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Project Summary */}
        <div
          id="overview"
          className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500"
        >
          <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
            Project Summary
          </h2>
          <div className="relative">
            <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>
            <p className="text-gray-700 text-lg leading-relaxed pl-8">
              The Rising Hope: Flood Recovery and Resilience Project is designed
              to rebuild livelihoods, enhance public health infrastructure, and
              strengthen disaster resilience in flood-affected communities of
              Chhagalnaiya, Feni District, Bangladesh. The project will directly
              benefit 26,910 individuals, with an additional 25,000 people
              impacted through community-wide interventions.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <FaHandsHelping className="text-4xl" />,
                value: "1,500",
                label: "Farmers & Fishers Supported",
              },
              {
                icon: <FaSchool className="text-4xl" />,
                value: "12",
                label: "Schools Rehabilitated",
              },
              {
                icon: <FaShieldAlt className="text-4xl" />,
                value: "15",
                label: "Communities Strengthened",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="text-blue-500 mb-4">{stat.icon}</div>
                <p className="text-4xl font-bold text-blue-700 mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Objectives */}
        <div
          id="objectives"
          className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500"
        >
          <div className="flex items-center mb-8">
            <FaBullseye className="text-blue-500 text-3xl mr-4" />
            <h2 className="text-3xl font-bold text-blue-700">
              Project Objectives
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Restored livelihoods for flood-affected farmers and fishers by providing essential agricultural inputs, tools, and financial support",
              "Improved access to safe drinking water and improved sanitation for affected families through the establishment and repair of deep tube wells",
              "Provided timely emergency health services through mobile medical units and offered psychosocial support",
              "Supported the continuity of education for flood-affected students by distributing essential educational materials",
            ].map((objective, index) => (
              <div
                key={index}
                className="p-5 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-all group"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-200 transition-colors">
                      {index + 1}
                    </div>
                  </div>
                  <p className="text-gray-700">{objective}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Expected Outcomes */}
        <div
          id="outcomes"
          className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-500"
        >
          <div className="flex items-center mb-8">
            <FaChartLine className="text-blue-500 text-3xl mr-4" />
            <h2 className="text-3xl font-bold text-blue-700">
              Expected Outcomes
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                title: "Economic Stability",
                icon: "💼",
                content:
                  "Through targeted interventions, 1,500 farmers and fishers will restore their livelihoods, ensuring stable income sources and enhancing food security for their families.",
              },
              {
                title: "Improved Public Health & Hygiene",
                icon: "🏥",
                content:
                  "Access to safe drinking water and sanitation will be provided to 1,700 families, significantly reducing the prevalence of waterborne diseases.",
              },
              {
                title: "Enhanced Healthcare Access",
                icon: "🩺",
                content:
                  "Fifteen mobile medical camps will deliver essential healthcare services to 3,150 individuals, ensuring timely medical assistance and mental health support.",
              },
              {
                title: "Sustained Education",
                icon: "📚",
                content:
                  "Educational continuity will be ensured for 5,000 students, preventing prolonged disruptions in learning. Additionally, 12 schools will be rehabilitated.",
              },
              {
                title: "Emergency Response Training",
                icon: "🚨",
                content:
                  "A dedicated emergency disaster response team will be established and trained through a certified program led by the Fire Brigade.",
              },
              {
                title: "Community Resilience",
                icon: "🛡️",
                content:
                  "By enhancing infrastructure and equipping communities with essential disaster preparedness skills, this initiative will build long-term resilience.",
              },
            ].map((outcome, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 p-6 bg-gradient-to-r from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 text-5xl">{outcome.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {outcome.title}
                  </h3>
                  <p className="text-gray-700">{outcome.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Want to Support This Project?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your contribution can help us expand our impact and reach more
            communities in need
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-full transition duration-300 transform hover:scale-105 shadow-lg flex items-center">
              <span>Donate Now</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 font-bold py-4 px-10 rounded-full border-2 border-blue-600 transition duration-300 transform hover:scale-105 shadow-lg flex items-center">
              <span>Volunteer</span>
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Floating Help Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl animate-bounce transition-all transform hover:rotate-12">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ActivityDetailsPage;
