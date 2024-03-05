export const CHAT_BUTTONS = {
	title: "Chat",
	buttons: [
		{
			id: 1,
			text: "Chat",
			link: "/chat/chat-completion",
			enabled: true,
			tooltipText: "Chat with GPT-3.5 Turbo",
		},
	],
};

export const IMAGES_BUTTONS = {
	title: "Images",
	buttons: [
		{
			id: 1,
			text: "Generate",
			link: "/image/generate-image",
			enabled: true,
			tooltipText: "Generate Image from a Text Prompt",
		},
		{
			id: 2,
			text: "Edit",
			link: "/image/edit-image",
			enabled: false,
			tooltipText: "Edit or Extend an Original Image from a Text Prompt",
		},
		{
			id: 3,
			text: "Generate Variations",
			link: "/image/generate-image-variations",
			enabled: false,
			tooltipText: "Generate Image Variations form a Given Image",
		},
	],
};

export const AUDIO_BUTTONS = {
	title: "Audio",
	buttons: [
		{
			id: 1,
			text: "Text-to-Audio",
			link: "/audio/text-to-audio",
			enabled: false,
			tooltipText: "Convert a given Text to Audio",
		},
		{
			id: 2,
			text: "Audio-to-Text",
			link: "/audio/audio-to-text",
			enabled: false,
			tooltipText: "Convert a given Audio to Text",
		},
		{
			id: 3,
			text: "Audio to Translated Text",
			link: "audio/audio-to-translated-text",
			enabled: false,
			tooltipText: "Translate a given Audio to another language",
		},
	],
};

export const EMBEDDINGS_BUTTONS = {
	title: "Embeddings",
	buttons: [
		{
			id: 1,
			text: "Create Embeddings from Text",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
	],
};

export const FINE_TUNING_BUTTONS = {
	title: "Fine Tuning",
	buttons: [
		{
			id: 1,
			text: "Create a Fine Tuning Job",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
		{
			id: 2,
			text: "List all Current Jobs",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
		{
			id: 3,
			text: "Get Status of a Job",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
		{
			id: 4,
			text: "Get Info of a Job",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
		{
			id: 5,
			text: "Cencel a Job",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
	],
};

export const FILES_BUTTONS = {
	title: "Files",
	buttons: [
		{
			id: 1,
			text: "Upload a File",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
		{
			id: 2,
			text: "List A User's Files",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
		{
			id: 3,
			text: "Retreive a File's Info",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
		{
			id: 4,
			text: "Delete a File",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
		{
			id: 5,
			text: "Retreive a File's Content",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
	],
};

export const MODELS_BUTTONS = {
	title: "Models",
	buttons: [
		{
			id: 1,
			text: "List all Models",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
		{
			id: 2,
			text: "Retreive a Model's Info",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
		{
			id: 3,
			text: "Delete a Model",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
		{
			id: 4,
			text: "Get Info of a Job",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
		{
			id: 5,
			text: "Cencel a Job",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
	],
};
export const MODERATIONS_BUTTONS = {
	title: "Moderations",
	buttons: [
		{
			id: 1,
			text: "Create a Moderation",
			link: "#",
			enabled: false,
			tooltipText: "",
		},
	],
};
