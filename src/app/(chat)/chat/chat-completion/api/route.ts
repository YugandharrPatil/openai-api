import { openai } from "@/config/openai";
import { config } from "dotenv";
config();

export async function POST(req: Request) {
	const request = await req.json();
	console.log("Messages:", request);
	try {
		const AIResponse = await main(request);
		// console.log(AIResponse.choices[0].message.content);
		return new Response(JSON.stringify(AIResponse));
	} catch (err) {
		console.error(`The error is: ${err}`);
	}
}

async function main(messages: string) {
	const newMessages = removeKeyValuePair(messages, "id");
	const chatCompletion = await openai.chat.completions.create({
		messages: newMessages,
		model: "gpt-3.5-turbo",
	});
	return chatCompletion;
}

function removeKeyValuePair(messages: any, id: any) {
	return messages.map((obj: any) => {
		// Create a copy of the object to avoid modifying the original object
		let newObj = { ...obj };
		// Remove the key-value pair if it exists in the object
		if (newObj.hasOwnProperty(id)) {
			delete newObj[id];
		}
		return newObj;
	});
}
