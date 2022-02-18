import { defineStore } from "pinia";
import education from "../../models/about/education";
const { getEducationInfomation } = education;

export const useEducationStore = defineStore("educationStore", {
	state: () => {
		return { educationList: [] };
	},
	actions: {
		initEducationData() {
			this.educationList = getEducationInfomation();
		}
	},
	getters: {
		getEducationInformation: (state) => state.educationList
	}
});