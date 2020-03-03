import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";

//Styling
import { media } from "../styles/utils";

const ProjectSelector = ({ selectedProject, setSelectedProject }) => {
  //The data for all the images
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: allImageSharp {
        edges {
          node {
            fluid(maxWidth: 600) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  // we filter all the images in order to keep only the ones corresponding to screens
  const screens = data.placeholderImage.edges.filter(el =>
    el.node.fluid.originalName.includes("screen")
  );

  //We add the custom animation for each screen object
  screens.forEach(el => {
    const imgSrc = el.node.fluid.originalName;

    el.makeAnimation = () =>
      useSpring({
        transform:
          selectedProject === imgSrc
            ? `scale(2) rotate(0deg)`
            : `scale(1) rotate(${getRandomDegrees()})`,
        opacity: selectedProject === imgSrc ? 1 : 0.6,
        zIndex: selectedProject === imgSrc ? "1" : "0",
        from: {
          transform: `scale(1) rotate(${getRandomDegrees()})`,
          opacity: 0.6,
          zIndex: "0"
        }
      });
  });

  return (
    <Container>
      {screens.map(el => (
        <ScreensWrapper
          style={el.makeAnimation()}
          onMouseEnter={() => {
            setSelectedProject(el.node.fluid.originalName);
          }}
        >
          <Img fluid={el.node.fluid} />
        </ScreensWrapper>
      ))}
    </Container>
  );
};

//helper function for the animations

function getRandomDegrees() {
  const random = Math.floor(Math.random() * (10 - -10 + 1) + -10);
  return `${random}deg`;
}

//Styled components
const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 25%;
  display: flex;
  justify-content: space-around;
  background-color: rgb(255 255 255/ 0.1);
  border-radius: 10px;
  ${media.md`display: none;`}
`;

const ScreensWrapper = styled(animated.div)`
  width: 20%;
  min-width: 200px;
  position: relative;
`;

ProjectSelector.PropTypes = {
  selectedProject: PropTypes.string.isRequired,
  setSelectedProject: PropTypes.func.isRequired
};

export default ProjectSelector;
