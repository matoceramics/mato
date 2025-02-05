// app/routes/courses.tsx
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { courses } from '../data/courses';
import { Link } from '@remix-run/react';

export default function CoursesPage() {
    
  return (
    <div className="bg-white py-16 sm:py-10">
      {/* Header */}
      <Header />
      <div className='pr-5 pl-5 '>
      <div className="mx-auto max-w-4xl text-justify mt-2 text-sm  text-gray-900 font-light">
        <p className="uppercase text-sm  p-10 font-semibold tracking-widest text-gray-900 dark:text-gray"> Courses </p>
      </div>
      {/* Courses List - Grid Layout */}
      <div className="mx-auto max-w-4xl grid gap-4 justify-center lg:grid-cols-2 xl:grid-cols-2">
        {courses.map((course) => (
          <article key={course.slug} className="flex flex-col items-start">
            <img
              src={course.author.imageUrl}
              alt={course.title}
              className=" bg-gray-100 h-96 w-96 object-fill"
            />
            <h3 className="mt-4 text-xl text-gray-900 dark:text-gray">
              <Link to={`/courses/${course.slug}`}>{course.title.replace(/-/g, ' ')}</Link>
            </h3>
            <p className="mt-2 text-sm  text-gray-900 font-light">{course.description}</p>
          </article>
        ))}
      </div>
      </div>
      {/* Footer */}
      <div className="mt-20 text-center"></div>

      <Footer />
    </div>
  );
  
}
