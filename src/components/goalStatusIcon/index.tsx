import { FormLabel } from "@chakra-ui/react";

export default function GoalStatusIcon({ completed }: { completed: boolean }) {
  return (
    <FormLabel htmlFor="goal-completion" m={0} fontSize={14}>
      {completed ? "✅" : "❌"}
    </FormLabel>
  );
}
