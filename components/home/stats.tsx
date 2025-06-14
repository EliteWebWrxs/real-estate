import { TrendingUp, Users, Building, Award } from "lucide-react";

const stats = [
  {
    icon: Building,
    number: "200+",
    label: "Properties Sold",
    description: "Successfully closed deals",
  },
  {
    icon: Users,
    number: "500+",
    label: "Happy Clients",
    description: "Satisfied customers",
  },
  {
    icon: TrendingUp,
    number: "$25M+",
    label: "Total Sales",
    description: "In property value",
  },
  {
    icon: Award,
    number: "12+",
    label: "Years Experience",
    description: "In real estate",
  },
];

export function Stats() {
  return (
    <section className="section-padding bg-gray-800">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-amber-500 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
