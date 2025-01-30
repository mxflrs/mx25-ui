/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as createAstro } from '../chunks/astro/server_DRvmUUX6.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
      if (!name || !email || !message) {
        return new Response(
          `<div class="error-message">Please fill out all fields</div>`,
          {
            status: 400,
            headers: {
              "Content-Type": "text/html"
            }
          }
        );
      }
      console.log("Form submitted:", { name, email, message });
      return new Response(
        `<div class="success-message">Thank you for your message! We'll get back to you soon.</div>`,
        {
          status: 200,
          headers: {
            "Content-Type": "text/html"
          }
        }
      );
    } catch (error) {
      console.error("Error:", error);
      return new Response(
        `<div class="error-message">Something went wrong. Please try again.</div>`,
        {
          status: 500,
          headers: {
            "Content-Type": "text/html"
          }
        }
      );
    }
  }
  return renderTemplate``;
}, "/Users/mx/Documents/MX/mx-resume/src/pages/contact.astro", undefined);

const $$file = "/Users/mx/Documents/MX/mx-resume/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
