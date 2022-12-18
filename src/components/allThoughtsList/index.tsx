import { useEffect, useState } from "react";
import { Day } from "../../types";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import getValueByKey from "../../utilities/getValueByKey";
import LinkComponent from "../linkComponent";

export default function AllThoughtsList() {
  const [allThoughts, setAllThoughts] = useState([]);

  useEffect(() => {
    const allDayIds = getValueByKey("allDayIds");
    const getAllThoughts = allDayIds.map((id: Day["id"]) => {
      const day = getValueByKey(id);
      return day.thoughts;
    });
    setAllThoughts(getAllThoughts.flat());
  }, []);

  return (
    <Flex
      justify="center"
      align="center"
      direction="column"
      gap={5}
      w={300}
      mt={4}
    >
      {!allThoughts.length ? (
        LinkComponent({
          url: "/thoughts",
          component: (
            <Text as="h2" fontWeight="thin" fontSize={22} textAlign="center">
              Click me and go create a thought!
            </Text>
          ),
        })
      ) : (
        <Accordion allowMultiple width="100%" pb={10}>
          {[...allThoughts]
            .reverse()
            .map(function listAllThoughts({
              thought,
              createdAt,
            }: {
              thought: string;
              createdAt: string;
            }) {
              return (
                <AccordionItem key={createdAt}>
                  <h2>
                    <AccordionButton>
                      <Box
                        flex="1"
                        textAlign="center"
                        fontWeight="light"
                        fontSize="sm"
                      >
                        🍃 {createdAt} 💨
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{thought}</AccordionPanel>
                </AccordionItem>
              );
            })}
        </Accordion>
      )}
    </Flex>
  );
}
