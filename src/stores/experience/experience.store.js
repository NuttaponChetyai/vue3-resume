import { defineStore } from "pinia";
import experience from "../../models/experience/experience";
const { getExperience } = experience;

export const useExperienceStore = defineStore("experienceStore", {
	state: () => {
		return { experienceList: [] };
	},
	actions: {
		initExperience() {
			this.experienceList = getExperience();
		}
	},
	getters: {
		getExperienceInformation: (state) => state.experienceList
	}
});