import { NextResponse } from "next/server";

interface AdviceResponse {
  slip: {
    id: number;
    advice: string;
  };
}

export async function GET() {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data: AdviceResponse = await response.json();
  return NextResponse.json(data);
}
