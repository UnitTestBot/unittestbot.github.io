import * as React from "react";
import cn from "classnames";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useTranslation } from "react-i18next";
import withTrans from "../i18n/withTrans";

import Heading from "../components/heading";
import Text from "../components/text";
import PdfCard from "../components/pdf-card";
import PdfContainer from "../components/pdf-container";

import * as styles from "./styles/research.module.css";

import iccq2022Pdf from "../pdf/java/ICCQ2022.pdf";
import sbst2021OverviewPdf from "../pdf/java/SBST2021_Tool_Competition_Overview.pdf";
import sbst2021Pdf from "../pdf/java/SBST2021_Tool_Competition.pdf";
import sbst2022OverviewPdf from "../pdf/java/SBST2022_Tool_Competition_Overview.pdf";
import sbst2022Pdf from "../pdf/java/SBST2022_Tool_Competition.pdf";
import kleeWorkshopPdf from "../pdf/cpp/KLEE_workshop2022_abstract.pdf";
import kleeWorkshopOverviewPdf from "../pdf/cpp/KLEE_workshop2022_poster.pdf";

const ResearchPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="Research" />
      <div className={styles.main}>
        <div className={styles.categotyContainer}>
          <Heading className={styles.categotyTitle}>
            {t("research.utbotJavaTitle")}
          </Heading>

          <div>
            <Text
              dangerouslySetInnerHTML={{ __html: t("research.sbst2022Title") }}
            />
            <div className={styles.pdfContainer}>
              <PdfCard
                authors={t("research.sbst2022ArticlesAuthors")}
                articleTitle={t("research.sbst2022ArticleTitle")}
                pdf={sbst2022Pdf}
              />
              <PdfCard
                articleTitle={t("research.sbst2022ToolCompetitionTitle")}
                authors={t("research.generalOverview")}
                pdf={sbst2022OverviewPdf}
              />
            </div>
          </div>

          <div>
            <Text
              dangerouslySetInnerHTML={{
                __html: t("research.iccq2022Title"),
              }}
            />
            <div className={styles.pdfContainer}>
              <PdfCard
                articleTitle={t("research.iccq2022ArticleTitle")}
                authors={t("research.iccq2022ArticleAuthors")}
                pdf={iccq2022Pdf}
              />
            </div>
          </div>

          <div>
            <Text
              dangerouslySetInnerHTML={{
                __html: t("research.sbst2021Title"),
              }}
            />
            <div className={styles.pdfContainer}>
              <PdfCard
                articleTitle={t("research.sbst2021ArticleTitle")}
                authors={t("research.sbst2021ArticleAuthors")}
                pdf={sbst2021Pdf}
              />
              <PdfCard
                articleTitle={t("research.sbst2021ToolCompetitionTitle")}
                authors={t("research.generalOverview")}
                pdf={sbst2021OverviewPdf}
              />
            </div>
          </div>
        </div>

        <div className={styles.categotyContainer}>
          <Heading className={styles.categotyTitle}>
            {t("research.utbotCppTitle")}
          </Heading>
          <Text
            dangerouslySetInnerHTML={{
              __html: t("research.kleeWorkshop2022Title"),
            }}
          />
          <div className={styles.pdfContainer}>
            <PdfCard
              articleTitle={t("research.kleeWorkshop2022ArticleTitle")}
              authors={t("research.kleeWorkshop2022ArticleAuthors")}
              pdf={kleeWorkshopPdf}
            />
            <PdfCard pdf={kleeWorkshopOverviewPdf} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withTrans(ResearchPage);
