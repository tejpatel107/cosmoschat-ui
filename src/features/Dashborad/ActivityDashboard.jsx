import React, { useEffect } from "react";
import { stats } from "../../api/Sessions.js";
import BarGraph from "./BarGraph.jsx";

export default function ActivityDashboard() {

    return (
        <div style={{ height: "90vh" }}>
            <BarGraph data={stats} />
        </div>
    )
};