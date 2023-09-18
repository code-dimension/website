const baseConfig = {
  url: "https://effulgent-liger-d5025f.netlify.app",
  title: "Code Dimension",
  description:
    "A Code Dimension é uma plataforma focada em ensinar Front-End e Angular, através de conteúdos didáticos e relevantes!",
  ogImage: "https://effulgent-liger-d5025f.netlify.app/images/og-code.png",
  themeColor: "#03020f",
};

const socialImage = `${baseConfig.url}/images/og-code.png`;

export const siteConfig = {
    ...baseConfig,
    socialImage
}

