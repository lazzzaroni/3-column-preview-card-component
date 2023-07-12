import Head from "next/head";

import Container from "@/components/Container";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor | Newsletter sign-up component</title>
        <meta
          name="description"
          content="Frontend Mentor | Newsletter sign-up component"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon.ico"
          // href="/3-column-preview-card-component/images/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
          // href="/3-column-preview-card-component/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
          // href="/3-column-preview-card-component/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
          // href="/3-column-preview-card-component/images/favicon-16x16.png"
        />
      </Head>
      <Container />
    </>
  );
}
