import * as React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout";
import SEO from "../components/seo";
import withTrans from "../i18n/withTrans";

import Text from "../components/text";

import * as styles from "./styles/about.module.css";

const AboutPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="About us" />
      <div className={styles.pageFlexContainer}>
        <Text
          className="text-left"
          dangerouslySetInnerHTML={{ __html: t("aboutUs.whoWeAreText") }}
        />
        <ul className={styles.list}>
          <li>
            <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.spbu") }} />
          </li>
          <li>
            <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.hse") }} />
          </li>
          <li>
            <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.itmo") }} />
          </li>
          <li>
            <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.spbpu") }} />
          </li>
        </ul>

        <Text
          className="text-left"
          dangerouslySetInnerHTML={{
            __html: t("aboutUs.whatWeDevelopCategoriesText"),
          }}
        />

        <ol className={styles.list}>
          <li>
            <Text
              className={styles.heading}
              dangerouslySetInnerHTML={{ __html: t("aboutUs.satSolvingTitle") }}
            />
          </li>
          <Text
            dangerouslySetInnerHTML={{ __html: t("aboutUs.satSolvingText") }}
          />
          <ul className={styles.list}>
            <li>
              <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.kosat") }} />
            </li>
            <li>
              <Text
                dangerouslySetInnerHTML={{ __html: t("aboutUs.moreSat") }}
              />
            </li>
          </ul>

          <li>
            <Text
              className={styles.heading}
              dangerouslySetInnerHTML={{
                __html: t("aboutUs.smtlSolvingTitle"),
              }}
            />
          </li>
          <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.smt") }} />
          <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.ksmt") }} />

          <li>
            <Text
              className={styles.heading}
              dangerouslySetInnerHTML={{
                __html: t("aboutUs.symbolicExecutionTitle"),
              }}
            />
          </li>
          <Text
            dangerouslySetInnerHTML={{
              __html: t("aboutUs.symbolicExecutionArea"),
            }}
          />
          <ul className={styles.list}>
            <li>
              <Text
                dangerouslySetInnerHTML={{
                  __html: t("aboutUs.utbotJavaSymbolicEngine"),
                }}
              />
            </li>
            <li>
              <Text
                dangerouslySetInnerHTML={{
                  __html: t("aboutUs.symbolicEngineKlee"),
                }}
              />
            </li>
            <li>
              <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.vSharp") }} />
            </li>
          </ul>

          <li>
            <Text
              className={styles.heading}
              dangerouslySetInnerHTML={{ __html: t("aboutUs.fuzzingTitle") }}
            />
          </li>
          <Text
            dangerouslySetInnerHTML={{ __html: t("aboutUs.fuzzingWhatWeDo") }}
          />
          <li>
            <Text
              className={styles.heading}
              dangerouslySetInnerHTML={{
                __html: t("aboutUs.programAnalysisTitle"),
              }}
            />
          </li>
          <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.jcdb") }} />
          <li>
            <Text
              className={styles.heading}
              dangerouslySetInnerHTML={{
                __html: t("aboutUs.programSynthesisTitle"),
              }}
            />
          </li>
          <Text
            dangerouslySetInnerHTML={{
              __html: t("aboutUs.programSynthesisDescription"),
            }}
          />
        </ol>

        <Text
          className="text-left"
          dangerouslySetInnerHTML={{ __html: t("aboutUs.whatWeDevelopText") }}
        />
        <Text
          className="text-left"
          dangerouslySetInnerHTML={{ __html: t("aboutUs.visitGitHubText") }}
        />
      </div>
    </Layout>
  );
};

export default withTrans(AboutPage);
