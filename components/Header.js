import React from "react";
import Head from "next/head";

function MainHeader({ title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Environment and Coffee Forest Forum"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}

export default MainHeader;
