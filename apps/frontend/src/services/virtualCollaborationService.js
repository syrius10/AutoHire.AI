export const createWorkspace = async (teamName) => {
  const response = await fetch("/api/virtual-collaboration/create", {
    method: "POST",
    body: JSON.stringify({ teamName }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

export const joinWorkspace = async (teamName, user) => {
  const response = await fetch("/api/virtual-collaboration/join", {
    method: "POST",
    body: JSON.stringify({ teamName, user }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

export const shareResource = async (teamName, resource) => {
  const response = await fetch("/api/virtual-collaboration/share", {
    method: "POST",
    body: JSON.stringify({ teamName, resource }),
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};
