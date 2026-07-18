import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import ProjectGrid from './ProjectGrid';
import ExperienceTimeline from './ExperienceTimeline';
import ContactCard from './ContactCard';

type Props = {
	name: string;
	tagline: string;
	location: string;
	description: string;
	primaryCta: { label: string; href: string };
	secondaryCta: { label: string; href: string };
	projects: Array<{
		title: string;
		description: string;
		year: string;
		stack: string[];
		href: string;
	}>;
	experience: Array<{
		year: string;
		title: string;
		company: string;
		description: string;
	}>;
	email: string;
	links: Array<{ label: string; href: string }>;
};

import Threads from '../components/Threads';


export default function PortfolioShell(props: Props) {
	const [amp, setAmp] = useState(1.55);


	useEffect(() => {
		const MIN = 0.3;
		const MAX = 1.55;
		const targetRef = { current: MAX } as { current: number };
		const currentRef = { current: MAX } as { current: number };
		let rafId: number | null = null;

		function updateTarget() {
			const scrollTop = window.scrollY || window.pageYOffset;
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
 			targetRef.current = MAX + (MIN - MAX) * progress;
 			startLoop();
 		}

 		function loop() {
 			currentRef.current += (targetRef.current - currentRef.current) * 0.12;
 			setAmp(currentRef.current);
 			if (Math.abs(currentRef.current - targetRef.current) > 0.001) {
 				rafId = requestAnimationFrame(loop);
 			} else {
 				rafId = null;
 			}
 		}

 		function startLoop() {
 			if (rafId == null) rafId = requestAnimationFrame(loop);
 		}

 		window.addEventListener('scroll', updateTarget, { passive: true });
 		updateTarget();

 		return () => {
 			window.removeEventListener('scroll', updateTarget);
 			if (rafId) cancelAnimationFrame(rafId);
 		};
 	}, []);

	
	return (
		<div className="relative min-h-screen overflow-hidden bg-transparent text-foreground">
			<Threads
				color={[0.0, 0.0, 0.0]}
				amplitude={amp}
				distance={-0.25 + amp}
				enableMouseInteraction={true}
				backgroundColor="#0b1020"
				className="fixed inset-0 -z-10"
			/>
			<div className="relative z-10">
				<Hero
					name={props.name}
					tagline={props.tagline}
					location={props.location}
					description={props.description}
					primaryCta={props.primaryCta}
					secondaryCta={props.secondaryCta}
				/>
				<div className="space-y-20 py-8 pb-20 sm:space-y-24">
					<ProjectGrid projects={props.projects} />
					<ExperienceTimeline items={props.experience} />
					<ContactCard email={props.email} links={props.links} />
				</div>
			</div>
		</div>
	);
}