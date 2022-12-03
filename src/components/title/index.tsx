import NextLink from "next/link";
import { Link, Heading } from "@chakra-ui/react";

export default function Title() {
  return (
    <NextLink href="/home" passHref>
      <Link
        _hover={{
          textDecoration: "none",
        }}
      >
        <Heading
          as="h1"
          size="xl"
          noOfLines={1}
          textAlign="center"
          pb={7}
          pt={8}
          w="100vw"
          bgColor="#272D33"
          color="white"
        >
          Intr🙏nsic
        </Heading>
      </Link>
    </NextLink>
  );
}
