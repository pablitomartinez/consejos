export interface Advice {
  id: number;
  advice: string;
}

export const fetchAdvice = async (): Promise<Advice> => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  return data.slip;
};
