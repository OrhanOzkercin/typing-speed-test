import { useNavigate, useLocation } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import { Timer, Target, Keyboard, RotateCcw, Gauge, Zap } from "lucide-react";
import { cn } from "~/lib/utils";
import { AnimatedBackground } from "~/components/animated-background";

interface TestResult {
  wpm: number;
  accuracy: number;
  correctWords: number;
  totalTypedWords: number;
}

export default function ResultPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state as TestResult;

  if (!result) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Button onClick={() => navigate("/test")} className="font-mono">
          Start New Test
        </Button>
      </div>
    );
  }

  // Calculate characters per minute (CPM)
  const averageWordLength = 5; // Standard word length
  const cpm = result.wpm * averageWordLength;

  const stats = [
    {
      icon: Gauge,
      label: "Words per Minute",
      value: result.wpm,
      subValue: `${cpm} CPM`,
      color: "text-primary"
    },
    {
      icon: Target,
      label: "Accuracy",
      value: `${result.accuracy}%`,
      subValue: `${result.correctWords} correct words`,
      color: "text-green-500"
    },
    {
      icon: Keyboard,
      label: "Words Typed",
      value: result.totalTypedWords,
      subValue: `${Math.round(result.totalTypedWords / 60)} words/sec`,
      color: "text-blue-500"
    }
  ];

  const getSpeedRating = (wpm: number) => {
    if (wpm < 20) return { text: "Beginner", color: "text-zinc-500" };
    if (wpm < 40) return { text: "Intermediate", color: "text-blue-500" };
    if (wpm < 60) return { text: "Above Average", color: "text-green-500" };
    if (wpm < 80) return { text: "Fast", color: "text-yellow-500" };
    return { text: "Professional", color: "text-purple-500" };
  };

  const speedRating = getSpeedRating(result.wpm);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="transition-opacity duration-1000">
        <AnimatedBackground />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen px-4 space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-mono font-bold">
              Test Complete!
            </h1>
            <div className="flex items-center justify-center gap-2">
              <Zap className={cn("w-5 h-5", speedRating.color)} />
              <p className={cn("text-xl font-mono", speedRating.color)}>
                {speedRating.text} Typist
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className={cn(
                  "bg-background/80 backdrop-blur-sm rounded-lg p-6",
                  "border shadow-lg transition-all duration-300",
                  "hover:scale-105 hover:shadow-xl"
                )}
              >
                <div className="flex flex-col items-center space-y-2">
                  <stat.icon className={cn("w-8 h-8", stat.color)} />
                  <h2 className="text-sm font-mono text-muted-foreground">
                    {stat.label}
                  </h2>
                  <p className={cn("text-3xl font-mono font-bold", stat.color)}>
                    {stat.value}
                  </p>
                  <p className="text-sm font-mono text-muted-foreground">
                    {stat.subValue}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <Button
              onClick={() => navigate("/test")}
              className="font-mono group"
              size="lg"
            >
              <RotateCcw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-300" />
              Try Again
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 