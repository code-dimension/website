interface Feature {
  title: string;
  description: string;
  icon: string;  
}

export const data: Feature[] = [
  {
    icon: "bi-check-square",
    title: "Escreva testes unitários com confiança",
    description:
      "Aprenda a testar todos os recursos do Angular com Jest, usando boas práticas e cobertura real.",
  },
  {
    icon: "bi-shield-check",
    title: "Testes de integração",
    description:
      "Teste como diferentes partes de uma aplicação se integram, evitando bugs.",
  },
  {
    icon: "bi-person-check",
    title: "Simule o que o usuário realmente faz",
    description:
      "Implemente testes E2E com Cypress, testando fluxos críticos como login, navegação e formulários.",
  },
  {
    icon: "bi-graph-up-arrow",
    title: "Pense no testes antes do código",
    description:
      "Aplique TDD com Angular para escrever código limpo, confiável e preparado para escalar.",
  },
  {
    icon: "bi-hand-thumbs-up",
    title: "Use mocking do jeito certo",
    description:
      "Domine shallow rendering, spies e criação de stubs — sem se enrolar com configurações.",
  },
  {
    icon: "bi-boxes",
    title: "Encontre o equilíbrio entre tipos de teste",
    description:
      "Aprenda a usar a Pirâmide de Testes para escrever menos, testar mais e entregar com segurança.",
  },
  {
    icon: "bi-layers",
    title: "Estruture projetos de forma escalável",
    description:
      "Use Nx para organizar seu projeto como grandes empresas fazem.",
  },
  {
    icon: "bi-code-slash",
    title: "Ganhe agilidade no front-end com TailwindCSS",
    description:
      "Monte interfaces rápidas e testáveis usando Tailwind com foco em produtividade.",
  },
];
