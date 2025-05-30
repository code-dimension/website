const prodSiteUrl = "https://codedimension.com.br";
const devSiteUrl = "https://codedimension-website-dev-env.netlify.app";

const title = "Code Dimension";

const description =
"A Code Dimension é uma plataforma focada em ensinar Front-End e Angular, através de conteúdos didáticos e relevantes!";

const socialImage = `${prodSiteUrl}/images/social-media-image.png`;

const isDevEnv = process.env.SITE_ENV === "DEV";

export const siteConfig = {
  url: isDevEnv ? devSiteUrl : prodSiteUrl,
  title,
  description,
  socialImage,
};
