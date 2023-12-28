import React, { useContext, useRef } from "react";
import { WindowSizeContext } from "../App";
import {
  companyList,
  getMobileStack,
  getWebInfo,
  outsideSkillList,
  getSocialSite,
  projectListV2,
  ProjectType,
} from "../repo/Data";
import { Heading2, Heading3 } from "../components/TextComponent";

export function Portfolio() {
  const { windowSize } = useContext(WindowSizeContext);
  const isSmallScreen = windowSize === "max-sm" || windowSize === "sm";
  const componentRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const scrollToComponent = (index) => {
    if (componentRefs[index].current && index !== 3 && index !== 4) {
      window.scrollTo({
        top: componentRefs[index].current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const descriptionComponents = [
    { component: <MobileStack />, refIndex: [1, 2] },
    { component: <WebStack />, refIndex: [2, 5] },
    { component: <CompanyWork />, refIndex: [3, 0] },
    { component: <ProjectNumber />, refIndex: [4, 1] },
    { component: <ProjectNumber />, refIndex: [5, 6] },
    { component: <OutsideSkill />, refIndex: [5, 6] },
  ];

  return (
    <>
      <div className="flex flex-col bg-theme-shade-1">
        <div className="grid auto-rows-[200px] sm:grid-cols-1 md:grid-cols-6 gap-3 p-5">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              onClick={() => scrollToComponent(i)}
              className={`rounded-xl bg-theme-shade-2 overflow-clip
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
        <div className="mt-10" />
        {descriptionComponents.map(({ component, refIndex }, index) => (
          <div
            key={index}
            ref={componentRefs[isSmallScreen ? refIndex[0] : refIndex[1]]}
          >
            {component}
          </div>
        ))}
        <DownloadResume />
      </div>
    </>
  );
}

function SubBento(props) {
  const data = props.data;
  const { windowSize } = useContext(WindowSizeContext);
  if (windowSize === "max-sm" || windowSize === "sm") {
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
        <h1>{projectListV2.length}</h1>
        <h1>Projects done</h1>
        <p className="text-xs">And Counting!</p>
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
          {[...Array(6)].map((_, i) => (
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
          className="absolute object-cover h-full w-full filter brightness-50"
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

function MobileStack() {
  return (
    <>
      <div className="flex flex-col justify-start px-5 mb-10">
        <h1
          className=" px-2
                  text-3xl font-sans text-orange-500 mb-2"
        >
          I am quite "mobile" with these technologies
        </h1>

        <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-3">
          {[...Array(6)].map((_, i) => (
            <div key={i} className=" flex flex-col bg-theme-shade-2 rounded-xl p-5">
              <h1 className="font-bold">{getMobileStack(i).name}</h1>
              <div className="py-1" />
              <div className=" flex justify-center">
                <img
                  className=" rounded-lg h-10 w-10"
                  alt={getMobileStack(i).alt}
                  src={getMobileStack(i).src}
                />
                <div className=" px-2" />
                <h1 className=" flex-grow text-justify font-ibm-sans">
                  {getMobileStack(i).description}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function WebStack() {
  return (
    <>
      <div className=" flex flex-col justify-start px-5 mb-10">
        <h1 className="px-2 text-3xl font-sans text-amber-500 mb-2">
          I develop websites with these
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col bg-theme-shade-2 rounded-xl p-5">
              <h1 className="font-bold">{getWebInfo(i).name}</h1>
              <div className="py-1" />
              <div className=" flex justify-center">
                <img
                  className=" rounded-lg h-10 w-10"
                  alt={getWebInfo(i).alt}
                  src={getWebInfo(i).src}
                />
                <div className=" px-2" />
                <h1 className=" flex-grow text-justify font-ibm-sans">
                  {getWebInfo(i).description}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function CompanyWork() {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-adt-green px-7 text-3xl mb-2">
          Companies I proudly serve for
        </h1>
        <div className="grid auto-rows-min-[150px] sm:grid-cols-1 md:grid-cols-2 gap-3 px-5">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              onClick={() => window.open(companyList[i].url, "blank")}
              className=" transition cursor-pointer hover:scale-95 rounded-xl bg-theme-shade-2 col-span-1 row-span-1 flex flex-col items-center justify-center h-full p-5"
            >
              <img
                className="w-1/2"
                alt={companyList[i].imageAlt}
                src={companyList[i].imageSrc}
              />
              <div className="py-2" />
              <h1 className=" font-ibm-sans">{companyList[i].description}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectNumber() {
  const { windowSize } = useContext(WindowSizeContext);
  const isSmallScreen = windowSize === "max-sm" || windowSize === "sm";
  const professionalList = projectListV2.filter(
    (project) => project.type === ProjectType.PROFESSIONAL
  );
  const academicList = projectListV2.filter(
    (project) => project.type === ProjectType.ACADEMIC
  );
  const personalList = projectListV2.filter(
    (project) => project.type === ProjectType.PERSONAL
  );

  const handleOnClick = (link) => {
    console.log('qawi1: handleOnClick')
    window.open(link, "blank");
  };

  const SmallScreen = () => {
    return (
      <>
        <div className="flex flex-col">
          {professionalList.length !== 0 ? (
            <Heading2 data={"Professional Gig"} />
          ) : null}
          {professionalList.map((_, i) => (
            <ProjectCard key={i} project={professionalList[i]} />
          ))}
          <div className="my-1" />
          {academicList.length !== 0 ? (
            <Heading2 data={"Academic Projects"} />
          ) : null}
          {academicList.map((_, i) => (
            <ProjectCard key={i} project={academicList[i]} />
          ))}
          <div className="my-1" />
          {personalList.length !== 0 ? (
            <Heading2 data={"Personal Projects"} />
          ) : null}
          {personalList.map((_, i) => (
            <ProjectCard key={i} project={personalList[i]} />
          ))}
        </div>
      </>
    );
  };

  const BigScreen = () => {
    return (
      <>
        <div className="flex flex-col justify-start">
          {professionalList.length !== 0 ? (
            <Heading2 data={"Professional Gig"} />
          ) : null}
          <div className="grid grid-cols-3 gap-4 mb-3">
            {professionalList.map((_, i) => (
              <ProjectCard key={i} project={professionalList[i]} />
            ))}
          </div>
          {academicList.length !== 0 ? (
            <Heading2 data={"Academic Projects"} />
          ) : null}
          <div className="grid grid-cols-3 gap-4 mb-3">
            {academicList.map((_, i) => (
              <ProjectCard key={i} project={academicList[i]} />
            ))}
          </div>
          {personalList.length !== 0 ? (
            <Heading2 data={"Personal Projects"} />
          ) : null}
          <div className="grid grid-cols-3 gap-4 mb-3">
            {personalList.map((_, i) => (
              <ProjectCard key={i} project={personalList[i]} />
            ))}
          </div>
        </div>
      </>
    );
  };

  const ProjectCard = (props) => {
    const project = props.project;
    return (
      <>
        <div className="row-span-1 col-span-1 bg-theme-shade-2 rounded-lg flex flex-col p-5 mb-4">
          <Heading3 data={"Name: " + project.name} />
          {project.company !== null ? (
            <Heading3 data={"Company: " + project.company} />
          ) : null}
          <Heading3 data={"Description: " + project.description} />
          {project.role !== null ? (
            <Heading3 data={"Role: " + project.role} />
          ) : null}
          <div className="flex">
            <Heading3 data="Stacks: " />
            <div className="mr-2" />
            <div className="flex justify-start flex-row mb-1">
              {project.stack.map((_, i) => (
                <img
                  className="h-6 w-6 rounded-md mr-1"
                  key={i}
                  alt={project.name + "logo"}
                  src={project.stack[i]}
                />
              ))}
            </div>
          </div>
          <div className="hover:cursor-pointer" onClick={()=>handleOnClick(project.githubLink)}>
            {project.githubLink !== null ? (
              <div className="flex">
                <Heading3 data="GitHub Repo: " />
                <div className="mr-2" />
                <div className="transform transition-transform hover:scale-110" >
                  <img
                    className="h-7 w-7 rounded-lg hover:pointer"
                    alt="github-logo"
                    src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png"
                  />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <h1 className="text-3xl px-7">Projects Done</h1>
      <div className="my-2"></div>
      <div className="px-5 mb-10">
        {isSmallScreen ? <SmallScreen /> : <BigScreen />}
      </div>
    </>
  );
}

function OutsideSkill() {
  return (
    <>
      <div className="flex flex-col justify-start px-5 mb-10">
        <h1 className="mb-2 px-2 text-3xl">
          Some technologies that I've worked with before
        </h1>
        <div className="grid max-sm:grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(outsideSkillList.length)].map((_, i) => (
            <div key={i} className="flex flex-col bg-theme-shade-2 rounded-lg p-5">
              <h1 className="font-bold">{outsideSkillList[i].name}</h1>
              <div className="py-1" />
              <div className="flex flex-row justify-center">
                <img
                  className="rounded-lg h-10 w-10"
                  alt={outsideSkillList[i].imgAlt}
                  src={outsideSkillList[i].imgSrc}
                />
                <div className="px-2" />
                <h1 className="flex-grow text-justify font-ibm-sans">
                  {outsideSkillList[i].description}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function DownloadResume() {
  return (
    <>
      <div className="flex w-full justify-center pb-10">
        <div className=" flex max-sm:flex-col xl:flex-row max-sm:w-4/5 max-sm:items-center lg:w-1/2 lg:justify-around max-sm:gap-4">
          <a
            href="https://raw.githubusercontent.com/qawitherev/qawi-portfolio/master/public/AbdulQawi_Resume_Dec2023.pdf"
            download
          >
            <button className="p-5 bg-theme-shade-3 hover:bg-theme-shade-4 text-white font-bold rounded-md w-56">
              Download Resume
            </button>
          </a>
          <button
            onClick={() => window.open("mailto:qawitherev@gmail.com", "blank")}
            className="p-5 bg-theme-shade-3 hover:bg-theme-shade-4 text-white font-bold rounded-md w-56"
          >
            Shoot me an email
          </button>
        </div>
      </div>
    </>
  );
}

//https://raw.githubusercontent.com/qawitherev/qawi-portfolio/master/public/AbdulQawi_Resume_Dec2023.pdf
