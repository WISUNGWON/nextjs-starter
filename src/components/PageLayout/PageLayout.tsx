import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fff;
  overflow: auto;
`;

const Header = styled.header`
  position: fixed;
  width: 100%;
  min-height: 80px;
  top: 0px;
  left: 0px;
  padding: 0px 32px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(243 241 241) 0px 0px 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.slategray20};
  z-index: 100;
`;

const Content = styled.div`
  margin-top: 80px;
  width: 100%;
`;

const Footer = styled.footer`
  width: 100%;
  min-height: 200px;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.slategray10};
`;

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header>Header</Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Container>
  );
};
