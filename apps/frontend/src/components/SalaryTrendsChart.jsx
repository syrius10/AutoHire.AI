import { Line } from "react-chartjs-2";
import PropTypes from 'prop-types';

const SalaryTrendsChart = ({ salaryTrends }) => {
  const data = {
    labels: salaryTrends.map((item) => item.year),
    datasets: [
      {
        label: "Salary Trends",
        data: salaryTrends.map((item) => item.salary),
        borderColor: "blue",
        fill: false,
      },
    ],
  };

  return <Line data={data} />;
};
SalaryTrendsChart.propTypes = {
  salaryTrends: PropTypes.arrayOf(
    PropTypes.shape({
      year: PropTypes.number.isRequired,
      salary: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SalaryTrendsChart;
