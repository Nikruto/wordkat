import Courses from "../courses.json";

export default function handler(req, res) {
  const { slug } = req.query;
  const data = Courses.courses.find((course) => course.slug == slug);

  if (!data) res.status(404);
  res.json(data);
}
