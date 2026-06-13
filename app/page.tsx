// app/page.tsx

import { Card, CardContent } from '@/components/ui/card'
import PageTitle from './components/shared/page-title'

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkText: string;
};






import {
  BookOpen,
  LayoutDashboard,
  Newspaper,
} from "lucide-react";
import HeroSection from './components/home/hero-section';

const features = [
  {
    icon: <BookOpen className="text-blue-500" />,
    title: "Tutorials",
    description: "Step-by-step guides to help you learn.",
    linkText: "Explore Tutorials →",
  },
  {
    icon: <Newspaper className="text-purple-500" />,
    title: "Stories",
    description: "Real stories from real developers.",
    linkText: "Read Stories →",
  },
  {
    icon: <LayoutDashboard className="text-cyan-500" />,
    title: "Dashboard",
    description: "Track your progress and achievements.",
    linkText: "Go To Dashboard →",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="container mx-auto px-5 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
            />
          ))}
        </div>
      </section>
    </>
  );
}



 const FeatureCard=({
  icon,
  title,
  description,
  linkText,
}: FeatureCard)=> {
  return (
    <Card>
      <CardContent className="space-y-5 p-6">

        <div>{icon}</div>

        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        <p className="text-muted-foreground">
          {description}
        </p>

        <button className="text-blue-600 font-medium">
          {linkText}
        </button>
      </CardContent>
    </Card>
  );
}
