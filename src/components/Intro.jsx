import '../styles/Intro.css';
import TypingEffect from './TypingEffect';
import FadeInSection from './FadeInSection';
import ParticlePortrait from './ParticlePortrait';

function Intro() {
  return (
    <div id="intro">
      <div className="intro-portrait">
        <ParticlePortrait />
      </div>
      <div className="intro-content">
        <h1 className="intro-title">
          <TypingEffect text="hi, gasti here." speed={120} highlightWord="gasti" />
        </h1>
        <FadeInSection>
          <p className="intro-description">
            I'm a software engineer based in Uruguay.
            I'm into large-scale products and how they work. I've contributed to major features across the fintech and e-commerce industry.
          </p>
          <a href="mailto:gastongonzalez2550.gg@gmail.com" className="intro-contact">
            Say hi!
          </a>
        </FadeInSection>
      </div>
    </div>
  );
}

export default Intro;
