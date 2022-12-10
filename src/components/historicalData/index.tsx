import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import getValueByKey from "../../utilities/getValueByKey";
import { templateHistoricalData } from "../../utilities/historicalData.ts";
import HistoricalGoalsCard from "../historicalGoalsCard";
import HistoricalMoodsCard from "../historicalMoodsCard";
import HistoricalThoughtsCard from "../historicalThoughtsCard";

export default function HistoricalData() {
  const [currentHistoricalData, setHistoricalData] = useState(
    templateHistoricalData
  );

  useEffect(() => {
    const historicalData = getValueByKey("historicalData");
    setHistoricalData(historicalData);
  }, []);

  return (
    <Flex direction="column" gap={5} mb={10} w={300}>
      <HistoricalGoalsCard
        numGoals={currentHistoricalData.goalData.numGoals}
        numGoalsComplete={currentHistoricalData.goalData.numGoalsComplete}
        averageNumGoalsPerDay={
          currentHistoricalData.goalData.averageNumGoalsPerDay
        }
      />

      <HistoricalThoughtsCard
        numThoughts={currentHistoricalData.thoughtData.numThoughts}
        averageNumThoughtsPerDay={
          currentHistoricalData.thoughtData.averageNumThoughtsPerDay
        }
      />

      <HistoricalMoodsCard
        moodCounts={currentHistoricalData.moodData.moodCounts}
        numMoods={currentHistoricalData.moodData.numMoods}
        averageNumMoodsPerDay={
          currentHistoricalData.moodData.averageNumMoodsPerDay
        }
        topMood={currentHistoricalData.moodData.topMood}
      />
    </Flex>
  );
}
