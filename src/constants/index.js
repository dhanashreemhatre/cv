import { trippy_d,tescom,chromatic} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Seo Internship",
        company_name: "Trippy D Solutions",
        icon: trippy_d,
        iconBg: "#accbe1",
        date: "May 2022 - July 2022",
        points: [
            "Built high-quality backlinks through outreach efforts and collaborations with relevant websites.",
            "Wrote compelling and informative content to support link-building and increase organic traffic.",
            "Monitored and analyzed website traffic and search engine rankings to inform ongoing optimization strategies.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Jee group-Tata Tele Services Gold",
        icon: tescom,
        iconBg: "#fbc3bc",
        date: "May 2023 - July 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Chromatic Infosystems Pvt. Ltd.",
        icon: chromatic,
        iconBg: "#b7e4c7",
        date: "Oct 2023 - Present",
        points: [
            "Led multiple projects, demonstrating strong project management and multitasking skills.",
            "Optimized website performance through code optimization, image compression, and caching, leading to faster page load times.",
            "Developed a payslip generator, automating payroll processes and ensuring accurate salary calculations.",
            "Worked on visual programming for a STEM kit product, enhancing software interaction with hardware systems.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/dhanashreemhatre',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/dhanashree-m-175bbb22b',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Multi Vendor Ecommerce Website',
        description: 'Multiple Vendors can register and sell their products. Full fledged E-Commerce Website. Technology used Typescript, Next js, Tailwind CSS, python (Djnago) backend-(RestFramework) ',
        link: 'https://github.com/dhanashreemhatre/Multi-Vendor-Ecommerce-Platform',
    }, 
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Sign Language Recognition',
        description: 'The Sign-Language Classifier is a web application designed to assist deaf individuals in communicating with others through sign language. It utilizes Flask for the backend, HTML, CSS, and JavaScript for the frontend to create an interactive and user-friendly interface. ',
        link: 'https://github.com/dhanashreemhatre/sign-language-classifier',
    },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];