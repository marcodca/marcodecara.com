import React from "react";
import styled from "styled-components/macro";
import tw from "tailwind.macro";
import Avatar from "../components/Avatar";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import { ScaleUp } from "../styles/animations";
import { media } from "../styles/utils";

// Components
import Layout from "../components/Layout";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Skills from "../views/Skills";
import Me from "../views/Me";
import Showcase from "../views/Showcase";
import Contact from "../views/Contact";
import Footer from "../views/Footer";

//Assets
// import avatar from "../images/avatar.png";

const BigTitleName = styled.span`
  font-size: 115%;
`;

const SkillsIntro = styled.h3`
  ${tw`text-white leading-normal font-sans pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
  margin-bottom: 35vw;
`;

const MeHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-24`};
`;

const MeText = styled.div`
  ${tw`text-white leading-normal font-sans pt-8 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
  width: 70%;
  ${media.sm`margin-bottom: 30vh; width: 100%;`}
`;

const ContactText = styled.p`
  ${tw`text-grey-darkest font-sans text-xl md:text-2xl lg:text-3xl`};
  line-height: 1.2;
  a {
    color: #c66210;
  }
`;

const Index = () => (
  <>
    <Layout />
    <Parallax
      pages={6.6}
      css={`
        ${media.md`height: 120% !important; width: calc(100% + 16px) !important; right: -16px; overflow-x: visible !important;`}
      `}
    >
      <Hero offset={0}>
        <ScaleUp delay={100}>
          <BigTitle>
            Hey there, <br />
            <ScaleUp delay={150}>
              <BigTitleName>I'm Marco.</BigTitleName>
            </ScaleUp>
          </BigTitle>
        </ScaleUp>
        <ScaleUp delay={175}>
          <Subtitle>I enjoy making web apps and blobs.</Subtitle>
        </ScaleUp>
      </Hero>
      <Skills offset={1}>
        <SkillsIntro
          css={`
            ${media.md`margin-bottom: 60vw;`}
          `}
        >
          Besides blobs, there are also some neat web technologies I like to
          play around with, specially HTML, CSS and JavaScript.{" "}
          <a href="https://reactjs.org/"> React</a> is my library of choice, and
          I like to use it together with{" "}
          <a href="https://redux.js.org/"> Redux</a>,{" "}
          <a href="https://www.styled-components.com/"> styled-components</a>{" "}
          and <a href="https://graphql.org/"> GraphQL</a>, among others.
          {/* like <a href="https://reactjs.org/"> React</a>,{" "}
          <a href="https://www.gatsbyjs.org/"> GatsbyJs</a>,{" "}
          <a href="https://www.styled-components.com/"> styled-components</a>{" "}
          and <a href="https://graphql.org/"> GraphQL</a>, among others. */}
        </SkillsIntro>
      </Skills>
      <Me offset={3}>
        <Title>Me</Title>
        <MeHero>
          <Avatar />
          {/* <Avatar src={avatar} alt="Marco de Cara's photo" /> */}
          <MeText>
            I'm a Barcelona based full-stack(ish) web developer, with a bent for
            front-end and design. Former{" "}
            <a href="https://www.hackyourfuture.net/"> Hack Your Future </a>
            student, I'm always trying to stay tuned with the new techs within
            the industry, and in constant pursuit of challenges.
          </MeText>
        </MeHero>
      </Me>
      <Showcase offset={4}>
        <Title
          css={`
            ${media.md`
              transform: translateY(-4.3em);
              width: 66%;
            `}
          `}
        >
          Some stuff I've built
        </Title>
      </Showcase>
      <Contact
        offset={5.73}
        css={`
          ${media.sm`margin-top: 20%;`}
        `}
      >
        <Inner css={``}>
          <Title
            css={`
              ${tw`text-black`}
            `}
          >
            Lets talk
          </Title>
          <ContactText>
            Say <a href="mailto:marcodecara@gmail.com">Hi</a>, or find me on
            other platforms:{" "}
            <a href="https://www.linkedin.com/in/marcodecara/">Linkedin</a> &{" "}
            <a href="https://github.com/marcodca/">Github</a>.
          </ContactText>
        </Inner>
      </Contact>
      <Footer />
    </Parallax>
  </>
);

export default Index;
