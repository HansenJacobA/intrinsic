import { useEffect } from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import Title from "../title";
import NavBar from "../navBar";
import seedUp from "../../utilities/seedUp";

export default function Template() {
  useEffect(() => {
    seedUp();
  }, []);

  return (
    <Flex justify="center" align="center" direction="column">
      <Head>
        <title>Intr🙏nsic</title>
        <meta property="og:title" content="Intr🙏nsic" key="title" />
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

        {/* Removes auto zoom in input fields */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
      </Head>
      <Title />
      <NavBar />
    </Flex>
  );
}
