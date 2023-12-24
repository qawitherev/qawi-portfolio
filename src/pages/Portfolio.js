import React, { useContext } from "react";
import { WindowSizeContext } from "../App";
import {
  companyList,
  getMobileStack,
  getWebInfo,
  projectList,
  outsideSkillList,
  getSocialSite,
} from "../repo/Data";

export function Portfolio() {
  return (
    <>
      <div className="flex flex-col bg-gray-100">
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
        <DescriptionSection />
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

function DescriptionSection() {
  return (
    <>
      <h1>DescriptionSection</h1>
    </>
  );
}
