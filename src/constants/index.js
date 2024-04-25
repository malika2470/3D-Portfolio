import {
  AI,
    CC,
    cImage,
    cppImage,
    cssImage,
    htmlImage,
    javaImage,
    javascriptImage,
    ML,
    NLP,
    pythonImage,
    reactImage,
    QA,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Artificial Intelligence",
      icon: AI,
      
    },
    {
      title: "Machine Learning",
      icon:ML,
      
     
    },
    {
      title: "Natural Language Processing",
      icon:NLP,
      
    },
    {
      title: "Cloud Computing",
      icon:CC,
 
   
    },
  ];
  
  const technologies = [
    {
      //name: "C",
      icon: cImage,
    },
    {
      //name: "C++",
      icon: cppImage,
    },
    {
      //name: "css",
      icon: cssImage,
    },
    {
      //name: "html",
      icon: htmlImage,
    },
    {
      //name: "Java",
      icon: javaImage,
    },
    {
      //name: "javascript",
      icon: javascriptImage,
    },
    {
      //name: "Python",
      icon: pythonImage,
    },
    {
      //name: "React",
      icon: reactImage,
    },
    
  ];
  
  const experiences = [
    {
      title: "QA Tester",
      company_name: "Tester Work",
      icon: QA,
      date: "Nov 2023 - Mar 2024",
      points: [
        "Performed software testing to identify and fix bugs.",
        "Created test plans and cases for different applications.",
        "Contributed to successful software releases through QA.",
        "Adapted to Agile methods for efficient testing.",
      ],
    },
  
  ];
  
  
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };