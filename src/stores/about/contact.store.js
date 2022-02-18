import { defineStore } from "pinia";
import contact from "../../models/about/contact";
const { getContractInformation } = contact;

export const useContactStore = defineStore("contactStore", {
	state: () => {
		return { contact: {} };
	},
	actions: {
		initContactData() {
			this.contact = getContractInformation();
		}
	},
	getters: {
		getContractInformation: (state) => state.contact
	}
});