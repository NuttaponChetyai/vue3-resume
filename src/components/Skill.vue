<script setup>
import { onMounted } from "vue-demi";
import { useImageStore } from "../stores/skill/photo.store"
const imageStore = useImageStore();

onMounted(()=> {
	imageStore.initPersonalData();
});

</script>

<template>
	<div :class="!$q.screen.sm && !$q.screen.xs && 'q-pl-xl q-pr-xl'" class="text-white q-pa-md skill">
		<div class="row justify-center">
			<div class="text-white title justify-center">
				<div class="text-h3">SKILLS</div>
				<div class="text-subtitle2">HERE IS MY ARMAMENT</div>
			</div>
		</div>
		<div class="row items-center justify-center">
			<div
				class="col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 q-pa-sm"
				v-for="(item, index) in imageStore.getImageSkill"
				:key="index"
			>
				<q-img :src="`/img/skills/${item.imagePath}`" style="max-width: 150px">
					<q-tooltip>{{ item.title }}</q-tooltip>
				</q-img>
			</div>
		</div>
	</div>
</template>

