
import { GoogleGenAI } from "@google/genai";
import type { UsageData } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getPerformanceAnalysis(usageData: UsageData[]): Promise<string> {
  const usageSummary = usageData.map(d => `${d.name} is at ${d.cpu || d.ram || d.disk}%`).join(', ');

  const prompt = `
    Analyze the following server resource usage data for a web hosting environment and provide a brief, easy-to-understand summary with optimization recommendations. The user is a typical website owner, not necessarily a systems administrator.

    Usage Data: ${usageSummary}

    Your analysis should:
    1.  Briefly summarize the current resource status (e.g., "Your CPU usage is high...").
    2.  Identify any potential bottlenecks or resources under heavy load.
    3.  Provide 1-2 actionable recommendations for a non-technical user (e.g., "Consider optimizing images on your website," or "If you recently installed a new plugin, it might be causing the high CPU usage.").
    4.  Keep the entire response under 70 words. Be concise and friendly.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    throw new Error("Failed to communicate with the AI analyst.");
  }
}
