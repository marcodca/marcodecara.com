import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components/macro";

//Elements
import { Divider } from "../elements/Dividers";
import Content from "../elements/Content";
import Inner from "../elements/Inner";
import ProjectSelector from "../elements/ProjectSelector";
import ProjectCard from "../elements/ProjectCard";
//Components
import { Blob, ResponsiveBlob } from "../components/Blobs";
//Styling
import { UpDown, UpDownWide } from "../styles/animations";
import { colors } from "../../tailwind";
import { media } from "../styles/utils";

//TO DO: The ProjectCard components behaves funny on small screens and the media queries mess up the animations,  so it would be nice two have two of them, and only render one according to the screen size (yeah DOM, sorry about that)

const Showcase = ({ children, offset }) => {
  //The projects data, coming from the projects.json file, in src/data.
  const data = useStaticQuery(graphql`
    query {
      allProjectsJson {
        edges {
          node {
            title
            image
            description
            techs
            source
            site
          }
        }
      }
    }
  `);

  //An state for keeping track of the selected card, we use the name of the image as a reference, for reasons of ease.
  const [selectedProject, setSelectedProject] = useState(
    "screen-do-it-better.png"
  );

  return (
    <>
      <Divider
        bg={colors["blue-grey"]}
        clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
        speed={0.2}
        offset={offset}
        factor={1.6}
        css={`
          ${media.md`clip-path: none; height: 1500px !important; clip-path: polygon(0 2%, 100% 4%, 100% 99%, 0 100%)`}
        `}
      >
        <ProjectSelector
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <ProjectsContainer>
          {data.allProjectsJson.edges.map((project, i) => (
            <ProjectCard
              projectData={project.node}
              key={i}
              selectedProject={selectedProject}
            />
          ))}
        </ProjectsContainer>

        <ResponsiveBlob
          size={7}
          left="75%"
          top="8%"
          opacity="0.6"
          border="3px solid black"
          hiddenMobile
        />
      </Divider>
      <Divider
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
      </Divider>
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

//Styled components

const ProjectsContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 10%;
  position: relative;
  ${media.md`width: 98%; margin-top: 9em;`}
`;

export default Showcase;

Showcase.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
