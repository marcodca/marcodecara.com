import React from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { media } from "../styles/utils"
import { colors } from "../../tailwind";
import reffenStock from "../images/screens/reffen-stock.png";

const Shade = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%);
    pointer-events: none;
`;

const Content = styled.div`
  padding: 5px;
  background-image: ${reffenStock};
`;

const Border = styled.div`
  background: ${colors.black};
`;

const ProjectCard = ({ projectData, isExpanded, setExpandedCard, i }) => {
  const { title, description } = projectData;

  const ProjectBox = styled(animated.div)`
  min-width: 200px;
  margin: 10px;
  border-radius: 5px;
  background: whitesmoke;
  display: grid;
  grid-template-rows: 10px 1fr 10px;
  /* height: ${props => (props.isExpanded ? "200%" : "")};  */
  background-image: url(${reffenStock});
  /* background-size: 100px; */
  background-position-x: 90%;
  /* background-position-y: 50%; */
  background-repeat: no-repeat;
  /* background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 75%, rgba(255,255,255,1) 100%, rgba(255,255,255,1) 100%); */
  position: relative;
  cursor: ${ isExpanded ? "initial" : "pointer"};
  ${media.md`background-size: cover`};
`;

  const projectBoxAnimation = useSpring({
    from: { backgroundSize: "15%", height: "20%", backgroundPositionY: "10px" },
    to: isExpanded
      ? { backgroundSize: "100%", height: "50%", backgroundPositionY: "10px" }
      : { backgroundSize: "15%", height: "20%", backgroundPositionY: "35%" },
    config: { duration: 800 }
  });

  return (
    <ProjectBox
      style={projectBoxAnimation}
      isExpanded={isExpanded}
      onClick={() => {
        setExpandedCard(i + 1);
      }}
    >
      { isExpanded && <Shade />}
      <Border />
      <Content>
        <h1>{title}</h1>
        {isExpanded && <p>{description}</p>}
      </Content>
      <Border />
    </ProjectBox>
  );
};

export default ProjectCard;
