import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateLogo(prompt: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: {
        parts: [
          {
            text: `Create a professional, high-definition branded logo for a travel company named "ANDAMAN TRIPVERSE". The logo should be beach-themed, featuring elements like palm trees, ocean waves, or a sunset. The text "ANDAMAN TRIPVERSE" must be clearly visible and correctly spelled. Style: Modern, elegant, and attractive. Background: Clean or tropical. ${prompt}`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating logo:", error);
    return null;
  }
}
