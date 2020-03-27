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
      allExtraProjectsJson {
        edges {
          node {
            title
            description
            source
            site
          }
        }
      }
    }
  `);

  const { allProjectsJson, allExtraProjectsJson } = data;
  //An state for keeping track of the selected card, we use the name of the image as a reference, for reasons of ease.
  const [selectedProject, setSelectedProject] = useState(
    "screen-do-it-better.png"
  );

  return (
    <>
      <Divider
        bg={colors["blue-grey"]}
        clipPath="polygon(0 16%, 100% 4%, 100% 88%, 0 94%)"
        speed={0.2}
        offset={offset}
        factor={1.6}
        css={`
          ${media.md`clip-path: none; height: 1600px !important; clip-path: polygon(0 1%, 100% 2%, 100% 99%, 0 100%);`}
        `}
      >
        <ProjectSelector
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
        />
        <ProjectsContainer>
          {allProjectsJson.edges.map((project, i) => (
            <ProjectCard
              projectData={project.node}
              key={i}
              selectedProject={selectedProject}
            />
          ))}
        </ProjectsContainer>
        <ExtraProjects>
          <h4>And more...</h4>
          <ul>
            {allExtraProjectsJson.edges.map((project, i) => {
              const { title, description, site, source } = project.node;
              return (
                <li key={i}>
                  <span>
                    <a href={site}>{title}: </a>
                    {description}.{" "}
                    <span>
                      <a href={source}>Source</a>
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </ExtraProjects>
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
  margin-top: 8%;
  position: relative;
  ${media.md`width: 98%; margin-top: 9em;`}
`;

const ExtraProjects = styled.div`
  width: 70%;
  margin: 0 auto;
  margin-top: 25%;
  font-size: 1.25em;
  color: #fff;
  > h3 {
    font-family: trocchi;
  }
  > ul {
    font-family: questrial;
    list-style: none;
    > li {
      margin-bottom: 0.5em;
      > span > span {
        font-size: 0.8em;
      }
    }
  }
  ${media.md`width: 98%; margin-top: 0; font-size: 1em`}
`;

export default Showcase;

Showcase.propTypes = {
  children: PropTypes.node.isRequired,
  offset: PropTypes.number.isRequired
};
