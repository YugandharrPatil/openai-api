import { openai } from "@/config/openai";
import axios from "axios";
import { config } from "dotenv";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
config();

export async function POST(req: Request) {
	const { input: userInput } = await req.json();
	console.log(userInput);
	try {
		const AIResponse = await main(userInput);
		// console.log(AIResponse.choices[0].message.content);
		return new Response(JSON.stringify(AIResponse));
	} catch (err) {
		console.error(`The error is: ${err}`);
	}
}

async function main(input: string) {
	const chatCompletion = await openai.chat.completions.create({
		messages: [{ role: "user", content: `${input}` }],
		model: "gpt-3.5-turbo",
	});
	return chatCompletion;
}
