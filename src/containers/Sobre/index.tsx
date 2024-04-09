import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, ad neque
      aut magnam tenetur in dolorem assumenda sit iusto voluptatibus et non
      laudantium odit! Incidunt molestiae eligendi modi obcaecati rerum!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=KaykyDion&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=KaykyDion&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
);

export default Sobre;
