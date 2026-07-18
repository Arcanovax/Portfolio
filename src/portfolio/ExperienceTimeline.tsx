import React from 'react';
import SectionHeading from './SectionHeading';

type Item = {
	year: string;
	title: string;
	company: string;
	description: string;
};

type Props = {
	items: Item[];
};

export default function ExperienceTimeline({ items }: Props) {
	return (
		<section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
			<SectionHeading
				title="Experience"
				subtitle="Des blocs typographiques et une ligne de temps simple, proches du rythme du site existant."
			/>
			<div className="space-y-4">
				{items.map((item) => (
					<article key={`${item.year}-${item.title}`} className="grid gap-4 rounded-[1.5rem] border border-foreground/10 bg-foreground/5 p-5 sm:grid-cols-[10rem_1fr] sm:p-6">
						<div className="font-mono text-sm uppercase tracking-[0.25em] text-muted-foreground">{item.year}</div>
						<div>
							<h3 className="text-xl font-semibold">{item.title}</h3>
							<p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted-foreground">{item.company}</p>
							<p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/80 sm:text-base">{item.description}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}