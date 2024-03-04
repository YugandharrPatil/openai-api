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
			<h1 className="text-center text-3xl font-bold mt-8">OpenAI API</h1>
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
