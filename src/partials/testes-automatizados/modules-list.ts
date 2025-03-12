interface Module {
  name: string;
  testType: "unit" | "integration" | "e2e";
}

export const modules: Module[] = [
  {
    name: "Configurando e criando projeto",
    testType: "unit",
  },
  { name: "Criando testes unitários", testType: "unit" },
  { name: "Mocking de componentes", testType: "unit" },
  {
    name: "Utilizando TDD para criar a listagem",
    testType: "unit",
  },
  { name: "Teste de serviços", testType: "unit" },
  { name: "Teste de requisições HTTP", testType: "unit" },
  { name: "Componentizando a listagem", testType: "unit" },
  {
    name: "Testes com a técnica Shallow Rendering",
    testType: "unit",
  },
  {
    name: "Testes com a Host Component e setup function",
    testType: "unit",
  },
  {
    name: "Criando ação para completar tarefa",
    testType: "unit",
  },
  {
    name: "Criando ação para marcar tarefa como pendente",
    testType: "unit",
  },
  {
    name: "Criando ação para remover tarefa",
    testType: "unit",
  },
  {
    name: "Criando página para cadastrar tarefa",
    testType: "unit",
  },
  {
    name: "Utilizando ng-mocks no testes",
    testType: "unit",
  },
  {
    name: "Redirecionado para página de cadastrar tarefa",
    testType: "unit",
  },
  {
    name: "Criando página para editar tarefa",
    testType: "unit",
  },
  { name: "Teste de Resolvers", testType: "unit" },
  {
    name: "Criando ações para acessar página de edição de tarefa",
    testType: "unit",
  },
  { name: "Teste de Diretivas", testType: "unit" },
  { name: "Teste de Pipes", testType: "unit" },
  {
    name: "Criando autenticação de usuário",
    testType: "unit",
  },
  { name: "Teste de Guardas de rota", testType: "unit" },
  {
    name: "Teste serviços do tipo Facade",
    testType: "unit",
  },
  {
    name: "Testando recursos do navegador",
    testType: "unit",
  },
  { name: "Teste de HTTP Interceptors", testType: "unit" },
  { name: "Teste de Initializers", testType: "unit" },
  {
    name: "Criando ação para fazer o logout do usuário",
    testType: "unit",
  },
  { name: "Teste de Defer Blocks", testType: "unit" },
  { name: "Cobertura de testes", testType: "unit" },
  {
    name: "Testando fluxo de login",
    testType: "integration",
  },
  {
    name: "Testando fluxo de listagem",
    testType: "integration",
  },
  {
    name: "Introdução aos testes e2e com Cypress",
    testType: "e2e",
  },
  {
    name: "Testando fluxo de autenticação",
    testType: "e2e",
  },
  { name: "Ferramentas do Cypress", testType: "e2e" },
  {
    name: "Testando recursos da listagem",
    testType: "e2e",
  },
  { name: "Testando formulários", testType: "e2e" },
  { name: "Utilizando Cypress Cloud", testType: "e2e" },
];

export const testTypeLabels = {
  unit: "Teste unitário",
  integration: "Teste de integração",
  e2e: "E2E",
};

export function getTestTypeLabel(testType: "unit" | "integration" | "e2e") {
  return testTypeLabels[testType];
}
