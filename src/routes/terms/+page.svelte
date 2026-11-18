<script lang="ts">
	import PageHero from '#lib/components/PageHero.svelte';
	import { reveal } from '#lib/actions/reveal';
</script>

<svelte:head>
	<title>Terms of Use | NaviX Technologies</title>
</svelte:head>

<PageHero
	eyebrow="Terms of Use"
	title="The small print, in plain words"
	subtitle="This is a demo website. These terms explain what you can expect from it — and what you can't."
/>

<section class="bg-mist py-12 sm:py-16">
	<div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" use:reveal>
		<div class="rounded-3xl bg-white p-6 shadow-sm sm:p-10">
			<h2 class="text-xl font-bold text-navy">A demo site, not a real clinic</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				NaviX Technologies, its dentists, its address and its phone number are demo content.
				Browsing this site does not create a patient–dentist relationship, and nothing here is a
				contract for treatment.
			</p>

			<h2 class="mt-8 text-xl font-bold text-navy">Prices are illustrative</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				Any prices shown — for example, "from" prices on treatments — are illustrative examples
				for the demo. A real clinic would confirm the exact cost, what insurance covers and what
				payment options exist before any treatment begins.
			</p>

			<h2 class="mt-8 text-xl font-bold text-navy">Appointments are requests, not confirmations</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				Submitting the booking form sends a request, not a confirmed appointment. On this demo
				site the request is saved only in your own browser and nobody is notified. A real clinic
				would call or email you to confirm the date and time, and would let you know if the slot
				you picked is no longer available.
			</p>

			<h2 class="mt-8 text-xl font-bold text-navy">Content accuracy</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				The articles, FAQs and service descriptions are general information written for a demo.
				They may be simplified, out of date or incomplete. They are not a substitute for advice
				from a licensed dentist who has examined you.
			</p>

			<h2 class="mt-8 text-xl font-bold text-navy">Acceptable use</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				Please use the forms as intended: don't submit other people's personal information, and
				don't include detailed medical history in the notes field. We may change or remove any
				part of this demo site at any time without notice.
			</p>

			<h2 class="mt-8 text-xl font-bold text-navy">Questions</h2>
			<p class="mt-3 text-sm leading-relaxed text-[#5B6B74] sm:text-base">
				Questions about this demo site can be sent to
				<a href="mailto:hello@navixdental.com" class="font-semibold text-brand hover:underline"
					>hello@navixdental.com</a
				>. These terms are demo wording written in plain language — they are not legal advice
				and are not a substitute for a real clinic's terms.
			</p>
			<p class="mt-6 border-t border-slate-200 pt-4 text-xs text-[#5B6B74]">
				Last updated: November 2026.
			</p>
		</div>
	</div>
</section>
