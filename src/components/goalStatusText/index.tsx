import { Text } from "@chakra-ui/react";

export default function GoalStatusText({ completed }: { completed: boolean }) {
  return <Text>{completed ? "Great job! 🎉" : "You can do this! 💪"}</Text>;
}
