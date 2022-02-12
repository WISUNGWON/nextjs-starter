import { Typography } from "@components/ui";
import Head from "next/head";
import { useRouter } from "next/router";

const SessionDetail = () => {
  const router = useRouter();
  const { sessionId } = router.query;
  return (
    <>
      <Head>
        <title>Hello {sessionId}</title>
        <meta name="description" content="Hello!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography.Text>Hello</Typography.Text>
    </>
  );
};

export async function getStaticPaths() {
  const ids = ["1", "2", "3", "4", "5"];
  const paths = ids.map((id) => ({
    params: { sessionId: id },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default SessionDetail;
