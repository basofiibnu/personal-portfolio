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
                  Crafting Engaging, Scalable Front-End Solutions with
                  3.5+ Years of Expertise
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
                  Specializing in JavaScript and TypeScript within the
                  React and Next.js ecosystems, I focus on building
                  seamless, user-centric web applications. I’m also
                  expanding into backend development with Golang,
                  working towards a versatile, full-stack skill set.
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
                  Remote-Ready Developer, Open to Opportunities Across
                  Time Zones
                </p>
                <p className="grid-subtext">
                  Based in Jakarta, Indonesia, I’m actively enhancing
                  my backend skills in Golang to complement my
                  front-end expertise, embracing full-stack
                  development. Open to remote work and adaptable
                  across time zones, I bring commitment and
                  flexibility to global projects.
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
                  Coding has always been more than just a career for
                  me—it’s a creative outlet where I can turn ideas
                  into reality and tackle real-world challenges. I’m
                  passionate about solving problems and building
                  meaningful solutions through code, finding
                  fulfillment in breaking down complex issues and
                  watching my solutions come to life. Whether I’m
                  crafting seamless user experiences or optimizing
                  application performance, I’m constantly driven by
                  the potential to create impactful, transformative
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

              <div className="space-y-2 mt-5">
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
