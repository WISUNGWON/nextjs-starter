import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  padding: 4rem 20px;
  min-height: 100vh;
`;

export const StoryContainer = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const Title = styled.div`
  font-family: "Nunito Sans", -apple-system, ".SFNSText-Regular",
    "San Francisco", BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  color: #333;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 40px;
`;

export const Space = styled.div`
  margin-top: 28px;
`;

interface Props {
  title: string;
  children: React.ReactChild;
}

export const StorybookTemplate = ({ title, children }: Props) => {
  return (
    <Layout>
      <StoryContainer>
        <Title>{title}</Title>
        {children}
      </StoryContainer>
    </Layout>
  );
};
