import axios from "axios";

const COURSERA_API = "https://api.coursera.org/api/courses.v1";
const UDEMY_API = "https://wwww.udemy.com/api-2.0/courses";

export const getTrainingRecommendations = async (missingSkills) => {
  try {
    const courseraCourses = await axios.get(COURSERA_API, {
      params: { query: missingSkills.join(",") },
    });
    const udemyCourses = await axios.get(UDEMY_API, {
      params: { search: missingSkills.join(",") },
    });

    return {
      coursera: courseraCourses.data.elements.slice(0, 3),
      udemy: udemyCourses.data.results.slice(0, 3),
    };
  } catch (error) {
    console.error("Error fetching training recommendations: ", error);
    return { coursera: [], udemy: [] };
  }
};
