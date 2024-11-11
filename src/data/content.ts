// NOTE: You can split this file into multiple files if you want to, especially as you add more content.

export const personalInfo = {
  name: "Iara S. Ravagni",
  title: "Bioengineer diving into AI",
  imageUrl: "/profile.jpeg",
  about: `Bioengineer from Argentina with a passion for integrating AI into healthcare. My recent projects include developing a pregnancy contractions monitor and working on innovative solutions for physical therapy through virtual reality. These experiences reflect my commitment to blending technology with healthcare to drive meaningful change. 

  Currently, I’m expanding my expertise in AI at Duke University, where I’m pursuing a Master of Engineering in Artificial Intelligence for Product Innovation. My goal is to leverage AI to create cutting-edge solutions in healthcare, and I’m excited about the potential to contribute to advancements in this field through both my academic and practical work. 

  Outside of work and studies, I enjoy staying active at the gym, trying new restaurants, and capturing moments through photography. These interests help me maintain a balanced and well-rounded perspective, which I believe enhances my professional creativity.`,
  contact: {
    email: "is.ravagni@gmail.com",
    github: "https://github.com/iaravagni",
    linkedin: "https://linkedin.com/in/iararavagni",
    twitter: "https://twitter.com/ ",
  }
};


export const skills = [
  {
    name: "AI/ML",
    items: ["PyTorch", "TensorFlow"],
  },
  {
    name: "Programming",
    items: ["Python", "SQL", "C++", "Dart"],
  },
  {
    name: "Cloud & MLOps",
    items: ["AWS", "Azure ML", "Docker"],
  },
  
  {
    name: "Data Science",
    items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Jupyter"],
  },
  {
    name: "Tools",
    items: ["Git", "Unity", "VS Code", "Jupyter Lab"],
  },
];

export const experience = [
  {
    title: "Duke Innovation Co-Lab Developer",
    company: "Duke Innovation Co-Lab",
    location: "Durham, NC",
    period: "2024 - Present",
    description: [
      "Contributed to the development of a VR system for nurse training by integrating AI chatbots and speech recognition, enhancing the training experience with interactive, real-time feedback.",
    ],
  },
  {
    title: "Analyst in Business Development & Alliance Management ",
    company: "Celnova Pharma",
    location: "Buenos Aires, Argentina",
    period: "2022 - 2024",
    description: [
      "Developed a Python GUI app to automate business case processes, improving the speed of opportunity analysis.",
      "Explored licensing opportunities in Latin America through market studies and key company connections, driving business alliances and assessing viability with opportunity analysis.",
      "Supported strategic alliances with major industry players like Novartis and Alnylam. Participated in contract reviews and negotiations and created data-driven reports on project status and molecule performance for partners."
    ],
  },
];

export const education = [
  {
    degree: "M.Eng. in Artificial Intelligence for Product Innovation",
    school: "Duke University",
    location: "Durham, NC",
    period: "2024 - 2025",
    description: "Coursework: Modelling & Processing Algorithms, Sourcing Data for Analytics, Optimization",
  },
  {
    degree: "B.S. in Bioengineering",
    school: "Instituto Tecnológico Buenos Aires (ITBA)",
    location: "Buenos Aires, Argentina",
    period: "2018 - 2022",
    description: "Coursework: ML, Biomedical Signals & Image Processing, Biostatistics, Bioinformatics, Bioinstrumentation",
  },
]; 

export const projects = [
    {
      title: "Pregnancy contractions monitoring device",
      description: "Developed a prototype for a pregnancy contractions monitoring device. The device integrated Arduino microcontrollers and Myoware sensors. Its Flutter app enabled real-time Bluetooth data transmission, while Firebase ensured secure storage. Collaborating across disciplines, I validated the device accuracy through comprehensive testing, honing my skills in hardware, software, and interdisciplinary teamwork.",
      technologies: ["Flutter", "Dart", "Signal Processing", "Hardware", "Firebase"],
      internalLink: "/projects/vaia",
      externalLink: "https://github.com/iaravagni/ProyectoFinal",
      image: "/projects/vaia/vaia.png",
    },
    {
      title: "VR Physical Therapy",
      description: "Designed and implemented KineVirtual, a VR therapy solution aimed at improving hand and wrist function. Integrated advanced hand recognition technology to accurately track and analyze movements, providing real-time feedback on exercise performance. This innovative approach created a highly immersive and interactive rehabilitation experience, significantly enhancing patient engagement.",
      technologies: ["Unity", "C++",],
      internalLink: "/projects/kineVirtual",
      externalLink: "https://github.com/iaravagni/kineVirtual",
      image: "/projects/kineVirtual/kineVirtual.png",
    },
  ];