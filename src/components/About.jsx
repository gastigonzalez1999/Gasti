import '../styles/About.css';
import FadeInSection from './FadeInSection';

function About() {
  const techStack = [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Node.js',
    'NestJS',
    'MongoDB',
    'PostgreSQL',
    'Docker',
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
          <p>
            I am currently a <b>Software Engineer</b> at{' '}
            <a href="https://vangwe.com" target="_blank" rel="noopener noreferrer">Vangwe</a>,
            where I help fintech companies build and scale their products.
            Previously, I worked at{' '}
            <a href="https://dlocal.com" target="_blank" rel="noopener noreferrer">Dlocal</a> and{' '}
            <a href="https://mercadolibre.com" target="_blank" rel="noopener noreferrer">MercadoLibre</a>.
            At the same time, I'm finishing my degree in Computer Science at{' '}
            <a href="https://www.ort.edu.uy" target="_blank" rel="noopener noreferrer">ORT University</a>.
          </p>

            <p>Here are some technologies I work with:</p>

            <ul className="tech-stack">
              {techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>

            <p>
              Outside of work, I'm nerdy about technology and science. love marvel, and play some football every once in a while.
            </p>
          </div>

          <div className="about-image">
            <img src="/assets/me.jpg" alt="Gasti" />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

export default About;
