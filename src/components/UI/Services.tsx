import frontEndImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

export default function Services() {
  return (
    <section id="services">
      <div className="container lg:pt-10 flex flex-col items-center justify-center gap-10">
        <div className="text-center flex flex-col items-center justify-center gap-10">
          <h2 className="text-headingColor font-extrabold text-3xl md:text-4xl mb-6">
            What I do
          </h2>
          <p className="lg:max-w-xl mx-auto text-headingColor font-medium text-base leading-7">
            Crafting immersive web experiences in Kigali, Rwanda. Leveraging
            HTML, CSS, JavaScript, ReactJS, and Tailwind CSS to architect
            dynamic, user-centric solutions. Elevating web standards with
            innovation and dedication.
          </p>
        </div>

        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-6 px-4 sm:max-w-xl sm:mx-auto sm:px-0">
            <div className="relative text-gray-700 antialiased text-sm font-semibold flex flex-col gap-10">
              {/* Vertical line in the center */}
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 -translate-x-1/2 mx-10"></div>

              {/* Left Card */}
              <div className="mt-10 sm:mt-0 sm:mb-16">
                <div className="flex sm:flex-row">
                  <div className="flex justify-start w-full mx-auto sm:mr-10">
                    <div className="w-full sm:w-1/2">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-10 rounded-xl shadow-lg group hover:bg-primaryColor cursor-pointer transition duration-300"
                      >
                        <h3 className="text-primaryColor font-bold text-xl mb-3 group-hover:text-white">
                          Responsive Web Design
                        </h3>
                        <p className="text-sm text-smallTextColor group-hover:text-white leading-6">
                          Tailored, visually stunning websites ensuring seamless
                          user experience across all devices and screen sizes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-12 h-12 absolute left-1/2 -translate-x-1/2 -translate-y-5 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={frontEndImg} alt="Frontend" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className="mt-10 sm:mt-0 sm:mb-16">
                <div className="flex sm:flex-row">
                  <div className="flex justify-end w-full mx-auto sm:ml-10">
                    <div className="w-full sm:w-1/2">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1300"
                        className="bg-white p-5 rounded-xl shadow-lg group hover:bg-primaryColor cursor-pointer transition duration-300"
                      >
                        <h3 className="text-primaryColor font-bold text-xl mb-3 group-hover:text-white">
                          Interactive UI Development
                        </h3>
                        <p className="text-sm text-smallTextColor group-hover:text-white leading-6">
                          Engaging interfaces crafted with ReactJS, enhancing
                          user interaction and functionality.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-12 h-12 absolute left-1/2 -translate-x-1/2 -translate-y-5 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={backendImg} alt="Backend" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* Left Card */}
              <div className="mt-10 sm:mt-0 sm:mb-16">
                <div className="flex sm:flex-row">
                  <div className="flex justify-start w-full mx-auto sm:mr-10">
                    <div className="w-full sm:w-1/2">
                      <div
                        data-aos="fade-right"
                        data-aos-duration="1200"
                        className="bg-white p-5 rounded-xl shadow-lg group hover:bg-primaryColor cursor-pointer transition duration-300"
                      >
                        <h3 className="text-primaryColor font-bold text-xl mb-3 group-hover:text-white">
                          Performance Optimization
                        </h3>
                        <p className="text-sm text-smallTextColor group-hover:text-white leading-6">
                          Utilizing modern web techniques to boost website speed
                          and efficiency for better performance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-12 h-12 absolute left-1/2 -translate-x-1/2 -translate-y-5 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={uiImg} alt="UI Design" />
                    </figure>
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className="mt-10 sm:mt-0 sm:mb-16">
                <div className="flex sm:flex-row">
                  <div className="flex justify-end w-full mx-auto sm:ml-10">
                    <div className="w-full sm:w-1/2">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="100"
                        data-aos-duration="1400"
                        className="bg-white p-5 rounded-xl shadow-lg group hover:bg-primaryColor cursor-pointer transition duration-300"
                      >
                        <h3 className="text-primaryColor font-bold text-xl mb-3 group-hover:text-white">
                          Custom Component Development
                        </h3>
                        <p className="text-sm text-smallTextColor group-hover:text-white leading-6">
                          Tailwind CSS and ReactJS expertise in creating
                          modular, scalable frontend elements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-12 h-12 absolute left-1/2 -translate-x-1/2 -translate-y-5 sm:translate-y-0 flex items-center justify-center">
                    <figure>
                      <img src={appsImg} alt="Apps" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
