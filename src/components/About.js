import { Swiper, SwiperSlide } from "swiper/react";
import SectionContainer from "../layout/SectionContainer";
import { clientSliderProps, testimonialSliderProps } from "../sliderProps";

const TECHNOLOGIES = [
  { name: "Django", img: "django.svg" },
  { name: "Python", img: "python.svg" },
  { name: "Javascript", img: "javascript.svg" },
  { name: "ChatGPT", img: "chatgpt.svg" },
  { name: "LlamaIndex", img: "llama.svg" },
  { name: "Typescript", img: "typescript.svg" },
  { name: "React", img: "react.svg" },
  { name: "NextJS", img: "next-js.svg" },
  { name: "Docker", img: "docker.svg" },
  { name: "Git", img: "git.svg" },
  { name: "AWS", img: "aws.svg" },
  { name: "Nginx", img: "nginx.svg" },
  { name: "Tailwind", img: "tailwindcss.svg" },
  { name: "CSS3", img: "css-3.svg" },
  { name: "HTML5", img: "html5.svg" },
];

const INTEGRATIONS = [
  { name: "Stripe", img: "stripe.svg" },
  { name: "Gmail", img: "gmail.svg" },
  { name: "MailGun", img: "mailgun.svg" },
  { name: "Github", img: "github.svg" },
  { name: "GitLab", img: "gitlab.svg" },
  { name: "Zapier", img: "zapier.svg" },
  { name: "Digital Ocean", img: "digitalocean.svg" },
  { name: "Microsoft", img: "microsoft.svg" },
];

const About = () => {
  return (
    <SectionContainer
      pageId={"about"}
      pageIcon={"lnr lnr-user"}
      pageTitle={"About Me."}
    >
      <div className="row about mb-70">
        <div className="col-lg-8">
          {/*Personal Intro*/}
          <h3 className="mb-20">
            Full Stack Developer &amp; Automation Expert
          </h3>
          <p>
            8 years of full stack web development and automation solutions
            architect. Logical, solution-focused IT professional of remarkable
            experience in providing comprehensive technical support to clients
            to help their business grow.
          </p>
          <p>
            Experienced in all aspects of the software development lifecycle and
            end-to-end project management, from concept through to development
            and delivery. Deadline driven and steer timely project completion
            within budgetary constraints.
          </p>
          {/*Signature Image*/}
          <div className="signature mt-20">
            <img
              src="img/signature-white.png"
              alt=""
              style={{ transform: `scale(2)` }}
            />
          </div>
        </div>
        {/*Personal Info*/}
        <div className="col-lg-4">
          <div className="about-info">
            <h3 className="mb-20">Personal Information</h3>
            <ul>
              <li>
                <span className="title">Name</span>
                <span className="value">Marc Maligmat</span>
              </li>

              <li>
                <span className="title">Residence</span>
                <span className="value">Cagayan de Oro, PH</span>
              </li>
              <li>
                <span className="title">Address</span>
                <span className="value">Zone 1 Claveria</span>
              </li>
              <li>
                <span className="title">Email</span>
                <span className="value">marcmaligmat@gmail.com</span>
              </li>

              <li>
                <span className="title">Freelance</span>
                <span className="value">Available</span>
              </li>
            </ul>
            <div className="resume-button mt-30">
              <a className="btn-main" href="marc_resume.pdf" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About Info Row End*/}
      {/*Services Row Start*/}
      <div className="row services mb-30">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Services</h3>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-laptop" />
            </div>
            <h4>Web Development</h4>
            <p>Experienced in end to end development.</p>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-cog" />
            </div>
            <h4>Automation </h4>
            <p>Expert in building or integrations of API and Automation</p>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-laptop-phone" />
            </div>
            <h4>Responsive Design</h4>
            <p>
              Design and develop web apps depending onuser’s behavior and
              environment based on screen size, platform and orientation.
            </p>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-bug" />
            </div>
            <h4>Data Mining</h4>
            <p>Expert Web Scraping &amp; database management.</p>
          </div>
        </div>
      </div>
      {/*Services Row End*/}
      {/*Technologies Row Start*/}
      <div className="row clients mb-70">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Skills &amp; Technologies</h3>
          </div>
        </div>
        <Swiper {...clientSliderProps} autoplay={{ delay: 120 }}>
          {TECHNOLOGIES.map((tech) => {
            return (
              <SwiperSlide className="client-logo" key={tech.name}>
                <a href="#">
                  <img src={`img/technologies/${tech.img}`} alt="" />
                  <p>{tech.name}</p>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/*Technologies Row End*/}
      {/*Integrations Row Start*/}
      <div className="row clients mb-70">
        <div className="col-md-12">
          <div className="subheading">
            <h3>API Integrations</h3>
          </div>
        </div>
        <Swiper {...clientSliderProps} autoplay={{ delay: 180 }}>
          {INTEGRATIONS.map((tech) => {
            return (
              <SwiperSlide className="client-logo" key={tech.name}>
                <a href="#">
                  <img src={`img/integrations/${tech.img}`} alt="" />
                  <p>{tech.name}</p>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/*Integrations Row End*/}
      {/*Testimonials Row Start*/}
      <div className="row testimonials mb-50">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Testimonials &amp; Clients.</h3>
          </div>
          <Swiper {...testimonialSliderProps} speed={3000}>
            {/*Testimonail Item*/}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  Marc was responsible for integrating atleast 100+ APIs in our
                  automation startup. It was great working with him. I will
                  definitely hand his info out to a few people I know that are
                  hiring.
                </p>
              </div>
              <div className="testimonial-meta">
                <img src="img/clients/gluejs.svg" alt="" />
                <div className="meta-info">
                  <h4>Alex Taylor</h4>
                  <p>CEO of GlueJS.io</p>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonail Item*/}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  Marc was responsible for our web-scraping efforts. He was
                  selected among a large pool of candidates that we interviewed
                  for this position. Based on my working experience with him, I
                  can confirm that he is able to iterate quickly on new ideas,
                  to implement them and to get results.
                </p>
              </div>
              <div className="testimonial-meta">
                <img src="img/clients/deepjudge.png" alt="" />

                <div className="meta-info">
                  <h4>Kevin Roth</h4>
                  <p>Chief Data Scientist</p>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonail Item*/}
            {/*Testimonail Item*/}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  In the dynamic world of sales outreach, CallSine™ stands out
                  as a beacon of innovation, much of which can be attributed to
                  the exceptional skills and dedication of Marc. As the backbone
                  of the CallSine™ development team, Marc played a pivotal role
                  in every technical aspect of the platform. From crafting a
                  robust and efficient backend, managing a seamless database
                  architecture, to designing an intuitive and user-friendly
                  frontend, their contributions were critical in bringing our
                  vision to life. Marc's expertise was not limited to
                  traditional development roles. Their proficiency in building
                  sophisticated web scrapers and implementing advanced
                  automation processes significantly enhanced our platform's
                  capability to deliver high-quality, personalized outreach
                  solutions. The UX improvements driven by Marc have been
                  particularly noteworthy, leading to a more engaging and
                  productive experience for our sales teams. The level of
                  professionalism and innovation brought to the table by Marc
                  has been instrumental in scaling CallSine™ into a
                  patent-pending tool that is revolutionizing the sales outreach
                  industry. Their ability to manage and excel across such a
                  diverse range of technical domains is rare and highly
                  commendable. We are immensely grateful for Marc's
                  contributions and consider them a key factor in the success of
                  CallSine™.
                </p>
              </div>
              <div className="testimonial-meta">
                <img src="img/clients/callsine.jpeg" alt="" />
                <div className="meta-info">
                  <h4>Logan Kelly</h4>
                  <p>CTO and Co-owner of Callsine.io</p>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonail Item*/}
            {/*Testimonail Item*/}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  As a passionate gun enthusiast, discovering Marc's expertise
                  was a game-changer for me. His invaluable assistance in
                  navigating the complex market of firearms in the United States
                  was nothing short of exceptional. Marc was the driving force
                  behind the success of Deals Armament, transforming it into the
                  robust platform it is today. His professionalism is matched
                  only by his dedication and enthusiasm for the project.
                  Collaborating with Marc was not only incredibly productive but
                  also an enjoyable experience. His relentless work ethic and
                  outstanding development skills yielded impressive results,
                  firmly establishing him as a top-tier developer in the field.
                  It's rare to find someone who combines such technical
                  proficiency with a genuine commitment to client success, and
                  Marc exemplifies this perfectly.
                </p>
              </div>
              <div className="testimonial-meta">
                <img src="img/clients/dealsarmament.png" alt="" />
                <div className="meta-info">
                  <h4>Adan De La Cruz</h4>
                  <p>Owner of dealsarmament</p>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonail Item*/}

            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  We have indeed done a lot of work together! I'm glad that my
                  help was useful to you and I can see how much you have
                  progressed during this time. You have been an asset for the
                  progress of AKS and I have always appreciated your seriousness
                  and professionalism. Your skills should help you secure a nice
                  position somewhere else even though I wish things had not
                  evolved in such a way at AKS. If you need recommendation
                  letters for your future applications just let me know!
                </p>
              </div>
              <div className="testimonial-meta">
                <img src="img/clients/aks.png" alt="" />
                <div className="meta-info">
                  <h4>Sébastien Béhuret</h4>
                  <p>Chief Technology Officer</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/*Testimonials Row End*/}
      </div>
    </SectionContainer>
  );
};
export default About;
