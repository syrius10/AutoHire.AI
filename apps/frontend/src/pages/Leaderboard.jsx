import { useEffect, useState } from "react";
import { fetchLeaderboard } from "../services/leaderboardService";

const Leaderboard = () => {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        fetchLeaderboard().then(setLeaders);
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">🏆 Leaderboard</h2>
            <ol className="mt-4">
                {leaders.map((user, index) => (
                    <li key={index} className="border p-2 mt-2 rounded">
                        {index + 1}. {user.name} - {user.score} pts
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Leaderboard;