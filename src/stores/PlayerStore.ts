import { Store } from "@tanstack/solid-store";
import type { TrackInfo } from "../types";

interface PlayerStoreState {
	currentTrack?: TrackInfo;
}

export const PlayerStore = new Store<PlayerStoreState>({
	currentTrack: {
		title: "It's Going Down Now",
		artists: ["Azumi Takahashi", "Lotus Juice", "ATLUS Sound Team"],
		album: "Persona 3 Reload Original Soundtrack",
		albumArt:
			"https://lh3.googleusercontent.com/vuH5dCXWGdXSYAJXI4jNhZZHJjwUwcIaQjYCYcz85S5AH5Ejb9Cau4xtzYENq71VrTkgqZVaW3xbp8c=w544-h544-l90-rj",
		duration: 186,
	},
});
