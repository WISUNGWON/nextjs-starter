import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";
import { Typography } from "..";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #fff;
  overflow: auto;
`;

const Header = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  top: 0px;
  left: 0px;
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
  height: 200px;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.slategray10};
`;

export const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Header>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-right: 170px;
            flex-basis: 600px;
            height: 100%;
          `}
        >
          <Image src="/images/logo.svg" width="100%" height="100%" alt="logo" />
          <Typography.Text type="s1" color="slategray80">
            세션
          </Typography.Text>
          <Typography.Text type="s1" color="slategray80">
            커뮤니티
          </Typography.Text>
          <Typography.Text type="s1" color="slategray80">
            서비스 소개
          </Typography.Text>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-basis: 164px;
          `}
        >
          <Typography.Text type="s2" color="slategray60">
            세션
          </Typography.Text>
          <Typography.Text type="s2" color="slategray60">
            세션
          </Typography.Text>
        </div>
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Container>
  );
};
