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

export default SessionDetail;
