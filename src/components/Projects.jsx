import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import Carousel from 'react-bootstrap/Carousel';

import '../styles/Projects.css';
import FadeInSection from './FadeInSection';

function Projects() {
  const spotlightProjects = [
    {
      title: "Caserito",
      description: "A food ordering platform connecting customers with independent chefs. Chefs list dishes, customers order, and the platform handles payments, reviews, and notifications",
      techStack: ["NextJS", "NestJS", "PostgreSQL", "TypeScript"],
      github: "https://github.com/gastigonzalez1999/caserito",
      live: "https://caserito.com",
      image: "/assets/project1.png",
    },
    {
      title: "Artesanias Uruguay",
      description: "A platform for showcasing and selling handmade products from Uruguayan artisans. Features product listings, shopping cart, and secure payment processing.",
      techStack: ["ReactJS", "MySQL", "NodeJS", "Strapi", "Javascript"],
      //github: "https://github.com/gastigonzalez1999/artesanias-uruguay",
      live: "https://artesaniauruguay.uy/",
      image: "/assets/project2.png",
    },
  ];

  const projects = [
    {
      title: "Caserito",
      description: "A food ordering platform connecting customers with independent chefs. Chefs list dishes, customers order, and the platform handles payments, reviews, and notifications",
      techStack: ["NextJS", "NestJS", "PostgreSQL", "TypeScript"],
      github: "https://github.com/gastigonzalez1999/caserito",
      live: "https://project1.com",
    },
    {
      title: "Artesanias Uruguay",
      description: "Project done for the Uruguayan Ministry of energy and minery to help craftsmen manage and the display their work and handle upcoming events.",
      techStack: ["ReactJS", "MySQL", "NodeJS", "Strapi", "Javascript"],
      //github: "https://github.com/yourusername/project3",
      live: "https://artesaniauruguay.uy/",
    },
    {
      title: "Ultron",
      description: "A fintech testing assistant for creating and executing complex API test flows with visual editing, branching logic, variable substitution, and AI-powered debugging.",
      techStack: ["TypeScript", "NestJS", "NextJS", "TailwindCSS", "OpenAI API"],
      github: "https://github.com/gastigonzalez1999/ultron",
      live: "",
    },
    {
      title: "Teslo Shop",
      description: "E-commerce project that includes authentication, web-sockets, users, products, categories, and more.",
      techStack: ["NestJS", "NodeJS", "Mongo", "Typescript"],
      github: "https://github.com/gastigonzalez1999/NestJS-Expert/tree/main/teslo-shop",
      //live: "https://project3.com",
    },
    {
      title: "Node API Boilerplate",
      description: "Boilerplate for a NodeJS API with MongoDB and TypeScript.",
      techStack: ["NodeJS", "Mongo", "Typescript"],
      github: "https://github.com/gastigonzalez1999/node-api-biolerplate-ts/tree/master",
      //live: "https://project3.com",
    },
    // {
    //   title: "Add some React project",
    //   description: "Something else you're proud of.",
    //   techStack: ["Python", "Flask", "AWS"],
    //   github: "https://github.com/yourusername/project3",
    //   live: "https://project3.com",
    // },
  ];

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">/ projects</span>
      </div>

      {/* Spotlight Carousel */}
      <div className="spotlight-container">
        <Carousel>
          {spotlightProjects.map((project, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100 spotlight-image"
                src={project.image}
                alt={project.title}
              />
              <div className="spotlight-overlay">
                <Carousel.Caption>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="spotlight-tech">{project.techStack.join(', ')}</p>
                  <div className="spotlight-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Other Projects Grid */}
      <FadeInSection>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <FadeInSection key={index}>
              <div className="project-card">
                <div className="card-header">
                  <FiFolder className="folder-icon" />
                  <div className="card-links">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                <div className="card-tech">
                  {project.techStack.map((tech, i) => (
                    <span key={i}>
                      {tech}{i < project.techStack.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
}

export default Projects;
