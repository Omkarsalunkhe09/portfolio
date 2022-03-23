import { SiHtml5, SiJavascript, SiCss3, SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";

import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import { MainHeadingWrapper } from "../../Elements/Elements";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import "./Projectdesign.css";

const useStyles = makeStyles((theme) => ({
  root: {
    overflowY: "scroll",
    padding: "100px 0 ",
  },
}));

const BridgeTwo = styled.div`
  padding-top: 75px;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};

  /* min-height: 400px; */
  z-index: 99;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > div:nth-child(2) {
    padding: 50px 0;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    grid-row-gap: 20px;
    width: 90%;
    margin: 30px auto;
    align-items: center;
    justify-content: space-evenly;
    background-size: cover;
    background-position: center;
  }
`;

let projectArray = [
  {
    img: "https://user-images.githubusercontent.com/96103401/158479838-6fa581d1-df85-4287-aef3-3ae890f1a40f.png",
    title: "Clone of Lifestylestores.com",
    description:
      "An E-commerce website to purchase clothes and grooming products.",
    techStack: [
      <SiHtml5 size="50px" />,
      <SiCss3 size="50px" />,
      <SiJavascript size="50px" />,
    ],
    repoLink:
      "https://github.com/Omkarsalunkhe09/clone-of-lifestyles-stores.com",
    demoLink: "https://dazzling-meitner-0eb71c.netlify.app",
    type: "A collaborative project built by a team of 4 members under 6 days.",
    blogLink: "https://link.medium.com/C5O6mlCR6lb",
    features: [
      "User can switch between prices in product page from high to low and low to high",
      "User can also find the particular product by entering the name in the search bar",
      "User can access the product size and color through the product information page",
      "User can add the product to the cart",
      "Checkout page",
    ],
    responsibilities: [
      "Developed the frontend end which includes the Landing page with all the functionalities",
      "Developed the checkout page",
      "collaboratively built product information page",
      "Integrated all the pages of website for Deploying the website",
    ],
  },
  {
    img: "https://user-images.githubusercontent.com/96103401/158480446-019e5baa-b08a-4a40-a91d-0bcbb0a7cac9.png",
    title: "Clone of Firstcry.com",
    description: "A website to purchase all newborn related products.",
    techStack: [
      <SiHtml5 size="50px" />,
      <SiCss3 size="50px" />,
      <SiJavascript size="50px" />,
      <FaNodeJs size="50px" />,
      <SiExpress size="50px" />,
      <DiMongodb size="50px" />,
    ],
    repoLink: "https://github.com/unnati1004/firstcry",
    demoLink: "https://friendly-goldwasser-04fd7a.netlify.app/index.html",
    type: "A collaborative project built by a team of 6 members under 6 days.",
    blogLink:
      "https://medium.com/@ossalunkhe09/cloning-firstcry-website-cf13071992cf",
    features: [
      "Carousel in landing page",
      "User can switch between prices in the product page from high to low and low to high",
      "User can add the product in the shortlist page & also in cart ",
      "Payment Gateway",
    ],
    responsibilities: [
      "Developed the Shortlist page",
      "Developed backend server with products data",
      "Created an API to fetch the products from backend server",
      "Contributed greatly towards the development of the cart page",
      "Collaboratively built the product page",
    ],
  },
  // {
  //   img: "https://user-images.githubusercontent.com/39058941/111019686-ec977e00-83e6-11eb-81e8-84625a9e7576.png",
  //   title: "Royal Brothers ",
  //   description:
  //     "A web application to rent two-wheelers on monthly and daily basis.",

  //   techStack: [
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //     "React",
  //     "MaterialUI",
  //     "Node",
  //     "Express",
  //     "MongoDB",
  //   ],
  //   repoLink: "https://github.com/therealdrtroll/royal_brothers",
  //   demoLink: "https://royalbrothersak.netlify.app/",
  //   type: "A collaborative project built by a team of 3 executed in 4 days.",
  //   blogLink:
  //     "https://ar1pperk.medium.com/building-a-bike-rental-website-from-scratch-28572c5565f7",
  //   features: [
  //     "Login and Signup",
  //     "A user can choose a location from where he wants to choose a bike",
  //     "User can choose the date and time for pickup and drop along with the choice of his/her bike",
  //     "A user can choose between monthly and daily rental plans",
  //     "A user can pay through card",
  //     "All the order history is recorded in user profile",
  //   ],
  //   responsibilities: [
  //     "Built REST API and integrated it with the frontend.",
  //     "Laid out the database schema and built authentication.",
  //     "Developed the Home and Tariff page.",
  //     "Integrated the frontend and backend.",
  //   ],
  // },

  // {
  //   img: "https://user-images.githubusercontent.com/39058941/115154017-68e04980-a096-11eb-8c0c-820652ed499e.png",
  //   title: "Sudoku",
  //   description:
  //     "A sudoku challenge for users, where they can solve or submit their own puzzles and get them solved.",
  //   techStack: ["HTML", "CSS", "JavaScript"],
  //   repoLink: "https://github.com/therealdrtroll/sudoku",
  //   demoLink: "https://sudoku-solver-animated.netlify.app/",
  //   type: "Solo project",
  //   blogLink: "#",
  //   features: [
  //     "User can solve a puzzle",
  //     "User can submit a puzzle and solve",
  //     "User can get solution for a puzzle using auto-solve",
  //   ],
  // },
  // {
  //   img: "https://user-images.githubusercontent.com/39058941/118371705-7d4b2f80-b5cb-11eb-9cfd-a5a917f759e0.png",
  //   title: "Product Hunt ",
  //   description:
  //     "An online product portal where users can browse, research, and post products. ",
  //   techStack: ["HTML", "CSS", "JavaScript", "React", "MaterialUI"],
  //   repoLink: "https://github.com/therealdrtroll/product-hunt",
  //   type: "A collaborative project built by a team of 4 under 4 days.",
  //   demoLink: "https://producthuntalpha.netlify.app/",
  //   blogLink:
  //     "https://ar1pperk.medium.com/how-can-you-collab-remotely-to-develop-an-effective-product-in-4-days-ff3d2a0168dd",
  //   features: [
  //     "Research products and post products.",
  //     "Research jobs and post jobs.",
  //     "Raise a discussion and comment under it.",
  //     "Book an appointment with your favourite product mentor.",
  //   ],

  //   responsibilities: [
  //     "Scraped data from the original product hunt.",
  //     "Developed pixel-perfect UI of the product page.",
  //     "Implemented features like up-vote, share, and single product modal.",
  //   ],
  // },
];

function Projects() {
  const [panel, setPanel] = React.useState(false);
  let [currentProject, setCurrentProject] = React.useState({});
  const classes = useStyles();
  return (
    <div id="projects">
      <BridgeTwo backgroundImg={currentProject.img}>
        <MainHeadingWrapper>
          <h1>Projects</h1>
          <div></div>
        </MainHeadingWrapper>
        <div>
          {projectArray?.map((project) => (
            <ProjectCard
              key={project.title}
              setCurrentProject={setCurrentProject}
              setPanel={setPanel}
              {...project}
            ></ProjectCard>
          ))}
        </div>
        <Modal
          className={classes.root}
          open={panel}
          onClose={() => setPanel(false)}
        >
          <ProjectDetail
            {...currentProject}
            setPanel={setPanel}
          ></ProjectDetail>
        </Modal>
      </BridgeTwo>
    </div>
  );
}

export default Projects;
