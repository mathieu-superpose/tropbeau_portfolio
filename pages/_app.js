import "../styles/styles.scss";

import Layout from "../components/layout/Layout";
import TransitionLayout from "../components/layout/TransitionLayout";

function MyApp({ Component, pageProps }) {
  return (
    <TransitionLayout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TransitionLayout>
  );
}

export default MyApp;
