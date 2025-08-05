import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTeams } from "../../features/teams/teamsSlice";

// Map màu cho từng team (bạn có thể mở rộng)
const teamColors = {
  "McLaren": "bg-orange-500",
  "Ferrari": "bg-red-700",
  "Mercedes": "bg-teal-400",
  "Red Bull Racing": "bg-blue-700",
  // Thêm các team khác nếu cần
};

function TeamCard() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams.data);
  const status = useSelector((state) => state.teams.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTeams());
    }
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error loading teams.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {teams.map((team) => (
        <div
          key={team.id}
          className={`rounded-xl shadow-lg p-6 flex flex-col justify-between min-h-[250px] ${teamColors[team.full_name] || "bg-gray-200"}`}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">{team.full_name}</h2>
            <img src={team.logo_url} alt={team.name} className="w-12 h-12 rounded-full bg-white p-2" />
          </div>
          <div className="flex flex-col md:flex-row items-center mt-4">
            <img src={team.car_image_url} alt={team.car_model} className="w-full md:w-2/3" />
            <div className="ml-0 md:ml-6 mt-4 md:mt-0">
              <p className="text-white font-semibold">Car Model: {team.car_model}</p>
              <p className="text-white font-semibold">Short Name: {team.short_name}</p>
              {/* Nếu có danh sách driver, render ở đây */}
              {team.drivers && (
                <div className="mt-2">
                  {team.drivers.map((driver, idx) => (
                    <span key={driver.id} className="block text-white">
                      {driver.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamCard;