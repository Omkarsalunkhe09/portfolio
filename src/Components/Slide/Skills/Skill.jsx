import "./Skill.css";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiHtml5,
  SiExpress,
  SiPostman,
  SiNetlify,
  SiHeroku,
  SiCss3,
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

import React from "react";
import styled from "styled-components";
import { MainHeadingWrapper } from "../../Elements/Elements";

const SkillWrapper = styled.div`
  padding: 50px 0;
`;

const SlideSectionOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  > div {
    padding: 20px;
    margin: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    > div {
      padding: 5px;
    }
  }
`;

const IconHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;

  > div {
    padding: 5px;
    text-align: center;
  }
`;

function Skillset() {
  return (
    <SkillWrapper>
      <MainHeadingWrapper>
        <h1>Skills & Interests</h1>
        <div></div>
      </MainHeadingWrapper>
      <SlideSectionOne>
        <IconHolder>
          <div className="techsection">
            <div>
              <SiJavascript />
              <h5>Javascript</h5>
            </div>
            <div>
              <SiHtml5 />
              <h5>HTML</h5>
            </div>
            <div>
              <SiCss3 />
              <h5>CSS</h5>
            </div>
            <div>
              <FaReact />
              <h5>React</h5>
            </div>
            <div>
              <FaNodeJs />
              <h5>Nodejs</h5>
            </div>
            <div>
              <DiMongodb />
              <h5>MongoDb</h5>
            </div>

            <div>
              <SiExpress />
              <h5>Express</h5>
            </div>
            <div>
              <SiRedux />
              <h5>Redux</h5>
            </div>

            <div>
              <VscGithub />
              <h5>Github</h5>
            </div>
            <div>
              <SiPostman />
              <h5>Postman</h5>
            </div>
            <div>
              <SiNetlify />
              <h5>Netlify</h5>
            </div>
            <div>
              <SiHeroku />
              <h5>Heroku</h5>
            </div>
          </div>
        </IconHolder>
      </SlideSectionOne>
    </SkillWrapper>
  );
}

export default Skillset;
