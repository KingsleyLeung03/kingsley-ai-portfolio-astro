import { config } from 'dotenv';
config();
import type { APIRoute } from 'astro';
import { cvQA } from '../../ai/flows/cv-qa-chatbot';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { question } = body;

    if (!question || typeof question !== 'string') {
      return new Response(JSON.stringify({ error: "Invalid question" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const answer = await cvQA(question);

    return new Response(JSON.stringify({ answer }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API Error in /api/chatbot:", error);
    return new Response(JSON.stringify({ error: "Failed to process request" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
