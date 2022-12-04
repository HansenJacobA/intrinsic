import getValueByKey from "../getValueByKey";
import setValueByKey from "../setValueByKey";

export default function removeSelected(
  topicId: string,
  indicesToRemove: boolean[]
) {
  const posts = getValueByKey(topicId);

  const savedPosts = posts.filter(
    (_, index: number) => !indicesToRemove[index]
  );

  setValueByKey(topicId, savedPosts);

  return savedPosts;
}
