"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Define the type
interface Activity {
  id: number;
  type: string;
  date: string;
  title: string;
  imageUrl: string;
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
        const res = await fetch("http://localhost:5000/api/users");
        const data = await res.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const formattedData = data.map((item: any) => ({
          id: item._id,
          type: item.type,
          date: item.date,
          title: item.title,
          imageUrl: item.imageUrl,
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
