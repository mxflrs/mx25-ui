import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_ZUr8ckMr.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_DRvmUUX6.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/mx/Documents/MX/mx-resume/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CpDBPu18.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CpDBPu18.js"}],"styles":[{"type":"external","src":"/_astro/contact.fcJi1fvA.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.CpDBPu18.js"}],"styles":[{"type":"external","src":"/_astro/contact.fcJi1fvA.css"},{"type":"external","src":"/_astro/index.DBUKCDG7.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/mx/Documents/MX/mx-resume/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/mx/Documents/MX/mx-resume/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CVuH_bwm.mjs","\u0000@astrojs-manifest":"manifest_CvsZ9rfo.mjs","/Users/mx/Documents/MX/mx-resume/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.C1onTupY.js","/Users/mx/Documents/MX/mx-resume/src/components/organisms/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.BJGmKWG-.js","/Users/mx/Documents/MX/mx-resume/src/components/organisms/Contact.astro?astro&type=script&index=0&lang.ts":"_astro/Contact.astro_astro_type_script_index_0_lang.mbSagFDj.js","astro:scripts/page.js":"_astro/page.CpDBPu18.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/mx/Documents/MX/mx-resume/src/components/organisms/Navbar.astro?astro&type=script&index=0&lang.ts","const i=document.getElementById(\"theme-switch\"),o=document.getElementById(\"logo\"),t=i?.querySelector(\"i\"),c=document.getElementById(\"bigIcon\"),n=document.querySelectorAll(\".closeAside\"),s=document.getElementById(\"aside\"),l=document.getElementById(\"openAside\");l?.addEventListener(\"click\",()=>{s?.classList.remove(\"hidden\"),document.body.classList.add(\"overflow-hidden\")});n.forEach(e=>{e.addEventListener(\"click\",()=>{s?.classList.add(\"hidden\"),document.body.classList.remove(\"overflow-hidden\")})});const d=document.querySelector(\".closeAside\");d?.addEventListener(\"click\",()=>{s?.classList.add(\"hidden\"),document.body.classList.remove(\"overflow-hidden\")});function a(){const e=document.body;e.classList.contains(\"light\")?(e.classList.replace(\"light\",\"dark\"),o.src=\"/images/logo-light.svg\",c.src=\"/public/images/x-symbol-xl.svg\",t?.classList.replace(\"ri-moon-line\",\"ri-sun-line\")):(e.classList.replace(\"dark\",\"light\"),o.src=\"/images/logo-blue.svg\",c.src=\"/public/images/x-symbol-xl-light.svg\",t?.classList.replace(\"ri-sun-line\",\"ri-moon-line\"))}i?.addEventListener(\"click\",a);"],["/Users/mx/Documents/MX/mx-resume/src/components/organisms/Contact.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"openDialog\"),e=document.getElementById(\"dialog\"),d=document.getElementById(\"closeDialog\");o?.addEventListener(\"click\",()=>{e?.classList.replace(\"hidden\",\"flex\"),document.body.classList.add(\"overflow-hidden\")});d?.addEventListener(\"click\",()=>{e?.classList.replace(\"flex\",\"hidden\"),document.body.classList.remove(\"overflow-hidden\")});"]],"assets":["/_astro/contact.fcJi1fvA.css","/_astro/index.DBUKCDG7.css","/_astro/Layout.astro_astro_type_script_index_0_lang.C1onTupY.js","/_astro/page.CpDBPu18.js","/fonts/Malinton-Black.otf","/fonts/Malinton-Bold.otf","/fonts/Malinton-ExtBd.otf","/fonts/Malinton-ExtLt.otf","/fonts/Malinton-Light.otf","/fonts/Malinton-Medium.otf","/fonts/Malinton-Regular.otf","/fonts/Malinton-SemiBold.otf","/fonts/Malinton-Thin.otf","/images/brand-x-blue.svg","/images/brand-x-pink.svg","/images/brand-x-purple.svg","/images/brand-x-white.svg","/images/favicon.svg","/images/logo-blue.svg","/images/logo-light.svg","/images/minimal-icon.svg","/images/mx-at-codex.webp","/images/x-symbol-2xl.svg","/images/x-symbol-xl-light.svg","/images/x-symbol-xl.svg","/_astro/page.CpDBPu18.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"O7MNirDEAsOxdpgOtfh5K0/JPVhcv7OWT/i/jKYpxt0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
