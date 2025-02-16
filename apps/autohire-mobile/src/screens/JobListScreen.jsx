import { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { fetchJobs, applyForJob } from "../services/jobService";

const JobListScreen = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs().then(setJobs);
    }, []);

    const handleApply = async (jobId) => {
        await applyForJob(jobId);
        alert("Application submitted!");
    };

    return (
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Available Jobs</Text>
            <FlatList
                data={jobs}
                keyExtractor={(job) => job.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ fontSize: 18 }}>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Button title="Apply" onPress={() => handleApply(item.id)} />
                    </View>
                )}
            />
        </View>
    );
};

export default JobListScreen;