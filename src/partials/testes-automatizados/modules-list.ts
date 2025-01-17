interface Module {
  name: string;
  isAvailable: boolean;
  testType: "unit" | "integration" | "e2e";
}

export const modules: Module[] = [
  {
    name: "Configurando e criando projeto",
    isAvailable: true,
    testType: "unit",
  },
  { name: "Criando testes unitários", isAvailable: true, testType: "unit" },
  { name: "Mocking de componentes", isAvailable: true, testType: "unit" },
  {
    name: "Utilizando TDD para criar a listagem",
    isAvailable: true,
    testType: "unit",
  },
  { name: "Teste de serviços", isAvailable: true, testType: "unit" },
  { name: "Teste de requisições HTTP", isAvailable: true, testType: "unit" },
  { name: "Componentizando a listagem", isAvailable: true, testType: "unit" },
  {
    name: "Testes com a técnica Shallow Rendering",
    isAvailable: true,
    testType: "unit",
  },
  {
    name: "Testes com a Host Component e setup function",
    isAvailable: true,
    testType: "unit",
  },
  {
    name: "Criando ação para completar tarefa",
    isAvailable: true,
    testType: "unit",
  },
  {
    name: "Criando ação para marcar tarefa como pendente",
    isAvailable: true,
    testType: "unit",
  },
  {
    name: "Criando ação para remover tarefa",
    isAvailable: true,
    testType: "unit",
  },
  {
    name: "Criando página para cadastrar tarefa",
    isAvailable: true,
    testType: "unit",
  },
  {
    name: "Utilizando ng-mocks no testes",
    isAvailable: true,
    testType: "unit",
  },
  {
    name: "Redirecionado para página de cadastrar tarefa",
    isAvailable: true,
    testType: "unit",
  },
  {
    name: "Criando página para editar tarefa",
    isAvailable: true,
    testType: "unit",
  },
  { name: "Teste de Resolvers", isAvailable: true, testType: "unit" },
  {
    name: "Criando ações para acessar página de edição de tarefa",
    isAvailable: true,
    testType: "unit",
  },
  { name: "Teste de Diretivas", isAvailable: true, testType: "unit" },
  { name: "Teste de Pipes", isAvailable: true, testType: "unit" },
  {
    name: "Criando autenticação de usuário",
    isAvailable: true,
    testType: "unit",
  },
  { name: "Teste de Guardas de rota", isAvailable: true, testType: "unit" },
  {
    name: "Teste serviços do tipo Facade",
    isAvailable: true,
    testType: "unit",
  },
  {
    name: "Testando recursos do navegador",
    isAvailable: true,
    testType: "unit",
  },
  { name: "Teste de HTTP Interceptors", isAvailable: true, testType: "unit" },
  { name: "Teste de Initializers", isAvailable: true, testType: "unit" },
  {
    name: "Criando ação para fazer o logout do usuário",
    isAvailable: true,
    testType: "unit",
  },
  { name: "Teste de Defer Blocks", isAvailable: true, testType: "unit" },
  { name: "Cobertura de testes", isAvailable: false, testType: "unit" },
  {
    name: "Testando fluxo de login",
    isAvailable: false,
    testType: "integration",
  },
  {
    name: "Testando fluxo de listagem",
    isAvailable: false,
    testType: "integration",
  },
  {
    name: "Introdução aos testes e2e com Cypress",
    isAvailable: false,
    testType: "e2e",
  },
  {
    name: "Testando fluxo de autenticação",
    isAvailable: false,
    testType: "e2e",
  },
  { name: "Ferramentas do Cypress", isAvailable: false, testType: "e2e" },
  {
    name: "Testando recursos da listagem",
    isAvailable: false,
    testType: "e2e",
  },
  { name: "Testando formulários", isAvailable: false, testType: "e2e" },
  { name: "Utilizando Cypress Cloud", isAvailable: false, testType: "e2e" },
];

export const testTypeLabels = {
  unit: "Teste unitário",
  integration: "Teste de integração",
  e2e: "E2E",
};

export function getTestTypeLabel(testType: "unit" | "integration" | "e2e") {
  return testTypeLabels[testType];
}
