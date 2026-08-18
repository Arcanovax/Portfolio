import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export type CarouselSlide = {
  image: string
  title: string
  description: string
  alt?: string
}

type PatternProps = {
  slides?: CarouselSlide[]
  className?: string
}

const DEFAULT_SLIDES: CarouselSlide[] = Array.from({ length: 5 }, (_, i) => ({
  image: `https://picsum.photos/1000/800?grayscale&random=${i + 10}`,
  title: `Slide ${i + 1}`,
  description: `Beautiful landscape description for slide ${i + 1}.`,
}))

function CarouselSlideCard({
  slide,
  priority,
}: {
  slide: CarouselSlide
  priority: boolean
}) {
  return (
    <Card className="group/card relative aspect-video overflow-hidden border-0 p-0">
      <img
        src={slide.image}
        alt={slide.alt ?? slide.title}
        width={1000}
        height={800}
        loading={priority ? "eager" : "lazy"}
        className="absolute inset-0 size-full scale-100 object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent" />
      <div className="relative flex h-full flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white">{slide.title}</h3>
        <p className="text-sm text-white/90">{slide.description}</p>
      </div>
    </Card>
  )
}

export function Pattern({ slides = DEFAULT_SLIDES, className }: PatternProps) {
  if (slides.length === 0) return null

  return (
    <Carousel className={className ?? "w-full max-w-md"}>
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={`${slide.image}-${index}`}>
            <div className="p-1">
              <CarouselSlideCard slide={slide} priority={index === 0} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default Pattern