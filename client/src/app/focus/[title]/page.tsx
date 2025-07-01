import { notFound } from "next/navigation";
import Image from "next/image";

interface FocusData {
  title: string;
  description: string;
  image?: string;
}

interface Props {
  params: {
    title: string;
  };
}

const getFocusDataByTitle = async (
  title: string
): Promise<FocusData | null> => {
  try {
    const encodedTitle = encodeURIComponent(title);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/focus/${encodedTitle}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.log("Failed to fetch. Status:", res.status);
      return null;
    }

    const data: FocusData = await res.json();
    return data;
  } catch (err) {
    console.log("Error Fetching Focus Data:", err);
    return null;
  }
};

export default async function FocusPage({ params }: Props) {
  const { title } = params;
  const data = await getFocusDataByTitle(title);

  if (!data) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjEwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSIzMCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIxLjUiIGZpbGw9IiMwMDc0Y2MiLz48L3N2Zz4=')]"></div>
        </div>

        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-float1"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-float2"></div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-800 mb-6 drop-shadow-md">
              {data.title}
            </h1>
            <div className="w-24 h-2 bg-blue-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-blue-600 font-medium">
              Transforming lives through focused initiatives
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
          {data.image && (
            <div className="relative h-80 w-full">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              {data.description.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* <div className="mt-12 flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
                Get Involved
              </button>
              <button className="px-8 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300">
                Learn More
              </button>
            </div> */}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">100+</div>
              <h3 className="text-xl font-semibold text-gray-800">
                Success Stories
              </h3>
              <p className="text-gray-600 mt-2">
                From our community initiatives
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
