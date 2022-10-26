/** @jsx jsx */
import { useRef, useState } from "react";
import { jsx, Layout as BaseLayout, Main } from "theme-ui";
import { Global } from "@emotion/core";

import { Header } from "gatsby-theme-docz/src/components/Header";
import { Sidebar } from "gatsby-theme-docz/src/components/Sidebar";
import { MainContainer } from "gatsby-theme-docz/src/components/MainContainer";
import global from "~theme/global";
import * as styles from "./styles";

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const nav = useRef();

  return (
    <BaseLayout sx={{ "& > div": { flex: "1 1 auto" } }} data-testid="layout">
      <Global styles={global} />
      <Main sx={styles.main}>
        <Header onOpen={() => setOpen(s => !s)} />
        <div sx={styles.wrapper}>
          <Sidebar
            ref={nav}
            open={open}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />
          <div
            className="contentMainWrapper"
            style={{
              width: "100%",
              overflow: "auto",
              height: "calc(100vh - 56px)",
            }}
          >
            <MainContainer data-testid="main-container">
              {children}
            </MainContainer>
          </div>
        </div>
      </Main>
    </BaseLayout>
  );
};
