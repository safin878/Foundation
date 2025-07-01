"use client";

import Banner from "./../components/home/Banner";
import RecentActivities from "../components/home/RecentAct";
import Intro from "./../components/home/Intro";
import SponsorCard from "./../components/home/SponSec";
import OurFocus from "./../components/home/OurFocus";
import Onp from "./../components/home/Onp";
import { useActivities } from "../components/context/ActivitiesContext";
import SkeletonCard from "../components/SkeletonCard/SkeletonCard";

export default function Home() {
  const { activities, loading } = useActivities();
  console.log(activities);

  return (
    <>
      <Banner />
      <Intro />

      {/* Skeleton Loading with Grid Layout */}
      {loading ? (
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Array(6)
              .fill(0)
              .map((_, index) => (
                <SkeletonCard key={`skeleton-${index}`} />
              ))}
          </div>
        </div>
      ) : (
        <RecentActivities activities={activities} />
      )}

      <SponsorCard />
      <OurFocus />
      <Onp />
    </>
  );
}
