import { useEffect, useState } from "react";

import { motion } from "motion/react";

import {
  MotionGrid,
  MotionGridCells,
  type Frames,
} from "@/components/animate-ui/primitives/animate/motion-grid";
import {
  RotatingText,
  RotatingTextContainer,
} from "@/components/animate-ui/primitives/texts/rotating";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const waveFrames = [
  [[2, 2]],
  [
    [1, 2],
    [2, 1],
    [2, 3],
    [3, 2],
  ],
  [
    [2, 2],
    [0, 2],
    [1, 1],
    [1, 3],
    [2, 0],
    [2, 4],
    [3, 1],
    [3, 3],
    [4, 2],
  ],
  [
    [0, 1],
    [0, 3],
    [1, 0],
    [1, 2],
    [1, 4],
    [2, 1],
    [2, 3],
    [3, 0],
    [3, 2],
    [3, 4],
    [4, 1],
    [4, 3],
  ],
  [
    [0, 0],
    [0, 2],
    [0, 4],
    [1, 1],
    [1, 3],
    [2, 0],
    [2, 2],
    [2, 4],
    [3, 1],
    [3, 3],
    [4, 0],
    [4, 2],
    [4, 4],
  ],
  [
    [0, 1],
    [0, 3],
    [1, 0],
    [1, 2],
    [1, 4],
    [2, 1],
    [2, 3],
    [3, 0],
    [3, 2],
    [3, 4],
    [4, 1],
    [4, 3],
  ],
  [
    [0, 0],
    [0, 2],
    [0, 4],
    [1, 1],
    [1, 3],
    [2, 0],
    [2, 4],
    [3, 1],
    [3, 3],
    [4, 0],
    [4, 2],
    [4, 4],
  ],
  [
    [0, 1],
    [0, 3],
    [1, 0],
    [1, 2],
    [1, 4],
    [2, 1],
    [2, 3],
    [3, 0],
    [3, 2],
    [3, 4],
    [4, 1],
    [4, 3],
  ],
] as Frames;

const sparkleFrames = [
  [[2, 2]],
  [
    [1, 2],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 2],
  ],
  [
    [0, 2],
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 0],
    [2, 1],
    [2, 2],
    [2, 3],
    [2, 4],
    [3, 1],
    [3, 2],
    [3, 3],
    [4, 2],
  ],
  [
    [0, 0],
    [0, 2],
    [0, 4],
    [2, 0],
    [2, 2],
    [2, 4],
    [4, 0],
    [4, 2],
    [4, 4],
  ],
  [
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
  ],
  [
    [0, 0],
    [0, 4],
    [4, 0],
    [4, 4],
  ],
  [
    [1, 1],
    [1, 3],
    [3, 1],
    [3, 3],
  ],
  [
    [0, 0],
    [0, 2],
    [0, 4],
    [2, 0],
    [2, 2],
    [2, 4],
    [4, 0],
    [4, 2],
    [4, 4],
  ],
] as Frames;

const pulseFrames = [
  [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 0],
    [1, 4],
    [2, 0],
    [2, 4],
    [3, 0],
    [3, 4],
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
  ],
  [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [1, 0],
    [1, 4],
    [2, 0],
    [2, 4],
    [3, 0],
    [3, 4],
    [4, 0],
    [4, 1],
    [4, 2],
    [4, 3],
    [4, 4],
  ],
  [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  [[2, 2]],
  [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ],
  [[2, 2]],
] as Frames;

const rotateFrames = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ],
  [
    [0, 2],
    [0, 3],
    [0, 4],
  ],
  [
    [0, 4],
    [1, 4],
    [2, 4],
  ],
  [
    [2, 4],
    [3, 4],
    [4, 4],
  ],
  [
    [4, 4],
    [4, 3],
    [4, 2],
  ],
  [
    [4, 2],
    [4, 1],
    [4, 0],
  ],
  [
    [4, 0],
    [3, 0],
    [2, 0],
  ],
  [
    [2, 0],
    [1, 0],
    [0, 0],
  ],
] as Frames;

const states = {
  greeting: {
    frames: waveFrames,
    label: "Hi! I'm Arjay",
  },
  welcome: {
    frames: sparkleFrames,
    label: "Welcome to my portfolio",
  },
  explore: {
    frames: pulseFrames,
    label: "Feel free to look around!",
  },
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const WelcomeGreeting = () => {
  const [state, setState] = useState<keyof typeof states>("greeting");

  const runStates = async () => {
    while (true) {
      for (const state of Object.keys(states) as (keyof typeof states)[]) {
        setState(state);
        await sleep(10000);
      }
    }
  };

  useEffect(() => {
    runStates();
  }, []);

  return (
    <motion.div
      layout
      className="px-3 h-11 gap-x-3 relative bg-transparent inline-flex items-center justify-center"
    >
      <motion.div layout="preserve-aspect">
        <MotionGrid
          gridSize={[5, 5]}
          frames={states[state].frames}
          className="w-fit gap-0.5"
        >
          <MotionGridCells className="size-[3px] rounded-full aspect-square bg-black/20 data-[active=true]:bg-black/70" />
        </MotionGrid>
      </motion.div>

      <RotatingTextContainer
        text={states[state].label}
        className="absolute left-[46px] top-1/2 -translate-y-1/2"
      >
        <RotatingText layout="preserve-aspect" className="text-black" />
      </RotatingTextContainer>

      <span className="invisible opacity-0" aria-hidden>
        {states[state].label}
      </span>

      {state === "greeting" && (
        <Avatar className="size-7 shrink-0">
          <AvatarImage src="/me.png" alt="Arjay" className="object-cover" />
          <AvatarFallback>AJ</AvatarFallback>
        </Avatar>
      )}
    </motion.div>
  );
};
