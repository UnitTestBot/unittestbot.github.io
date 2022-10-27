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

// Sat solvers
import lowerBoundForKDnfResolutionPdf from "../pdf/sat-solving/lowerBoundForKDnfResolution.pdf";
import polynomialFormulations from "../pdf/sat-solving/polynomialFormulations.pdf";
import satEncodingsHardness from "../pdf/sat-solving/satEncodingsHardness.pdf";
// Symbolic execution
import nominalSubtyping from "../pdf/symbolic-execution/nominalSubtyping.pdf";
import hornClauses from "../pdf/symbolic-execution/hornClauses.pdf";
import programInvariants from "../pdf/symbolic-execution/programInvariants.pdf";
import relationalInvariants from "../pdf/symbolic-execution/relationalInvariants.pdf";
// Java
import iccq2022Pdf from "../pdf/java/ICCQ2022.pdf";
import sbst2021OverviewPdf from "../pdf/java/SBST2021_Tool_Competition_Overview.pdf";
import sbst2021Pdf from "../pdf/java/SBST2021_Tool_Competition.pdf";
import sbst2022OverviewPdf from "../pdf/java/SBST2022_Tool_Competition_Overview.pdf";
import sbst2022Pdf from "../pdf/java/SBST2022_Tool_Competition.pdf";
// Cpp
import kleeWorkshopPdf from "../pdf/cpp/KLEE_workshop2022_abstract.pdf";
import kleeWorkshopOverviewPdf from "../pdf/cpp/KLEE_workshop2022_poster.pdf";
// Program synthesis
import layoutSynthesisPdf from "../pdf/program-synthesis/layoutSynthesis.pdf";

const ResearchPage = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <SEO title="Research" />
      <div className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.categotyContainer}>
            <Heading className={styles.categotyTitle}>
              {t("research.satSolvingTechnologiesTitle")}
            </Heading>

            <div>
              <div className={styles.pdfContainer}>
                <PdfCard
                  conferenceTitle={t("research.preprint2022")}
                  articleTitle={t("research.satEncodingsHardnessArticleTitle")}
                  authors={t("research.satEncodingsHardnessAuthors")}
                  pdf={satEncodingsHardness}
                />
                <PdfCard
                  conferenceTitle={t("research.preprint2022")}
                  articleTitle={t(
                    "research.polynomialFormulationsArticleTitle"
                  )}
                  authors={t("research.polynomialFormulationsAuthors")}
                  pdf={polynomialFormulations}
                />
              </div>
              <div className={styles.pdfContainer}>
                <PdfCard
                  conferenceTitle={t("research.eccc2022")}
                  articleTitle={t(
                    "research.lowerBoundForKDnfResolutionArticleTitle"
                  )}
                  authors={t("research.lowerBoundForKDnfResolutionAuthors")}
                  pdf={lowerBoundForKDnfResolutionPdf}
                />
              </div>
            </div>
          </div>

          <div className={styles.categotyContainer}>
            <Heading className={styles.categotyTitle}>
              {t("research.symbolicExecutionTitle")}
            </Heading>

            <div className={styles.pdfContainer}>
              <PdfCard
                conferenceTitle={t("research.pldi2021")}
                articleTitle={t("research.programInvariantsArticleTitle")}
                authors={t("research.programInvariantsAuthors")}
                pdf={programInvariants}
              />
              <PdfCard
                conferenceTitle={t("research.ecoop2019")}
                articleTitle={t("research.nominalSubtypingArticleTitle")}
                authors={t("research.nominalSubtypingAuthors")}
                pdf={nominalSubtyping}
              />
            </div>

            <div className={styles.pdfContainer}>
              <PdfCard
                conferenceTitle={t("research.fmcad2019")}
                articleTitle={t("research.relationalInvariantsArticleTitle")}
                authors={t("research.relationalInvariantsAuthors")}
                pdf={relationalInvariants}
              />
              <PdfCard
                conferenceTitle={t("research.logicForProgrammingConference")}
                articleTitle={t("research.hornClausesArticleTitle")}
                authors={t("research.hornClausesArticle")}
                pdf={relationalInvariants}
              />
            </div>
          </div>

          <div className={styles.categotyContainer}>
            <Heading className={styles.categotyTitle}>
              {t("research.utbotJavaTitle")}
            </Heading>

            <div>
              <Text
                dangerouslySetInnerHTML={{
                  __html: t("research.sbst2022Title"),
                }}
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
              <div className={styles.pdfContainer}>
                <PdfCard
                  conferenceTitle={t("research.iccq2022Title")}
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
              <PdfCard
                articleTitle={t("research.kleeWorkshopPoster")}
                pdf={kleeWorkshopOverviewPdf}
              />
            </div>
          </div>

          <div className={styles.categotyContainer}>
            <Heading className={styles.categotyTitle}>
              {t("research.programSynthesisTitle")}
            </Heading>
            <div className={styles.pdfContainer}>
              <PdfCard
                conferenceTitle={t("research.singplan2022")}
                articleTitle={t("research.layoutSynthesisArticleTitle")}
                authors={t("research.layoutSynthesisArticleAuthors")}
                pdf={layoutSynthesisPdf}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withTrans(ResearchPage);
