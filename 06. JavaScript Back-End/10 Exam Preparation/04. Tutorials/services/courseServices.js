const Course = require("../models/Course");

exports.getAllByDate = async (search) => {
  const query = {};

  if (search) {
    query.title = new RegExp(search, "i");
  }
  return Course.find(query).sort({ createdAt: 1 }).lean();
};

exports.getRecent = async () => {
  return Course.find({}).sort({ userCount: -1 }).limit(3).lean();
};

exports.getAll = async () => {
  return Course.find({}).lean();
};

exports.getById = (id) => {
  return Course.findById(id).lean();
};

exports.create = (courseData) => {
  return Course.create(courseData);
};

exports.enrollCourse = async (courseId, userId) => {
  const course = await Course.findById(courseId);

  course.enrolled.push(userId);
  course.userCount++;
  course.save();
};

exports.edit = async (id, course) => {
  const existingCourse = await Course.findByIdAndUpdate(id, course);

  existingCourse.title = course.title;
  existingCourse.description = course.description;
  existingCourse.imageUrl = course.imageUrl;
  existingCourse.duration = course.duration;

  await existingCourse.save();
};

exports.deleteCourse = async (id) => {
  await Course.findByIdAndDelete(id);
};
