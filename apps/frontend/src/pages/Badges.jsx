const Badges = ({ badges }) => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">Your Achievements</h2>
            <ul className="mt-4">
                {badges.map((badge, index) => (
                    <li key={index} className="border p-2 mt-2 rounded bg-yellow-100">
                        🏆 {badge}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Badges;