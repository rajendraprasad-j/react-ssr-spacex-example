import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <Helmet>
      <title>React SSR Boilerplate</title>

      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="spaceX"
        content=""
      />
    </Helmet>
  );
};

export default Head;
