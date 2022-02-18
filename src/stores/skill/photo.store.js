import { defineStore } from "pinia";
import images from "../../models/skill/photo";
const { getImageSkill } = images;

export const useImageStore = defineStore("ImageStore", {
	state: () => {
		return { images: [] };
	},
	actions: {
		initPersonalData() {
			this.images = getImageSkill();
		}
	},
	getters: {
		getImageSkill: (state) => state.images
	}
});