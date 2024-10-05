export const getData = async (delay = 1000) => {
  await new Promise((r) => setTimeout(r, delay));

  return {
    date: new Date().toISOString(),
    destinations: ["london", "paris"],
  };
};
