"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Loader2 } from "lucide-react";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";

export default function EditImagePage() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm();

	const onSubmit = async (data: FieldValues) => {
		const res = await axios.post("/image/generate-image/api", data);
		// console.log(data);
		// console.log(res.data.data[0].url);
		reset();
	};

	return (
		<main className="container">
			<div className="font-bold text-center mt-8">
				<h1 className="text-3xl">Welcome to Edit Image!</h1>
				<h3 className="mt-4">Edit or Extend an Image with a Text Prompt</h3>
			</div>
			<div className="mx-auto xl:w-1/2 text-lg">
				<hr className="my-6" />
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="xl:w-1/2 mx-auto my-6">
				<div className="flex gap-4">
					<Input className="" {...register("input", { required: "Please enter a valid prompt" })} type="text" />

					<Button disabled={isSubmitting} type="submit">
						{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
						Send
					</Button>
				</div>
			</form>
		</main>
	);
}
