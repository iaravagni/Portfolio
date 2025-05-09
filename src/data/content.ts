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
    items: ["Python", "SQL", "C++", "C#", "Dart"],
  },
  {
    name: "Cloud & MLOps",
    items: ["AWS", "Azure ML", "Docker", "GCP"],
  },
  
  {
    name: "Data Science",
    items: ["Pandas", "NumPy", "Scikit-learn", "NLTK", "Pyomo"],
  },
  {
    name: "Tools",
    items: ["Git", "Unity", "VS Code", "Jupyter Lab"],
  },
];

export const experience = [
  {
    title: "Developer",
    company: "Duke Innovation Co-Lab",
    location: "Durham, NC",
    period: "Sep 2024 - Present",
    description: [
      "Contributed to the development of a VR system for nurse training in Unity by coding in C# and integrating AI chatbots and speech recognition, enhancing the training experience with interactive, real-time feedback.",
      " Created a lip-audio synchronization algorithm using frequency analysis, achieving an 82% accuracy rate to improve speech alignment in VR simulations.",
    ],
  },
  {
    title: "Student Consultant",
    company: "Fashivly",
    location: "Durham, NC",
    period: "Jan 2025 - Apr 2025",
    description: [
      "Engineered an AI segmentation pipeline using Meta’s Segment Anything Model (SAM) to extract clothing and accessories from e-commerce images.",
    ],
  },
  {
    title: "Analyst in Business Development & Alliance Management ",
    company: "Celnova Pharma",
    location: "Buenos Aires, Argentina",
    period: "Aug 2022 - Aug 2024",
    description: [
      "Developed a Python GUI app to automate business case processes, reducing opportunity analysis time by 25% and improving decision-making efficiency.",
      "Conducted pharmaceutical market studies and assessed the viability of molecules and medical devices in Latin America, leading to 15+ successful licensing opportunities based on data-driven insights.",
      "Supported strategic partnerships with major industry players like Novartis and Alnylam. Participated in contract reviews and negotiations and created data-driven reports on project status and molecule performance for partners."
    ],
  },
];

export const education = [
  {
    degree: "M.Eng. in Artificial Intelligence for Product Innovation",
    school: "Duke University",
    location: "Durham, NC",
    period: "2024 - 2025",
    description: "Coursework: Sourcing for Data Analytics, Modelling Process and Algorithms, Deep Learning, LLMs, Optimization",
  },
  {
    degree: "B.S. in Bioengineering",
    school: "Instituto Tecnológico Buenos Aires (ITBA)",
    location: "Buenos Aires, Argentina",
    period: "2018 - 2022",
    description: "Coursework:  Biomedical Signals & Image Processing, Biostatistics, Bioinformatics, Bioinstrumentation",
  },
]; 

export const projects = [
    {
      key: 'glucose',
      title: "Blood Glucose Level Prediction", 
      overview: 'Blood glucose levels are influenced by numerous variables including physical activity, food intake, and individual physiology. Early prediction can empower individuals to manage and prevent health complications, especially for those with diabetes. This project seeks to build models that can forecast glucose levels based on a combination of behavioral and clinical data.',
      description: "This project explores multiple approaches for predicting blood glucose levels using multimodal data from the Big Ideas dataset. It includes data from wearables (accelerometer), nutritional inputs, and demographic/medical history features. The goal is to evaluate and compare naive, machine learning, and deep learning methods to provide personalized and accurate glucose level forecasts.",
      technologies: ["Time Series", "Deep Learning", "XGBoost", "Streamlit", "Python"],
      internalLink: "/projects/glucose",
      externalLink: "https://github.com/iaravagni/BloodGlucosePrediction",
      image: "/projects/glucose/glucose.jpg",
      features: [
        "Comparative Modeling Pipeline: Implements and evaluates naive (zero-shot), machine learning (XGBoost), and deep learning (fine-tuned Granite Time Series) approaches for predictive performance benchmarking.",
        "Multimodal Data Integration: Combines wearable sensor data (accelerometer), nutritional intake, and clinical/demographic features to enable holistic and personalized glucose level prediction.",
        "Interactive Streamlit App: Deploys a user-friendly web app where users can upload data, select patient samples, and visualize predictions from all three modeling approaches side-by-side."
      ],
    },
    {
      key: 'chatbot',
      title: "Duke Student Advisor Chatbot", 
      overview: 'An AI-powered chatbot that helps Duke University students quickly access information about programs, courses, professors, and campus events. Built with Streamlit and integrated with multiple retrieval tools, the app delivers accurate, real-time answers tailored to student needs.',
      description: "This student advisor chatbot acts as a virtual assistant for Duke students, offering detailed insights into academic programs (including MEM, AIPI, and those within Pratt), course catalogs, professor ratings, and university events. It uses OpenAI’s language models and a suite of custom-built tools connected to structured data sources and scraping pipelines. The backend also includes a robust evaluation system using Ollama to assess the quality of responses without requiring reference answers.",
      technologies: ["NLP", "AWS", "Pinecone", "Streamlit", "Python"],
      internalLink: "/projects/chatbot",
      externalLink: "https://github.com/iaravagni/Duke-Student-Advisor-Chatbot",
      image: "/projects/chatbot/chatbot.jpg",
      features: [
        "Multi-Tool Integration for Accurate Retrieval: Dynamically selects from specialized tools like mem_search, pratt_search, and rate_my_professor_info to provide targeted, up-to-date information based on student queries.",
        "Agentic Query Handling: Uses an agent-like architecture that determines which tool(s) to call per question, ensuring responses are relevant, context-aware, and well-structured.Agentic Query Handling: Uses an agent-like architecture that determines which tool(s) to call per question, ensuring responses are relevant, context-aware, and well-structured.",
        "Reference-Free LLM Evaluation: Leverages Ollama for internal quality monitoring by evaluating chatbot responses on clarity, accuracy, and Duke-specific relevance—no gold standard answers required."
      ],
    },
    {
      key: 'anemia',
      title: "Anemia Detection with RBC Segmentation",
      overview: "An end-to-end pipeline for anemia detection using blood smear images. Combines deep learning (SAM) and classic techniques (HOG + LightGBM) to segment red blood cells and assess anemia risk. Includes a Streamlit app for uploading samples and visualizing results interactively.",
      description: "This project focuses on the automated detection of anemia by segmenting red blood cells (RBCs) from blood smear images. The approach utilizes the Segment Anything Model (SAM) for fine-tuning and compares its performance to previous models such as UNet, LinkNet, and Attention-UNet, as well as non-deep learning methods like HOG with LightGBM.",
      technologies: ["Computer Vision", "Deep Learning", "Medical Imaging", "Streamlit", "Python"],
      internalLink: "/projects/anemia",
      externalLink: "https://github.com/iaravagni/RBC-Segmentation",
      image: "/projects/anemia/anemia.png",
      features: [
        "Automated RBC Segmentation: Fine-tuned SAM model outperforms standard segmentation models in accuracy and IoU.",
        "Hybrid Modeling Approach: Comparison of deep learning (SAM, UNet) and non-deep learning (HOG + LightGBM) methods.",
        "Interactive Web App: Deployed via Streamlit, allowing real-time RBC segmentation and anemia classification."
       ]
    },
    {
      key: 'deepseek',
      title: "Deepseek Censorship Removal",
      overview: "This project fine-tunes the DeepSeek-R1-Distill-Llama-8B model using LoRA to reduce censorship and improve response neutrality when addressing politically sensitive questions. The system incorporates a streamlined training pipeline, an interactive evaluation interface, and automated benchmarking using Google Gemini.",
      description: "Through low-rank adaptation (LoRA) and 4-bit quantization, the project efficiently modifies the LLM's behavior to produce more objective and less censored outputs. The approach includes generating and evaluating a specialized dataset of sensitive Q&A pairs, comparing baseline and fine-tuned models using a web interface, and scoring outputs with LLM-based judges on key dimensions like bias and accuracy.",
      technologies: ["NLP", "LoRA", "PEFT", "Streamlit", "Python"],
      internalLink: "/projects/deepseek",
      externalLink: "https://github.com/iaravagni/Deepseek-Censorship-Removal",
      image: "/projects/deepseek/deepseek.jpg",
      features: [
        "LoRA-based Fine-Tuning Pipeline: Implements memory-efficient 4-bit quantized LoRA for targeted model adjustment.",
        "Interactive Streamlit App: Allows side-by-side comparison of base vs. fine-tuned outputs with automated scoring from Google Gemini.",
        "LLM-Powered Dataset and Evaluation: Leverages GPT-4 and Mistral for dataset generation and Google Gemini for multi-dimensional response evaluation."
       ]
    },
    {
      key: 'buyersPred',
      title: "Repeat Buyers Prediction Challenge",
      overview: "This project addresses a critical challenge for merchants participating in the Double 11 sales day: identifying which new buyers are likely to become repeat customers. By leveraging anonymized shopping logs, we aim to predict customer retention and help merchants enhance their promotional strategies, leading to improved ROI and sustainable customer relationships.",
      description: "Predicting repeat buyers for the Double 11 sales event, this project leverages shopping logs and behavioral features to train machine learning models. An ensemble approach achieved ~0.67 AUROC, offering valuable insights to optimize marketing strategies and boost customer retention.",
      technologies: ["Machine Learning", "XGBoost", "LightGBM", "Python"],
      internalLink: "/projects/buyersPred",
      externalLink: "https://github.com/iaravagni/AIPI520_FinalProject",
      image: "/projects/buyersPred/buyersPred.png",
      features: [
        "AI-Driven Customer Retention Prediction: Built models to identify repeat buyers using historical shopping data.",
        "Ensemble Machine Learning: Combined multiple ML models (XGBoost, LightGBM, etc.) for higher accuracy.",
        "Advanced Feature Engineering: Extracted behavioral patterns, merchant interactions, and temporal trends."
      ]
    },
    {
      key: 'vaia',
      title: "Pregnancy contractions monitoring device",
      overview: "Accurate monitoring of uterine contractions is crucial for effective prenatal care. In this context, telemedicine emerges as a valuable tool to facilitate access to medical care and improve the quality of life for pregnant women. In this study, a prototype of a portable uterine contraction monitoring system based on electromyographic (EMG) signals was designed, developed, and evaluated. The system includes a mobile application and a low-cost wearable device. This prototype was tested with 14 physiological signals from pregnant women, achieving 79% accuracy and 83% recall in detecting uterine contractions. It was demonstrated that combining information from two EMG channels enhances the ability to identify uterine contractions. Additionally, the suggestion system provided recommendations that were accurate and consistent with healthcare professionals advice in all cases. The study concludes that the designed prototype can detect and characterize uterine contractions with high precision, even under adverse conditions. This study highlights a potential comprehensive telemedicine tool to improve prenatal care by providing accurate and timely information about uterine activity to both patients and medical staff.",
      description: "Developed a prototype for a pregnancy contractions monitoring device. The device integrated Arduino microcontrollers and Myoware sensors. Its Flutter app enabled real-time Bluetooth data transmission, while Firebase ensured secure storage. Collaborating across disciplines, I validated the device accuracy through comprehensive testing, honing my skills in hardware, software, and interdisciplinary teamwork.",
      technologies: ["Flutter", "Dart", "Signal Processing", "Hardware", "Firebase"],
      internalLink: "/projects/vaia",
      externalLink: "https://github.com/iaravagni/ProyectoFinal",
      image: "/projects/vaia/vaia.png",
      features: [
        "Portable, low-cost EMG-based system for uterine contraction monitoring.",
        "Achieved 79% accuracy and 83% recall with dual-channel EMG signal processing.",
        "Mobile app integration for real-time data and healthcare-aligned recommendations."
      ]
    },
    {
      key: 'kineVirtual',
      title: "VR Physical Therapy",
      overview: "KineVirtual is a Unity-based virtual physical therapy environment designed to help patients recover from hand and wrist injuries. The program includes a series of guided exercises and uses hand recognition technology to ensure proper form and effective rehabilitation.",
      description: "Designed and implemented KineVirtual, a VR therapy solution aimed at improving hand and wrist function. Integrated advanced hand recognition technology to accurately track and analyze movements, providing real-time feedback on exercise performance. This innovative approach created a highly immersive and interactive rehabilitation experience, significantly enhancing patient engagement.",
      technologies: ["Unity", "C++", "VR"],
      internalLink: "/projects/kineVirtual",
      externalLink: "https://github.com/iaravagni/kineVirtual",
      image: "/projects/kineVirtual/kineVirtual.png",
      features: [
        "Hand Recognition: Real-time tracking of hand movements to verify if exercises are being performed correctly.",
        "Preset Therapy Programs: A variety of exercises tailored specifically for hand and wrist rehabilitation.",
        "Real-Time Feedback: Immediate feedback on performance to guide patients through their recovery journey."
      ]
    },
  ];