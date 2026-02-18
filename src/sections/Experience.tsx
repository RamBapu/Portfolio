import { SectionHeader } from "@/components/SectionHeader";
import grainImage from "@/assets/images/grain.jpg";

const experiences = [
  {
    period: "2023 - Present", // Jul 2023 - Present
    role: "Product Developer",
    company: "Lumel Technologies LLP",
    location: "Chennai, India",
    description:
      "Implemented real-time multi-source data consolidation and modular transformation workflow logic into unified planning sheets",
    technologies: ["React", "TypeScript", "Node.js", "Redux", "TailwindCSS"],
    current: true,
  },
  {
    period: "2022 - 2023", // Oct 2022 - Jul 2023
    role: "Product Developer",
    company: "Arus Info Private Limited",
    location: "Bangalore, India",
    description:
      "Designed and developed dynamic, no-code, self-service planning interfaces with dynamic grid components and multi-destination writeback",
    technologies: ["React", "JavaScript", "Node.js", "MySQL", "JWT", "Redux"],
    current: false,
  },
  {
    period: "2018 - 2020", // June 2018 - May 2020
    role: "System Engineer",
    company: "Tata Consultancy Services Limited",
    location: "Bangalore, India",
    description:
      "Engineered scalable protection policies across multiple syndication channels at Legal & General (UK largest insurance provider)",
    technologies: [
      "JAVA",
      "Spring Boot",
      "Hibernate",
      "JavaScript",
      "REST APIs",
    ],
    current: false,
  },
];

export const ExperienceSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="Experience"
          heading="Professional Journey"
          description="A timeline of engineeering with purpose"
        />
        <div className="mt-12 md:mt-16 lg:mt-20">
          {/*Timeline */}
          <div className="relative">
            <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-300 to-sky-400 md:-translate-x-1/2 " />

            {/*Experience items */}
            <div className="space-y-8 md:space-y-12">
              {experiences.map((exp, idx) => {
                return (
                  <div
                    key={exp.role}
                    className="relative grid md:grid-cols-2 gap-4 md:gap-8 animate-fade-in "
                    style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
                    <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-[#38bdf8] rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                      {exp.current && (
                        <span className="absolute inset-0 rounded-full bg-[#38bdf8] animate-ping opacity-75"></span>
                      )}
                    </div>

                    <div
                      className={`relative pl-8 md:pl-0 ${idx % 2 === 0 ? "md:text-right md:pr-4 lg:pr-8" : "md:col-start-2 md:pl-4 lg:pl-8"}`}>
                      <div
                        className="absolute inset-0 -z-10 opacity-5"
                        style={{
                          backgroundImage: `url(${grainImage.src})`,
                        }}></div>
                      <div className="p-4 lg:p-6 my-2 rounded-2xl outline outline-2 outline-white/30">
                        <span className="text-sm font-medium">
                          {exp.period}
                        </span>
                        <h2 className="font-serif text-xl md:text-2xl lg:text-3xl mt-2 uppercase font-semibold tracking-wide lg:tracking-wider bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text ">
                          {exp.role}
                        </h2>
                        <p className="md:text-base lg:text-xl mt-2">
                          {exp.company}
                        </p>
                        <p className="text-sm mt-4 lg:text-base text-white/50">
                          {exp.description}
                        </p>
                        <div
                          className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                          {exp.technologies.map((expTech) => (
                            <span
                              key={expTech}
                              className="px-3 py-1 bg-gray-600/30 text-xs rounded-full lg:text-sm">
                              {expTech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
