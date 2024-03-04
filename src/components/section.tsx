import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

type SectionPropTypes = {
	title: string;
	buttons: {
		id: number;
		text: string;
		link: string;
		enabled: boolean;
	}[];
};

export default function Section(props: SectionPropTypes) {
	// console.log(props);
	return (
		<Card className="p-4 my-8">
			<h1 className="text-2xl text-center font-semibold mb-3">{props.title}</h1>
			<div className="flex gap-4 w-fit mx-auto">
				{props.buttons.map((button: any) => (
					<Button disabled={!button.enabled} key={button.id}>
						<Link target="_blank" href={button.link}>
							{button.text}
						</Link>
					</Button>
				))}
			</div>
		</Card>
	);
}
