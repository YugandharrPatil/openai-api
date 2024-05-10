import { openai } from "@/config/openai";
import { config } from "dotenv";
config();

export async function POST(req: Request) {
	const { input, size } = await req.json();
	// console.log(input, size);
	try {
		const AIResponse = await main(input, size);
		// console.log(AIResponse);
		return new Response(JSON.stringify(AIResponse));
	} catch (err) {
		console.error(`The error is: ${err}`);
		return new Response(JSON.stringify(err));
	}
}

async function main(input: string, size: "256x256" | "512x512" | "1024x1792" | "1792x1024" | "1024x1024") {
	const imageGeneration = await openai.images.generate({
		model: "dall-e-2",
		prompt: input,
		n: 1,
		size: size,
	});
	return imageGeneration;
}

// export async function POST(req: Request) {
// 	const { input: userInput } = await req.json();
// 	console.log(userInput);
// 	try {
// 		const AIResponse = await main(userInput);
// 		console.log(AIResponse);
// 		// return new Response(JSON.stringify(AIResponse));
// 	} catch (err) {
// 		console.error(`The error is: ${err}`);
// 	}
// }

// async function main(input: string) {
// 	const chatCompletion = await openai.images.generate({
// 		model: "dall-e-2",
// 		prompt: input,
// 		n: 1,
// 		size: "512x512",
// 	});
// 	return chatCompletion;
// }
