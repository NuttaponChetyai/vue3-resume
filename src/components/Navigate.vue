<script setup>
import { onMounted, onBeforeUnmount } from "vue-demi"

const linkToCode = () => {
	window.open('https://github.com/NuttaponChetyai/NuttaponChetyai', '_blank')
}

const downloadCV = () => {
	window.open('https://drive.google.com/file/d/1-BBa_E7wmIfRc2Vdaj2hYAdQKKftH-kL/view?usp=sharing', '_blank')
}

const mouseScrollLocation = $ref(0);

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
});

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll)
});

const handleScroll = (e) => {
	mouseScrollLocation = window.scrollY;
}

const gotoTop = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
}

</script>

<template>
	<q-page-sticky position="bottom-right" :offset="[18, 18]">
		<q-btn @click="linkToCode()" title="GitHub" fab icon="fab fa-github" color="orange-8" />
	</q-page-sticky>
	<q-page-sticky position="bottom-right" :offset="[18, 90]">
		<q-btn @click="downloadCV()" title="Download Resume" fab icon="fas fa-download" color="blue-9" />
	</q-page-sticky>
	<!-- <i class="fa-solid fa-circle-arrow-up"></i> -->
	<q-page-sticky v-if="mouseScrollLocation > 500" :class="mouseScrollLocation > 500 ? 'fade-in' : ''"
		@click="gotoTop()" position="bottom-right" :offset="[18, 162]">
		<q-btn title="Download Resume" fab icon="fas fa-arrow-up" color="blue-9" />
	</q-page-sticky>
</template>

<style scoped>
.fade-in {
	animation-name: fade-in;
	animation-duration: 2s;
}

@keyframes fade-in {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}
</style>