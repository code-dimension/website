export interface Course {
  imageUrl: string;
  imageAlt: string;
  badgeClass: 'badge-info' | 'badge-warning' | 'badge-accent';
  badgeText: string;
  title: string;
  description: string;
  url: string;
}

export const courses: Course[] = [
  {
    imageUrl: "/images/courses/angular-moderno/angular-moderno-banner-card-home.webp",
    imageAlt: "Angular Moderno",
    badgeClass: "badge-info",
    badgeText: "Lista de espera",
    title: "Angular Moderno",
    description:
      "Aprenda todas as novidades do Angular 20 e se torne um desenvolvedor mais produtivo e eficiente no seu dia a dia!",
    url: "/cursos/angular-moderno",
  },
  {
    imageUrl: "/images/courses/testes-automatizados/banner-robot.png",
    imageAlt: "Curso Testes Automatizados com Angular",
    badgeClass: "badge-warning",
    badgeText: "Lançamento",
    title: "Testes Automatizados com Angular",
    description:
      "Aprenda a criar testes eficientes de verdade e torne-se um profissional altamente requisitado no mercado!",
    url: "/cursos/testes-automatizados",
  },
  {
    imageUrl: "/images/courses/ng17.png",
    imageAlt: "Curso de Angular 17",
    badgeClass: "badge-accent",
    badgeText: "Gratuito",
    title: "Curso de Angular 17",
    description:
      "Construa uma aplicação para gerenciar produtos e aprenda conceitos fundamentais amplamente usados pelo mercado.",
    url: "https://www.youtube.com/playlist?list=PLXEUJjGpEX7zwdFSAzIPiSf9p0tOeI1Yu",
  },
];