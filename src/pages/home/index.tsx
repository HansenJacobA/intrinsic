import Template from "../../components/template";
import Mood from "../../components/mood";
import GoalProgressCard from "../../components/goalProgressCard";
import { Flex } from "@chakra-ui/react";
import Greeting from "../../components/greeting";
import Head from "next/head";

export default function Home() {
  return (
    <Flex justify="center" align="center" direction="column" gap={5} mb={10}>
      <Template />
      <Greeting />
      <Mood />
      <GoalProgressCard />
      <Head>
        <title>Intrinsic</title>
        <meta property="og:title" content="Intrinsic" key="title" />
        <meta
          name="description"
          content="Turn your thoughts, moods, and daily goals into an organized library to facilitate structure, stability, organization, and peace.."
        />
        <meta
          name="keywords"
          content="personal development journal reflection progress goal mood"
        />
        <link rel="manifest" href="app.webmanifest" />
        <link rel="apple-touch-icon" href="/icons/icon-512.png" />
        <meta name="theme-color" content="#1A202C" />
      </Head>
    </Flex>
  );
}
