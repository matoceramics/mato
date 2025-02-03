// app/routes/courses/$title.tsx
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { useParams } from '@remix-run/react';
import { courses } from '../data/courses';

export default function CourseSlug() {
 // const { title } = useParams<{ title: string }>(); // Capture the dynamic 'title' param from the URL
const params = useParams();
const title =params.slug;
console.log('fdfkjdf', title);
  // Find the course based on the title from the URL
 const course = courses.find((course) => course.slug === title);
  //console.log('course', course)
 
   
  
  if (!course) {
    return <div className="text-center text-red-500 text-xl">Course not found</div>;
  }

  return (
    <div className="bg-white pr-5 pl-5 py-16 sm:py-10">
       {/* Header */}
       <Header />
     

      <div className="mx-auto max-w-4xl text-justify mt-2 text-sm  font-thin text-gray-600 font-light">
      <div className="mx-auto max-w-4xl text-justify mt-2 text-sm  font-thin text-gray-600 font-light">
        <p className="uppercase text-sm  font-semibold tracking-widest text-gray-600 dark:text-white">
           {course.title.replace(/-/g, ' ')} 
           </p>
      </div>
        
        <p className="mt-2 text-sm  font-thin text-gray-600 font-light">{course.description}</p>
        <p className="mt-2 text-sm  font-thin text-gray-600 font-light">{course.details}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="flex justify-center">
          <img 
            src={course.mainImage} 
            alt={course.title} 
            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-cover mt-4 mb-4 "
          />
        </div>
        <div className="flex justify-center">
          <img 
            src={course.image} 
            alt={course.title} 
            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-cover mt-4 mb-4 "
          />
        </div>
</div>

       
       
        <p className='pl-5 pr-5'>
       
        <ul className="list-disc">
          <p className='font-semibold mt-6 mb-4'> During the course, you’ll:</p>
            <li>Explore handbuilding techniques to create your unique ceramic pieces.</li>
            <li>Choose from a variety of clay types to work with.</li>
            <li>Use underglazes to decorate and personalize your creations.</li>
            <li>Have your pieces professionally fired and glazed (only applicable for one day course) by us, ready for pickup in a few weeks.</li>
        </ul>

        <ul className="list-disc">
          <p className='font-semibold mt-6 mb-4'> Details:</p>
            <li>When: {course.when}</li>
            <li>Where: {course.where}</li>
            <li>Cost:  {course.cost}</li>
            <li>Terms of Payment: {course.payment}</li>
        </ul>

        <ul className="list-disc">
          <p className='font-semibold mt-6 mb-4'> What’s Included:</p>
            <li>A selection of clay to suit your project which is not included in the price. You can buy clay at the location for € 3 per kilo!</li>
            <li>Underglazes and engobes for painting and decorating.</li>
            <li>All necessary tools and materials.</li>
            <li>Professional firing and glazing of your pieces for one day course. </li>
        </ul>
        <ul className="list-disc">
          <p className='font-semibold mt-6 mb-4'> What to bring:</p>
            <li>Comfortable clothing you don’t mind getting a little messy.</li>
            <li>Your creativity and enthusiasm!</li>
        </ul>

        <ul className="list-disc">
          <p className='font-semibold mt-6 mb-4'> Booking Information:</p>
          Spaces are limited to a maximum of 5 people per class to ensure personalized guidance, so book your spot early! 
          <p>Bookings are done via email, phone, or Instagram DM only. </p>
           <p className="font-semibold"> Contact us at <br />
            Email: {course.author.email} <br />
             Or <br />
             Phone: {course.author.phone} <br />
             to reserve your spot.</p>
        </ul>
        <ul className="list-disc">
          <p className='font-semibold mt-6 mb-4'> Cancellation Policy:</p>
          
          <p> {course.policy}</p>
        </ul>
        </p>
      </div>
      {/* Footer */}
      <div className="mt-20 text-center"></div>
      <Footer />
    </div>
    
  );
   
}
