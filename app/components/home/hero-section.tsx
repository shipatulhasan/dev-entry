import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-5 py-24">

      <div className="grid items-center gap-14 md:grid-cols-2">

        <div className="space-y-7">

          <h1 className="text-5xl font-bold leading-tight">
            Learn. Build. Share.
            <br />

            <span className="text-blue-600">
              Grow Together
            </span>
          </h1>

          <p className="text-muted-foreground max-w-lg">
            Discover tutorials, read inspiring stories,
            and build your skills with a community of
            developers.
          </p>

          <div className="flex gap-4">
            <Button size="lg">
              Get Started
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Explore
            </Button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/hero.svg"
            alt="hero"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}