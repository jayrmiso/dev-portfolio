import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex h-screen justify-center items-center">
      <span className="text-4xl font-bold">
        The quick brown fox jumps over the lazy dog
        <Button>Click me</Button>
      </span>
    </div>
  );
}
