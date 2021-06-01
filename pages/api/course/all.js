import Courses from "../courses.json";

export default (req, res) => {
  res.json(Courses);
};
