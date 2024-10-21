interface Feature {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  orientation?: "left" | "right";
}

export const features: Feature[] = [
  {
    imageUrl: "/images/courses/testes-automatizados/unit-tests.png",
    imageAlt: "Um cubo verde",
    title: "Testes unitários da forma certa",
    description:
      "Testes unitários é um dos tópicos que mais geram dúvidas entre pessoas desenvolvedoras. Você aprenderá como criar testes, o que testar e, principalmente, como testar de forma eficiente. Tudo isso usando ferramentas famosas do mercado, como Jest e ng-mocks.",
  },
  {
    imageUrl: "/images/courses/testes-automatizados/integration-tests.png",
    imageAlt: "Várias curbos verdes agrupados",
    title: "Testes de integração",
    description:
      "Testar como diferentes partes de uma aplicação se integram evitará com que você entregue código com possíveis bugs, que, provavelmente, seriam descobertos pelos usuários. Nesse curso você aprenderá como criar esses tipos de testes, utilizando ferramentas e técnicas muito conhecidas pelo mercado.",
  },
  {
    imageUrl: "/images/courses/testes-automatizados/e2e-test.png",
    imageAlt: "Um robô utilizando um computador",
    title: "Testes End-to-End (E2E)",
    description:
      "Testar uma aplicação como um usuário real evitará problemas como regressão visual e má integração entre partes do projeto, além de trazer uma confiança gigantesca ao entregar o produto. Você aprenderá nesse curso, como criar esse tipo de teste utilizando uma das ferramentas mais respeitas atualmente: Cypress.",
  },
  {
    imageUrl: "/images/courses/testes-automatizados/strong-robot.png",
    imageAlt: "Robo muito forte",
    title: "Criar testes resilientes",
    description:
      "Crie testes resilientes de verdade e evite ter que refazê-los sempre que detalhes mínimos no código do projeto mudarem!",
  },
  {
    imageUrl: "/images/courses/testes-automatizados/two-paths.png",
    imageAlt: "Dois caminhos",
    title: "Evitar detalhes de implementação",
    description:
      "Testes que focam no que importa para o usuário, evitando detalhes de implementação que não são relevantes para ele.",
  },
  {
    imageUrl: "/images/courses/testes-automatizados/productively.png",
    imageAlt: "Uma pessoa sendo produtiva",
    title: "Criar abstrações que melhoram a produtividade",
    description:
      "Você aprenderá a criar abstrações que irão otimizar a forma com que você escreve os testes e também melhorar exponencialmente o reuso de código.",
  },
  {
    imageUrl: "/images/courses/testes-automatizados/planning.png",
    imageAlt: "Uma pessoa planejando algo",
    title: "Test-Driven Development (TDD)",
    description:
      "Aprenda a utilizar Test Driven Development (TDD) para criar os testes antes de implementar o código, trazendo benefícios significativos para a testabilidade e manutenibilidade do projeto ao longo do tempo.",
  },
  {
    imageUrl: "/images/courses/testes-automatizados/mocking.png",
    imageAlt: "Uma pessoa com uma máscara",
    title: "Implementar técnicas de Mocking",
    description:
      "Mocking é uma das técnicas mais relevantes quando o assunto é testes automatizados. No curso você aprenderá abordagens de Mocking como Shallow Rendering, Stubs, Spies e também as diferenças em relação ao Deep Testing, que são extremamente eficientes e necessárias em qualquer projeto.",
  },
  {
    imageUrl: "/images/courses/testes-automatizados/pyramid.png",
    imageAlt: "Uma pirâmide",
    title: "Pirâmide de testes",
    description:
      "A Pirâmide de testes é uma abordagem que organiza testes em níveis, começando com testes unitários e indo até End-to-End. Isso ensina a criar testes que são rápidos, confiáveis e evitam duplicação de código.",
  },
  {
    imageUrl: "/images/courses/testes-automatizados/completed-tasks.png",
    imageAlt: "Tarefas concluídas",
    title: "Testar todos os recursos do Angular",
    description:
      "Você aprenderá a testar todos os recursos do Angular, desde os serviços até os pipes, garantindo que todos estão funcionando perfeitamente em diferentes cenários.",
  },
  {
    imageUrl: "/images/courses/testes-automatizados/branches.png",
    imageAlt: "Branches",
    title: "Utilizar Conventional Commits",
    description:
      "Conventional Commits padroniza e automatiza o histórico de commits, facilitando leitura, manutenção, e integração com CI/CD, além de gerar changelogs e gerenciar versões automaticamente.",
  },
  {
    imageUrl: "/images/courses/testes-automatizados/stars.png",
    imageAlt: "Estrelas",
    title: "Utilizar ferramentas famosas do mercado",
    description:
      "Durante este curso, você aprenderá a utilizar ferramentas amplamente utilizadas no mercado, como Angular, Nx, TailwindCSS, Jest, ng-mocks e Cypress. Com essas ferramentas, você irá estruturar o código do projeto e os seus testes de forma muito moderna e eficiente.",
  },
  {
    imageUrl: "/images/courses/testes-automatizados/reference.png",
    imageAlt: "Uma pessoa sendo ouvida",
    title: "Tornar-se especialista em testes",
    description:
      "Todo o conteúdo do curso mergulha profundamente em vários aspectos da implementação de testes em projetos. Você aprenderá como criar testes de unidade, integração e End-to-End em detalhes, seguindo as melhores práticas.",
  },
];
