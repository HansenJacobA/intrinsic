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
          size="2xl"
          noOfLines={1}
          textAlign="center"
          pb={6}
          pt={7}
          w="100vw"
          bgColor="#A0AEC0"
          color="#F7FAFC"
          fontWeight="thin"
        >
          Intr🙏nsic
        </Heading>
      </Link>
    </NextLink>
  );
}
