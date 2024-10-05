import { Suspense } from "react";

import { ClientComponent } from "@/client-component";
import { ServerComponent } from "@/server-component";
import { getData } from "@/utils";

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <p>data: {data.date}</p>
      <p>destinations: {data.destinations.join(", ")}</p>
      <Suspense fallback={<Loading />}>
        <ServerComponent delay={5000} />
      </Suspense>
      <ClientComponent />
    </main>
  );
}

const Loading = () => <div>loading...</div>;

export const dynamic = "force-dynamic";
