import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function NavBar() {
  return (
    <Flex
      w="100vw"
      align="center"
      fontSize={16}
      justify="center"
      gap={10}
      p={3}
      bgColor="#E6DDCB"
      color="black"
      mb={5}
    >
      <NextLink href="/history" passHref>
        <Link
          textDecoration="none"
          _hover={{
            textDecoration: "underline",
          }}
        >
          History
        </Link>
      </NextLink>
      <NextLink href="/daily-goal" passHref>
        <Link
          textDecoration="none"
          _hover={{
            textDecoration: "underline",
          }}
        >
          Daily Goal
        </Link>
      </NextLink>
      <NextLink href="/thoughts" passHref>
        <Link
          textDecoration="none"
          _hover={{
            textDecoration: "underline",
          }}
        >
          Thoughts
        </Link>
      </NextLink>
    </Flex>
  );
}
