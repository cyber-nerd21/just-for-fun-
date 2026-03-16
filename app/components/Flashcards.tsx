"use client";
import { useState } from "react";
import { blocks } from "./data";

export default function Flashcards() {
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
  const [flipped, setFlipped] = useState<number | null>(null);

  const block = blocks.find((b) => b.id === selectedBlock);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      {!selectedBlock ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-2">🧠 CNN Revision</h1>
          <p className="text-center text-gray-400 mb-8">Select a block to start</p>
          <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
            {blocks.map((b) => (
              <div
                key={b.id}
                onClick={() => { setSelectedBlock(b.id); setFlipped(null); }}
                className="cursor-pointer bg-gray-800 hover:bg-green-900 border border-gray-700 hover:border-green-500 rounded-xl p-6 text-center transition-all duration-300"
              >
                <p className="text-lg font-bold">{b.title}</p>
                <p className="text-gray-400 text-sm mt-1">{b.cards.length} cards</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => { setSelectedBlock(null); setFlipped(null); }}
            className="mb-6 text-gray-400 hover:text-white transition"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-bold text-center mb-8">{block?.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {block?.cards.map((card, i) => (
              <div
                key={i}
                onClick={() => setFlipped(flipped === i ? null : i)}
                className="cursor-pointer bg-gray-800 hover:bg-gray-700 rounded-xl p-6 min-h-40 flex items-center justify-center text-center transition-all duration-300"
              >
                {flipped === i ? (
                  <p className="text-green-400 text-sm font-medium whitespace-pre-line">{card.back}</p>
                ) : (
                  <p className="text-white font-bold text-lg">{card.front}</p>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}