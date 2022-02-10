import "../styles/reset.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { PageLayout } from "@components/ui/PageLayout/PageLayout";
import { ThemeProvider } from "@emotion/react";
import { theme } from "@styles/themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ThemeProvider>
  );
}

export default MyApp;
