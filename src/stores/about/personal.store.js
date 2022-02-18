import { defineStore } from "pinia";
import personal from "../../models/about/personal";
const { getPersonalInfo } = personal;

export const usePersonalStore = defineStore("personalStore", {
	state: () => {
		return { personalList: [] };
	},
	actions: {
		initPersonalData() {
			this.personalList = getPersonalInfo();
		}
	},
	getters: {
		getPersonalInformation: (state) => state.personalList
	}
});