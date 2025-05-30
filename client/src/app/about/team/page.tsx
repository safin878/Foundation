// "use client";
// import { FaLinkedin, FaTwitter, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const TeamSection = () => {
//   // Using your provided image URL for all team members as placeholder
//   const placeholderImage = "https://i.postimg.cc/wBzBz6tf/arahman159529.webp";

//   const teamMembers = [
//     {
//       id: 1,
//       name: "Dr. Nia Adebayo",
//       role: "Founder & Executive Director",
//       bio: "Education activist with 15+ years experience in African community development. Former UNESCO advisor.",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         website: "#",
//       },
//     },
//     {
//       id: 2,
//       name: "Kwame Asante",
//       role: "Programs Director",
//       bio: "Specializes in curriculum development for rural communities across 6 African nations.",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         website: "#",
//       },
//     },
//     {
//       id: 3,
//       name: "Amina Diallo",
//       role: "Community Outreach",
//       bio: "Leads our local partnership initiatives and parent engagement programs.",
//       social: {
//         linkedin: "#",
//         twitter: "#",
//         website: "#",
//       },
//     },
//   ];

//   const regionalLeads = [
//     {
//       id: 1,
//       name: "Tendai Moyo",
//       region: "Southern Africa",
//     },
//     {
//       id: 2,
//       name: "Jabari Okoro",
//       region: "East Africa",
//     },
//     {
//       id: 3,
//       name: "Zahara Nkosi",
//       region: "West Africa",
//     },
//   ];

//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   return (
//     <section className="relative py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
//       {/* Floating bubbles background */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 100 }}
//             animate={{
//               opacity: [0, 0.3, 0],
//               y: [100, -100],
//               x: Math.random() * 100 - 50,
//             }}
//             transition={{
//               duration: 15 + Math.random() * 10,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//             }}
//             className="absolute rounded-full bg-sky-200/30"
//             style={{
//               width: `${10 + Math.random() * 30}px`,
//               height: `${10 + Math.random() * 30}px`,
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={fadeIn}
//           className="text-center mb-16"
//         >
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="inline-flex items-center mb-6 px-6 py-2 bg-white rounded-full border border-sky-200 shadow-sm"
//           >
//             <div className="w-2 h-2 bg-sky-500 rounded-full mr-2 animate-pulse"></div>
//             <span className="text-sm font-medium text-sky-600 uppercase tracking-wider">
//               Our Dream Team
//             </span>
//           </motion.div>

//           <motion.h1
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-900 mb-6"
//             variants={fadeIn}
//           >
//             <span className="relative inline-block">
//               <span className="relative z-10">Meet Our Visionary</span>
//               <span className="absolute bottom-2 left-0 w-full h-3 bg-sky-200/60 z-0"></span>
//             </span>
//             <br />
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700">
//               Leadership
//             </span>
//           </motion.h1>

//           <motion.p
//             className="text-lg text-sky-700/90 max-w-3xl mx-auto leading-relaxed"
//             variants={fadeIn}
//           >
//             Passionate professionals driving educational transformation across
//             Africa with innovation and dedication.
//           </motion.p>
//         </motion.div>

//         {/* Core Team - New Card Design */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={staggerContainer}
//           viewport={{ once: true, margin: "-100px" }}
//           className="mb-24"
//         >
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {teamMembers.map((member) => (
//               <motion.div
//                 key={member.id}
//                 variants={fadeIn}
//                 whileHover={{ y: -5 }}
//                 className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100"
//               >
//                 <div className="relative h-64 w-full">
//                   <Image
//                     src={placeholderImage}
//                     alt={member.name}
//                     width={400}
//                     height={400}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent" />
//                 </div>

//                 <div className="p-6">
//                   <div className="flex justify-between items-start mb-4">
//                     <div>
//                       <h3 className="text-xl font-bold text-sky-900">
//                         {member.name}
//                       </h3>
//                       <p className="text-sky-600">{member.role}</p>
//                     </div>
//                     <div className="flex gap-2">
//                       <a
//                         href={member.social.linkedin}
//                         className="w-8 h-8 flex items-center justify-center bg-sky-100 text-sky-600 rounded-full hover:bg-sky-600 hover:text-white transition-all"
//                       >
//                         <FaLinkedin size={12} />
//                       </a>
//                       <a
//                         href={member.social.twitter}
//                         className="w-8 h-8 flex items-center justify-center bg-sky-100 text-sky-600 rounded-full hover:bg-sky-600 hover:text-white transition-all"
//                       >
//                         <FaTwitter size={12} />
//                       </a>
//                     </div>
//                   </div>
//                   <p className="text-sky-700 mb-4 leading-relaxed">
//                     {member.bio}
//                   </p>
//                   <a
//                     href={member.social.website}
//                     className="inline-flex items-center text-sm text-sky-600 hover:text-sky-700 font-medium transition-colors"
//                   >
//                     <FaGlobe className="mr-2" size={12} />
//                     Learn more
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Regional Leads - New Card Design */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           variants={fadeIn}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-sky-900 inline-block relative">
//               <span className="relative z-10 px-4 bg-white">
//                 Regional Leadership
//               </span>
//               <span className="absolute bottom-2 left-0 w-full h-2 bg-sky-200/60 z-0 rounded-full"></span>
//             </h2>
//             <p className="text-sky-600 mt-3 max-w-2xl mx-auto">
//               Our dedicated leaders bringing change to communities across Africa
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {regionalLeads.map((member) => (
//               <motion.div
//                 key={member.id}
//                 whileHover={{ scale: 1.02 }}
//                 className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-sky-100"
//               >
//                 <div className="relative h-56 w-full">
//                   <Image
//                     src={placeholderImage}
//                     alt={member.name}
//                     width={400}
//                     height={400}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-sky-900/40 via-transparent to-transparent" />
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-sky-900 mb-1">
//                     {member.name}
//                   </h3>
//                   <div className="flex items-center text-sky-600 text-sm mb-4">
//                     <FaMapMarkerAlt className="mr-2" size={12} />
//                     {member.region}
//                   </div>
//                   <button className="w-full py-2 px-4 bg-sky-100 hover:bg-sky-600 hover:text-white text-sky-700 rounded-lg transition-colors text-sm font-medium">
//                     Contact {member.name.split(" ")[0]}
//                   </button>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default TeamSection;

"use client";
import { FaLinkedin, FaTwitter, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const TeamSection = () => {
  const placeholderImage = "https://i.postimg.cc/wBzBz6tf/arahman159529.webp";

  const teamMembers = [
    {
      id: 1,
      name: "Dr. Nia Adebayo",
      role: "Founder & Executive Director",
      bio: "Education activist with 15+ years experience in African community development. Former UNESCO advisor.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 2,
      name: "Kwame Asante",
      role: "Programs Director",
      bio: "Specializes in curriculum development for rural communities across 6 African nations.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
    {
      id: 3,
      name: "Amina Diallo",
      role: "Community Outreach",
      bio: "Leads our local partnership initiatives and parent engagement programs.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#",
      },
    },
  ];

  const regionalLeads = [
    {
      id: 1,
      name: "Tendai Moyo",
      region: "Southern Africa",
    },
    {
      id: 2,
      name: "Jabari Okoro",
      region: "East Africa",
    },
    {
      id: 3,
      name: "Zahara Nkosi",
      region: "West Africa",
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
      {/* Floating abstract shapes background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.1, 0],
              scale: [0, 1.5],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute border-2 border-sky-200/30"
            style={{
              width: `${20 + Math.random() * 50}px`,
              height: `${20 + Math.random() * 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              borderRadius: `${Math.random() * 50}% ${Math.random() * 50}% ${
                Math.random() * 50
              }% ${Math.random() * 50}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-center mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center mb-6 px-6 py-2 bg-white rounded-full border border-sky-200 shadow-sm"
          >
            <div className="w-2 h-2 bg-sky-500 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-sky-600 uppercase tracking-wider">
              Our Dream Team
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky-900 mb-6"
            variants={fadeIn}
          >
            <span className="relative inline-block">
              <span className="relative z-10">Meet Our Visionary</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-sky-200/60 z-0"></span>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-sky-700">
              Leadership
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-sky-700/90 max-w-3xl mx-auto leading-relaxed"
            variants={fadeIn}
          >
            Passionate professionals driving educational transformation across
            Africa with innovation and dedication.
          </motion.p>
        </motion.div>

        {/* Core Team - Geometric Card Design */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Geometric background shape */}
                <div className="absolute -inset-4 bg-sky-100/50 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-500"></div>

                <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-sky-100 flex flex-col">
                  <div className="relative h-64 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-transparent to-transparent z-10"></div>
                    <Image
                      src={placeholderImage}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                 
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-sky-900">
                          {member.name}
                        </h3>
                        <p className="text-sky-600 font-medium">
                          {member.role}
                        </p>
                      </div>
                      {/* Social links with animated hover effect */}
                      <div className="flex gap-2">
                        <a
                          href={member.social.linkedin}
                          className="w-8 h-8 flex items-center justify-center bg-sky-100 text-sky-600 rounded-full hover:bg-sky-600 hover:text-white transition-all transform hover:-translate-y-1"
                        >
                          <FaLinkedin size={12} />
                        </a>
                        <a
                          href={member.social.twitter}
                          className="w-8 h-8 flex items-center justify-center bg-sky-100 text-sky-600 rounded-full hover:bg-sky-600 hover:text-white transition-all transform hover:-translate-y-1"
                        >
                          <FaTwitter size={12} />
                        </a>
                      </div>
                    </div>
                    <p className="text-sky-700 mb-6 leading-relaxed flex-1">
                      {member.bio}
                    </p>
                    <a
                      href={member.social.website}
                      className="inline-flex items-center text-sm text-sky-600 hover:text-sky-700 font-medium transition-colors group-hover:underline"
                    >
                      <FaGlobe className="mr-2" size={12} />
                      Learn more
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Regional Leads - Matching Core Team Style */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-sky-900 inline-block relative">
              <span className="relative z-10 px-4 bg-white">
                Regional Leadership
              </span>
              <span className="absolute bottom-2 left-0 w-full h-2 bg-sky-200/60 z-0 rounded-full"></span>
            </h2>
            <p className="text-sky-600 mt-3 max-w-2xl mx-auto">
              Our dedicated leaders bringing change to communities across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regionalLeads.map((member) => (
              <motion.div
                key={member.id}
                variants={fadeIn}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                {/* Geometric background shape */}
                <div className="absolute -inset-4 bg-sky-100/50 rounded-2xl transform -rotate-1 group-hover:rotate-2 transition-all duration-500"></div>

                <div className="relative h-full bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-sky-100 flex flex-col">
                  <div className="relative h-56 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-sky-900/20 via-transparent to-transparent z-10"></div>
                    <Image
                      src={placeholderImage}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Region badge */}
                    <div className="absolute bottom-4 left-4 bg-sky-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <FaMapMarkerAlt className="mr-1" size={10} />
                      {member.region}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-sky-900 mb-2">
                      {member.name}
                    </h3>

                    {/* Contact button */}
                    <div className="mt-auto pt-4">
                      <button className="w-full py-2 px-4 bg-sky-100 hover:bg-sky-600 hover:text-white text-sky-700 rounded-lg transition-colors text-sm font-medium flex items-center justify-center">
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        Contact Leader
                      </button>
                    </div>
                  </div>

                  
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Custom CSS for corner shape */}
      <style jsx>{`
        .clip-path-corner {
          clip-path: polygon(0 0, 100% 100%, 100% 0);
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
