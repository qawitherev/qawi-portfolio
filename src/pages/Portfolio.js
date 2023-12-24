import React, { useContext } from "react";
import { WindowSizeContext } from "../App";

const getMobileStack = (index) => {
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
          "Swift is a programming language developed by Apple for iOS, macOS, watchOS, tvOS, and other Apple platforms. It was introduced in 2014 as a replacement for Objective-C and is designed to be modern, safe, and developer-friendly.",
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
    default:
      return null;
  }
};

const getWebInfo = (index) => {
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
          "Tailwind CSS is a utility-first CSS framework that provides a set of low-level utility classes to build designs directly in your markup. Unlike traditional CSS frameworks that come with predefined components and styles, Tailwind encourages a more flexible and customizable approach.",
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

const companyList = [
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

const projectList = [
  {
    name: "project1",
    description: "project description",
    company: companyList[0].name,
    role: "Mobile Developer",
  },
  {
    name: "project2",
    description: "project description",
    company: companyList[1].name,
    role: "Mobile Developer",
  },
  {
    name: "project3",
    description: "project description",
    company: companyList[1].name,
    role: "Mobile Developer",
  },
  {
    name: "project4",
    description: "project description",
    company: companyList[1].name,
    role: "Mobile Developer",
  },
];

const outsideSkillList = [
  {
    name: "Azure DevOps",
    description: "Lorem ipsum Azure DevOps",
    imgAlt: "devops-logo",
    imgSrc:
      "https://pbs.twimg.com/profile_images/1145617831905681408/XNKktHjN_400x400.png",
  },
  {
    name: "Postman API",
    description: "Lorem ipsum Postman API",
    imgAlt: "postman-logo",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ9DoWEX_QalwNQhW-FhoZbokljsNKK3gg_S49EqstiEH1hdMYBVRaiNW-JNq8y3JW1ko&usqp=CAU",
  },
  {
    name: "SQL Workbench",
    description: "Lorerm ipsum SQL Workbench",
    imgAlt: "sql-workbench-logo",
    imgSrc:
      "https://pbs.twimg.com/profile_images/621577553376100352/lvR3kClO_400x400.png",
  },
  {
    name: "Xcode",
    description: "lorem ipsum Xcode",
    imgAlt: "xcode-logo",
    imgSrc:
      "https://w7.pngwing.com/pngs/505/718/png-transparent-xcode-macos-bigsur-icon-thumbnail.png",
  },
  {
    name: "Figma",
    description: "lorem ipsum Figma",
    imgAlt: "figma-logo",
    imgSrc:
      "https://s3-alpha.figma.com/hub/file/3152337111/0e0f44e4-8de2-49c9-b8f0-406ece8fd1b6-cover.png",
  },
  {
    name: "Matter",
    description: "lorem ipsum Matter open smart home protocol",
    imgAlt: "matter-logo",
    imgSrc:
      "https://seeklogo.com/images/M/matter-icon-logo-105B56921E-seeklogo.com.png",
  },
];

const getSocialSite = (index) => {
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

export function Portfolio() {
  return (
    <>
       <div className=" bg-gray-50">
           <div className="grid auto-rows-[200px] sm:grid-cols-1 md:grid-cols-6 gap-3 p-5">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-xl bg-white overflow-clip
                ${i === 0 ? "md:col-span-3 md:row-span-1" : ""}
              ${i === 1 ? "md:col-span-1 md:row-span-1" : ""}
              ${[2, 5].includes(i) ? "md:col-span-2 md:row-span-2" : ""}
              ${i === 3 ? "md:col-span-1 md:row-span-2" : ""}
              ${i === 4 ? "md:col-span-3 md:row-span-2" : ""}
              ${i === 6 ? "md:col-span-4 md:row-span-1" : ""}
              transform transition-transform hover:scale-95
              `}
                >
                  <SubBento data={i} />
                </div>
              ))}
            </div>
       </div>
    </>
  );
}

function SubBento(props) {
    const data = props.data;
    const { windowSize } = useContext(WindowSizeContext);
    if (windowSize === "max-sm") {
      switch (data) {
        case 0:
          return (
            <>
              <CatchPhraseSubBento />
            </>
          );
        case 1:
          return (
            <>
              <MobileStackSubBento />
            </>
          );
        case 2:
          return (
            <>
              <WebStackSubBento />
            </>
          );
        case 3:
          return (
            <>
              <CompanyWorkSubBento />
            </>
          );
        case 4:
          return (
            <>
              <ProjectNumberSubBento />
            </>
          );
        case 5:
          return (
            <>
              <OutsideSkillSubBento />
            </>
          );
        case 6:
          return (
            <>
              <SocialSiteSubBento />
            </>
          );
        default:
          return null;
      }
    } else {
      switch (data) {
        case 0:
          return (
            <>
              <CompanyWorkSubBento />
            </>
          );
        case 1:
          return (
            <>
              <ProjectNumberSubBento />
            </>
          );
        case 2:
          return (
            <>
              <MobileStackSubBento />
            </>
          );
        case 3:
          return (
            <>
              <SocialSiteSubBento />
            </>
          );
        case 4:
          return (
            <>
              <CatchPhraseSubBento />
            </>
          );
        case 5:
          return (
            <>
              <WebStackSubBento />
            </>
          );
        case 6:
          return (
            <>
              <OutsideSkillSubBento />
            </>
          );
        default:
          return null;
      }
    }
  }

function CompanyWorkSubBento() {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-full">
          <h1>{companyList.length}</h1>
          <h1>Companies served 💅🏻</h1>
        </div>
      </>
    );
  }
  
  function ProjectNumberSubBento() {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-full">
          <h1>{projectList.length}</h1>
          <h1>Projects done</h1>
        </div>
      </>
    );
  }
  
  function MobileStackSubBento() {
    return (
      <>
        <div className="flex flex-col items-center justify-center p-5 h-full">
          <h1>Mobile Development</h1>
          <div className=" py-3" />
          <div className="grid max-sm:grid-cols-3 max-md:grid-cols-3 md:grid-rows-3 md:grid-cols-2 gap-4 overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className=" h-12 w-12 rounded-lg"
                alt={getMobileStack(i).alt}
                src={getMobileStack(i).src}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
  
  function SocialSiteSubBento() {
    const handleOnClick = (index) => {
      switch (index) {
        case 0:
          window.open(
            "https://www.linkedin.com/in/abdul-qawi-bin-kamran-912a411a2/",
            "blank"
          );
          break;
        case 1:
          window.open("https://github.com/qawitherev", "blank");
          break;
        case 2:
          window.open("mailto:qawitherev@gmail.com", "blank");
          break;
        case 3:
          window.open("tel:0168284082", "blank");
          break;
        default:
          break;
      }
    };
  
    return (
      <>
        <div className=" absolute flex flex-col items-center justify-center h-full w-full p-7 z-10">
          <h1 className=" text-center">Lets get in touch!</h1>
          <div className="py-3" />
          <div className="flex max-sm:w-full max-md:w-full md:h-full md:flex-col md:flex-grow justify-around">
            {[...Array(4)].map((_, i) => (
              <img
                key={i}
                onClick={() => handleOnClick(i)}
                className=" cursor-pointer transition hover:scale-105 rounded-lg h-12 w-12"
                alt={getSocialSite(i).alt}
                src={getSocialSite(i).src}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
  
  function CatchPhraseSubBento() {
    return (
      <>
        <div className="relative h-full">
          {/* todo fix the background not filling when in <md */}
          <img
            className="absolute object-cover h-full w-full"
            alt="catchphrase-bg"
            src="https://wallpapers.com/images/hd/minimalist-best-laptop-for-coding-glt27d3cmfygaipy.jpg"
          />
          <div className="absolute flex flex-col items-center justify-center w-full h-full p-3 z-10">
            <h1 className="text-white">Hi, I am Abdul Qawi</h1>{" "}
            {/*todo: set the text into white  */}
            <h1 className="text-3xl font-bold text-white">A Multi-Tech</h1>
            <h1 className="text-3xl font-bold text-white"> Stack Master</h1>
          </div>
        </div>
      </>
    );
  }
  
  function WebStackSubBento() {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-full p-5">
          <h1>Web stack is...</h1>
          <div className=" py-3" />
          <div className="grid grid-cols-2 grid-rows-2 gap-4 ">
            {[...Array(4)].map((_, i) => (
              <div key={i}>
                <img
                  className=" rounded-lg h-12 w-12"
                  alt={getWebInfo(i).alt}
                  src={getWebInfo(i).src}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  
  function OutsideSkillSubBento() {
    return (
      <>
        <div className="flex flex-col items-center justify-center h-full p-5">
          <h1>I am also good with ...</h1>
          <div className="py-2"></div>
          <div className="flex justify-around max-sm:w-full sm:w-full md:w-3/4">
            {[...Array(6)].map((_, i) => (
              <img
                key={i}
                className="h-12 w-12 rounded-lg"
                alt={outsideSkillList[i].imgAlt}
                src={outsideSkillList[i].imgSrc}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
