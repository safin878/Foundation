import React from "react";
import Head from "next/head";
import Image from "next/image";

const WhatWeDoPage = () => {
  const programs = [
    {
      title: "Education Initiatives",
      imageUrl: "https://i.postimg.cc/XYv7ZY7J/education.jpg",
      hoverText:
        "Empowering young minds through innovative learning programs and scholarships",
    },
    {
      title: "Cultural Preservation",
      imageUrl: "https://i.postimg.cc/8zV4QJ0J/culture.jpg",
      hoverText:
        "Celebrating and preserving our rich heritage through language and arts",
    },
    {
      title: "Community Development",
      imageUrl: "https://i.postimg.cc/8CkXp2Yv/community.jpg",
      hoverText:
        "Building stronger communities through empowerment and training",
    },
    {
      title: "Research & Advocacy",
      imageUrl: "https://i.postimg.cc/rmk2Q5Qx/research.jpg",
      hoverText: "Driving change through evidence-based policies and awareness",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Head>
        <title>What We Do - Bondi Patshala Foundation</title>
        <meta
          name="description"
          content="Learn about our vision, mission, and values at Bondi Patshala Foundation"
        />
      </Head>
      {/* Hero Section */}
      <div className="relative h-96 w-full bg-gradient-to-br from-blue-50 to-white overflow-hidden">
        {/* Floating dotted pattern background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48L3N2Zz4=')]"></div>
        </div>

        {/* Animated floating circles */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-float1"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-50 rounded-full opacity-40 animate-float3"></div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
              What We Do
            </h1>
            <p className="text-xl text-blue-600 max-w-2xl mx-auto">
              Transforming lives through focused initiatives and community
              engagement
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Vision Section */}
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <Image
              src="https://i.postimg.cc/V6PHpJvv/452258414-868754105288875-5091726866360943540-n.jpg"
              alt="Our Vision"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Bondi Patshala Foundation, we envision a world where every
              individual has access to quality education, cultural enrichment,
              and opportunities to thrive. We dream of communities that
              celebrate diversity while fostering unity and sustainable
              development.
            </p>
            <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-500">
              <p className="italic text-blue-900">
                To create enlightened communities where education and cultural
                heritage become the foundation for a brighter future.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row-reverse items-center mb-20">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pl-12">
            <Image
              src="https://i.postimg.cc/V6PHpJvv/452258414-868754105288875-5091726866360943540-n.jpg"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to provide accessible education, preserve cultural
              heritage, and empower underprivileged communities through
              innovative programs and sustainable initiatives.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">
                    ✓
                  </div>
                </div>
                <p className="ml-3 text-gray-700">
                  Establish and support educational institutions in underserved
                  areas
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">
                    ✓
                  </div>
                </div>
                <p className="ml-3 text-gray-700">
                  Promote cultural exchange and preservation of traditional
                  knowledge
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800">
                    ✓
                  </div>
                </div>
                <p className="ml-3 text-gray-700">
                  Implement community development programs that create lasting
                  impact
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-blue-800 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We uphold the highest standards of honesty and transparency in all our actions.",
                icon: "🤝",
              },
              {
                title: "Compassion",
                description:
                  "We serve with empathy, understanding the unique needs of each community.",
                icon: "❤️",
              },
              {
                title: "Excellence",
                description:
                  "We strive for quality in every program and initiative we undertake.",
                icon: "🌟",
              },
              {
                title: "Inclusivity",
                description:
                  "We believe in equal opportunities for all, regardless of background or circumstance.",
                icon: "🌍",
              },
              {
                title: "Innovation",
                description:
                  "We embrace creative solutions to address complex social challenges.",
                icon: "💡",
              },
              {
                title: "Sustainability",
                description:
                  "We focus on long-term impact and environmentally conscious practices.",
                icon: "♻️",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-500"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs Section */}
        <div className="mb-20 bg-gradient-to-br from-blue-600 to-white overflow-hidden p-8 rounded-xl ">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Our Key Initiatives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <div
                key={index}
                className="relative h-80 w-full  overflow-hidden rounded-xl shadow-lg group"
              >
                <Image
                  src="https://i.postimg.cc/LsVNQ2YF/children-education-donation-campaign.jpg"
                  alt={program.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/40 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3
                    className="text-2xl font-bold mb-2 transform transition-all duration-500 
                                 group-hover:-translate-y-3 group-hover:text-3xl"
                  >
                    {program.title}
                  </h3>

                  <div
                    className="opacity-0 max-h-0 overflow-hidden transition-all duration-700 
                                  group-hover:opacity-100 group-hover:max-h-40"
                  >
                    <p className="text-blue-100 mb-4">{program.hoverText}</p>
                    <button
                      className="px-4 py-2 bg-white text-blue-800 rounded-lg 
                                     font-medium hover:bg-blue-100 transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">
            Join Our Movement
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your support can help us expand these programs and reach more
            communities in need
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg">
              Donate Now
            </button>
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-8 rounded-lg border-2 border-blue-600 transition duration-300 transform hover:scale-105 shadow-lg">
              Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoPage;
