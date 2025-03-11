import axios from "axios";

const testAPI = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    console.log("API Test Successful:", response.data);
  } catch (error) {
    console.error("Error with API request:", error);
  }
};

testAPI();
