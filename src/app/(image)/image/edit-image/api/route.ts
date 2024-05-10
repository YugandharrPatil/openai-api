import { openai } from "@/config/openai";
import { config } from "dotenv";
import fs from "fs";
config();

export async function POST(req: Request) {
	const { input } = await req.json();
	// console.log(input, size);
	try {
		const AIResponse = await main(input);
		// console.log(AIResponse);
		return new Response(JSON.stringify(AIResponse));
	} catch (err) {
		console.error(`The error is: ${err}`);
	}
	return new Response("OK");
}

async function main(input: string) {
	// const imageEdition = await openai.images.edit({
	//   image: ,
	//   mask: ,
	//   prompt: input
	// });
	// return imageEdition;
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
