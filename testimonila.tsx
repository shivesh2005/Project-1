import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at TechCorp",
    content:
      "FlowState completely transformed how my team manages projects. We've cut meeting time by 40% and productivity is up significantly.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Founder, Creative Studio",
    content:
      "The AI suggestions are incredibly accurate. It's like having a personal productivity coach that understands my workflow perfectly.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Engineering Lead at StartupX",
    content:
      "Finally, a tool that scales with our team. Integration was seamless and adoption was immediate across all departments.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Loved by Teams Worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how FlowState is helping teams achieve their best work.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg border border-border bg-card p-8">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-6 text-muted-foreground italic">{`"${testimonial.content}"`}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
