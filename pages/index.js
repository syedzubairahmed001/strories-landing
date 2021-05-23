import Head from "next/head";
import Home from "../containers/Home/Home.container";
import Layout from "../hoc/Layout/Layout.hoc";

export default function Main() {
  return (
    <div className="container">
      <Head>
        <title>Browser Stories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main>
          <Home />
        </main>
      </Layout>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
