import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function LinkComponent({ url, component }) {
  return (
    <NextLink href={url}>
      <Link
        _hover={{
          textDecoration: "none",
        }}
      >
        {component}
      </Link>
    </NextLink>
  );
}
