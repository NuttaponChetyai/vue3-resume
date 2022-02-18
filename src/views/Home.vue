<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Parallax from "../components/Parallex.vue";
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";
import Skill from "../components/Skill.vue";
import Navigate from "../components/Navigate.vue";

</script>

<template>
	<q-layout>
		<q-page-container>
			<q-page>
				<!-- page content -->
				<Parallax />
				<About />
				<Skill />
				<Navigate />
			</q-page>
			<q-footer elevated>
				<Footer />
			</q-footer>
		</q-page-container>
	</q-layout>
</template>