<script lang="ts">
	import { cv } from '$lib/data/cv';
	import ContinueReading from '$lib/components/site/ContinueReading.svelte';
	import EmphasisText from '$lib/components/site/EmphasisText.svelte';
	import PageHeader from '$lib/components/site/PageHeader.svelte';
	import PageShell from '$lib/components/site/PageShell.svelte';
	import PageTOC from '$lib/components/site/PageTOC.svelte';
	import TimelineEntry from '$lib/components/site/TimelineEntry.svelte';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card/index.js';

	const tocSections = [
		{ id: 'summary', label: 'Summary' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'volunteering', label: 'Volunteering' },
		{ id: 'certifications', label: 'Certifications' },
		{ id: 'core-skills', label: 'Core skills' },
		{ id: 'contact', label: 'Contact' },
	];
</script>

<svelte:head>
	<title>{cv.title} · Tomáš Škarpa</title>
</svelte:head>

<PageShell>
	<PageHeader title={cv.title} subtitle={cv.subtitle} />
	<PageTOC sections={tocSections} />

	<div class="space-y-12">
				<section id="summary" class="scroll-mt-36 space-y-4">
					<h2 class="text-xl font-semibold">{cv.summary.title}</h2>
					{#each cv.summary.paragraphs as paragraph}
						<p class="leading-relaxed text-foreground/90"><EmphasisText text={paragraph} /></p>
					{/each}
				</section>

				<section id="experience" class="scroll-mt-36 space-y-4">
					<h2 class="text-xl font-semibold">Experience</h2>
					<div class="space-y-4">
						{#each cv.experience as entry (entry.company)}
							<TimelineEntry {entry} />
						{/each}
					</div>
				</section>

				<section id="volunteering" class="scroll-mt-36 space-y-4">
					<h2 class="text-xl font-semibold">{cv.volunteering.title}</h2>
					<Card>
						<CardHeader class="pb-2">
							<CardTitle class="text-base">{cv.volunteering.entry.title}</CardTitle>
							<p class="text-sm text-muted-foreground">{cv.volunteering.entry.meta}</p>
						</CardHeader>
						<CardContent class="space-y-3">
							<ul class="list-disc space-y-2 pl-5 text-sm text-foreground/90">
								{#each cv.volunteering.entry.details as detail}
									<li><EmphasisText text={detail} /></li>
								{/each}
							</ul>
							<div class="flex flex-wrap gap-2">
								<Button href={cv.volunteering.entry.href} variant="secondary" size="sm">
									Volunteering page
								</Button>
								<Button href={cv.volunteering.entry.figurineHref} variant="outline" size="sm">
									Figurine project
								</Button>
							</div>
						</CardContent>
					</Card>
				</section>

				<section id="certifications" class="scroll-mt-36 space-y-4">
					<h2 class="text-xl font-semibold">Certifications</h2>
					{#each cv.certifications as cert (cert.title)}
						<Card>
							<CardHeader class="pb-2">
								<CardTitle class="text-base">{cert.title}</CardTitle>
								<p class="text-sm text-muted-foreground">{cert.issuer}</p>
								<p class="text-sm text-muted-foreground">{cert.credentialId}</p>
							</CardHeader>
							<CardContent>
								<Badge variant="secondary" class="font-normal">{cert.skills}</Badge>
							</CardContent>
						</Card>
					{/each}
				</section>

				<section id="core-skills" class="scroll-mt-36 space-y-4">
					<h2 class="text-xl font-semibold">{cv.coreSkills.title}</h2>
					<div class="flex flex-wrap gap-2">
						{#each cv.coreSkills.top as skill}
							<Badge>{skill}</Badge>
						{/each}
					</div>
					<ul class="list-disc space-y-2 pl-5 text-foreground/90">
						{#each cv.coreSkills.groups as group}
							<li>{group}</li>
						{/each}
					</ul>
					<p class="text-sm text-muted-foreground"><EmphasisText text={cv.coreSkills.note} /></p>
					<div class="flex flex-wrap gap-2">
						<Button href={cv.coreSkills.skillsHref} variant="secondary" size="sm">Skills</Button>
						<Button href={cv.coreSkills.stackHref} variant="outline" size="sm">Stack</Button>
					</div>
				</section>

				<section id="contact" class="scroll-mt-36 space-y-4">
					<h2 class="text-xl font-semibold">Contact</h2>
					<ul class="space-y-2 text-foreground/90">
						<li>
							<a href="mailto:{cv.contact.email}" class="hover:underline">{cv.contact.email}</a>
						</li>
						<li>
							<a
								href="https://{cv.contact.linkedin}"
								target="_blank"
								rel="noopener noreferrer"
								class="hover:underline"
							>
								{cv.contact.linkedin}
							</a>
						</li>
						<li>
							<a
								href="https://{cv.contact.github}"
								target="_blank"
								rel="noopener noreferrer"
								class="hover:underline"
							>
								{cv.contact.github}
							</a>
						</li>
					</ul>
				</section>
			</div>

	<ContinueReading links={cv.continueReading} />
</PageShell>
