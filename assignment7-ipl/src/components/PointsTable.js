import React, { useEffect, useState } from "react";

function PointsTable() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        const sortedByNRR = data.sort((a, b) => parseFloat(a.NRR) - parseFloat(b.NRR));
        setTeams(sortedByNRR);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading IPL 2025 points...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table className="points-table">
      <thead>
        <tr>
          <th>Position</th>
          <th>Team</th>
          <th>Matches</th>
          <th>Won</th>
          <th>Lost</th>
          <th>Tied/No Result</th>
          <th>NRR</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, index) => (
          <tr key={team.id}>
            <td>{index + 1}</td>
            <td>{team.Team}</td>
            <td>{team.Matches}</td>
            <td>{team.Won}</td>
            <td>{team.Lost}</td>
            <td>{team.Tied}</td>
            <td>{team.NRR}</td>
            <td>{team.Points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PointsTable;