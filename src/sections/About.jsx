import Globe from 'react-globe.gl';
import Button from '../components/Button';
import { useState } from 'react';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText({
      data: 'basofiibnur@gmail.com',
    });
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 3000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="c-space my-20 xl:mt-[90px]" id="about">
      <div className="c-space my-20">
        <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img
                src="/assets/profile.jpg"
                alt="grid-1"
                className="w-full h-auto max-h-[276px] object-cover rounded-3xl"
              />

              <div>
                <p className="grid-headtext">Hi, I am Basofi</p>
                <p className="grid-subtext">
                  An Experienced Developer with 3.5+ Years Focused on
                  Creating User-Centric, Scalable Front-End Solutions
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:row-span-3">
            <div className="grid-container">
              <img
                src="/assets/grid2.png"
                alt="grid-1"
                className="w-full sm:h-[276px] h-fit object-contain"
              />

              <div>
                <p className="grid-headtext">Tech Stack</p>
                <p className="grid-subtext">
                  I specialize in JavaScript/TypeScript with a focus
                  on React and Next.js ecosystems. Recently, I&apos;ve
                  added Golang to my skill set as I work towards
                  becoming a full-stack developer, expanding my
                  expertise across the entire development stack.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1 xl:row-span-4">
            <div className="grid-container items-center justify-center">
              <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                <Globe
                  height={326}
                  width={326}
                  backgroundColor="rgba(0, 0, 0, 0)"
                  backgroundImageOpacity={0.5}
                  showAtmosphere
                  showGraticules
                  globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                  bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                  labelsData={[
                    {
                      lat: 40,
                      lng: -100,
                      text: 'Rjieka, Croatia',
                      color: 'white',
                      size: 15,
                    },
                  ]}
                />
              </div>
              <div>
                <p className="grid-headtext">
                  Remote-Ready Developer, Flexible Across Time Zones
                </p>
                <p className="grid-subtext">
                  Based in Jakarta, Indonesia. I am currently
                  expanding my skills in Golang to become a full-stack
                  developer, and I am open to remote work
                  opportunities.
                </p>
                <Button
                  name={'Contact Me'}
                  isBeam
                  containerClass={'w-full mt-10'}
                  onClick={() => scrollToSection('contact')}
                />
              </div>
            </div>
          </div>

          <div className="xl:col-span-2 xl:row-span-3">
            <div className="grid-container">
              <img
                src="/assets/grid3.png"
                alt="grid-3"
                className="w-full hidden md:block sm:h-[266px] h-fit object-contain"
              />

              <div>
                <p className="grid-headtext">My Passion for Coding</p>
                <p className="grid-subtext">
                  I have always had a deep passion for solving
                  problems and building things through code. To me,
                  coding is not just a profession, but a creative
                  outlet where I can bring ideas to life and solve
                  real-world challenges. There&apos;s something
                  incredibly fulfilling about breaking down complex
                  problems, finding solutions, and seeing them take
                  shape through the power of code. Whether it&apos;s
                  building seamless user experiences or optimizing the
                  performance of an application, I am constantly
                  driven by the potential to make an impact through
                  technology.
                </p>
              </div>
            </div>
          </div>

          <div className="xl:col-span-1 xl:row-span-2">
            <div className="grid-container items-center justify-center">
              <img
                src="/assets/grid4.png"
                alt="grid-4"
                className="w-full hidden md:block md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              />

              <div className="space-y-2">
                <p className="grid-headtext text-center">
                  Contact me at
                </p>
                <div className="copy-container" onClick={handleCopy}>
                  <img
                    src={
                      hasCopied
                        ? '/assets/tick.svg'
                        : '/assets/copy.svg'
                    }
                  />
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                    basofiiibnur@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
