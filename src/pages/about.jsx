import * as React from "react";
import cn from "classnames";
import { useTranslation } from "react-i18next";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import withTrans from "../i18n/withTrans";

import Text from "../components/text/text";

import * as styles from "./styles/about.module.css";

const AboutPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="About us Page" />
      <div className={styles.pageFlexContainer}>
        <Text
          className="text-left"
          dangerouslySetInnerHTML={{
            __html: `${t("aboutUs.whoWeAreText")}<br><br>`,
          }}
        />

        <Text
          className="text-left"
          dangerouslySetInnerHTML={{
            __html: t("aboutUs.whatWeDevelopCategoriesText"),
          }}
        />

        <ol className={cn(styles.technologiesList)}>
          <li>
            <details>
              <summary className={styles.summary}>
                {t("aboutUs.satSolvingTitle")}
              </summary>
              <br></br>
              <Text
                dangerouslySetInnerHTML={{
                  __html: t("aboutUs.satSolvingText"),
                }}
              />
              <ul className={styles.listDisc}>
                <li>
                  <Text
                    dangerouslySetInnerHTML={{ __html: t("aboutUs.kosat") }}
                  />
                </li>
                <li>
                  <Text
                    className={styles.summaryLastText}
                    dangerouslySetInnerHTML={{ __html: t("aboutUs.moreSat") }}
                  />
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <br></br>
              <summary className={styles.summary}>
                {t("aboutUs.smtlSolvingTitle")}
              </summary>
              <Text dangerouslySetInnerHTML={{ __html: t("aboutUs.smt") }} />
              <Text
                className={styles.summaryLastText}
                dangerouslySetInnerHTML={{ __html: t("aboutUs.ksmt") }}
              />
            </details>
          </li>

          <li>
            <details>
              <br></br>
              <summary className={styles.summary}>
                {t("aboutUs.symbolicExecutionTitle")}
              </summary>
              <Text
                dangerouslySetInnerHTML={{
                  __html: t("aboutUs.symbolicExecutionArea"),
                }}
              />
              <ul className={styles.listDisc}>
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
                  <Text
                    className={styles.summaryLastText}
                    dangerouslySetInnerHTML={{ __html: t("aboutUs.vSharp") }}
                  />
                </li>
              </ul>
            </details>
          </li>

          <li>
            <details>
              <br></br>
              <summary className={styles.summary}>
                {t("aboutUs.fuzzingTitle")}
              </summary>
              <Text
                className={styles.summaryLastText}
                dangerouslySetInnerHTML={{
                  __html: t("aboutUs.fuzzingWhatWeDo"),
                }}
              />
            </details>
          </li>

          <li>
            <details>
              <br></br>
              <summary className={styles.summary}>
                {t("aboutUs.programAnalysisTitle")}
              </summary>
              <Text
                className={styles.summaryLastText}
                dangerouslySetInnerHTML={{ __html: t("aboutUs.jcdb") }}
              />
            </details>
          </li>

          <li>
            <details>
              <br></br>
              <summary className={styles.summary}>
                {t("aboutUs.programSynthesisTitle")}
              </summary>
              <Text
                className={styles.summaryLastText}
                dangerouslySetInnerHTML={{
                  __html: t("aboutUs.programSynthesisDescription"),
                }}
              />
            </details>
          </li>
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
