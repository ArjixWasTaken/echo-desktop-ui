import { createMemo } from "solid-js";
import {
	createRootRoute,
	Outlet,
	useNavigate,
	useLocation,
} from "@tanstack/solid-router";

import Home from "@suid/icons-material/HomeOutlined";
import HomeActive from "@suid/icons-material/Home";

import Favorite from "@suid/icons-material/FavoriteBorder";
import FavoriteActive from "@suid/icons-material/Favorite";

import LibraryMusic from "@suid/icons-material/LibraryMusicOutlined";
import LibraryMusicActive from "@suid/icons-material/LibraryMusic";

import Download from "@suid/icons-material/Download";

import Menu from "@suid/icons-material/Menu";
import Settings from "@suid/icons-material/Settings";
import { PlayerLayout } from "../components/PlayerLayout";

export const Route = createRootRoute({
	component: () => {
		const navigate = useNavigate();
		const location = useLocation();
		const active = createMemo(() => {
			const part = location().pathname.split("/")[1];
			return part || "home";
		});

		return (
			<div class="h-screen bg-gray-200">
				<mdui-navigation-rail
					contained
					divider
					alignment="center"
					value={active()}
				>
					<mdui-button-icon slot="top">
						<Menu />
					</mdui-button-icon>

					<mdui-button-icon
						slot="bottom"
						onClick={() => navigate({ to: "/settings" })}
					>
						<Settings />
					</mdui-button-icon>

					<mdui-navigation-rail-item
						value="home"
						onClick={() => navigate({ to: "/" })}
					>
						<Home slot="icon" />
						<HomeActive slot="active-icon" />
						Home
					</mdui-navigation-rail-item>
					<mdui-navigation-rail-item
						value="favourites"
						onClick={() => navigate({ to: "/favourites" })}
					>
						<Favorite slot="icon" />
						<FavoriteActive slot="active-icon" />
						Favorites
					</mdui-navigation-rail-item>
					<mdui-navigation-rail-item
						value="library"
						onClick={() => navigate({ to: "/library" })}
					>
						<LibraryMusic slot="icon" />
						<LibraryMusicActive slot="active-icon" />
						Library
					</mdui-navigation-rail-item>
					<mdui-navigation-rail-item
						value="downloads"
						onClick={() => navigate({ to: "/downloads" })}
					>
						<Download slot="icon" />
						Downloads
					</mdui-navigation-rail-item>
				</mdui-navigation-rail>

				<PlayerLayout>
					<Outlet />
				</PlayerLayout>
			</div>
		);
	},
});
