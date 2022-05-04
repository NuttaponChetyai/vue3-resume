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
			<div class="col-xl-6 col-md-6 col-sm-12">
				<q-timeline color="orange">
					<q-timeline-entry heading>Experience</q-timeline-entry>

					<q-timeline-entry v-for="(item, index) in experienceStore.getExperienceInformation" :key="index" :title="item.company"
						:subtitle="item.timeline">
						<div>
							{{item.position}}
						</div>
						<div>
							{{item.description}}
						</div>
					</q-timeline-entry>
				</q-timeline>
			</div>

		</div>

	</div>
</template>