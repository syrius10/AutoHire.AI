export const createWorkspace = async (teamName) => {
  return { status: "success", message: `Workspace '${teamName}' created` };
};

export const joinWorkspace = async (teamName, user) => {
  return { status: "success", message: `${user} joined '${teamName}'` };
};

export const shareResource = async (teamName, resource) => {
  return { status: "success", message: `Resource shared in '${teamName}'` };
};
