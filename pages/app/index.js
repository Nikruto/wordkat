import axios from "axios";
import absoluteUrl from "next-absolute-url";
import CourseCard from "../../components/courseCard";
import Data from "../api/courses.json";

export default ({ courses }) => {
  return (
    <div>
      <div className="w-full max-w-xl mx-auto flex flex-col items-center pt-8 space-y-8">
        {courses.map((course) => (
          <CourseCard key={course.title} item={course} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return { props: { courses: Data.courses } };
}

// export async function getServerSideProps(content) {
//   const { protocol, host } = absoluteUrl(content.req);
//   const baseUrl = `${protocol}//${host}`;

//   const res = await axios.get(`${baseUrl}/api/course/all`);
//   return { props: { courses: res.data.courses } };
// }
