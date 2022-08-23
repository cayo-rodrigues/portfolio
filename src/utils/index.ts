import { IProject } from "../interfaces/projects";
import { ITech } from "../interfaces/techs";

// project logos
import pwImg from "../assets/projectLogos/pw.png";
import yocaImg from "../assets/projectLogos/yoca.png";
import primeiraFilaImg from "../assets/projectLogos/pf.png";
import bolinhaImg from "../assets/projectLogos/bolinha.png";
import joKingImg from "../assets/projectLogos/jk.png";
import pypiImg from "../assets/projectLogos/pypi.png";

// local tech logos
import expressImg from "../assets/techLogos/express.svg";
import typeormImg from "../assets/techLogos/typeorm.png";
import sqliteImg from "../assets/techLogos/sqlite.png";
import djImg from "../assets/techLogos/dj.png";

// remote tech logos
const dockerImg =
  "https://camo.githubusercontent.com/cbd55750b53c01dc18830d377c7364b01077e8a675a79d454a3f1ea549efe129/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f646f636b65722f646f636b65722d6f726967696e616c2e737667";
const jsImg =
  "https://camo.githubusercontent.com/528e232c728b497080cbf31d2a7e797caa81e402ff81643f79b2c2c395a29f17/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d706c61696e2e737667";
const cssImg =
  "https://camo.githubusercontent.com/2e496d4bfc6f753ddca87b521ce95c88219f77800212ffa6d4401ad368c82170/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f637373332f637373332d6f726967696e616c2e737667";
const htmlImg =
  "https://camo.githubusercontent.com/da7acacadecf91d6dc02efcd2be086bb6d78ddff19a1b7a0ab2755a6fda8b1e9/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f68746d6c352f68746d6c352d6f726967696e616c2e737667";
const reactImg =
  "https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667";
const psqlImg =
  "https://camo.githubusercontent.com/d536b9cc0c533324368535ece721f5424f28eae3ec0e6f3847408948ecacfce6/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f706f737467726573716c2f706f737467726573716c2d6f726967696e616c2e737667";
const tsImg =
  "https://camo.githubusercontent.com/c04208976fe84f5bfd2111ba446acf65ff373c962ed80bbf7aa028820a5bbd79/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d706c61696e2e737667";
const pyImg =
  "https://camo.githubusercontent.com/dd8b0601cdfefe534a6a26f4c29c7f8a5fcfc315002655f519c73121f7bad8bc/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f707974686f6e2f707974686f6e2d6f726967696e616c2e737667";
const nodeImg =
  "https://camo.githubusercontent.com/900baefb89e187c8b32cdbb3b440d1502fe8f30a1a335cc5dc5868af0142f8b1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d6f726967696e616c2e737667";
const awsImg =
  "https://camo.githubusercontent.com/9b70a59580f9cdb57e2083a8085cfb55614d3c145cc56ac8a3d3b81870d0f3d1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f616d617a6f6e77656273657276696365732f616d617a6f6e77656273657276696365732d6f726967696e616c2e737667";
const ubuntuImg =
  "https://camo.githubusercontent.com/3e8e4170de9ac8fc3a7bbe397f78556429a19e26dbefe7020d1e8c25c6ace93c/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7562756e74752f7562756e74752d706c61696e2e737667";
const redisImg =
  "https://camo.githubusercontent.com/2af3e6d89e3c22ea6bbde81c96d0d0674bbed3d5e26c572e0b6ad247732c4375/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656469732f72656469732d6f726967696e616c2e737667";
const gitImg =
  "https://camo.githubusercontent.com/dc9e7e657b4cd5ba7d819d1a9ce61434bd0ddbb94287d7476b186bd783b62279/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6769742f6769742d6f726967696e616c2e737667";

export const projectList: IProject[] = [
  {
    title: "Primeira Fila",
    description:
      "Uma aplicação backend que permite um usuário ver quais filmes estão em cartaz e onde eles estão sendo exibidos, além de comprar ingressos online. Ao mesmo tempo, gerentes de cinema podem cadastrar seus cinemas e gerenciá-los.",
    logoSrc: primeiraFilaImg,
    projectLink: "http://primeira-fila.herokuapp.com/docs/",
    repoLink: "https://github.com/cayo-rodrigues/primeira-fila",
  },
  {
    title: "Proworking",
    description:
      "Um projeto cujo objetivo é conectar de forma fácil e simples prestadores de serviço informais com pessoas que precisam desses serviços.",
    logoSrc: pwImg,
    projectLink: "https://proworking.vercel.app/",
    repoLink: "https://github.com/cayo-rodrigues/capstone-m3",
  },
  {
    title: "JoKing",
    description:
      "Meu primeiro projeto full stack. Trata-se de uma rede social onde você pode compartilhar, curtir e comentar piadas.",
    logoSrc: joKingImg,
    projectLink: "https://jo-king.herokuapp.com/",
    repoLink: "https://github.com/cayo-rodrigues/joking",
  },
  {
    title: "dj-drf-utils",
    description:
      "Um pacote Python, upado no Pypi, que possui funções e classes úteis para serem usadas em projetos Django, especialmente com Django Rest Framework, feito para facilitar a vida de desenvolvedores.",
    logoSrc: pypiImg,
    projectLink: "https://pypi.org/project/dj-drf-utils/",
    repoLink: "https://github.com/cayo-rodrigues/dj-drf-utils",
  },
  {
    title: "Yoca",
    description:
      "Uma api com o objetivo de gerenciar os processos envolvidos na administração de um restaurante, com controle de estoque semi-automático.",
    logoSrc: yocaImg,
    projectLink: "https://cayoca.herokuapp.com/api/docs/",
    repoLink: "https://github.com/cayo-rodrigues/yoca",
  },
  {
    title: "Jogo da bolinha",
    description:
      "Um joguinho simples cujo objetivo é não deixar a bola cair. Conforme o tempo passa o jogador acumula pontos, e a bolinha fica mais rápida.",
    logoSrc: bolinhaImg,
    projectLink: "https://cayo-rodrigues.github.io/jogo-da-bolinha/",
    repoLink: "https://github.com/cayo-rodrigues/jogo-da-bolinha",
  },
];

export const techList: ITech[] = [
  {
    logoSrc: pyImg,
    name: "Python",
  },
  {
    logoSrc: djImg,
    name: "Django",
  },
  {
    logoSrc: reactImg,
    name: "React",
  },
  {
    logoSrc: tsImg,
    name: "Typescript",
  },
  {
    logoSrc: jsImg,
    name: "Javascript",
  },
  {
    logoSrc: nodeImg,
    name: "Node.js",
  },
  {
    logoSrc: typeormImg,
    name: "TypeORM",
  },
  {
    logoSrc: expressImg,
    name: "Express",
  },
  {
    logoSrc: psqlImg,
    name: "PostgreSQL",
  },
  {
    logoSrc: sqliteImg,
    name: "SQLite",
  },
  {
    logoSrc: redisImg,
    name: "Redis",
  },
  {
    logoSrc: htmlImg,
    name: "HTML",
  },
  {
    logoSrc: cssImg,
    name: "CSS",
  },
  {
    logoSrc: awsImg,
    name: "Amazon S3",
  },
  {
    logoSrc: dockerImg,
    name: "Docker",
  },
  {
    logoSrc: ubuntuImg,
    name: "Ubuntu",
  },
  {
    logoSrc: gitImg,
    name: "Git",
  },
];
