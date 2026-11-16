<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { reveal } from '#lib/actions/reveal';
</script>

<svelte:head>
	<title>Disclaimer | NaviX Technologies</title>
	<meta
		name="description"
		content="Disclaimer for the NaviX Technologies demo website: mock content, not medical advice, and what to do in a dental emergency."
	/>
</svelte:head>

<PageHero
	eyebrow="Disclaimer"
	title="Please read this first"
	subtitle="This is a demo website with mock content. Nothing here is medical advice."
/>

<section class="bg-mist py-12 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" use:reveal>
		<div class="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
			<h2 class="text-xl font-bold text-navy">Demo and mock data</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				Everything on this site — the clinic, the dentists, the prices, the reviews, the case
				results and the blog posts — is mock content made for demonstration. The people pictured
				are not necessarily dentists, and the clinic at 123 Smile Avenue, Austin, TX does not
				exist.
			</p>

			<h2 class="mt-8 text-xl font-bold text-navy">Not medical advice</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				The information on this site is general education only. It is not medical or dental
				advice, and it does not diagnose, treat or prevent any condition. Never delay seeing a
				dentist, or change a treatment plan, because of something you read here.
			</p>

			<h2 class="mt-8 text-xl font-bold text-navy">See a licensed dentist</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				If you have tooth pain, bleeding gums, a broken tooth, swelling or any other dental
				concern, please see a licensed dentist in person. Only an examination — and, where
				needed, X-rays — can tell what treatment is right for you.
			</p>

			<h2 class="mt-8 text-xl font-bold text-navy">In an emergency</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				If you have a dental emergency — for example, severe pain, heavy bleeding, swelling that
				affects breathing, or a knocked-out tooth — call 911 or go to your nearest emergency
				department. Do not wait for a reply from a website form. The phone number shown on this
				demo site is not a real emergency line.
			</p>

			<h2 class="mt-8 text-xl font-bold text-navy">No guarantees</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				Results described on this site, such as whitening shades or implant success, are
				illustrative. Real results vary from person to person, and no treatment outcome can be
				guaranteed.
			</p>
			<p class="mt-6 border-t border-slate-200 pt-4 text-xs text-[#5B6B74]">
				Last updated: November 2026. This is demo wording, not legal advice.
			</p>
		</div>
	</div>
</section>
