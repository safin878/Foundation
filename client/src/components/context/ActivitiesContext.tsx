"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Define the type
export interface Activity {
  _id: string;
  id: number;
  type: string;
  date: string;
  title: string;
  imageUrl: string;
  slug: string;
}

interface ActivitiesContextType {
  activities: Activity[];
  loading: boolean;
}

const ActivitiesContext = createContext<ActivitiesContextType | undefined>(
  undefined
);

export const ActivitiesProvider = ({ children }: { children: ReactNode }) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/activities`
        );
        const data = await res.json();

        const formattedData = data.map((item: any) => ({
          id: item._id,
          slug: item.slug,
          // nested card data
          type: item.card?.type || "",
          date: item.card?.date || "",
          title: item.card?.title || "",
          imageUrl: item.card?.imageUrl || "",
        }));

        setActivities(formattedData);
      } catch (error) {
        console.error("Failed to fetch activities", error);
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, []);

  return (
    <ActivitiesContext.Provider value={{ activities, loading }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export const useActivities = () => {
  const context = useContext(ActivitiesContext);
  if (context === undefined) {
    throw new Error("useActivities must be used within an ActivitiesProvider");
  }
  return context;
};
