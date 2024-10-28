import { fetchAdvice } from "../lib/api";
import AdviceDisplay from "./components/AdviceDisplay";
import { Advice } from "@/types/advice";

export default async function AdvicePage() {
  const advice: Advice = await fetchAdvice();
  return (
    <div>
      <h1>Advice Page</h1>
      <AdviceDisplay advice={advice} />
    </div>
  );
}
