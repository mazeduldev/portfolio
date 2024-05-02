import { getExperiences } from "@/actions/getExperiences";
import ExperienceTimeline from "./ExperienceTimeline";

interface ExperienceProps {
  id: string;
}

const Experience: React.FC<ExperienceProps> = async ({
  id,
}: ExperienceProps) => {
  const experiences = await getExperiences();
  return (
    <section id={id} className="bg semi-light py-24">
      <div className="container">
        <div className="title-container light">
          <h2 className="title">Experience</h2>
          <h3 className="subtitle">My jobs</h3>
        </div>

        <div className="m-auto w-full">
          <ExperienceTimeline experiences={experiences} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
