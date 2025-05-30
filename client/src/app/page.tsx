 "use client";

import Banner from "./../components/home/Banner";
import RecentActivities from "../components/home/RecentAct";
import Intro from "./../components/home/Intro";
import SponsorCard from "./../components/home/SponSec";
import OurFocus from "./../components/home/OurFocus";
import Onp from "./../components/home/Onp";
import { useActivities } from "../components/context/ActivitiesContext";


 
export default function Home() {
  const { activities, loading } = useActivities(); // 👈 using context here
  return (
    <>
      <Banner></Banner>
      <Intro />
      {loading ? (
        <div className="text-center py-10">Loading...</div>
      ) : (
        <RecentActivities activities={activities} />
      )}
      <SponsorCard></SponsorCard>
      <OurFocus></OurFocus>
      <Onp />
    </>
  );
}
