import React from "react";

const BannerRoutes = () => {
  return (
    <div className="bg-red-600 rounded-xl mx-7 mt-10 mb-8 p-12 min-h-[400px] flex flex-col justify-end">
      <div className="max-w-xl">
        <h1
          className="text-white text-5xl md:text-6xl font-extrabold mb-6 drop-shadow"
          style={{ fontFamily: "'Racing Sans One', sans-serif" }}
        >
          2025 F1 DRIVERS
        </h1>
        <p className="text-white text-lg mb-8">
          Check out this season's official F1 line-up by following your
          favourite F1 drivers on and off the track.
        </p>
    <button className="bg-white text-black px-2 rounded-[6px] text-lg shadow hover:bg-gray-100 transition">
          Find out more
        </button>
      </div>
    </div>
  );
};

export default BannerRoutes;
