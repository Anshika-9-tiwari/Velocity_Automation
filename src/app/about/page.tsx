'use client';
import PageBanner from "@/components/pageBanner";

export default function About(){
  return (
   <>
      <div className="bg-white text-gray-800">
        <PageBanner
          title="About Us"
          imageUrl="https://i.pinimg.com/1200x/70/db/5nb/70db5b0204b2e82a045cbcd37933a06e.jpg"
          description=""
        />

        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Velocity Automation is a leading provider of industrial automation solutions, specializing in smart factory technologies and advanced manufacturing systems.
          </p>
          <p>
            Our mission is to empower businesses with innovative automation solutions that enhance productivity, quality, and efficiency in manufacturing processes.
          </p>  
          </div>
      </div>
    </>
  );
}