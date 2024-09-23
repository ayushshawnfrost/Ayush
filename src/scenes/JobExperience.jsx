import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BraveSpaceLogo from "../assets/brave_spaces_logo.png";

const SenorSoftwareEngineer = () => {
  return (
    <section className="mt-3 font-playfair">
      <p className="mt-1 mb-1 text-yellow text-2xl">Valuelabs LLP</p>
      <p className="mt-1 mb-6 text-red text-2xl">Senior Software Engineer</p>
      <li className="pb-2">
        {" "}
        developed UI components using Redux, Typescript, SASS, and drafted unit
        tests using Jest with 90% code coverage. Rest APIs written in.Net Core
        in accordance with the microservice architecture
      </li>
      <li className="pb-2">
        applied optimization techniques to reduce load times by 20%, thereby
        enhancing the user experience
      </li>
      <li className="pb-2">
        decreased bugs by 10% by offering recommendations for Redux.js for
        better troubleshooting support. contributed to the project within Agile
        Scrum project management environments.
      </li>
      <li className="pb-2">
        {" "}
        Independently implemented application-wide localization through i18n,
        enabled the application to be translated into three languages,
        increasing the application's reach internationally by 30%.
      </li>
    </section>
  );
};
const SoftwareEngineer = () => {
  return (
    <section className="mt-3 font-playfair">
      <p className="mt-1 mb-1 text-yellow text-2xl">Valuelabs LLP</p>
      <p className="mt-1 mb-6 text-red text-2xl">Software Engineer</p>
      <li className="pb-2">
        worked on a web-based solution for report generation and visualization
        for auto body. My team was responsible for migrating the existing
        Angular front-end application into React.js
      </li>
      <li className="pb-2">
        Implemented 4 primary UI components, including metric selection,
        hierarchy generation, and crosstab report.
      </li>
      <li className="pb-2">
        Worked in a team of five members. Created React components with
        TypeScript. performed unit testing, designed visualization charts using
        Chartist.js and developed REST APIs using .Net Core.
      </li>
      <li className="pb-2">
        Took the initiative for peer code reviews, which minimized bugs reported
        in the testing phase by 25%
      </li>
    </section>
  );
};
const Intern = () => {
  return (
    <section className="mt-3 font-playfair">
      <p className="mt-1 mb-1 text-yellow text-2xl">Valuelabs LLP</p>
      <p className="mt-1 mb-6 text-red text-2xl">Intern</p>
      <li className="pb-2">
        {" "}
        developed a web application concerned with enterprise customer due
        diligence solutions using Angular, HTML, and Angular Material
      </li>
      <li className="pb-2">
        Contributed as UI team member, responsible for making the application's
        front-end using Angular, TypeScript, and Bootstrap. I was also involved
        in writing unit test cases for the components using the Jasmine test
        framework
      </li>
    </section>
  );
};
const InternBrave = () => {
  return (
    <section className="mt-3 font-playfair">
      <p className="mt-1 mb-1 text-yellow text-2xl">BraveSpaces</p>
      <p className="mt-1 mb-6 text-red text-2xl">Software Engineer Intern</p>
      <li className="pb-2">
        {" "}
        Designed and developed a data-driven application aimed at enhancing
        workplace Diversity, Equity, and Inclusion through comprehensive
        statical analysis, AI-driven recommendations, and progress tracking.
        Increased feature engagement by 25% through market analysis and user
        feedback.
      </li>
      <li className="pb-2">
        Leveraged Amazon Web Services (AWS) to construct serverless web
        applications, harnessing key AWS components such as S3, DynamoDB,
        Lambda, Cognito, and API Gateway to optimize functionality and
        performance.
      </li>
    </section>
  );
};
const JobExperience = () => {
  const [index, setIndex] = React.useState(0);

  const handleChange = (event, newValue) => {
    setIndex(newValue);
  };

  return (
    <>
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-yellow">EXPERIENCE</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>
      <section id="experience" className="experience py-24 font-playfair ">
        {/* <Tabs
          value={index}
          onChange={handleChange}
          centered
          textColor="inherit"
          variant="fullWidth"
          indicatorColor="secondary"
        >
          <Tab label="Senior Software Engineer"></Tab>
          <Tab label="Software Engineer Intern"></Tab>
          <Tab label="Software Engineer"></Tab>
          <Tab label="Intern"></Tab>
        </Tabs>
        {index == 1 && <SenorSoftwareEngineer />}
        {index == 2 && <SoftwareEngineer />}
        {index == 3 && <Intern />}
        {index == 0 && <InternBrave />} */}
        <VerticalLinearStepper />
      </section>
    </>
  );
};

export default JobExperience;
const jobData = [
  {
    logo: BraveSpaceLogo, // Placeholder logo URL
    title: "Software Engineer (Internship)",
    duration: "Aug 2023 - Jun 2024",
    dataServed: "BraveSpaces LLC",
    responsibilities: [
      `Developed Node.js RESTful API with AWS API Gateway, integrating OAuth and 30+ responsive React.js components; 
configured RDS with PostgreSQL for auto-scaling and backup, ensuring 99.9% uptime`,
      `Implemented event-driven architecture using AWS SNS, SQS, and EventBridge, creating a scalable serverless backend; enhanced 
        front-end with ReactJS and Redux, adhering to accessibility guidelines, increasing user reach by 20%`,
    ],
  },

  {
    logo: "https://www.valuelabs.com/wp-content/plugins/wp-posts-blocks/images/navbar/valuelabs-logo-white.svg",
    title: "Senior Software Engineer,",
    duration: "Jun 2019 - Jul 2022",
    dataServed: "Valuelabs LLP",
    responsibilities: [
      `Established 8 RESTful API microservices, an API Gateway, and a web app using Spring Boot, JPA, Junit, ReactJS, and 
Redux within an Agile Scrum framework`,
      `Introduced fault-tolerant features with Resilience4j, enhancing reliability and throughput by 20% via retry 
mechanisms, circuit breakers, and inter-service communication with Apache Kafka.`,
      `Utilized OpenAPI (Swagger) specifications, for enhancing API maintainability and scalability. Employed Java 
Persistence API (JPA) and Hibernate for object-relational mapping (ORM), reducing data retrieval time by 30%.
`,
      `Containerized microservices with Docker and Kubernetes. Elevated service-to-service communication efficiency 
with Netflix Eureka, reducing downtime by 30%.`,
      `Engineered modular React, Redux, and TypeScript components with Styled Components, reducing styling update time 
by 30%; employed lazy loading with React Router, improving initial load times by 40%.`,
      `Orchestrated initiatives to elevate code reliability through a 35% increase in unit test coverage, resulting in a
20% reduction in post-deployment issues and boosting overall application stability.`,
      `Led a Scrum team of 7 members, fostering collaboration through code reviews, knowledge transfer, and mentorship.`,
    ],
  },
  {
    logo: "https://www.valuelabs.com/wp-content/plugins/wp-posts-blocks/images/navbar/valuelabs-logo-white.svg",
    title: "Software Engineer Intern",
    duration: "Jan 2019 - Apr 2019",
    dataServed: "Valuelabs LLP",
    responsibilities: [
      `Constructed a SaaS enterprise customer due diligence solution using Angular, TypeScript, and Bootstrap. Ensured 
cross-browser consistency and improved user reach through progressive enhancement techniques`,
      `Improved performance of frontend application, integrating GraphQL to improve loading time by 30%, resulting 
in enhanced user experience and increased customer satisfaction.`,
    ],
  },
];

function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 900, margin: "0 auto", mt: 1 , }}>
      <Card sx={{  padding: 2, borderRadius: 2 ,backgroundColor:"#FDCC49"}}>
        <CardContent>
          <Stepper activeStep={activeStep} orientation="vertical">
            {jobData.map((job, index) => (
              <Step key={index} >
                <StepLabel 
                StepIconProps={{
                    sx: {
                      color: activeStep === index ? '#ff5733' : '#DC4492', // Custom active step color
                    },
                  }}>
                  <Box display="flex" flexDirection="column" alignItems="start">
                    <img
                      src={job.logo}
                      alt={`${job.title} logo`}
                      style={{ filter: index !== 0 ? "invert(100%)" : "" , maxWidth:'120px'}}
                    />
                    <p variant="h6">{job.title}</p>
                  </Box>
                </StepLabel>
                <StepContent>
                  <p className="pb-2 text-xl" color="text.secondary">
                    {job.duration}
                  </p>
                  <p className="pb-2 text-xl" color="text.secondary">
                    {job.dataServed}
                  </p>
                  <Box mt={1}>
                    {/* <p >Responsibilities:</p> */}
                    <ul>
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i}>
                          <p style={{ }}>
                            {"o  "}
                            <strong>{responsibility}</strong>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1, backgroundColor:"#DC4492" }}
                        disabled={activeStep === jobData.length - 1}
                      >
                        {index === jobData.length - 1 ? "Finish" : "Next"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1,color:"#DC4492"}}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === jobData.length && (
            <Box sx={{ p: 3 }}>
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 2 }}>
                Reset
              </Button>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
