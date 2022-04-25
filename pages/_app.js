import "../styles/styles.scss";

import TransitionLayout from "../components/TransitionLayout";

function MyApp({ Component, pageProps }) {
  return (
    <TransitionLayout>
      <Component {...pageProps} />
    </TransitionLayout>
  );
}

export default MyApp;
