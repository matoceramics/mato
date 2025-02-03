// app/components/Body.tsx
import { Link } from '@remix-run/react';
import { courses } from '../data/courses';

export default function Body() {
  return (
    <div className="bg-white ">
      {/* Hero Image */}
      <div className="w-full mb-8">
        <img
          src="/images/IMG_8782.jpg"
          alt="Mato Ceramics Studio"
          className="w-full h-50 object-cover  shadow-md"
        />
      </div>

      {/* Featured Courses */}
      <section className="mt-12 pr-5 pl-5 max-w-6xl mx-auto">
        <h2 className="text-2xl font-thin text-center text-gray-900 dark:text-white"> Courses</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {courses.slice(0, 2).map((course) => (
            <article key={course.title} className="flex flex-col items-start">
             
              <h3 className="mt-4 text-xl font-thin text-gray-900 dark:text-white">
                <Link to={`/courses/${course.slug}`}>{course.title.replace(/-/g, ' ')}</Link>
              </h3>
              <p className="mt-2 text-sm  font-thin text-gray-600 font-light">{course.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/all-courses" className="text-blue-600 hover:underline">
            View All Courses →
          </Link>
        </div>
      </section>
      <div className="mt-16 text-center">
      <p className="uppercase text-sm tracking-widest text-gray-900 dark:text-white">Ceramics Studio for Courses and Workshops</p>
      </div>
      
    </div>
  );
}
