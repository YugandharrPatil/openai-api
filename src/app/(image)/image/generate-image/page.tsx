"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";

export default function GenerateImagePage() {
	const [imageURL, setImageURL] = useState();

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
		setImageURL(res.data.data[0].url);
		reset();
	};

	return (
		<main className="container">
			<div className="font-bold text-center mt-8">
				<h1 className="text-3xl">Welcome to Image Generation!</h1>
				<h3 className="mt-4">Create Images from Prompts with DALLE-2</h3>
			</div>
			<div className="mx-auto xl:w-1/2 text-lg">
				<hr className="my-6" />
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className="xl:w-1/2 mx-auto my-6">
				<div className="flex gap-4">
					<Input className="" {...register("input", { required: "Please enter a valid prompt" })} type="text" />
					<select {...register("size")}>
						{/* <SelectTrigger className="w-[180px]">
							<SelectValue placeholder="Select a Size" />
						</SelectTrigger>
						<SelectContent> */}
						<option value="256x256">Small</option>
						<option value="512x512">Medium</option>
						{/* <option value="1024x1792">1024x1792</option> */}
						{/* <option value="1792x1024">1792x1024</option> */}
						<option value="1024x1024">Large</option>
						{/* </SelectContent> */}
					</select>
					<Button disabled={isSubmitting} type="submit">
						{isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
						Send
					</Button>
				</div>
				{errors.input && <p className="text-red-400">{`${errors.input?.message}`}</p>}
			</form>
			{imageURL && <img className="mx-auto my-6" src={imageURL} alt="" />}
		</main>
	);
}
