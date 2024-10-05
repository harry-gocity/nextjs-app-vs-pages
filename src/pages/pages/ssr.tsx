import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { getData } from "@/utils";

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const data = await getData();
  // Pass data to the page via props
  return { props: { data } };
}) satisfies GetServerSideProps<{
  data: Awaited<ReturnType<typeof getData>>;
}>;

export default function Page({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <main>
      <p>data: {data.date}</p>
      <p>destinations: {data.destinations.join(", ")}</p>
    </main>
  );
}
