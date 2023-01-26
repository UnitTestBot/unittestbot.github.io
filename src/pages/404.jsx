import * as React from "react";
import { Container } from "react-bootstrap";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import "./styles/page.css";

const NotFoundPage = () => (
  <Layout>
    <Container className="pageContainer">
      <SEO title="404: Not found" />
      <h1>404: Not Found</h1>
      <p>The route doesn&#39;t exist...</p>
    </Container>
  </Layout>
);

export default NotFoundPage;
