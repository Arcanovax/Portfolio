import React from 'react';


type Props = {
	title: string;
	subtitle?: string;
	className?: string;
};

export default function SectionHeading({ title, subtitle, className }: Props) {
	return (
		<header className='mb-6 flex flex-col gap-2'>
			<p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
				Portfolio
			</p>
			<h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
				{title}
			</h2>
			{subtitle ? <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">{subtitle}</p> : null}
		</header>
	);
}