import { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { fetchJobs, applyForJob } from "../services/mobileJobService";

const AutoHireMobile = () => {
  const [jobs, setJobs] = useState([]);
  const userId = "123"; // Replace with real user authentication

  useEffect(() => {
    fetchJobs().then(setJobs);
  }, []);

  const handleApply = async (jobId) => {
    const response = await applyForJob(userId, jobId);
    alert(response.message || "Application submitted.");
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>📱 AutoHire Mobile</Text>
      <FlatList
        data={jobs}
        keyExtractor={(job) => job.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Button title="Apply" onPress={() => handleApply(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

export default AutoHireMobile;