import { motion } from "framer-motion";

export default function QuizSummary({
  courseTitle,
  answerCount,
  correctAnswerCount,
  passedAnswerCount,
  wrongAnswerCount,
  onClickOk,
}) {
  return (
    <div>
      <h1 className="text-center">
        <motion.span className="text-4xl font-bold text-center">
          You have completed <br />
          {courseTitle} Course!
        </motion.span>
      </h1>
      <h1 className="text-center text-2xl mt-6">
        Out of <span className="font-bold">{answerCount}</span> words
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-10 space-y-12 md:space-y-0 md:space-x-24">
        <div className="flex flex-col items-center">
          <h3 className="text-center text-xl">
            You got <span className="font-bold">{correctAnswerCount}</span>{" "}
            words correct!
          </h3>
          <svg
            width="30"
            height="23"
            viewBox="0 0 53 42"
            className="mt-2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.5216 28.0582L8.71975 18.2538L8.01256 17.5464L7.30536 18.2538L2.7928 22.7675L2.08597 23.4745L2.7928 24.1815L17.8144 39.207L18.5216 39.9144L19.2288 39.207L50.2072 8.22073L50.914 7.51371L50.2072 6.80669L45.6946 2.29298L44.9874 1.58561L44.2802 2.29298L18.5216 28.0582Z"
              fill="#45FF41"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="flex flex-col">
          <h3 className="text-center text-xl">
            You got <span className="font-bold">{passedAnswerCount}</span> words
            passed!
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-center text-xl">
            You got <span className="font-bold">{wrongAnswerCount}</span> words
            wrong!
          </h3>
          <svg
            width="25"
            height="24"
            viewBox="0 0 47 46"
            fill="none"
            className="mt-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.2076 2.29292L38.5005 1.58581L37.7934 2.29284L23.4983 16.5858L9.20669 2.29292L8.49956 1.58572L7.79242 2.29292L2.79286 7.29292L2.08585 8L2.79286 8.70708L17.0845 23L2.79286 37.2929L2.08585 38L2.79286 38.7071L7.79242 43.7071L8.49956 44.4143L9.20669 43.7071L23.4983 29.4142L37.7934 43.7072L38.5005 44.4142L39.2076 43.7071L44.2071 38.7071L44.9142 38L44.2071 37.2929L29.9155 23L44.2071 8.70708L44.9142 8L44.2071 7.29292L39.2076 2.29292Z"
              fill="#FF4141"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="flex justify-center mt-12 md:mt-20">
        <button
          onClick={onClickOk}
          className="t-20 text-white bg-black border border-black hover:text-black hover:bg-transparent transition px-4 py-2 font-medium text-sm rounded cursor-pointer select-none"
        >
          Okay
        </button>
      </div>
    </div>
  );
}
