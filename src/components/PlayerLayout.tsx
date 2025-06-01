import { createEffect, createMemo, Show, type JSX } from "solid-js";

import SkipPreviousIcon from "@suid/icons-material/SkipPrevious";
import PlayArrowIcon from "@suid/icons-material/PlayArrow";
import SkipNextIcon from "@suid/icons-material/SkipNext";
import { useStore } from "@tanstack/solid-store";
import { PlayerStore } from "../stores/PlayerStore";

interface PlayerLayoutProps {
	children: JSX.Element;
}

export const PlayerLayout = (props: PlayerLayoutProps) => {
	const currentTrack = useStore(PlayerStore, (state) => state.currentTrack);
	const hasTrack = createMemo(() => currentTrack() !== undefined, false);

	const styles = createMemo(
		() => {
			const hasTrack = currentTrack() !== undefined;
			return {
				outlet: hasTrack
					? "h-[90%] overflow-y-scroll"
					: "h-screen overflow-y-scroll",
				bar: hasTrack ? "block" : "hidden",
			};
		},
		{ outlet: "h-screen overflow-y-scroll", bar: "hidden" },
	);

	let sliderRef: HTMLInputElement | undefined;

	const labelFormatter = (percentage: string) => {
		const value = Number.parseFloat(percentage) / 10_000;
		if (value < 0.01) return "0:00";
		const minutes = Math.floor(value / 60);
		const seconds = Math.floor(value % 60);
		return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
	};

	createEffect(() => {
		if (!sliderRef) return;
		// @ts-expect-error
		sliderRef.labelFormatter = labelFormatter;
	});

	return (
		<div class="h-screen bg-white pl-1.5">
			<div class={styles().outlet}>{props.children}</div>
			<Show when={hasTrack()}>
				<div class={styles().bar}>
					<mdui-card class="w-full px-5">
						<mdui-slider
							min={0}
							max={currentTrack()!.duration * 10_000}
							value={currentTrack()!.duration * 0.5 * 10_000}
							ref={sliderRef}
						/>
						<div class="flex flex-row justify-between">
							<div class="flex flex-row">
								<mdui-button-icon>
									<SkipPreviousIcon />
								</mdui-button-icon>
								<mdui-button-icon>
									<PlayArrowIcon />
								</mdui-button-icon>
								<mdui-button-icon>
									<SkipNextIcon />
								</mdui-button-icon>
							</div>
							<div class="flex flex-row gap-10">
								<mdui-avatar src={currentTrack()!.albumArt} />
								<div class="flex flex-col gap-2">
									<span>{currentTrack()!.title}</span>
									<span>
										{currentTrack()!.artists}
										{currentTrack()!.album ? ` - ${currentTrack()!.album}` : ""}
									</span>
								</div>
								<div>actions?</div>
							</div>
							<div>player controls</div>
						</div>
					</mdui-card>
				</div>
			</Show>
		</div>
	);
};
