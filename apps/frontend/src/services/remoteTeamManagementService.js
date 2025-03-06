export const createTeam = async (teamName, manager) => {
    const response = await fetch("/api/remote-team/create", {
      method: "POST",
      body: JSON.stringify({ teamName, manager }),
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  };
  
  export const assignTask = async (teamName, task) => {
    const response = await fetch("/api/remote-team/assign-task", {
      method: "POST",
      body: JSON.stringify({ teamName, task }),
      headers: { "Content-Type": "application/json" },
    });
    return response.json();
  };
  
  export const trackProgress = async (teamName) => {
    const response = await fetch(`/api/remote-team/progress?teamName=${teamName}`);
    return response.json();
  };
  