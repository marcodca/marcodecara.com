import { proxy } from "valtio";

export const state = proxy({ currentView: 0, isMobile: false });
