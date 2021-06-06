import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import absoluteUrl from "next-absolute-url";
import { motion } from "framer-motion";
import Quiz from "../../components/quiz.js";
import Data from "../api/courses.json";

export default ({ slug, course }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const router = useRouter();

  const onClickContinue = () => {
    if (currentQuestion == course.content.length - 1)
      return router.push("/app");

    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="px-12">
      <Head>
        <title>{course.title}</title>
      </Head>
      <div className="min-h-screen pt-24 w-full max-w-5xl mx-auto">
        <Quiz
          key={currentQuestion}
          onClickContinue={onClickContinue}
          onClickPass={onClickContinue}
          word={course.content[currentQuestion].question}
          choices={course.content[currentQuestion].choices}
          correctChoice={course.content[currentQuestion].correctAnswer}
        />
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = Data.courses.map((course) => {
    return {
      params: {
        slug: course.slug,
      },
    };
  });

  return { paths, fallback: "blocking" };
}

export async function getStaticProps(context) {
  const { slug } = context.params;

  return {
    props: { slug, course: Data.courses.find((course) => course.slug == slug) },
  };
}

// export async function getServerSideProps(content) {
//   const { slug } = content.query;
//   const { protocol, host } = absoluteUrl(content.req);
//   const baseUrl = `${protocol}//${host}`;

//   try {
//     const res = await axios.get(`${baseUrl}/api/course/${slug}`);
//     return { props: { slug, course: res.data } };
//   } catch {
//     return {
//       redirect: {
//         permanent: false,
//         destination: "/app",
//       },
//     };
//   }
// }
