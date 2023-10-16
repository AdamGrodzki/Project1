import memoryIcon from "../assets/icon-memory.svg";
import reactionIcon from "../assets/icon-reaction.svg";
import verbalIcon from "../assets/icon-verbal.svg";
import visualIcon from "../assets/icon-visual.svg";

export type dataType = {
  id: number;
  icon: string;
  title: string;
  score: number;
};
export const data: dataType[] = [
  {
    id: 1,
    icon: reactionIcon,
    title: "Reaction",
    score: 80,
  },
  {
    id: 2,
    icon: memoryIcon,
    title: "Memory",
    score: 92,
  },
  {
    id: 3,
    icon: verbalIcon,
    title: "Verbal",
    score: 61,
  },
  {
    id: 4,
    icon: visualIcon,
    title: "Visual",
    score: 72,
  },
];