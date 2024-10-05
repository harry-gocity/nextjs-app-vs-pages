import { getData } from "@/utils";

export const ServerComponent = async ({ delay = 1000 }) => {
  const data = await getData(delay);

  return (
    <>
      <p>data: {data.date}</p>
      <p>destinations: {data.destinations.join(", ")}</p>
    </>
  );
};
