import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowSmRightIcon, CheckIcon, XIcon } from "@heroicons/react/solid";

const QuizPiece = ({ title, onClick }) => {
  return (
    <motion.div
      layoutId={`quizPiece_${title}`}
      className="bg-white px-4 py-2 rounded-md select-none w-auto inline-block cursor-pointer shadow-lg"
      style={{ opacity: 1, visibility: "visible" }}
      onClick={onClick}
    >
      {title}
    </motion.div>
  );
};

const choices = ["Ekmek", "Bisiklet", "Barınak", "Taşıt"];
const correctChoice = 1;

export default function ExampleQuiz() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [quizState, setQuizState] = useState("answering");

  const onClickChoice = (clickedPieceIndex) => {
    if (quizState == "wrong") setQuizState("answering");

    if (quizState == "correct") return;

    setSelectedIndex(
      clickedPieceIndex == selectedIndex ? null : clickedPieceIndex
    );
  };

  const onClickCheck = () => {
    setQuizState(selectedIndex == correctChoice ? "correct" : "wrong");
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-semibold">
        Bicycle <span className="select-none">means</span>
      </h1>

      <div className="relative mt-4 w-full border-b-4 h-12 border-black">
        {selectedIndex != null && (
          <QuizPiece
            onClick={() => onClickChoice(selectedIndex)}
            key={selectedIndex}
            title={choices[selectedIndex]}
          />
        )}
        <div
          onClick={onClickCheck}
          className={`absolute right-0 bottom-1 h-8 w-10 rounded ${
            quizState == "answering"
              ? "bg-black"
              : quizState == "correct"
              ? "bg-green-500"
              : "bg-red-500"
          } transition flex justify-center items-center ${
            selectedIndex == null ? "opacity-25" : "opacity-100 cursor-pointer"
          }`}
        >
          {quizState == "answering" ? (
            <ArrowSmRightIcon className="w-6 h-6 text-white" />
          ) : quizState == "correct" ? (
            <CheckIcon className="w-6 h-6 text-white" />
          ) : (
            <XIcon className="w-6 h-6 text-white" />
          )}
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {choices.map((piece, i) => {
          if (i == selectedIndex) return null;

          return (
            <QuizPiece
              onClick={() => onClickChoice(i)}
              key={piece}
              title={piece}
            />
          );
        })}
      </div>
    </div>
  );
}
