<script setup>
import { onMounted } from "vue-demi";
import { useExperienceStore } from "../stores/experience/experience.store"
const experienceStore = useExperienceStore();

onMounted(() => {
	experienceStore.initExperience();
});

</script>

<template>
	<div class="q-px-md q-pb-md q-pt-lg text-white">
		<div class="row justify-center">
			<div class="text-white title justify-center">
				<div class="text-h3">Experience</div>
				<div class="text-subtitle2">HERE IS MY EXP</div>
			</div>
		</div>
		<div class="row justify-center align-center">
			<div>
				<q-timeline color="orange" layout="comfortable" side="left">
					<!-- <q-timeline-entry heading>Experience</q-timeline-entry> -->
					<q-timeline-entry v-for="(item, index) in experienceStore.getExperienceInformation" :key="index"
						:title="item.company" :subtitle="item.timeline">
						<div>
							{{ item.position }}
						</div>
						<div>
							{{ item.description }}
						</div>
					</q-timeline-entry>
				</q-timeline>
			</div>
		</div>
	</div>
</template>