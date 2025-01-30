/* empty css                                   */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot, e as renderScript, f as addAttribute, g as renderHead, h as renderComponent, a as createAstro } from '../chunks/astro/server_DRvmUUX6.mjs';
import 'kleur/colors';
/* empty css                                 */
import 'clsx';
import { createClient } from '@sanity/client';
export { renderers } from '../renderers.mjs';

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="2xl:container mx-auto min-h-full"> ${renderSlot($$result, $$slots["default"])} </main>`;
}, "/Users/mx/Documents/MX/mx-resume/src/components/molecule/Main.astro", undefined);

const $$Astro$5 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/images/minimal-icon.svg">${renderScript($$result, "/Users/mx/Documents/MX/mx-resume/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}<link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Max - Flores</title>${renderHead()}</head> <body class="dark"> ${renderComponent($$result, "Main", $$Main, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </body></html>`;
}, "/Users/mx/Documents/MX/mx-resume/src/layouts/Layout.astro", undefined);

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="px-4 pt-3 flex justify-between items-center"> <img id="logo" src="/images/logo-light.svg" alt="Logo" class="w-10"> <div class="flex gap-4 items-center"> <button id="theme-switch" class="btn"> <i class="ri-moon-line"></i> </button> <button class="btn" id="openAside"> <i class="ri-menu-3-fill"></i> </button> </div> </nav> <aside id="aside" class="fixed hidden top-0 right-0 h-screen lg:w-1/2 w-full bg-gradient-to-l from-mx-blue to-transparent z-50 md:bg-opacity-90 bg-opacity-100"> <div class="w-full flex justify-center items-end flex-col h-full p-16 gap-6 *:text-mx-light relative"> <a href="#tech" class="closeAside">Technologies I Use</a> <a href="#projects" class="closeAside">Latest Projects</a> <a href="#experience" class="closeAside">Experience</a> </div> <button class="btn absolute top-4 right-4 dark:bg-mx-purple closeAside hover:dark:bg-mx-lila"> <i class="ri-close-large-line"></i> </button> </aside> ${renderScript($$result, "/Users/mx/Documents/MX/mx-resume/src/components/organisms/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mx/Documents/MX/mx-resume/src/components/organisms/Navbar.astro", undefined);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex-1 px-8 py-20 bg-mx-light dark:bg-mx-blue md:mt-24 mt-2"> <div class="mx-auto 2xl:container flex justify-between"> <p class="hidden md:block">2025 | All rights reserved.</p> <div class="flex flex-col gap-8 justify-end *:flex *:gap-2"> <a href="https://linkedin.com/in/maxfloresdev" target="_blank" class="hover:text-mx-purple"> <i class="ri-linkedin-box-fill"></i> <p>LinkedIn</p> </a> <a href="https://github.com/mxflrs" target="_blank" class="hover:text-mx-purple"> <i class="ri-github-fill"></i> <p>Github</p> </a> <a href="https://instagram.com/maxflorex" target="_blank" class="hover:text-mx-purple"> <i class="ri-instagram-fill"></i> <p>Instagram</p> </a> </div> </div> </footer>`;
}, "/Users/mx/Documents/MX/mx-resume/src/components/organisms/Footer.astro", undefined);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative flex flex-col justify-center items-center w-full flex-1 min-h-[80vh] *:text-center"> <div class="flex md:gap-12 gap-2 flex-wrap justify-center"> <h1 class="uppercase font-bold lg:text-9xl md:text-8xl text-7xl">
Hi.
</h1> <h1 class="uppercase font-bold lg:text-9xl md:text-8xl text-7xl">
I'm Max.
</h1> </div> <h1 class="uppercase font-bold lg:text-9xl md:text-8xl text-3xl">
A Developer.
</h1> <!-- <h1 class="uppercase font-bold lg:text-9xl md:text-8xl text-3xl hyphenate">
        I BUILD AND CREATE
    </h1> --> <div class="w-full h-full absolute top-0 left-0 flex justify-center items-center -z-10"> <img src="/images/x-symbol-xl.svg" alt="icon" id="bigIcon"> </div> </section> <section class="pb-16"> <p class="leading-8 text-center -mt-16 dark:text-mx-lila">
Full-stack developer with a designer’s eye. <br> I build smooth interfaces,
        scalable systems,
<br> and seamless digital experiences.
</p> </section> <section class="flex lg:w-2/3 mx-8 w-auto lg:mx-auto flex-col max-h-96 rounded-lg z-10 relative mb-24 group"> <img src="/images/mx-at-codex.webp" alt="" class="w-16 mx-auto hover:scale-125"> <div class="absolute -bottom-3 left-0 flex justify-center w-full"> <img src="/images/brand-x-blue.svg" alt="" class="group-hover:rotate-45"> </div> </section>`;
}, "/Users/mx/Documents/MX/mx-resume/src/components/organisms/Hero.astro", undefined);

const $$Astro$4 = createAstro();
const $$Container = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Container;
  const { className = "", title = "", id = "" } = Astro2.props;
  const defaultClasses = "pb-16 px-8";
  const defaultClassesArray = defaultClasses.split(" ");
  const customClassesArray = className.split(" ");
  const classes = [
    ...defaultClassesArray.filter((cls) => !customClassesArray.includes(cls)),
    ...customClassesArray
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${classes}`, "class")}${addAttribute(id, "id")}> ${title.length > 0 && renderTemplate`<div class="flex gap-2 items-center pb-12"> <i class="ri-corner-down-right-line"></i> <p>${title}</p> </div>`} ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/mx/Documents/MX/mx-resume/src/components/molecule/Container.astro", undefined);

const $$Astro$3 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const { id, className = "" } = Astro2.props;
  const defaultClasses = "bg-mx-blue hover:scale-105 text-mx-light rounded-md px-8 py-2 hover:bg-mx-purple dark:bg-mx-purple dark:hover:bg-mx-yellow";
  const defaultClassesArray = defaultClasses.split(" ");
  const customClassesArray = className.split(" ");
  const classes = [
    ...defaultClassesArray.filter((cls) => !customClassesArray.includes(cls)),
    ...customClassesArray
  ].join(" ");
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(id, "id")} type="button"${addAttribute(classes, "class")}> ${renderSlot($$result, $$slots["default"])} </button>`;
}, "/Users/mx/Documents/MX/mx-resume/src/components/atoms/Button.astro", undefined);

function sanityImageUrl(imageRef, width = 800, height = 600) {
  const projectId = "d8xud3ib";
  const dataset = "production";
  if (!imageRef) return "";
  const parts = imageRef.split("-");
  if (parts.length < 3) return "";
  const imageId = `${parts[1]}-${parts[2]}.${parts[3]}`;
  return `https://cdn.sanity.io/images/${projectId}/${dataset}/${imageId}?w=${width}&h=${height}`;
}

const $$Astro$2 = createAstro();
const $$Experience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Experience;
  const { experiences } = Astro2.props;
  const sortedExperiences = experiences.sort((a, b) => {
    return new Date(b.fromYear).getTime() - new Date(a.fromYear).getTime();
  });
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "title": "Recent Experience", "className": "lg:pt-4 pt-2", "id": "experience", "data-astro-cid-g5un4aki": true }, { "default": ($$result2) => renderTemplate`${sortedExperiences.map((e, idx) => renderTemplate`${maybeRenderHead()}<div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center p-8 border border-mx-purple dark:border-mx-blue rounded-md mb-4 hover:bg-white dark:hover:bg-mx-blue relative" data-astro-cid-g5un4aki> <div class="flex gap-2 items-center" data-astro-cid-g5un4aki> <i class="ri-calendar-line pb-1" data-astro-cid-g5un4aki></i> <p class="leading-none" data-astro-cid-g5un4aki> ${e.fromYear.toString().slice(0, 4)} ${idx === 0 ? " - Present" : ""} </p> </div> <div class="flex gap-2 items-center" data-astro-cid-g5un4aki> <i class="ri-suitcase-line pb-1" data-astro-cid-g5un4aki></i> <p class="leading-none" data-astro-cid-g5un4aki>${e.position}</p> </div> <a class="flex gap-2 items-center group"${addAttribute(e.url, "href")} target="_blank" data-astro-cid-g5un4aki> <img${addAttribute(sanityImageUrl(e.logo.asset._ref, 100, 100), "src")} alt="" class="rounded-full w-10 h-10 object-cover" data-astro-cid-g5un4aki> <p class="leading-none group-hover:underline underline-offset-8 group-hover:text-mx-purple" data-astro-cid-g5un4aki> ${e.company} </p> </a> <div class="flex gap-2 items-center" data-astro-cid-g5un4aki> <i class="ri-map-pin-line pb-1" data-astro-cid-g5un4aki></i> <p class="leading-none" data-astro-cid-g5un4aki>${e.location}</p> </div> </div>`)}<a href="https://linkedin.com/in/maxfloresdev" target="_blank" data-astro-cid-g5un4aki> ${renderComponent($$result2, "Button", $$Button, { "data-astro-cid-g5un4aki": true }, { "default": ($$result3) => renderTemplate`Know More` })} </a> ` })} `;
}, "/Users/mx/Documents/MX/mx-resume/src/components/organisms/Experience.astro", undefined);

const $$Astro$1 = createAstro();
const $$CaseStudies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CaseStudies;
  const { caseStudies } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "title": "Latest Projects", "className": "md:pt-32 pt-12", "id": "projects", "data-astro-cid-pcqdt4jk": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid md:grid-cols-2 grid-cols-1 gap-4 relative" data-astro-cid-pcqdt4jk> ${caseStudies.map((cs) => renderTemplate`<div class="flex flex-col md:bg-white bg-transparent border-[1px] border-mx-purple dark:border-mx-blue md:border-transparent rounded-md min-h-56 items-end justify-end px-4 py-2 group relative" data-astro-cid-pcqdt4jk> <img${addAttribute(sanityImageUrl(cs.image.asset._ref, 400), "src")}${addAttribute(cs.title, "alt")} class="pb-8 mr-auto grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0" data-astro-cid-pcqdt4jk> <p class="font-bold text-2xl text-mx-blue dark:text-mx-light dark:md:text-mx-blue" data-astro-cid-pcqdt4jk> ${cs.title} </p> <div class="lg:flex gap-2 p-2 flex-wrap hidden" data-astro-cid-pcqdt4jk> ${cs.technologies.map((t) => renderTemplate`<p class="dark:text-mx-blue text-xs border-[1px] border-mx-lila rounded-xl px-2 py-1 text-mx-lila" data-astro-cid-pcqdt4jk> ${t.technology} </p>`)} </div> <a${addAttribute(cs.url, "href")} target="_blank" class="absolute top-4 right-4 px-4 py-2 rounded-md bg-mx-lila text-mx-dark hover:bg-mx-blue group-hover:hover:text-mx-light dark:hover:bg-mx-purple" data-astro-cid-pcqdt4jk> <i class="ri-arrow-right-up-line" data-astro-cid-pcqdt4jk></i> </a> <a${addAttribute(cs.repo, "href")} target="_blank" class="absolute bottom-4 left-4 px-4 py-2 rounded-md border-[1px] border-mx-lila text-mx-lila hover:bg-mx-blue hover:border-transparent" data-astro-cid-pcqdt4jk> <i class="ri-github-line" data-astro-cid-pcqdt4jk></i> </a> </div>`)} </div> ` })} `;
}, "/Users/mx/Documents/MX/mx-resume/src/components/organisms/CaseStudies.astro", undefined);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const email = "max@maxflores.com";
  const phone = "+50496412707";
  return renderTemplate`${renderComponent($$result, "Container", $$Container, { "className": "md:pb-16 md:pt-40 pb-8 pt-8", "data-astro-cid-bd6jexa6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-white dark:bg-mx-blue py-16 rounded-md md:w-2/3 w-full md:px-0 px-8 mx-auto drop-shadow-sm" data-astro-cid-bd6jexa6> <h6 class="text-center font-bold leading-normal lg:px-24 md:px-16 px-8" data-astro-cid-bd6jexa6>
Have an exciting project where you need help?
</h6> <div class="absolute -bottom-6 left-0 flex justify-center items-center mx-auto w-full" data-astro-cid-bd6jexa6> ${renderComponent($$result2, "Button", $$Button, { "id": "openDialog", "data-astro-cid-bd6jexa6": true }, { "default": ($$result3) => renderTemplate`Get In Touch` })} </div> </div> ` })} <div id="dialog" class="fixed bg-mx-dark bg-opacity-50 hidden justify-center items-center w-screen h-screen top-0 left-0 z-40" data-astro-cid-bd6jexa6> <div class="bg-white rounded-lg p-6 lg:w-1/3 w-full flex flex-col justify-center m-8 md:m-0" data-astro-cid-bd6jexa6> <h5 class="font-semibold mb-4 text-center dark:text-mx-dark" data-astro-cid-bd6jexa6>Let's get in touch!</h5> <div class="grid grid-cols-3 items-center *:place-self-center pb-8 pt-2 w-1/2 mx-auto *:text-mx-blue" data-astro-cid-bd6jexa6> <a${addAttribute(`https://wa.me/${phone}`, "href")} class="p-4 rounded-full hover:bg-mx-lila" target="_blank" rel="noopener noreferrer" data-astro-cid-bd6jexa6> <i class="ri-whatsapp-line ri-2x hover:scale-110" data-astro-cid-bd6jexa6></i> </a> <a${addAttribute(`mailto:${email}`, "href")} class="p-4 rounded-full hover:bg-mx-lila" target="_blank" rel="noopener noreferrer" data-astro-cid-bd6jexa6> <i class="ri-mail-ai-line ri-2x hover:scale-110" data-astro-cid-bd6jexa6></i> </a> <a${addAttribute(`tel:${phone}`, "href")} class="p-4 rounded-full hover:bg-mx-lila" data-astro-cid-bd6jexa6> <i class="ri-phone-line ri-2x hover:scale-110" data-astro-cid-bd6jexa6></i> </a> </div> ${renderComponent($$result, "Button", $$Button, { "id": "closeDialog", "className": "mx-auto", "data-astro-cid-bd6jexa6": true }, { "default": ($$result2) => renderTemplate`Close` })} </div> </div>  ${renderScript($$result, "/Users/mx/Documents/MX/mx-resume/src/components/organisms/Contact.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/mx/Documents/MX/mx-resume/src/components/organisms/Contact.astro", undefined);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw) }));
var _a;
const $$Astro = createAstro();
const $$Technologies = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Technologies;
  const { categories } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", " <script>\n    document.addEventListener('DOMContentLoaded', () => {\n        let openIndex = null; // Track the currently open category index\n\n        const toggles = document.querySelectorAll('.category-toggle');\n        const contents = document.querySelectorAll('.category-content');\n\n        function closeOpenCategory() {\n            if (openIndex !== null) {\n                const openContent = document.querySelector(\n                    `.category-content[data-index=\"${openIndex}\"]`\n                );\n                if (openContent) openContent.classList.add('hidden');\n                openIndex = null;\n            }\n        }\n\n        toggles.forEach((toggle) => {\n            toggle.addEventListener('click', (event) => {\n                event.stopPropagation(); // Prevent closing when clicking on the button itself\n\n                const index = toggle.getAttribute('data-index');\n                const content = document.querySelector(\n                    `.category-content[data-index=\"${index}\"]`\n                );\n\n                // If the clicked category is already open, close it\n                if (openIndex === index) {\n                    closeOpenCategory();\n                } else {\n                    closeOpenCategory();\n                    content.classList.remove('hidden'); // Show the new content\n                    openIndex = index;\n                }\n            });\n        });\n\n        // Close when clicking outside\n        document.addEventListener('click', (event) => {\n            if (\n                !event.target.closest('.category-toggle') &&\n                !event.target.closest('.category-content')\n            ) {\n                closeOpenCategory();\n            }\n        });\n\n        // Close on Escape key press\n        document.addEventListener('keydown', (event) => {\n            if (event.key === 'Escape') {\n                closeOpenCategory();\n            }\n        });\n    });\n<\/script>"], ["", " <script>\n    document.addEventListener('DOMContentLoaded', () => {\n        let openIndex = null; // Track the currently open category index\n\n        const toggles = document.querySelectorAll('.category-toggle');\n        const contents = document.querySelectorAll('.category-content');\n\n        function closeOpenCategory() {\n            if (openIndex !== null) {\n                const openContent = document.querySelector(\n                    \\`.category-content[data-index=\"\\${openIndex}\"]\\`\n                );\n                if (openContent) openContent.classList.add('hidden');\n                openIndex = null;\n            }\n        }\n\n        toggles.forEach((toggle) => {\n            toggle.addEventListener('click', (event) => {\n                event.stopPropagation(); // Prevent closing when clicking on the button itself\n\n                const index = toggle.getAttribute('data-index');\n                const content = document.querySelector(\n                    \\`.category-content[data-index=\"\\${index}\"]\\`\n                );\n\n                // If the clicked category is already open, close it\n                if (openIndex === index) {\n                    closeOpenCategory();\n                } else {\n                    closeOpenCategory();\n                    content.classList.remove('hidden'); // Show the new content\n                    openIndex = index;\n                }\n            });\n        });\n\n        // Close when clicking outside\n        document.addEventListener('click', (event) => {\n            if (\n                !event.target.closest('.category-toggle') &&\n                !event.target.closest('.category-content')\n            ) {\n                closeOpenCategory();\n            }\n        });\n\n        // Close on Escape key press\n        document.addEventListener('keydown', (event) => {\n            if (event.key === 'Escape') {\n                closeOpenCategory();\n            }\n        });\n    });\n<\/script>"])), renderComponent($$result, "Container", $$Container, { "title": "Technologies I use", "className": "md:my-32 mb-0 mt-24", "id": "tech" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid xl:grid-cols-5 gap-4 md:grid-cols-3 grid-cols-1"> ${categories.map((c, index) => renderTemplate`<div class="relative"> <button class="flex flex-wrap py-2 px-4 w-full items-center rounded-lg justify-between hover:bg-white dark:hover:bg-mx-purple category-toggle group relative"${addAttribute(index, "data-index")}> <div class="flex gap-4 items-center"> <i${addAttribute(c.icon, "class")}></i> <p class="font-bold">${c.category}</p> </div> <i class="ri-arrow-down-s-line text-mx-purple group-hover:text-mx-blue dark:text-mx-lila"></i> </button>  <div${addAttribute(`transition-all duration-300 ease-in-out hidden category-content absolute w-full top-8 left-0 z-20`, "class")}${addAttribute(index, "data-index")}> <div class="p-8 flex flex-col gap-6 bg-white mt-4 rounded-md"> ${c.focus.map((f) => renderTemplate`<div class="flex items-start gap-2 flex-col"> <div class="flex gap-4 items-center"> <i class="ri-corner-left-down-line text-mx-yellow dark:text-mx-lila"></i> <p class="italic dark:text-mx-dark"> ${f.title} </p> </div> <div class="flex gap-2 flex-wrap">  ${f.technologies.map((ft) => renderTemplate`<p class="text-xs px-3 py-1 rounded-2xl bg-mx-light text-mx-purple dark:bg-mx-lila dark:text-mx-dark font-semibold"> ${ft.technology} </p>`)} </div> </div>`)} </div> </div> </div>`)} </div> ` }));
}, "/Users/mx/Documents/MX/mx-resume/src/components/organisms/Technologies.astro", undefined);

const client = createClient({
  projectId: "d8xud3ib",
  dataset: "production",
  apiVersion: "2024-01-26",
  useCdn: true
});

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const experiences = await client.fetch(`*[_type == "experiences"]`);
  const caseStudies = await client.fetch(`*[_type == "case-study"]{
  title,
  image,
  url,
  repo,
  technologies[]->{
    technology,
    icon,
    yoe
  }
}
`);
  const categories = await client.fetch(`*[_type == "tech-categories"]{
  _id,
  category,
  icon,
  focus[]{
    title,
    technologies[]->{
      technology,
      icon,
      yoe
    }
  }
}`);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Experience", $$Experience, { "experiences": experiences })} ${renderComponent($$result2, "CaseStudies", $$CaseStudies, { "caseStudies": caseStudies })} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Technologies", $$Technologies, { "categories": categories })} ` })} ${renderComponent($$result, "Footer", $$Footer, {})}`;
}, "/Users/mx/Documents/MX/mx-resume/src/pages/index.astro", undefined);

const $$file = "/Users/mx/Documents/MX/mx-resume/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
