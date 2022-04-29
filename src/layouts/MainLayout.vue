<script setup>
import Footer from '../components/Footer.vue';
import Navigate from "../components/Navigate.vue";
</script>
<template>
	<q-layout>
		<q-page-container>
			<q-page>
				<!-- page content -->
				<router-view></router-view>
				<!-- <Parallax />
				<About />
				<Skill />
				<Navigate />-->
			</q-page>
			<q-footer elevated>
				<Footer />
			</q-footer>
			<Navigate />
		</q-page-container>
	</q-layout>
</template>