"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { Inspiration } from "next/font/google";
import { useEffect, useState } from "react";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";

type MessagesProps = { id: number; role: string; content: string };
type MessagesArrayProps = MessagesProps[];

export default function ChatCompletionPage() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm();

	const [messages] = useState<MessagesArrayProps>([]);

	// TODO: Rectify to take in message history
	const onSubmit = async (data: FieldValues) => {
		// add user input to messages array
		messages.push({ id: Math.random(), role: "user", content: data.input });
		console.log(messages);

		// send request with message history array
		const res = await axios.post("/chat/chat-completion/api", messages);

		// add assistant response to array
		messages.push({ id: Math.random(), role: res.data.choices[0].message.role, content: res.data.choices[0].message.content });
		console.log(messages);
		reset(); // reset form
	};

	return (
		<main className="container">
			<div className="font-bold text-center mt-8">
				<h1 className="text-3xl">Welcome to Chat!</h1>
				<h3 className="mt-4">Chat with GPT-3.5 Turbo</h3>
				{/* <p className="mt-1 font-normal">(Doesn&apos;t yet support recalling conversation context)</p> */}
			</div>
			<div className="mx-auto xl:w-1/2 text-lg">
				<hr className="my-6" />
				{messages &&
					messages.map((message: { id: number; role: string; content: string }) => (
						<div key={message.id} className="my-3">
							<span className="font-bold">{message.role}: </span>
							<span>{message.content}</span>
						</div>
					))}
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="xl:w-1/2 mx-auto my-6">
				<div className="flex gap-4">
					<Input {...register("input", { required: "Please enter a valid prompt" })} type="text" />
					<Button disabled={isSubmitting} type="submit">
						{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
						Send
					</Button>
				</div>
				{errors.input && <p className="text-red-400">{`${errors.input?.message}`}</p>}
			</form>
		</main>
	);
}
