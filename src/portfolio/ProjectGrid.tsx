import React from 'react';
import SectionHeading from './SectionHeading';

type Project = {
	title: string;
	description: string;
	year: string;
	stack: string[];
	href: string;
};

type Props = {
	projects: Project[];
};

export default function ProjectGrid({ projects }: Props) {
	return (
		<section id="projects" className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
			<SectionHeading
				title="Selected work"
				subtitle="Une structure sobre, éditoriale, avec des blocs clairs et beaucoup d’air."
			/>
			<div className="grid gap-4 lg:grid-cols-2">
				{projects.map((project) => (
					<a
						key={project.title}
						href={project.href}
						className="group rounded-[1.5rem] border border-foreground/10 bg-background/75 p-5 transition-transform hover:-translate-y-1 sm:p-6"
					>
						<div className="flex items-start justify-between gap-4">
							<div>
								<p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{project.year}</p>
								<h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
							</div>
							<span aria-hidden="true" className="text-foreground/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
						</div>
						<p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">{project.description}</p>
						<div className="mt-5 flex flex-wrap gap-2">
							{project.stack.map((item) => (
								<span key={item} className="rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-foreground/70">
									{item}
								</span>
							))}
						</div>
					</a>
				))}
			</div>
		</section>
	);
}