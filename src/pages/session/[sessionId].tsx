import { Typography } from "@components/ui";
import { useRouter } from "next/router";

const SessionDetail = () => {
  const router = useRouter();
  const { sessionId } = router.query;

  return <Typography.Text>Hello {sessionId}</Typography.Text>;
};

export default SessionDetail;
