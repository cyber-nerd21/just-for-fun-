"use client";
import { useState } from "react";

const cards = [
  { name: "ResNet", key: "Skip connections — Output = F(x) + x — Solves vanishing gradient" },
  { name: "InceptionNet", key: "Parallel filters (1×1, 3×3, 5×5) — 1×1 for bottleneck" },
  { name: "VGGNet", key: "Stacked 3×3 filters — Two 3×3 = one 5×5 receptive field" },
  { name: "MobileNet", key: "Depthwise Separable Convolutions — Lightweight for mobile" },
  { name: "ShuffleNet", key: "Channel Shuffling — Ultra lightweight" },
  { name: "EfficientNet", key: "Compound Scaling — Depth + Width + Resolution together" },
  { name: "AlexNet", key: "First ImageNet winner — Introduced ReLU + Dropout" },
  { name: "LeNet", key: "OG CNN — Handwritten digit recognition — 1998" },
];

export default function Flashcards() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-2">CNN Architectures 🧠</h1>
      <p className="text-center text-gray-400 mb-8">Click a card to reveal key idea</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => setFlipped(flipped === i ? null : i)}
            className="cursor-pointer bg-gray-800 hover:bg-gray-700 rounded-xl p-6 min-h-32 flex items-center justify-center text-center transition-all duration-300"
          >
            {flipped === i ? (
              <p className="text-green-400 text-sm font-medium">{card.key}</p>
            ) : (
              <p className="text-white text-lg font-bold">{card.name}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}