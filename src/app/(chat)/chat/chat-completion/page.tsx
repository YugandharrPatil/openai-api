"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Loader2 } from "lucide-react";
import { useState } from "react";
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
		getValues,
	} = useForm();

	const [messages, setMessages] = useState<MessagesArrayProps>([]);

	const onSubmit = async (data: FieldValues) => {
		const res = await axios.post("/chat/chat-completion/api", data);
		// add userInput to array
		setMessages((prevMessages: MessagesArrayProps) => {
			return [...prevMessages, { id: parseInt(crypto.randomUUID()), role: "user", content: data.input }];
		});
		// console.log(messages);
		// add AI input to array
		setMessages((prevMessages: MessagesArrayProps) => {
			return [
				...prevMessages,
				{ id: parseInt(crypto.randomUUID()), role: res.data.choices[0].message.role, content: res.data.choices[0].message.content },
			];
		});
		console.log(messages);
		// console.log(res.data.choices[0].message);
		reset();
	};

	return (
		<main className="container">
			<div className="font-bold text-center mt-8">
				<h1 className="text-3xl">Welcome to Chat!</h1>
				<h3 className="mt-4">Chat with GPT-3.5 Turbo</h3>
				<p className="mt-1 font-normal">(Doesn&apos;t yet support recalling conversation context)</p>
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
					<Input className="" {...register("input", { required: "Please enter a valid prompt" })} type="text" />
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
