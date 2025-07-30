import React from "react";
import { useState, useEffect } from "react";

const Teams = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/teams/Scuderia Ferrari") // Thay URL bằng endpoint backend của bạn
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Demo Fetch Backend</h1>
      {data ? (
        <div>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Logo:</strong>
            {data.logo_url && (
              <img
                src={data.logo_url}
                style={{ height: "auto", width: "120px" }}
              />
            )}
          </p>
          <p>
            {data.car_image_url && (
              <img
                src={data.car_image_url}
                style={{ height: "auto", width: "120px" }}
              />
            )}
          </p>
          <p>
            <strong>Drivers:</strong>
            {data.drivers && data.drivers.length > 0 ? (
              <ul>
                {data.drivers.map((driver) => (
                  <li key={driver.id} style={{ marginBottom: "16px" }}>
                    <div>
                      <strong>{driver.name}</strong>
                    </div>
                    {driver.image_url && (
                      <img
                        src={driver.image_url}
                        alt={driver.name}
                        style={{
                          width: "60px",
                          height: "auto",
                          marginRight: "8px",
                        }}
                      />
                    )}
                    {driver.flag_url && (
                      <img
                        src={driver.flag_url}
                        alt={driver.name + " flag"}
                        style={{
                          width: "32px",
                          height: "auto",
                          verticalAlign: "middle",
                        }}
                      />
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <span> No drivers found.</span>
            )}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Teams;
