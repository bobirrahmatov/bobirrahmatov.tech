export type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  htmlIcon?: boolean;
  githubIcon?: boolean;
  pythonIcon?: boolean;
  reactIcon?: boolean;
  jsIcon?: boolean;
  figmaIcon?: boolean;
  firebaseIcon?: boolean;
}
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: Record<string, any>;
  }
};
