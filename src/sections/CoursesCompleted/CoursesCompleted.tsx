import CoursesCompletedCard from "../../components/courses/coursesCompletedCard";
import { coursesCompleted } from "../../data/coursescompleted";

function CoursesCompleted() {
  return (
    <section
      id="courses"
      className="relative px-6 py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#8B5CF6]">
            Courses Completed
          </p>

          <h2 className="text-[#F8F7FF]">
            Learning beyond
            <br />
            <span className="gradient-text">
              the classroom.
            </span>
          </h2>

          <p className="mt-6 text-lg text-[#716B85]">
            A collection of professional courses and hands-on learning
            experiences that have helped me strengthen my technical
            knowledge and expand my skills.
          </p>
        </div>

        {/* Courses */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {coursesCompleted.map((course, index) => (
            <CoursesCompletedCard
              key={course.id}
              course={course}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesCompleted;