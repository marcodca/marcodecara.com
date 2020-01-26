import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { animated, useSpring, useTransition, config } from "react-spring";
import { media } from "../styles/utils";
import { colors } from "../../tailwind";
import tw from "tailwind.macro";
import reffenStock from "../images/screens/reffen-stock.png";

const Shade = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  /* top: 0; */
  left: 0;
  bottom: 10px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 1) 100%,
    rgba(255, 255, 255, 1) 100%
  );
  /* background: red; */
  pointer-events: none;
`;

const Content = styled.div`
  padding: 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
`;

const Border = styled.div`
  background: ${colors.black};
`;

const ProjectCard = ({ projectData, isExpanded, setExpandedCard, i }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "screens/reffen-stock.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
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
    min-width: 280px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: white;
  `;
  const ProjectImage = styled(Img)`
    ${tw`h-full w-full`};
  `;

  const ProjectTitle = styled.h3`
    ${tw`m-0 p-3 w-full absolute z-10 border-radius-10 font-serif`} bottom: 0;
    background: ${colors["grey-light"]};
  `;

  // const projectBoxAnimation = useSpring({
  //   from: { backgroundSize: "15%", height: "20%", backgroundPositionY: "10px" },
  //   to: isExpanded
  //     ? { backgroundSize: "100%", height: "50%", backgroundPositionY: "10px" }
  //     : { backgroundSize: "15%", height: "20%", backgroundPositionY: "35%" },
  //   config: config.molasses
  // });

  const projectBoxNotSelectedProps = {
    zIndex: -1,
    position: "relative",
    left: "0%",
    height: "10vh",
    width: "30vw",
    transform: "rotate(0deg) translateX(0%) rotateY(0deg)",
    boxShadow: "72px 69px 33px -19px rgba(0,0,0,0.63)"
    // minWidth: "500px"
  };
  const projectBoxSelectedProps = {
    zIndex: 0,
    left: "50%",
    position: "absolute",
    height: "100vh",
    width: "110vw",
    transform: "rotate(-15deg) translateX(-50%) rotateY(50deg)",
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

  const shadeAnimation = useSpring({
    from: {
      height: "0%"
    },
    to: {
      height: "100%"
    },
    config: {
      duration: 1200
    }
  });

  const ImgWrapperOpenAnimation = {
    width: "50%",
    minWidth: "200px",
    border: "2px solid rgba(0,0,0, 0.6)",
    maxHeight: "400px"
  };
  const ImgWrapperClosedAnimation = {
    width: "100%",
    minWidth: "0px",
    border: "0px solid rgba(0,0,0, 0.6)",
    maxHeight: "1000px"
  };

  const ImgWrapperAnimation = useSpring({
    from: ImgWrapperClosedAnimation,
    to: isExpanded ? ImgWrapperOpenAnimation : ImgWrapperClosedAnimation
  });

  const ImgWrapper = styled(animated.div)`
    /* overflow: hidden; */
  `;

  const innerContentAnimation = useSpring({
    from: { marginLeft: "0px" },
    to: { marginLeft: "400px" },
    config: {
      delay: 400
    }
  });

  const innerTransition = useTransition(isExpanded, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 2000 }
  });

  return (
    <ProjectBox
      style={projectBoxAnimation}
      onClick={() => {
        setExpandedCard(i + 1);
      }}
    >
      <ProjectTitle>{title}</ProjectTitle>
      <ImgWrapper style={ImgWrapperAnimation}>
        <ProjectImage
          alt={`${title} screen`}
          fluid={data.placeholderImage.childImageSharp.fluid}
          imgStyle={{objectFit: "contain"}}
        />
      </ImgWrapper>
      {/* {isExpanded && <Shade style={shadeAnimation} />} */}
      {/* {innerTransition.map(
        ({ item, key, props }) => item && <Shade key={key} style={props} />
      )} */}
      {/* <Border />
      <Content>
        <h1>{title}</h1>
        {isExpanded && (
          <animated.div style={innerContentAnimation}>
            <p>{description}</p>
          </animated.div>
        )}
        {innerTransition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div key={key} style={props}>
                <p>{description}</p>
              </animated.div>
            )
        )}
      </Content>
      <Border /> */}
      {isExpanded && sampleContent}
    </ProjectBox>
  );
};

export default ProjectCard;
