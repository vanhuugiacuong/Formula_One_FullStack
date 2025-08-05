import React from "react";
import TeamCard from "../components/Teams/TeamCard";

const Teams = () => {
  return (
    <div className="mx-auto px-5">
      {/* Header section */}
      <div className="mt-10 mb-8">
        <h1
          className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          style={{ fontFamily: "'Racing Sans One', sans-serif" }}
        >
          F1 TEAMS 2025
        </h1>
        <p className="text-lg text-gray-400">
          Find the current Formula 1 teams for the 2025 season
        </p>
      </div>
      <TeamCard />
    </div>
  );
};

export default Teams;
