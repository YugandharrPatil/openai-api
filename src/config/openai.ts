import { config } from "dotenv";
import { OpenAI } from "openai";
config();

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
// import OpenAI from 'openai';

// const openai = new OpenAI();

// async function main() {
//   const stream = await openai.chat.completions.create({
//     model: 'gpt-4',
//     messages: [{ role: 'user', content: 'Say this is a test' }],
//     stream: true,
//   });
//   for await (const chunk of stream) {
//     process.stdout.write(chunk.choices[0]?.delta?.content || '');
//   }
// }

// main();
