import * as React from "react";
import cn from "classnames";
import { Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout/layout";
import withTrans from "../i18n/withTrans";

import * as styles from "./styles/index.module.css";
import * as stylesDotNet from "./styles/dotnet.module.css";

import Heading from "../components/heading/heading";
import Text from "../components/text/text";
import SEO from "../components/seo/seo";
import ButtonGroup from "../components/buttonGroup/buttonGroup";

import arrayUtilsGif from "../gifs/csharp/array_utils_1.gif";
import autosaveServiceGif from "../gifs/csharp/autosave_service_2.gif";
import dotnet6Image from "../images/csharp/dotnet6_3.png";
import mocksImage from "../images/csharp/mocks_4.png";
import ExampleCard from "../components/cards/exampleCard/ExampleCard";

const DotNetPage = ({ location }) => {
  const { t, i18n } = useTranslation();

  return (
    <Layout location={location}>
      <SEO title=".NET Page" />
      <div className={styles.gradient} />
      <Container className={styles.topContainer}>
        <Heading className={styles.topHeading}>
          {t("dotnetHome.unitTestingAutomatedTitle")}
        </Heading>

        <Text
          className={cn("text-center", styles.topText, stylesDotNet.info)}
          dangerouslySetInnerHTML={{
            __html: t("dotnetHome.unitTestingAutomatedText"),
          }}
        />

        <ButtonGroup
          tryOnlineLink="https://www.utbot.org/demo?language=CSharp&source=public%20static%20class%20Solution%20%7B%0A%20%20public%20static%20int%20Max(int%20a%2C%20int%20b)%20%7B%0A%20%20%20%20if%20(a%20%3E%20b)%20%7B%0A%20%20%20%20%20%20return%20a%3B%0A%20%20%20%20%7D%0A%0A%20%20return%20b%3B%0A%20%20%7D%0A%7D"
          demoVideoLink="https://www.youtube.com/watch?v=6BT5m3PCY2Y"
          gitHubLink="https://github.com/VSharp-team/VSharp"
        />
      </Container>

      <Container className={styles.examples}>
        <ExampleCard
          heading={t("dotnetHome.minimizationTitle")}
          text={t("dotnetHome.minimizationText")}
          gifSrc={arrayUtilsGif}
          gifAlt="Array utils example"
          gifPlacement="right"
        />

        <ExampleCard
          heading={t("dotnetHome.guaranteedByMathTitle")}
          text={t("dotnetHome.guaranteedByMathText")}
          gifSrc={autosaveServiceGif}
          gifAlt="Autosave service example"
          gifPlacement="left"
          textWrapperClassName="cardFlexStart5rem"
        />

        <ExampleCard
          heading={t("dotnetHome.supportsDotNetTitle")}
          text={t("dotnetHome.supportsDotNetText")}
          gifSrc={dotnet6Image}
          gifAlt="Example with target .NET 6"
          gifPlacement="right"
        />

        <ExampleCard
          heading={t("dotnetHome.mockingTitle")}
          text={t("dotnetHome.mockingText")}
          gifSrc={mocksImage}
          gifAlt="Mocks example"
          gifPlacement="left"
        />
      </Container>

      <Container className={stylesDotNet.notes}>
        <Text
          dangerouslySetInnerHTML={{
            __html: t("dotnetHome.needDotNet6Installed"),
          }}
          size="sm"
          className={stylesDotNet.note}
        />
      </Container>
    </Layout>
  );
};

export default withTrans(DotNetPage);
