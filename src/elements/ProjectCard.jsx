import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
//Styling
import { media } from "../styles/utils";
import { colors } from "../../tailwind";
import tw from "tailwind.macro";
//Icons
import crossIcon from "../images/icons/cross-icon.svg";
import siteIcon from "../images/icons/site-icon.svg";
import githubIcon from "../images/icons/github-icon.svg";

const ProjectCard = ({ projectData, isExpanded, setExpandedCard, i }) => {
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

  //Animation hooks

  const projectBoxAnimation = useSpring({
    from: projectBoxNotSelectedProps,
    to: isExpanded ? projectBoxSelectedProps : projectBoxNotSelectedProps
  });

  const ImgWrapperAnimation = useSpring({
    from: ImgWrapperClosedAnimation,
    to: isExpanded ? ImgWrapperOpenAnimation : ImgWrapperClosedAnimation
  });

  const { title, description, image, techs, source, site } = projectData.node;

  return (
    <ProjectBox
      style={projectBoxAnimation}
      i={i}
      onClick={
        isExpanded
          ? null
          : () => {
              setExpandedCard(i + 1);
            }
      }
    >
      <TopContainer isExpanded={isExpanded}>
        <ImgWrapper style={ImgWrapperAnimation}>

            <ProjectImage
              alt={`${title} screen`}
              fluid={
                data.placeholderImage.edges.filter(
                  img => img.node.fluid.originalName === image
                )[0].node.fluid
              }
              imgStyle={{ objectFit: "contain" }}
            />
        </ImgWrapper>
        {isExpanded && (
          <ActionButtons>
            <a href={site} target="blank">
              <img src={siteIcon} />
              Visit site
            </a>
            <div>
              <a href={source} target="blank">
                <img src={githubIcon} className="github" />
                View source
              </a>
            </div>
          </ActionButtons>
        )}
      </TopContainer>

      {isExpanded && (
        <CloseCardButton
          onClick={() => {
            setExpandedCard(0);
          }}
        >
          <img src={crossIcon} width={26} />
        </CloseCardButton>
      )}
      <BottomContent isExpanded={isExpanded}>
        <h3>{title}</h3>
        {isExpanded && (
          <div>
            <p>{description}</p> <br /> <b>Build with:</b> {techs}
          </div>
        )}
      </BottomContent>
    </ProjectBox>
  );
};

//Styled components

const ProjectBox = styled(animated.div)`
${tw`w-4/5 md:w-3/5 lg:w-2/5 lg:h-64 m-auto  border-4 border-solid border-grey-darker rounded-lg`}
background: linear-gradient( ${colors.white}, ${colors.grey});
min-width: 280px;
min-height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
grid-column: ${props => (props.i + 1 === 1 ? "1" : "2")} / span 1;
grid-row: ${props => (props.i + 1 === 3 ? "2" : "1")} / span 1;
${media.md` height: 50vh ; grid-row: ${props =>
  props.i + 1} / span 1; grid-column: 1 / span 1; transform: translateX(15%);`}
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: ${props => props.isExpanded && `7.5%`};
  ${media.sm`margin-top: ${props => props.isExpanded && `10%`};`}
`;

const ProjectImage = styled(Img)`
  ${tw`h-full w-full`};
  border-radius: 5px;
  border: "10px solid rgba(0,0,0, 0.6)";
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-family: Questrial;
  font-size: 1.2em;
  width: 75%;
  min-width: 280px;
  a {
    display: flex;
    align-items: center;
    padding: 5px;
    font-weight: bold;
    color: ${colors.black};
  }
  img {
    width: 1rem;
    margin: 3px;
  }
  .github {
    filter: invert(100%);
  }
`;

const BottomContent = styled.div`
  ${tw`m-0 w-full p-1 absolute z-10 border-radius-10 font-serif`} bottom: 0;
  background: ${colors["grey-light"]};
  padding: ${props => props.isExpanded && `1vh`};
  font-size: ${props => !props.isExpanded && `24px`};
  p {
    font-size: 1.1em;
    margin: 0;
  }
  ${media.sm`font-size: ${props => props.isExpanded && `15px`};`}
`;

const ImgWrapper = styled(animated.div)``;

const CloseCardButton = styled.span`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 3%;
  cursor: pointer;
  min-width: 20px;
  img {
    width: 100%;
  }
`;

//Animations props

const projectBoxNotSelectedProps = {
  zIndex: "-1",
  position: "fixed",
  height: "10vh",
  width: "30vw",
  left: "0%",
  top: "0%",
  cursor: "pointer",
  transform:
    "rotate(0deg) rotateX(0deg) translateZ(0px) translateX(0%) translateY(0%)",
  boxShadow: "72px 69px 33px -19px rgba(0,0,0,0.63)"
};
const projectBoxSelectedProps = {
  zIndex: "2",
  position: "relative",
  top: "30%",
  left: "50%",
  height: "80%",
  width: "70%",
  cursor: "unset",
  transform:
    "rotate(-15deg) rotateX(-50deg) translateZ(500px) translateX(-50%) translateY(-50%)",
  boxShadow: "0px 0px 33px 40px rgba(0,0,0,0.3)"
};

const ImgWrapperOpenAnimation = {
  width: "50%",
  minWidth: "200px",
  maxHeight: "400px",
  top: "unset"
};
const ImgWrapperClosedAnimation = {
  width: "100%",
  minWidth: "0px",
  maxHeight: "1000px"
};

//PropTypes

ProjectCard.propTypes = {
  projectData: PropTypes.object.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  setExpandedCard: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired
};

export default ProjectCard;
