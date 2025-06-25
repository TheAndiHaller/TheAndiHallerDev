import Icon from "@/app/ui/Icon";

export default function Socials() {
  return (
    <div className="mb-8 md:mb-10 flex justify-center">
      <a
        className="m-4 md:m-8 hover:text-yellow-400"
        title="Linkedin"
        href="https://www.linkedin.com/in/andreas-haller-schade/"
        target="_blank"
        rel="noopener"
      >
        <Icon name="bxl-linkedin " size="32px" className="md:text-5xl" />
      </a>
      <a
        className="m-4 md:m-8 hover:text-yellow-400"
        title="Github"
        href="https://github.com/TheAndiHaller"
        target="_blank"
        rel="noopener"
      >
        <Icon name="bxl-github" size="32px" className="md:text-5xl" />
      </a>
      <a
        className="m-4 md:m-8 hover:text-yellow-400"
        title="Instagram"
        href="https://www.instagram.com/theandihaller/"
        target="_blank"
        rel="noopener"
      >
        <Icon name="bxl-instagram" size="32px" className="md:text-5xl" />
      </a>
      <a
        className="m-4 md:m-8 hover:text-yellow-400"
        title="Twitter X"
        href="https://x.com/TheAndiHaller"
        target="_blank"
        rel="noopener"
      >
        <Icon name="bxl-twitter" size="32px" className="md:text-5xl" />
      </a>
    </div>
  );
}
