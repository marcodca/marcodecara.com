import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
//Styling
import { media } from "../styles/utils";

import { site as siteIcon } from "../images/icons";
import { github as githubIcon } from "../images/icons";

const ProjectCard = ({ projectData, selectedProject }) => {
  //The data for all the images
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: allImageSharp {
        edges {
          node {
            fixed(width: 280) {
              originalName
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `);

  const { title, description, image, techs, source, site } = projectData;

  const animation = useSpring({
    visibility: selectedProject === image ? "visible" : "hidden",
    transform: selectedProject === image ? "scale(1)" : "scale(0)",
    opacity: selectedProject === image ? "1" : "0",
    from: { visibility: "hidden", transform: "scale(0)", opacity: "0" }
  });

  return (
    <ProjectBox style={animation}>
      <h3>
        {title}
        <br />
        <sub>{description}</sub>
      </h3>
      <p>
        <b>Built with:</b> {techs}
        <ProjectImage
          alt={`${title} screen`}
          fixed={
            data.placeholderImage.edges.filter(
              el => el.node.fixed.originalName === image
            )[0].node.fixed
          }
        />
      </p>
      <div>
        <a href={site} target="_blank">
          <Icon src={siteIcon} />
          Link
        </a>
        <a href={source} target="_blank">
          <Icon src={githubIcon} style={{ filter: "invert(100%)" }} />
          Source
        </a>
      </div>
    </ProjectBox>
  );
};

//Styled components

const ProjectBox = styled(animated.div)`
  font-family: questrial;
  width: 100%;
  margin: 0 auto;
  background: rgb(255 255 255/ 0.8);
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0px 2px 1px 1px rgba(0, 0, 0, 0.7),
    0px 5px 15px 8px rgba(0, 0, 0, 0.4);
  h3 {
    font-family: trocchi;
  }
  > div {
    display: flex;
    justify-content: space-evenly;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  position: absolute;
  ${media.md`visibility: visible !important; transform: scale(1) !important; opacity: 1 !important; position: relative; margin: 1em auto;`}
`;

const ProjectImage = styled(Img)`
  margin: 1em auto;
  border-radius: 5px;
  display: none !important;
  ${media.md`display: block !important;`}
`;

const Icon = styled.img`
  width: 20px;
`;

ProjectCard.propTypes = {
  projectData: PropTypes.object.isRequired,
  selectedProject: PropTypes.string.isRequired
};

export default ProjectCard;
