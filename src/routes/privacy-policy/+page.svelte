<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { reveal } from '#lib/actions/reveal';
</script>

<svelte:head>
	<title>Privacy Policy | NaviX Technologies</title>
	<meta
		name="description"
		content="Privacy policy for the NaviX Technologies demo website: what the demo forms collect, where it is stored, and how to reach us."
	/>
</svelte:head>

<PageHero
	eyebrow="Privacy Policy"
	title="Your privacy matters"
	subtitle="This is a demo website. Here is exactly what it does — and does not do — with your information."
/>

<section class="bg-mist py-12 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" use:reveal>
		<div class="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
			<h2 class="text-xl font-bold text-navy">What this site is</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				NaviX Technologies is a demonstration dental clinic website. The clinic, the team, the
				prices and the patient stories shown here are mock content created to show what a clinic
				website can look like. Nothing on this site is a real offer of medical services.
			</p>

			<h2 class="mt-8 text-xl font-bold text-navy">What the demo forms collect</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				The booking and contact forms ask for your name, phone number, email address and a short
				note. That is all they collect. We ask you not to share detailed medical history in the
				notes field — it is not needed to request a visit.
			</p>

			<h2 class="mt-8 text-xl font-bold text-navy">Where your information goes</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				Nowhere. When you submit the booking form, your details are saved only in your own
				browser's local storage, under the key "navix-booking", so the demo can show your request
				back to you. Nothing is sent to a server, a database or any third party, and nothing
				leaves your device. Clearing your browser data removes it.
			</p>

			<h2 class="mt-8 text-xl font-bold text-navy">No health data, no tracking</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				This site does not collect health records, insurance details or payment information, and
				it does not run analytics, advertising trackers or cookies that follow you across the
				web. There are no accounts, no logins and no newsletters that store your address.
			</p>

			<h2 class="mt-8 text-xl font-bold text-navy">Questions</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				If you have a question about this demo site or its content, email us at
				<a href="mailto:hello@navixdental.com" class="font-semibold text-brand hover:underline"
					>hello@navixdental.com</a
				>. A real clinic would publish a full HIPAA notice and a named privacy contact here —
				this demo does not, because it does not handle real patient data.
			</p>
			<p class="mt-6 border-t border-slate-200 pt-4 text-xs text-[#5B6B74]">
				Last updated: November 2026. This is demo wording, not legal advice.
			</p>
		</div>
	</div>
</section>
