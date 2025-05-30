import Link from "next/link";
import { FC, ReactNode, useEffect, useState } from "react";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import {
  FaBook,
  FaUsers,
  FaFemale,
  FaLeaf,
  FaGavel,
  FaArrowRight,
} from "react-icons/fa";
import axios from "axios";

interface FocusArea {
  title: string;
  description: string;
  icon: string; // e.g., 'FaBook'
}

// Mapping string to actual icon component
const iconMap: Record<string, ReactNode> = {
  FaBook: <FaBook />,
  FaUsers: <FaUsers />,
  FaFemale: <FaFemale />,
  FaLeaf: <FaLeaf />,
  FaGavel: <FaGavel />,
};

const FocusAreas: FC = () => {
  const [focusAreas, setFocusAreas] = useState<FocusArea[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFocusAreas = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/focus`
        );
        setFocusAreas(response.data);
      } catch (err: any) {
        setError("Failed to load focus areas.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFocusAreas();
  }, []);

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Static Card */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-xl shadow-xl p-6 flex flex-col justify-between relative overflow-hidden">
          <div>
            <h2 className="text-3xl font-bold mb-2">Our Involment Areas</h2>
            <p className="text-sm opacity-90">
              Explore the impact areas we are passionate about.
            </p>
          </div>
          <div className="mt-6 text-right">
            <FaArrowRight className="text-2xl inline-block animate-pulse" />
          </div>
        </div>

        {/* Dynamic Cards */}
        {loading ? (
          Array(5)
            .fill(0)
            .map((_, index) => <SkeletonCard key={`skeleton-focus-${index}`} />)
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          focusAreas.map((area) => (
            <Link key={area.title} href={`/focus/${area.title}`} passHref>
              <div className="relative group rounded-xl border border-blue-100 border-dotted bg-white shadow-md overflow-hidden transition-shadow hover:shadow-xl">
                {/* Sliding blue overlay */}
                <div className="absolute inset-0 bg-blue-400 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0" />

                {/* Inner container */}
                <div className="relative z-10 m-4 h-[calc(100%-2rem)] box-border rounded-lg border-[1.5px] border-dotted border-gray-700 p-4 flex flex-col text-gray-800 group-hover:text-white transition-colors duration-300 hover:border-black">
                  <div className="text-4xl mb-4 text-gray-700 group-hover:text-white transition-colors">
                    {iconMap[area.icon] || <FaBook />}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{area.title}</h3>
                  <p className="text-sm flex-grow">{area.description}</p>
                  <button className="mt-4 relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-blue-600 group w-40">
                    <span className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out transform translate-x-1 translate-y-1 bg-blue-200 group-hover:-translate-x-0 group-hover:-translate-y-0 rounded-full"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-blue-500 rounded-full"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Learn More
                      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default FocusAreas;
