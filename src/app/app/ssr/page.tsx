import { getData } from "@/utils";

export default async function Home() {
  const data = await getData(10000);

  return (
    <main>
      <p>data: {data.date}</p>
      <p>destinations: {data.destinations.join(", ")}</p>
    </main>
  );
}

export const dynamic = "force-dynamic";
