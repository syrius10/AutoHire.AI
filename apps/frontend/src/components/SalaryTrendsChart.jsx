import { Line } from "react-chartjs-2";

const SalaryTrendsChart = ({ salaryTrends }) => {
    const data = {
        labels: salaryTrends.map((item) => item.year),
        datasets: [
            {
                label: "Salary Trends",
                data: salaryTrends.map((item) => item.salary),
                borderColor: "blue",
                fill: false
            }
        ]
    };

    return <Line data={data} />;
};

export default SalaryTrendsChart;