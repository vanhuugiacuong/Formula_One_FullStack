import React from "react";
import { useState, useEffect } from "react";
import Headers from "../components/Header"; // Assuming you have a Header component

const Teams = () => {

    return (
        <div>
            <Headers />
            <h1>Teams Page</h1>
            {/* Here you can add components like TeamsList, TeamCard, etc. */}
        </div>
    );
};

export default Teams;
