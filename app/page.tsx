import Flashcards from "./components/Flashcards";

export default function Home() {
  return (
    <main>
      <div className="text-center pt-8 pb-2">
        <p className="text-white-500 text-sm tracking-widest uppercase">Final Exam Revision</p>
        <p className="text-white-600 text-xs mt-1">IIT Guwahati × Masai — Module III</p>
      </div>
      <Flashcards />
    </main>
  );
} 