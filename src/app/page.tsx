import Section from "@/components/section";

import {
	AUDIO_BUTTONS,
	CHAT_BUTTONS,
	EMBEDDINGS_BUTTONS,
	FILES_BUTTONS,
	FINE_TUNING_BUTTONS,
	IMAGES_BUTTONS,
	MODELS_BUTTONS,
	MODERATIONS_BUTTONS,
} from "@/data/buttons";

export default function HomePage() {
	return (
		<main className="container">
			<div className="text-center mt-8">
				<h1 className="text-3xl font-bold">OpenAI API</h1>
				<h3 className="mt-4 font-semibold">Hover over the buttons for a short description</h3>
			</div>
			<Section {...CHAT_BUTTONS} />
			<Section {...IMAGES_BUTTONS} />
			<Section {...AUDIO_BUTTONS} />
			<Section {...EMBEDDINGS_BUTTONS} />
			<Section {...FILES_BUTTONS} />
			<Section {...FINE_TUNING_BUTTONS} />
			<Section {...MODELS_BUTTONS} />
			<Section {...MODERATIONS_BUTTONS} />
		</main>
	);
}
