import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { animated, useSpring, useTransition, config } from "react-spring";
import { media } from "../styles/utils";
import { colors } from "../../tailwind";
import tw from "tailwind.macro";
import crossIcon from "../images/icons/cross-icon.svg";
import siteIcon from "../images/icons/site-icon.svg";
import githubIcon from "../images/icons/github-icon.svg";

const ProjectCard = ({ projectData, isExpanded, setExpandedCard, i }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: allImageSharp {
        edges {
          node {
            fluid(maxWidth: 800) {
            originalName
            ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const { title, description } = projectData;

  const ProjectBox = styled(animated.div)`
    ${tw`w-4/5 md:w-3/5 lg:w-2/5 lg:h-64 m-auto  border-4 border-solid border-grey-darker rounded-lg`}
    /* width: 30%; */
  /* min-width: 200px; */
    background: linear-gradient( white, grey);
    min-width: 280px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* background: white; */
    grid-column: ${i + 1 === 1 ? "1" : "2"} / span 1;
    grid-row: ${i + 1 === 3 ? "2" : "1"} / span 1;
    ${media.md` height: 50vh ; grid-row: ${i +
      1} / span 1; grid-column: 1 / span 1; transform: translateX(15%);`}
  `;

  const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 7.5%;
    ${media.sm`margin-top: ${props => props.isExpanded && `10%`}`};
  `;

  const ProjectImage = styled(Img)`
    ${tw`h-full w-full`};
    border-radius: 5px;
    border: "10px solid rgba(0,0,0, 0.6)";
  `;

  const BottomContent = styled.div`
    ${tw`m-0 w-full absolute z-10 border-radius-10 font-serif`} bottom: 0;
    background: ${colors["grey-light"]};
    padding: ${props => props.isExpanded && `1vh`};
    font-size: ${props => !props.isExpanded && `24px`};
    ${media.sm`font-size: ${props => props.isExpanded && `15px`};`}
  `;
  const projectBoxNotSelectedProps = {
    zIndex: "-1",
    position: "fixed",
    height: "10vh",
    width: "30vw",
    left: "0%",
    top: "0%",
    transform:
      "rotate(0deg) rotateX(0deg) translateZ(0px) translateX(0%) translateY(0%)",
    boxShadow: "72px 69px 33px -19px rgba(0,0,0,0.63)"
    // minWidth: "500px"
  };
  const projectBoxSelectedProps = {
    zIndex: "2",
    position: "relative",
    top: "30%",
    left: "50%",
    height: "80%",
    width: "70%",
    transform:
      "rotate(-15deg) rotateX(-50deg) translateZ(500px) translateX(-50%) translateY(-50%)",
    boxShadow: "0px 0px 33px 40px rgba(0,0,0,0.3)"
    // minWidth: "0px"
  };

  const projectBoxAnimation = useSpring({
    from: projectBoxNotSelectedProps,
    to: isExpanded ? projectBoxSelectedProps : projectBoxNotSelectedProps
    // config: config.slow
  });

  const sampleContent =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad corporis deleniti facere quisquam quae adipisci perferendis reiciendis nulla voluptates. Officia quae pariatur voluptate quod vero, quis amet tempore rerum enim suscipit voluptates ipsa minus vel quia ratione sunt corporis. Atque, necessitatibus soluta! Mollitia earum voluptatibus amet quam";



  const ActionButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    font-family: Questrial;
    font-size: 1em;
    width: 75%;
    min-width: 280px;
    div {
      display: flex;
      align-items: center;
      padding: 5px;
    }
    img {
      width: 1rem;
      margin: 3px;
    }
    .github {
      filter: invert(100%);
    }
  `;

const ImgWrapperOpenAnimation = {
  width: "50%",
  minWidth: "200px",
  maxHeight: "400px",
  top: "unset"
};
const ImgWrapperClosedAnimation = {
  width: "100%",
  minWidth: "0px",
  maxHeight: "1000px",
};

  const ImgWrapperAnimation = useSpring({
    from: ImgWrapperClosedAnimation,
    to: isExpanded ? ImgWrapperOpenAnimation : ImgWrapperClosedAnimation
  });

  const ImgWrapper = styled(animated.div)`
    /* overflow: hidden; */
  `;

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

  console.log(data);

  return (
    <ProjectBox
      style={projectBoxAnimation}
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
            fluid={data.placeholderImage.edges[3].node.fluid}
            imgStyle={{ objectFit: "contain" }}
          />
        </ImgWrapper>
        {isExpanded && (
          <ActionButtons>
            <div>
              <img src={siteIcon} />
              Visit site
            </div>
            <div>
              <img src={githubIcon} className="github" />
              View source
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
        {isExpanded && sampleContent}
      </BottomContent>
    </ProjectBox>
  );
};

export default ProjectCard;
