import { useState } from 'react';
import '../styles/Experience.css';
import FadeInSection from './FadeInSection';

function Experience() {
  const jobs = {
    Vangwe: {
      title: "Software Engineer",
      duration: "Sept 2021 - Present",
      points: [
        "Build and launched over 30+ integrations and large-scale services inlcuding payment gateways, digital wallets, and more.",
        "Worked on high-availability backend systems.",
        "Implemented API integrations with banking partners.",
        "Developed and mantained microservices.",
        "Worked on systems handling millions of daily transactions",
        "Led end-to-end integration projects from architecture to deployment"
      ],
    },
    TavanoTeam: {
        title: "Software Developer",
        duration: "June 2021 - Sept 2021",
        points: [
          "Build and launched websites for clients in the e-commerce industry.",
          "Worked on ERP's.",
          "Improved and updated technologies stakcs and versions for clients and their projects"
        ],
    },
    Dlocal: {
      title: "Customer Success Engineer",
      duration: "June 2020 - June 2021",
      points: [
        "Provided technical support to customers and partners.",
        "Solved technical issues and provided solutions to customers.",
        "Helped clientes run analysis and reports on their data to improve their conversions and performance.",
      ],
    },
    MercadoLibre: {
      title: "Customer Support",
      duration: "Oct 2017 - June 2020",
      points: [
        "Provided technical support to customers and partners.",
        "Helped customers understand and use the platform.",
        "Worked on various e-commerce teams helping clientes with their orders and payments.",
      ],
    },
  };

  // Track which job is selected (starts with first one)
  const [selectedJob, setSelectedJob] = useState("Vangwe");

  return (
    <div id="experience">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ experience</span>
        </div>
        <div className="experience-content">
          {/* Left side: Company tabs */}
          <div className="job-tabs">
            {Object.keys(jobs).map((company) => (
              <button
                key={company}
                className={`job-tab ${selectedJob === company ? 'active' : ''}`}
                onClick={() => setSelectedJob(company)}
              >
                {company}
              </button>
            ))}
          </div>

          {/* Right side: Job details */}
          <div className="job-details">
            <h3 className="job-title">
              {jobs[selectedJob].title}{' '}
              @ <span className="job-company">{selectedJob}</span>
            </h3>
            <p className="job-duration">{jobs[selectedJob].duration}</p>
            <ul className="job-points">
              {jobs[selectedJob].points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default Experience;
