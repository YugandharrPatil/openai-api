import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import { Button } from "./ui/button";

type SectionPropTypes = {
	title: string;
	buttons: {
		id: number;
		text: string;
		link: string;
		enabled: boolean;
		tooltipText: string;
	}[];
};

export default function Section(props: SectionPropTypes) {
	// console.log(props);
	return (
		<Card className="p-4 my-8">
			<h1 className="text-2xl text-center font-semibold mb-3">{props.title}</h1>
			<div className="flex gap-4 w-fit mx-auto">
				{props.buttons.map((button: any) => (
					<TooltipProvider key={button.id}>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button disabled={!button.enabled}>
									<Link target="_blank" href={button.link}>
										{button.text}
									</Link>
								</Button>
							</TooltipTrigger>
							<TooltipContent>{button.tooltipText}</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				))}
			</div>
		</Card>
	);
}
