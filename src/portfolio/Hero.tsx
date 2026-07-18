type Props = {
	name: string;
	tagline: string;
	location: string;
	description: string;
	primaryCta: { label: string; href: string };
	secondaryCta: { label: string; href: string };
};

import TextType from "@/components/TextType";



export default function Hero({ name, tagline, location, description, primaryCta, secondaryCta }: Props) {
	return (
		<section className="relative   px-4 pt-6 sm:px-6 lg:px-8">
			<div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
			</div>
			<div className="mx-auto min-h-[92svh] w-full max-w-7xl flex items-center justify-center py-10 sm:py-14">
				<div className="relative z-10 max-w-3xl mx-auto text-center">
					<h1 className="text-balance font-black leading-[0.95] tracking-tight text-5xl sm:text-7xl lg:text-[8.5rem] text-black ">
						<TextType
							text={["Matisse"]}
							typingSpeed={100}
							pauseDuration={1500}
							showCursor
							cursorCharacter="|"
							cursorBlinkDuration={0.25}
						/>
					</h1>

					<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
						<a
							href={primaryCta.href}
							className="inline-flex items-center gap-2 rounded-full border border-foreground bg-foreground px-5 py-3 font-mono text-sm font-semibold uppercase tracking-[0.24em] text-background transition-transform hover:-translate-y-0.5"
						>
							{primaryCta.label}
							<span aria-hidden="true">↗</span>
						</a>
						<a
							href={secondaryCta.href}
							className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/70 px-5 py-3 font-mono text-sm font-semibold uppercase tracking-[0.24em] text-foreground transition-colors hover:border-foreground/40 hover:bg-foreground/5"
						>
							{secondaryCta.label}
						</a>
					</div>
				</div>

			</div>
		</section>
	);
}