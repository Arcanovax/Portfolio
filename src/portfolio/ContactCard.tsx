import React from 'react';
import SectionHeading from './SectionHeading';

type Props = {
	email: string;
	links: Array<{ label: string; href: string }>;
};

export default function ContactCard({ email, links }: Props) {
	return (
		<section id="contact" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
			<SectionHeading
				title="Contact"
				subtitle="Un bloc de contact propre, sans friction, dans le même ton minimal et éditorial."
			/>
			<div className="rounded-[1.75rem] border border-foreground/10 bg-background/80 p-6 sm:p-8">
				<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
					<div>
						<p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Say hello</p>
						<a href={`mailto:${email}`} className="mt-3 inline-flex items-center gap-3 text-2xl font-semibold tracking-tight sm:text-4xl">
							
							{email}
						</a>
					</div>
					<div className="flex flex-wrap gap-3">
						{links.map((link) => (
							<a key={link.label} href={link.href} className="inline-flex items-center gap-2 rounded-full border border-foreground/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.24em] text-foreground/80 transition-colors hover:border-foreground/40 hover:bg-foreground/5">
								{link.label}
								
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}