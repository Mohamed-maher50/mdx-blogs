import { Zap, Palette, Code, Rocket } from "lucide-react";

export const categories = [
  {
    id: "design",
    title: "Design",
    description: "UI/UX design principles and patterns",
    icon: Palette,
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "development",
    title: "Development",
    description: "Web development best practices",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "performance",
    title: "Performance",
    description: "Optimization and speed techniques",
    icon: Zap,
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "Latest trends and technologies",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
];
