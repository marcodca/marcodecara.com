import React from "react";
import styled, { css } from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import { ScaleUp } from "../styles/animations";
import { media } from '../styles/utils'

// Components
import Layout from "../components/Layout";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Skills from "../views/Skills";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpg";

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-24`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const MeIntro = styled.span`
  ${tw`text-white leading-normal font-sans pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;
const SkillsIntro = styled.h3`
  ${tw`text-white leading-normal font-sans pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
  margin-bottom: 35vw;
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;
const BigTitleName = styled.span`
  font-size: 115%;
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
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
          css={`${media.md`margin-bottom: 60vw`}`}
        >
          Besides blobs, there are also some neat web technologies I like to play around with, like <a href="https://reactjs.org/"> React</a>, <a href="https://www.gatsbyjs.org/"> GatsbyJs</a>, <a href="https://www.styled-components.com/"> styled-components</a> and <a href="https://graphql.org/">   GraphQL</a>, among others. 
        </SkillsIntro>
      </Skills>
      <About offset={3}>
        <Title>Me</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Black bike in Copenhagen" />
          <MeIntro>
            I'm a Copenhagen based full-stack(ish) web developer, with a bent for front-end and design. Former <a href="https://www.hackyourfuture.net/"> Hack Your Future </a>student, I'm always trying to stay tuned with the new techs within the industry, and in constant pursuit of challenges.   
          </MeIntro>
        </AboutHero>
        {/* <AboutDesc>
          You know the way you feel when you see a picture of two otters holding
          hands? That's how you're gonna feel every day. My mother cried the day
          I was born because she knew she’d never be prettier than me. You
          should make me your campaign manager. I was born for politics. I have
          great hair and I love lying. Captain? The kids want to know where
          Paulie the Pigeon is. I told them he got sucked up into an airplane
          engine, is that all right?
        </AboutDesc> */}
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on
            other platforms:{" "}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{" "}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{" "}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
            Github Repository
          </a>
          . Made by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
