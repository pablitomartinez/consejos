import { Advice } from "@/types/advice";

interface AdviceDisplayProps {
  advice: Advice;
}

const AdviceDisplay: React.FC<AdviceDisplayProps> = ({ advice }) => {
  return <p>{advice.advice}</p>;
};

export default AdviceDisplay;
