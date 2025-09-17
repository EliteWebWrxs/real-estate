import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function CompanyHistory() {
  const milestones = [
    {
      year: "2009",
      title: "Foundation",
      description:
        "Earl began his premium real estate career with a vision to redefine service standards in Tampa",
    },
    {
      year: "2015",
      title: "Market Leadership",
      description:
        "Became one of the leading premium real estate specialists in the Tampa Bay area",
    },
    {
      year: "2018",
      title: "Premium Focus",
      description:
        "Specialized exclusively in premium properties and high-net-worth clientele",
    },
    {
      year: "2021",
      title: "Digital Innovation",
      description:
        "Pioneered virtual reality property tours and advanced marketing techniques",
    },
    {
      year: "2024",
      title: "Sustainable Premium",
      description:
        "Leading Tampa's premium market in eco-luxury and sustainable property solutions",
    },
  ];

  const values = [
    {
      title: "Excellence",
      description:
        "I pursue perfection in every detail, from property presentation to client service.",
    },
    {
      title: "Integrity",
      description:
        "Transparent, honest relationships built on trust and mutual respect.",
    },
    {
      title: "Innovation",
      description:
        "Embracing cutting-edge technology to enhance the premium real estate experience.",
    },
    {
      title: "Exclusivity",
      description:
        "Curating the finest properties for the most discerning clientele in Tampa.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company History */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            My Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto text-pretty">
            {
              "From the beginning of my career to becoming Tampa's premier premium real estate specialist, my journey spans over a decade of innovation, growth, and unwavering commitment to excellence."
            }
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-24">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-amber-200" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <Card className="border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <Badge
                        variant="secondary"
                        className="mb-3 bg-amber-100 text-amber-800"
                      >
                        {milestone.year}
                      </Badge>
                      <h3 className="font-serif text-xl font-semibold text-slate-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-3xl font-bold text-slate-900 mb-6">
            My Core Values
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {
              "The principles that guide every decision and define my commitment to excellence."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <Card
              key={value.title}
              className="border-slate-200 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 text-center">
                <h4 className="font-serif text-xl font-semibold text-slate-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
