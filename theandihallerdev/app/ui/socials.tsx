import Icon from "@/app/ui/Icon";

export default function Socials() {
  return (
    <div className="mb-10 flex justify-center ">
      <a
        className="m-10 hover:text-yellow-400"
        title="Linkedin"
        href="https://www.linkedin.com/in/andreas-haller-schade/"
        target="_blank"
        rel="noopener"
      >
        <Icon name="bxl-linkedin " size="48px" />
      </a>
      <a
        className="m-10 hover:text-yellow-400"
        title="Github"
        href="https://github.com/TheAndiHaller"
        target="_blank"
        rel="noopener"
      >
        <Icon name="bxl-github" size="48px" />
      </a>
      <a
        className="m-10 hover:text-yellow-400"
        title="Instagram"
        href="https://www.instagram.com/theandihaller/"
        target="_blank"
        rel="noopener"
      >
        <Icon name="bxl-instagram" size="48px" />
      </a>
      <a
        className="m-10 hover:text-yellow-400"
        title="Twitter X"
        href="https://x.com/TheAndiHaller"
        target="_blank"
        rel="noopener"
      >
        <Icon name="bxl-twitter" size="48px" />
      </a>
    </div>
  );
}

/*
<div class="social-btn-container">
<button
  aria-label="Linkedin"
  class="social-link-btn"
  onclick="window.open('https://www.linkedin.com/in/andreas-haller-schade/')"
>
  <i class="bx bxl-linkedin bx-md social-link-icon"></i>
</button>
<button class="social-link-btn" onclick="window.open('https://github.com/TheAndiHaller')">
  <i class="bx bxl-github bx-md social-link-icon"></i>
</button>
<button
  class="social-link-btn"
  onclick="window.open('https://www.instagram.com/theandihaller/')"
>
  <i class="bx bxl-instagram bx-md social-link-icon"></i>
</button>
<button class="social-link-btn" onclick="window.open('https://twitter.com/TheAndiHaller')">
  <i class="bx bxl-twitter bx-md social-link-icon"></i>
</button>
</div>
*/
