const url = "http://localhost:3005/api/users";

export const getAll = async () => {
  const response = await fetch(url);
  const result = await response.json();

  return result.users;
};

export const getOne = async (userId) => {
  const response = await fetch(`${url}/${userId}`);
  const result = await response.json();

  return result.user;
};

export const create = async (userData) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const result = await response.json();
  return result.user;
};
