import { Typography } from "@components/ui";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import unsplash from "src/core/api/unsplash";

const SessionDetail = ({ photoUrl }: any) => {
  const router = useRouter();
  const { sessionId } = router.query;
  return (
    <>
      <Head>
        <title>Hello {sessionId}</title>
        <meta name="description" content="Hello!" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={photoUrl} />
      </Head>
      <Typography.Text>Hello!! {photoUrl}</Typography.Text>
      <Image src={photoUrl} height={200} width={200} alt="image" />
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

export async function getStaticProps() {
  const response = await unsplash.get("/photos/random");
  const photoUrl = response.data.urls.small ?? "";
  return {
    props: {
      photoUrl,
    },
  };
}

export default SessionDetail;
