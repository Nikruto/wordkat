import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowSmRightIcon } from "@heroicons/react/solid";

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

export default () => {
  const choices = ["Ekmek", "Bisiklet", "Barınak", "Taşıt"];
  const [selectedItem, setSelectedItem] = useState(null);

  const onClickChoice = (piece) => {
    setSelectedItem(piece == selectedItem ? null : piece);
  };
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-semibold">
        Bicycle <span className="select-none">means</span>
      </h1>

      <div className="relative mt-4 w-full border-b-4 h-12 border-black">
        {selectedItem && (
          <QuizPiece
            onClick={() => onClickChoice(selectedItem)}
            key={selectedItem}
            title={selectedItem}
          />
        )}
        <div
          className={`absolute right-0 bottom-1 h-8 w-10 rounded bg-black transition flex justify-center items-center ${
            selectedItem == null ? "opacity-25" : "opacity-100 cursor-pointer"
          }`}
        >
          <ArrowSmRightIcon className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {choices
          .filter((choice) => choice != selectedItem)
          .map((piece) => (
            <QuizPiece
              onClick={() => onClickChoice(piece)}
              key={piece}
              title={piece}
            />
          ))}
      </div>
    </div>
  );
};
