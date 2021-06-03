import { useState } from "react";
import { motion } from "framer-motion";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const QuizPiece = ({ title, onClick, finished = false }) => {
  return (
    <motion.div
      layoutId={title}
      className={`bg-white px-4 py-2 rounded-md border-2 rounded-b-lg border-b-4 border-black select-none w-auto inline-block ${
        finished ? "" : "cursor-pointer"
      }`}
      onClick={onClick}
    >
      {title}
    </motion.div>
  );
};

export default ({
  word,
  choices,
  correctChoice,
  onClickContinue,
  onClickPass,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [quizState, setQuizState] = useState("answering");
  const { windowWidth, windowHeight } = useWindowSize();

  const onClickChoice = (clickedPieceIndex) => {
    if (quizState == "wrong") setQuizState("answering");

    if (quizState == "correct") return;

    setSelectedIndex(
      clickedPieceIndex == selectedIndex ? null : clickedPieceIndex
    );
  };

  const onClickCheck = () => {
    if (quizState == "correct") onClickContinue();

    setQuizState(selectedIndex == correctChoice ? "correct" : "wrong");
  };

  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center">
        <motion.span layoutId="quiz_word" className="mr-2 text-4xl font-bold">
          {word}
        </motion.span>
        <span className="text-3xl font-normal">means</span>
      </div>
      <div className="max-w-full w-96 h-14 mt-32 border-b-4 border-black mx-auto">
        {selectedIndex != null && (
          <QuizPiece
            onClick={() => onClickChoice(selectedIndex)}
            key={selectedIndex}
            title={choices[selectedIndex]}
            finished={quizState == "correct"}
          />
        )}
      </div>
      <div className="mt-8 flex flex-wrap gap-2 justify-center">
        {choices.map((piece, i) => {
          if (i == selectedIndex) return null;

          return (
            <QuizPiece
              onClick={() => onClickChoice(i)}
              key={piece}
              title={piece}
              finished={quizState == "correct"}
            />
          );
        })}
      </div>

      <div className="flex justify-between mt-10 max-w-xl mx-auto items-center">
        <button
          onClick={onClickPass}
          className={`text-white bg-black border border-black hover:text-black hover:bg-transparent transition px-4 py-2 font-medium text-sm rounded cursor-pointer select-none ${
            quizState == "correct" ? "invisible" : ""
          }`}
        >
          Pass
        </button>
        <motion.button
          disabled={selectedIndex == null}
          onClick={onClickCheck}
          className={`text-white ${
            quizState == "answering"
              ? "bg-black border border-black hover:text-black hover:bg-transparent "
              : quizState == "correct"
              ? "bg-green-500"
              : "bg-red-500"
          } focus:outline-none
           transition px-4 py-2 font-medium text-sm rounded cursor-pointer select-none disabled:bg-gray-400  
           disabled:border-transparent disabled:cursor-auto disabled:hover:text-white`}
        >
          {quizState == "answering"
            ? "Check it"
            : quizState == "correct"
            ? "Correct Answer!"
            : "Wrong Answer!"}
        </motion.button>
      </div>
      {quizState == "correct" && (
        <Confetti width={windowWidth} height={windowHeight} />
      )}
    </div>
  );
};
