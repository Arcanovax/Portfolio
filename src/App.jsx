import React from 'react';
import PortfolioShell from './portfolio/PortfolioShell';

const portfolioData = {
	name: 'Matisse',
	tagline: 'Portfolio frontend, design systems et interfaces qui respirent.',
	location: 'France / Remote',
	description:
		"Je conçois des interfaces éditoriales, fluides et robustes, avec un soin particulier pour la hiérarchie visuelle et les détails d'animation.",
	primaryCta: {
		label: 'Voir les projets',
		href: '#projects',
	},
	secondaryCta: {
		label: 'Me contacter',
		href: '#contact',
	},
	projects: [
		{
			title: 'Portfolio system',
			description:
				'Un socle de portfolio modulaire pensé pour enchaîner plusieurs sections avec une lecture claire et une identité forte.',
			year: '2026',
			stack: ['React', 'Vite', 'Tailwind'],
			href: '#contact',
		},
		{
			title: 'Landing narrative',
			description:
				'Une landing page orientée storytelling avec une hiérarchie typographique nette et des blocs très respirants.',
			year: '2025',
			stack: ['UI', 'Motion', 'Brand'],
			href: '#contact',
		},
	],
	experience: [
		{
			year: '2024 - now',
			title: 'Frontend builder',
			company: 'Freelance',
			description:
				'Conception et intégration de pages produit, de portfolios et de systèmes de composants orientés lisibilité.',
		},
		{
			year: '2022 - 2024',
			title: 'Interface designer',
			company: 'Studio',
			description:
				'Collaboration sur des interfaces web à forte exigence visuelle, avec un focus sur la structure et le rythme.',
		},
	],
	email: 'hello@matissedev.fr',
	links: [
		{ label: 'GitHub', href: 'https://github.com/' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/' },
		{ label: 'Email', href: 'mailto:hello@matissedev.fr' },
	],
};

export default function App() {
	return (
		<PortfolioShell {...portfolioData} />
	);
}