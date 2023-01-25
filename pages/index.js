import Head from "next/head";
import {
  Features,
  Faq,
  Hero,
  JoinCommunity,
  WhySection,
  TechStack,
  DeveloperResources,
  ProductSection,
  Container,
  BackedBy,
} from "../src/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Safient- Non-custodial secret Recovery and Inheritance Protocol
        </title>
        <meta name="description" content="Safient Protocol official website" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <Hero />
      <Container>
        <WhySection />
        <Features />
        <ProductSection />
        <BackedBy />
        <DeveloperResources />
        <TechStack />
        <Faq />
        <JoinCommunity />
      </Container>
    </>
  );
}
