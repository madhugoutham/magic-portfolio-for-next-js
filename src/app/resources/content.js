import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Madhu Goutham Reddy",
  lastName: "Ambati",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Machine Learning Engineer & Computer Vision Specialist",
  avatar: "/images/avatar.jpg",
  location: "America/Chicago", // IANA time zone identifier for Chicago
  languages: ["English"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to Madhu's Newsletter</>,
  description: (
    <>
      I occasionally share insights on scalable machine learning, computer vision, and emerging AI innovations.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/madhugoutham",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/madhu-goutham-reddy-ambati/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:madhugouthamreddy@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Machine Learning Engineer & Computer Vision Specialist</>,
  subline: (
    <>
      I'm Madhu, a Machine Learning Engineer and Research Assistant at Northern Illinois University, where I develop scalable ML models and advanced computer vision solutions.
      <br />
      I also build robust MLOps pipelines and contribute to cutting-edge research in AI.
    </>
  ),
};

const about = {
  label: "About",
  title: "About Me",
  description: `Meet ${person.name}, a seasoned ${person.role} based in Illinois.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        With over 3 years of experience in developing scalable machine learning models, data pipelines, and advanced computer vision solutions, I have consistently driven impactful improvements in prediction accuracy and system efficiency.
        <br />
        My expertise spans deep learning, reinforcement learning, and transfer learning, complemented by a strong foundation in MLOps and cloud services.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Northern Illinois University",
        timeframe: "Aug 2023 – Present",
        role: "Machine Learning Research & Computer Vision Specialist",
        achievements: [
          <>
            Engineered and deployed production-grade deep learning models, reducing image analysis time by 50% for critical projects.
          </>,
          <>
            Developed scalable pipelines for processing large datasets, achieving 84.39% test accuracy using DenseNet-201.
          </>,
          <>
            Published peer-reviewed research on advanced computer vision algorithms and innovative ML solutions.
          </>,
        ],
        images: [],
      },
      {
        company: "Tata Consultancy Services",
        timeframe: "May 2021 – Jul 2023",
        role: "Software Engineer (Client: Experian)",
        achievements: [
          <>
            Crafted financial services applications managing credit scores for over 2 million consumers.
          </>,
          <>
            Led the migration of on-premise systems to AWS, ensuring zero downtime and optimizing data processing workflows.
          </>,
          <>
            Implemented agile DevOps practices and CI/CD pipelines, reducing deployment time by 40%.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Northern Illinois University",
        description: <>Master of Science in Computer Science (GPA: 3.7, Aug 2023 – May 2025)</>,
      },
      {
        name: "SRM Institute of Science & Technology",
        description: <>Bachelor of Technology (GPA: 3.8)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Machine Learning & AI",
        description: (
          <>
            Proficient in Python, TensorFlow, PyTorch, and advanced ML frameworks to develop scalable machine learning models, including deep learning, reinforcement learning, and transfer learning.
          </>
        ),
        images: [],
      },
      {
        title: "MLOps & Deployment",
        description: (
          <>
            Experienced in designing robust MLOps pipelines using Apache Spark, Hadoop, AWS cloud services, and CI/CD practices for efficient model deployment.
          </>
        ),
        images: [],
      },
      {
        title: "Data Analysis & Visualization",
        description: (
          <>
            Skilled in Pandas, NumPy, Matplotlib, and Power BI for data analysis, predictive analytics, and crafting impactful visualizations.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Insights on Machine Learning & AI",
  description: `Read about ${person.name}'s latest research, technical explorations, and industry insights.`,
};

const work = {
  label: "Work",
  title: "Projects & Research",
  description: `A showcase of projects and research by ${person.name}, featuring innovative machine learning and computer vision solutions.`,
};

const gallery = {
  label: "Gallery",
  title: "My Photo Gallery",
  description: `A curated collection of images showcasing my journey and professional milestones.`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "Gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "Gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "Gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "Gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "Gallery image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "Gallery image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
