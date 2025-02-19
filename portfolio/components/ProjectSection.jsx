import Chip from "./Chip";
import Card from "./card";
// TO DO : ADD PICTURES TO EACH CARD AND CORRECT LINKS TO REPOS
const ProjectSection = () => {
  return (
    <div>
      <h1 className="text-4xl text-white font-bold">Projects</h1>
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-8">
        <Card
          title={"ReelQuest"}
          text={
            "Real-time movie search web app powered by TMDB, offering instant access to ratings, overviews, and detailed insights to help users easily discover their next favorite film."
          }
          chip1={<Chip skill={"React"} />}
          chip2={<Chip skill={"JavaScript"} />}
          chip4={<Chip skill={"TailwindCSS"} />}
          img={"src/assets/ReelQuestSH.png"}
          url={"https://github.com/JDiaz7953/ReelQuest"}
        />

        <Card
          title={"RESTful Book API"}
          text={
            "A RESTful Book API that allows users to efficiently manage book records through standardized endpoints, enabling actions such as creating, reading, updating, and deleting book data."
          }
          chip1={<Chip skill={"NodeJS"} />}
          chip2={<Chip skill={"JavaScript"} />}
          chip4={<Chip skill={"MongoDB"} />}
          url={"https://github.com/JDiaz7953/Book-RESTfulAPI"}
          img={""}
        />
        <Card
          title={"Tip Calculator"}
          text={
            "A tip calculator web app that quickly computes tip amounts and total bills, providing an intuitive and instant calculation experience for dining and expense management."
          }
          chip1={<Chip skill={"React"} />}
          chip2={<Chip skill={"JavaScript"} />}
          chip4={<Chip skill={"TailwindCSS"} />}
          url={"https://github.com/JDiaz7953/TipCalc"}
          img={""}
        />
        <Card
          title={"CLI Pokemon Game"}
          text={
            "A CLI Pokédex game that offers an interactive terminal experience, enabling users to search and explore detailed Pokémon data, including stats, moves, and evolutions"
          }
          chip1={<Chip skill={"Go"} />}
          url={"https://github.com/JDiaz7953/PokeDex"}
          img={""}
        />
      </section>
    </div>
  );
};

export default ProjectSection;
