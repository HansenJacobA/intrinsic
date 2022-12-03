import NextLink from "next/link";
import { Link, Button, Flex, Text } from "@chakra-ui/react";

export default function Welcome() {
  return (
    <Flex justify="center" align="center" direction="column" gap={10} m={100}>
      <Text fontSize={32}>Welcome</Text>

      <NextLink href="/history" passHref>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button>History</Button>
        </Link>
      </NextLink>

      <NextLink href="/remake-history" passHref>
        <Link
          _hover={{
            textDecoration: "none",
          }}
        >
          <Button>Remake History</Button>
        </Link>
      </NextLink>
    </Flex>
  );
}
