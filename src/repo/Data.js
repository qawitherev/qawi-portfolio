export const companyList = [
  {
    name: "AirdroiTech",
    url: "https://airdroitech.com/",
    imageSrc:
      "https://airdroitech.com/wp-content/uploads/2021/03/AirdroiTech-Logo-header-400x96.png",
    imageAlt: "airdroitech-logo",
    description: "Mar 2023 - Nov 2023",
  },
  {
    name: "FPT Software",
    url: "https://fptsoftware.com/",
    imageSrc:
      "https://fptsoftware.com/-/media/project/fpt-software/fso/systems/logo/logo.svg?as=1&iar=0&extension=webp&modified=20230519141554&hash=A28FD0836414E4F10707ECCC57D396B2",
    imageAlt: "fpt-logo",
    description: "Jan 2024 - Current",
  },
];

export const getMobileStack = (index) => {
  switch (index) {
    case 0:
      return {
        name: "Kotlin",
        alt: "kotlin-logo",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png",
        description:
          "Kotlin is a statically-typed programming language that runs on the Java Virtual Machine (JVM) and can also be compiled to JavaScript or native code.",
      };
    case 1:
      return {
        name: "Swift",
        alt: "swift-logo",
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUHbR_02Y1hb45WaOafcClJ7yx2m-yYjxwtdMXDau9qw&s",
        description:
          "Swift is a programming language developed by Apple for iOS, macOS, watchOS, tvOS, and other Apple platforms.",
      };
    case 2:
      return {
        name: "Flutter",
        alt: "flutter-logo",
        src: "https://pbs.twimg.com/profile_images/1187814172307800064/MhnwJbxw_400x400.jpg",
        description:
          "Flutter is an open-source UI software development toolkit created by Google. It is used to build natively compiled applications for mobile, web, and desktop from a single codebase.",
      };
    case 3:
      return {
        name: "Java",
        alt: "java-logo",
        src: "https://www.shareicon.net/data/512x512/2016/09/23/833700_windows_512x512.png",
        description:
          "Java is a versatile, object-oriented, and platform-independent programming language originally developed by Sun Microsystems and now owned by Oracle Corporation.",
      };
    case 4:
      return {
        name: "Dart",
        alt: "dart-logo",
        src: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Dart_logo.png",
        description:
          "Dart is a programming language developed by Google. It is known for its simplicity, speed, and versatility. Dart is often associated with the Flutter framework.",
      };
    case 5:
      return {
        name: "Firebase",
        alt: "firebase-logo",
        src: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",
        description:
          "Google's platform for app development. Features real-time database, authentication, cloud functions, hosting. Simplifies backend tasks for scalable web and mobile applications.",
      };
    default:
      return null;
  }
};

export const getWebInfo = (index) => {
  switch (index) {
    case 0:
      return {
        name: "React",
        alt: "react-logo",
        src: "https://cdn.iconscout.com/icon/free/png-256/free-react-1-282599.png?f=webp",
        description:
          "React.js, commonly referred to as React, is an open-source JavaScript library for building user interfaces. Developed and maintained by Facebook, React is widely used for creating interactive and dynamic user interfaces in web application.",
      };
    case 1:
      return {
        name: "TailWind",
        alt: "tailwind-logo",
        src: "https://play.tailwindcss.com/social-square.jpg",
        description:
          "Tailwind CSS is a utility-first CSS framework that provides a set of low-level utility classes to build designs directly in your markup. Unlike traditional CSS frameworks that come with predefined components and styles.",
      };
    case 2:
      return {
        name: "NodeJS",
        alt: "nodejs-logo",
        src: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
        description:
          "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows developers to use JavaScript for server-side and networking application.",
      };
    case 3:
      return {
        name: "TypeScript",
        alt: "typescript-logo",
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
        description:
          "TypeScript is a statically typed superset of JavaScript that adds optional static typing and other features to the language. It is developed and maintained by Microsoft.",
      };
    default:
      return {
        name: "React",
        alt: "react-logo",
        src: "http",
        description: "",
      };
  }
};

export const outsideSkillList = [
  {
    name: "Azure DevOps",
    description:
      "Azure DevOps is a Microsoft platform supporting the entire software development lifecycle. It integrates tools for version control, build automation, continuous integration, release management, and collaboration, facilitating efficient and streamlined development processes in the cloud.",
    imgAlt: "devops-logo",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1145617831905681408/XNKktHjN_400x400.png",
  },
  {
    name: "Postman API",
    description:
      "Postman API simplifies and streamlines API development, testing, and collaboration. It offers an intuitive interface for designing, testing, and automating APIs, enhancing efficiency in building and maintaining robust and scalable API ecosystems.",
    imgAlt: "postman-logo",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9DoWEX_QalwNQhW-FhoZbokljsNKK3gg_S49EqstiEH1hdMYBVRaiNW-JNq8y3JW1ko&usqp=CAU",
  },
  {
    name: "SQL Workbench",
    description:
      "SQL Workbench is a powerful, cross-platform SQL client tool. It provides a user-friendly interface for database management, query execution, and schema exploration. Supporting various database systems, it enables developers and analysts to interact with databases efficiently.",
    imgAlt: "sql-workbench-logo",
    imgSrc:
      "https://pbs.twimg.com/profile_images/621577553376100352/lvR3kClO_400x400.png",
  },
  {
    name: "Xcode",
    description:
      "Xcode is Apple's integrated development environment (IDE) for macOS and iOS app development. It offers a comprehensive set of tools, including code editing, debugging, interface design, and testing. Developers use Xcode to create high-quality applications for Apple's ecosystem.",
    imgAlt: "xcode-logo",
    imgSrc:
      "https://w7.pngwing.com/pngs/505/718/png-transparent-xcode-macos-bigsur-icon-thumbnail.png",
  },
  {
    name: "Figma",
    description:
      "Figma is a cloud-based design collaboration platform. It enables teams to create, prototype, and collaborate on user interfaces and user experiences in real-time. Figma supports seamless design workflows, version control, and interactive prototyping, fostering efficient collaboration among designers and stakeholders.",
    imgAlt: "figma-logo",
    imgSrc:
      "https://s3-alpha.figma.com/hub/file/3152337111/0e0f44e4-8de2-49c9-b8f0-406ece8fd1b6-cover.png",
  },
  {
    name: "Matter (CSA)",
    description:
      "Matter is a global, open-source standard that aims to simplify the smart home ecosystem by allowing internet-connected devices from different manufacturers to simply and securely communicate.",
    imgAlt: "matter-logo",
    imgSrc:
      "https://seeklogo.com/images/M/matter-icon-logo-105B56921E-seeklogo.com.png",
  },
];

export const getSocialSite = (index) => {
  switch (index) {
    case 0:
      return {
        name: "LinkedIn",
        alt: "linkedin-logo",
        src: "https://www.vectorico.com/wp-content/uploads/2018/02/LinkedIn-Icon-Square.png",
        link: "https://www.linkedin.com/in/abdul-qawi-bin-kamran-912a411a2/",
      };
    case 1:
      return {
        name: "GitHub",
        alt: "github-logo",
        src: "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
        link: "https://github.com/qawitherev",
      };
    case 2:
      return {
        name: "Email",
        alt: "email-logo",
        src: "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-512.png",
        link: "",
      };
    case 3:
      return {
        name: "Mobile",
        alt: "mobile-logo",
        src: "https://iconape.com/wp-content/png_logo_vector/emergency-phone-symbol-logo.png",
        link: "",
      };
    default:
      return {
        name: "LinkedIn",
        alt: "linkedin-logo",
        src: "http",
        link: "",
      };
  }
};

export const ProjectType = {
  PROFESSIONAL: "professional",
  ACADEMIC: "academic",
  PERSONAL: "personal",
};

export const projectListV2 = [
  {
    type: ProjectType.PROFESSIONAL,
    name: "AirTouch IR",
    company: companyList[0].name,
    description: "Lorem ipsum Airtouch IR",
    role: "Mobile Developer",
    stack: [
      getMobileStack(1).src,
      getMobileStack(2).src,
      getMobileStack(4).src,
    ],
    githubLink: null,
  },
  {
    type: ProjectType.ACADEMIC,
    name: "LETAK",
    company: null,
    description: "lorem ipsum LETAK",
    role: null,
    stack: [
      getMobileStack(0).src,
      getMobileStack(3).src,
      getMobileStack(5).src,
    ],
    githubLink: "https://github.com/qawitherev/LETAK",
  },
  {
    type: ProjectType.ACADEMIC,
    name: "Project Satria",
    company: null,
    description: "lorem ipsum Project Satria",
    role: null,
    stack: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e9/Opengl-logo.svg",
      "https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png",
    ],
    githubLink: "https://github.com/qawitherev/LETAK",
  },
  {
    type: ProjectType.PERSONAL,
    name: "Pomodoro Timer",
    company: null,
    description: "lorem ipsum Pomodoro Timer",
    role: null,
    stack: [getMobileStack(2).src, getMobileStack(4).src],
    githubLink: "https://github.com/qawitherev/pomodoroBloc",
  },
  {
    type: ProjectType.PERSONAL,
    name: "Matter Commissioning",
    company: null,
    description: "lorem ipsum Matter Commissioning",
    role: null,
    stack: [
      getMobileStack(1).src,
      getMobileStack(2).src,
      getMobileStack(4).src,
      outsideSkillList[5].imgSrc,
    ],
    githubLink: "https://github.com/qawitherev/MatterCommissioning",
  },
  {
    type: ProjectType.PERSONAL,
    name: "ToDo CRUD",
    company: null,
    description: "lorem ipsum ToDo CRUD",
    role: null,
    stack: [getWebInfo(2).src],
    githubLink: "https://github.com/qawitherev/todolist2",
  },
];
