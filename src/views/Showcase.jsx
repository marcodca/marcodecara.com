import React, { useState } from "react";
import PropTypes from "prop-types";
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import Inner from "../elements/Inner";
import { UpDown, UpDownWide } from "../styles/animations";
import { colors } from "../../tailwind";
import { Blob, ResponsiveBlob } from "../components/Blobs";
//Mocking from here
import styled from "styled-components/macro";
import { animated, useSpring } from "react-spring";
import tw from "tailwind.macro";
import ProjectCard from "../elements/ProjectCard";
import projectsData from "../data/projects.json";
import { media } from "../styles/utils";

const ProjectsContainer = styled.div`
  width: 90%;
  height: 60%;
  border: 3px solid red;
  margin: 0 auto;
  margin-top: 40vh;
  /* display: flex;
  flex-wrap: wrap;
   */
  transform-style: preserve-3d;
  position: "relative";
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-template-rows: 1fr 1fr;
  transform: rotateX(50deg) rotate(15deg);
  /* ${media.md`flex-direction: column;`} */
  ${media.md`grid-template-columns: 1fr;
   grid-template-rows: 1fr 1fr 1fr;`}
`;

const ProjectBox = styled(animated.div)`
  min-width: 200px;
  min-height: 100px;
  margin: 10px;
  border-radius: 5px;
  background: lightcoral;
`;

const Showcase = ({ children, offset }) => {
  const [expandedCard, setExpandedCard] = useState(0);

  //   const mainProps = useSpring({
  //     height: selected === 1 ? "50%" : "33%",
  //     from: { height: "20%" },
  //     config: { duration: 1200 }
  //   });

  //   const setProps = nr =>
  //     useSpring({
  //       height: selected === nr ? "50%" : "33%",
  //       from: { height: "20%" },
  //       config: { duration: 1200 }
  //     });

  return (
    <>
      <Divider
        bg={colors["blue-grey"]}
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={offset}
        factor={2}
        // css={`z-index: 80;`}
      >
        <ProjectsContainer>
          {projectsData.map((project, i) => (
            // <div
            //     onClick={()=>{
            //         setExpandedCard(i + 1);
            //     }}
            // >
            <ProjectCard
              key={i}
              projectData={project}
              isExpanded={expandedCard === i + 1}
              setExpandedCard={setExpandedCard}
              i={i}
            />
            // </div>
          ))}
        </ProjectsContainer>
        {/* <ResponsiveBlob
        size={7}
        left="75%"
        top="15%"
        opacity="0.6"
        border="3px solid black"
        hiddenMobile
      /> */}
      </Divider>
      {/* <Divider
        speed={0.1}
        offset={offset}
        factor={2}
        css={`
          z-index: 2;
        `}
      >
        <UpDown>
          <Blob
            size="80px"
            left="4%"
            top="5%"
            opacity="0.7"
            border="5px dotted grey"
            color={colors["grey-darkest"]}
            back
          />
          <Blob
            size="80px"
            left="55%"
            top="85%"
            opacity="0.7"
            border="5px solid white"
            color={colors["grey-dark"]}
            back
          />
        </UpDown>
        <UpDownWide />
        <ResponsiveBlob
          size={25}
          left="45%"
          top="6%"
          opacity="0.7"
          color={colors["grey-dark"]}
        />
      </Divider> */}
      <Content
        speed={0.4}
        offset={offset}
        css={`
          pointer-events: none;
        `}
      >
        <Inner
          css={`
            margin-bottom: 15rem;
          `}
        >
          {children}
        </Inner>
      </Content>
    </>
  );
};

export default Showcase;

Showcase.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
