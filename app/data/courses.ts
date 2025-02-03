// app/data/courses.ts
export type Course = {
    title: string;
    description: string;
    details: string;
    slug: string;  // Slug property to be used in the URL
    author: {
      name: string;
      role: string;
      imageUrl: string;
    };
  };
  
  export const courses: Course[] = [
    {
      title: 'One-Day Handbuilding Ceramics Course',
      slug: 'one-day-handbuilding-ceramics-course',  // Make sure slug is in URL format
      description: 'Unleash your creativity with our One-Day Handbuilding Ceramics Course, perfect for beginners!',
      details: 'This course introduces handbuilding techniques like coiling, slab building, and pinching.',
      when:'Every Friday, 10:00 AM - 1:00 PM',
      where:'Spuistraat 56 Sous, Amsterdam',
      cost:'€ 65',
      payment:'Bank Transfer',
      service: 'Professional firing and glazing of your pieces.',
      policy:'You have 48 hours from the time of payment to cancel your registration for a full refund. If you need to reschedule, you can do so up to 24 hours before the workshop, subject to availability. Cancellations within 24 hours of the workshop are non-refundable and cannot be rescheduled.',
      mainImage:'/images/IMG_8783.jpg',
      image:'/images/IMG_8774.jpg',
      author: {
        name: 'Priti',
        role: 'Owner',
        email:'ceramicsmato@gmail.com',
        phone:'+31 624117304',
        instagram:'',
        imageUrl: '/images/IMG_8783.jpg',
      },
    },
    {
      title: '5-Weeks Handbuilding Ceramics Course',
      slug: '5-weeks-handbuilding-ceramics-course',  // Slug for another course
      description: 'Explore the art of ceramics with our 5-week intensive handbuilding course.',
      details: 'Join our 5-week handbuilding course to learn the fundamentals of working with clay. Each week, we’ll focus on a different technique with guided projects and hands-on demonstrations. You’ll shape, decorate, and refine your pieces using your choice of clay and underglazes. All materials, tools, and firings are included. No experience needed—just a willingness to get your hands dirty and explore the process.',
      when:'Every Friday, 10:00 AM - 1:00 PM ',
      where:'Spuistraat 56 Sous, Amsterdam',
      cost:'€ 225',
      payment:'Bank Transfer',
      service: 'Professional firing of your pieces. You will learn glazing on last week of the course',
      policy:'You have 48 hours from the time of payment to cancel your registration for a full refund. The course is flexible—you can register for all 5 classes at once or book weekly until you have completed all sessions. Cancellations made within 24 hours of a scheduled class will result in the loss of that session, as it cannot be rescheduled or refunded.',
      mainImage:'/images/IMG_8533.jpg',
      image:'/images/IMG_8946.jpg',
      author: {
        name: 'Priti',
        role: 'Owner',
        email:'ceramicsmato@gmail.com',
        phone:'+31 624117304',
        instagram:'',
        imageUrl: '/images/IMG_8533.jpg',
      },
    },
  ];
  