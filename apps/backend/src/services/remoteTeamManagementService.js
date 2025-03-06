export const createTeam = async (teamName, manager) => {
    return { status: "success", message: `Team '${teamName}' created by ${manager}` };
  };
  
  export const assignTask = async (teamName, task, priority) => {
    return { status: "success", message: `Task '${task}' assigned to team '${teamName}' with priority '${priority}'` };
  };
  
  export const trackProgress = async (teamName) => {
    return { status: "success", tasks: [`Task 1 - In Progress`, `Task 2 - Completed`] };
  };
  