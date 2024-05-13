import {
    mobile,
    backend,
    web,
    javascript,
    postgresql,
    html,
    css,
    reactjs,
    aws,
    tailwind,
    terraform,
    mssql,
    git,
    snowflake,
    docker,
    epam,
    freelance,
    tshort,
    dalle,
    metaverse,
    threejs,
    professionalism,
    timeManagement,
    workEthic,
    communication,
    junior_top,
    junior_bottom,
    bachelor_top,
    bachelor_bottom,
    specialist_top,
    specialist_bottom
  } from "../assets";
  
  const softSkills = [
    {
      title: "Communication",
      icon: communication,
    },
    {
      title: "Professionalism",
      icon: professionalism,
    },
    {
      title: "Time management",
      icon: timeManagement,
    },
    {
      title: "Work ethic",
      icon: workEthic,
    },
  ];
  
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
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactJS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Snowflake",
      icon: snowflake,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "Postgesql",
      icon: postgresql,
    },
    {
      name: "MSSQL",
      icon: mssql,
    },
    {
      name: "Terraform",
      icon: terraform,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: ".Net and Angular Developer",
      company_name: "EPAM",
      icon: epam,
      iconBg: "#383E56",
      date: "Nov 2020 - Jun 2021",
      project_description: `Sell Side event management platform which covers workflows of different types of interactions organized 
      by banks for Issuers or Investors, including Conferences.`,
      points: [
        "Developing and maintaining web application using Angular, .Net 4.5, MSSQL and other related technologies.",
        "Collaborating with other developers, product owner, QA and Business Analist.",
        "Update and optimization old codebase, creating new features.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: ".Net Developer",
      company_name: "EPAM",
      icon: epam,
      iconBg: "#383E56",
      date: "Jul 2021 - Jan 2022",
      project_description: `Data migration to the Snowflake platform using Azure cloud services 
      from customer databases.`,
      points: [
        "Developing and maintaining web application using .Net 6, Azure services, Snowflake and other related technologies.",
        "Collaborating with cross-functional teams including other developers, QA,  DevOps, Solution Architect and Business Analist.",
        "Creating new features. Creating effective stored procedures on Snowflake. Creating function and durable function on Azure",
        "Participating in code reviews, creating Unit and Component tests.",
      ],
    },
    {
      title: ".Net Developer",
      company_name: "EPAM",
      icon: epam,
      iconBg: "#383E56",
      date: "Feb 2022 - May 2023",
      project_description: `Data migration to the Snowflake platform using AWS cloud services 
      from customer databases.`,
      points: [
        "Developing and maintaining web application using .Net 6, AWS services, Snowflake and other related technologies.",
        "Collaborating with cross-functional teams including other developers, QA,  DevOps, Solution Architect, Business Analist and Product owner.",
        "Creating new features. Working with Snowflake. Creating Lambda function, Step function on AWS",
        "Working with DynamoDB, SQS, SNS, ECS(Fargate), IAM, Parameter Store, Secrets Manager, S3, EventBridge.",
        "Creatig Lambda for auto rotate API key in other lambdas.",
        "Description of AWS services in Terraform.",
        "Creating lambdas using Python",
        "Participating in code reviews, creating Unit and Component tests.",
      ],
    },
    {
      title: ".Net Developer",
      company_name: "EPAM",
      icon: epam,
      iconBg: "#383E56",
      date: "Jun 2023 - Now 2023",
      project_description: `Financial workflow automation for a major ticket seller in the US. Including filtering and enrichment of data series 
      with subsequent data storage in AWS Aurora`,
      points: [
        "Developing and maintaining web application using .Net 7, AWS services, PostgreSql and other related technologies.",
        "Collaborating with cross-functional teams including other developers, QA,  DevOps, Solution Architect and Delivery manager.",
        "Creating new features. Creating Lumbda function on AWS",
        "Working with SQS, SNS, IAM, Parameter Store, Secrets Manager, S3, EventBridge, API Gateway and Apache Kafka.",
        "Description of AWS services in Terraform.",
        "Creating lambdas with diference inputs",
        "Participating in code reviews, creating Unit and Component tests.",
      ],
    },
    {
      title: "Freelancer .Net and React Developer",
      company_name: "Freelance",
      icon: freelance,
      iconBg: "#383E56",
      date: "Dec 2023 - Nowaday",
      project_description: `Freelance projects, self improvement`,
      points: [
        "Creating myself ReactJS aplications using 3d objects, MongoDb and other related technologies.",
        "Research of new frameworks from the front-end side, new features, work with Chat GPT api.",
        "Research in implementing responsive design and ensuring cross-browser compatibility.",
        "Creat landing pages, using ReactJS and .Net.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "T-shorts print maker",
      description:
        "Web-based platform that allows users to design the print of their dreams for a t-shirt and check how it will look on a 3D model. You can download your print, as well as you can use Dall-e service using the context menu on the page. Also, you can change the color of the T-shirt.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "openAI",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tshort,
      source_code_link: "https://github.com/ByshenkoSergey/t-short_print_maker",
      web_page_link: "https://t-short-print.com/",
    },
    {
      name: "Dalle network",
      description:
        "Web application that enables users to create a wide variety of images using the DALL-E service and share these photos with other users. You can download the created photo as well. The application has a large number of predefined promts to AI.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "openAI",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
      ],
      image: dalle,
      source_code_link: "https://github.com/ByshenkoSergey/dalle_network",
      web_page_link: "https://dall-e-network.cloud/",
    },
    {
      name: "Metaversus landing",
      description:
        "Landing to enter various metaverses. This landing page is a demonstration of the NextJS framework's capabilities for creating different graphic elements.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: metaverse,
      source_code_link: "https://github.com/ByshenkoSergey/metaversus-landing",
      web_page_link: "https://imaginary-metauniverse.online/",
    },
  ];

  const education = [
    {
      name: "Kyiv National Economic University named after Vadym Hetman",
      type: "collage",
      description: `Serhii Viktorovych Byshenko graduated from 
      the College of Information Systems and Technologies of the Vadym Hetman 
      Kyiv National University of Economics in 2008, State Higher Education Institution, 
      majoring in "Design, production and maintenance of radio technical devices" 
      and qualified as a radio technician.`,
      image_top: junior_top,
      image_bottom: junior_bottom,
      degree: "junior specialist"
    },
    {
      name: `National Technical University of Ukraine 
      “Igor Sikorsky Kyiv Polytechnic Institute” `,
      type: "university",
      description: `Serhii Viktorovych Byshenko graduated from the National Technical University of Ukraine
       "Kyiv Polytechnic Institute" in 2012 and received a basic higher education in the field of training 
       "Radio-electronic devices" and obtained a bachelor's degree in radio-electronic devices.`,
      image_top: bachelor_top,
      image_bottom: bachelor_bottom,
      degree: "bachelor"
    },
    {
      name: `National Technical University of Ukraine 
      “Igor Sikorsky Kyiv Polytechnic Institute” `,
      type: "university",
      description: `Serhii Viktorovych Byshenko graduated from the National Technical University of Ukraine 
      "Kyiv Polytechnic Institute" in 2014 and received a full higher education 
      majoring in "Intellectual technologies of microsystem radio electronic equipment" and 
      qualified as a design engineer`,
      image_top: specialist_top,
      image_bottom: specialist_bottom,
      degree: "specialist"
    },
    
  ];
  
  export { services, softSkills, technologies, experiences, testimonials, projects, education };