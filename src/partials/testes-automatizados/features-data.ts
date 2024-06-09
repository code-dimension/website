interface Feature {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    orientation?: "left" | "right";
  }
  
  export const features: Feature[] = [
    {
      imageUrl: "/images/courses/testes-automatizados/strong-robot.png",
      imageAlt: "Robo muito forte",
      title: "Criar testes resilientes",
      description:
        "Crie testes resilientes e evite ter que refazer os testes da sua aplicação sempre que detalhes mínimos mudarem!",
    },
    {
      imageUrl: "/images/courses/testes-automatizados/two-paths.png",
      imageAlt: "Dois caminhos",
      title: "Evitar detalhes de implementação",
      description:
        "Testes que focam no que importa para o usuário, evitando detalhes de implementação que não são relevantes para ele.",
      orientation: "right",
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
        "Test Driven Development (TDD) é uma abordagem que permite que você escreva testes antes de implementar o código, trazendo benefícios significativos para a testabilidade e manutenibilidade do projeto ao longo do tempo.",
      orientation: "right",
    },
    {
      imageUrl: "/images/courses/testes-automatizados/mocking.png",
      imageAlt: "Uma pessoa com uma máscara",
      title: "Implementar técnicas de Mocking",
      description:
        "Mocking é uma das técnicas mais relevantes quando o assunto é testes automatizados. No curso você aprenderá abordagens de Mocking como Shallow Rendering e Deep testing, que são extremamente eficientes e necessárias em qualquer projeto.",
    },
    {
      imageUrl: "/images/courses/testes-automatizados/pyramid.png",
      imageAlt: "Uma pirâmide",
      title: "Pirâmide de testes",
      description:
        "A Pirâmide de testes é uma abordagem que organiza testes em níveis, começando com testes unitários e indo até End-to-End. Isso ensina a criar testes que são rápidos, confiáveis e evitam duplicação de código.",
      orientation: "right",
    },
    {
      imageUrl: "/images/courses/testes-automatizados/completed-tasks.png",
      imageAlt: "Tarefas concluídas",
      title: "Testar todos os recursos do Angular",
      description:
        "Você aprenderá a testar todos os recursos do Angular, desde os serviços até os pipes, garantindo que todos estão funcionando perfeitamente em diferentes cenários.",
    },
    {
      imageUrl: "/images/courses/testes-automatizados/stars.png",
      imageAlt: "Estrelas",
      title: "Utilizar ferramentas famosas do mercado",
      description:
        "Durante este curso, você aprenderá a utilizar ferramentas amplamente utilizadas no mercado, como ng-mocks, Angular Testing Library e Cypress. Essas ferramentas ajudam a simplificar a escrita de testes e garantem que você esteja utilizando as melhores práticas do mercado.",
      orientation: "right",
    },
    {
      imageUrl: "/images/courses/testes-automatizados/reference.png",
      imageAlt: "Uma pessoa sendo ouvida",
      title: "Tornar-se especialista em testes",
      description:
        "Todo o conteúdo do curso mergulha profundamente em vários aspectos da implementação de testes em projetos. Você aprenderá como criar testes de unidade, integração e End-to-End em detalhes, seguindo as melhores práticas.",
    },
  ];