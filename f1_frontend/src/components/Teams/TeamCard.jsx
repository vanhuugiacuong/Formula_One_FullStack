import React, { useEffect, useState } from "react";

function TeamCard() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/teams")
      .then((res) => res.json())
      .then(setTeams);
  }, []);

  return (
    <div>
      {teams.map((team) => (
        <div key={team.id} style={{ border: "1px solid #ccc", margin: 16, padding: 16 }}>
          <img src={team.logo_url} alt={team.name} style={{ width: 100, height: 100 }} />
          <h2>{team.full_name}</h2>
          <p><strong>Short Name:</strong> {team.short_name}</p>
          <p><strong>Car Model:</strong> {team.car_model}</p>
          <img src={team.car_image_url} alt={team.car_model} style={{ width: 200, marginTop: 8 }} />
        </div>
      ))}
    </div>
  );
}

export default TeamCard;
