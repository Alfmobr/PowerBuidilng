import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import { D as DEFAULT_404_COMPONENT } from './astro/server_DavV_YwI.mjs';
import 'clsx';
import { escape } from 'html-escaper';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

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
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
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
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
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
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/frede/Desktop/PortableGit/Gym/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".link-card[data-astro-cid-o5e7afhw]{width:auto;height:auto;background:#fff;padding:10px;box-sizing:border-box;border-radius:8px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;box-shadow:0 5px 10px #0000004d;.container-btn-group{.btn-add-product{text-decoration:none;color:#fff;padding:10px;background-color:#198bf5;display:flex;align-items:center;box-sizing:border-box;gap:5px;box-shadow:0 2px 5px #0000004d;text-align:center;font-size:15px;height:max-content;width:max-content;border-radius:10px;&:hover{background-color:#1da851}}.hover-green:hover{background-color:#004680}.width-200px{width:20px}}}\nbody{display:flex;justify-content:center;align-items:center;flex-direction:column;height:100vh;gap:20px}h1[data-astro-cid-zetdm5md]{font-size:40px}p[data-astro-cid-zetdm5md]{font-size:17px}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DW8N3LEG.js"}],"styles":[{"type":"inline","content":"header[data-astro-cid-hpnw4vwy]{width:100%;position:sticky;top:0;height:70px;background-color:#fff;display:flex;justify-content:space-between;align-items:center;padding:0 10px;box-sizing:border-box;z-index:999;box-shadow:0 0 5px #333;.container-div-center-logo{display:flex;align-items:center}.nav-movil{background-color:#080808;width:100%;max-width:250px;height:100dvh;position:fixed;top:0;right:0;border-top-left-radius:8px;border-bottom-left-radius:8px;display:flex;opacity:0;align-items:start;transition:opacity .4s ease-in-out;box-shadow:0 2px 10px #0000004d;pointer-events:none;transform:translate(300px);transition:transform .5s cubic-bezier(.98,.03,0,1.01);ul{display:flex;justify-content:center;flex-direction:column;align-items:start;width:100%;margin-top:80px;gap:50px;list-style:none;li{width:100%;display:flex;justify-content:center;align-items:center;box-shadow:0 1px 1px #999;gap:5px;&:hover svg{stroke:#333}a{width:100%;color:#fff;text-decoration:none;font-size:20px;&:hover{text-decoration:underline}}}}}}.open-hamburger-movil[data-astro-cid-hpnw4vwy]{position:absolute;top:20px;background-color:none;display:flex;right:0;border:none;z-index:999}.closed-hamburger-movil[data-astro-cid-hpnw4vwy]{position:absolute;top:20px;right:0;display:none;border:none;z-index:999}.container-div-center-icons[data-astro-cid-hpnw4vwy]{position:absolute;width:100px;height:100%;right:20px;display:flex;justify-content:center;align-items:center}@media screen and (min-width: 768px){header[data-astro-cid-hpnw4vwy]{width:100%;position:sticky;top:0;height:70px;background-color:#fff;display:flex;justify-content:space-between;align-items:center;padding:0 10px;box-sizing:border-box;z-index:999;box-shadow:0 0 5px #333;.container-div-center{display:flex;width:100px;align-items:center;justify-content:center;img{width:50px;background-size:contain;background:#fff;border-radius:100px}}.nav-destok{background-color:transparent;max-width:none;width:50%;height:auto;position:relative;border-radius:0;opacity:1;justify-content:flex-end;align-items:center;box-shadow:none;transition:none;pointer-events:auto;transform:translate(0);ul{display:flex;justify-content:space-between;flex-direction:row;width:100%;margin-top:0;li{width:100%;display:flex;align-items:center;justify-content:center;box-shadow:none;svg{stroke:#0c0c0c}a{width:100%;text-align:initial;color:#222;text-decoration:none;font-size:17px;font-weight:500}}}}.open-hamburger-movil,.closed-hamburger-movil{display:none}}}footer[data-astro-cid-k2f5zb5c]{background-color:#212121;background-color:#000;color:#fff;padding:20px;text-align:center;overflow:hidden}footer[data-astro-cid-k2f5zb5c] a[data-astro-cid-k2f5zb5c]{color:#fff;text-decoration:none;margin:0 10px}footer[data-astro-cid-k2f5zb5c] a[data-astro-cid-k2f5zb5c]:hover{text-decoration:underline}html{font-family:system-ui,sans-serif;color-scheme:dark light}body{padding:0;margin:0;background-color:#080808}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}main{display:flex;flex-direction:column}\n.container-all[data-astro-cid-c4udnvvi]{width:100%;display:flex;align-items:center;justify-content:center}.container[data-astro-cid-c4udnvvi]{background-color:#fff;padding:20px;border-radius:8px;box-shadow:0 0 10px #0000001a;max-width:300px;width:100%;text-align:center}h1[data-astro-cid-c4udnvvi]{margin-bottom:20px;font-size:24px;color:#333}.form-group[data-astro-cid-c4udnvvi]{margin-bottom:15px;text-align:left}label[data-astro-cid-c4udnvvi]{display:block;margin-bottom:5px;color:#666}input[data-astro-cid-c4udnvvi],select[data-astro-cid-c4udnvvi]{width:100%;padding:10px;box-sizing:border-box;border:1px solid #6b6a6a;border-radius:4px;font-size:14px;color:#333;background:transparent}button[data-astro-cid-c4udnvvi]{width:100%;padding:10px;background-color:#007bff;border:none;border-radius:4px;color:#fff;font-size:16px;cursor:pointer;transition:background-color .3s}button[data-astro-cid-c4udnvvi]:hover{background-color:#0056b3}.result-container[data-astro-cid-c4udnvvi]{margin-top:20px;padding:10px;border:1px solid #eee;border-radius:4px;background-color:#f9f9f9}.result-container[data-astro-cid-c4udnvvi] p[data-astro-cid-c4udnvvi]{margin:10px 0;font-size:16px;color:#333}section[data-astro-cid-daxr43lb],aside[data-astro-cid-daxr43lb]{padding:5px}\n"}],"routeData":{"route":"/caloriecalculator","isIndex":false,"type":"page","pattern":"^\\/CalorieCalculator\\/?$","segments":[[{"content":"CalorieCalculator","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/CalorieCalculator.astro","pathname":"/CalorieCalculator","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"body{font-family:Arial,sans-serif;background-color:#f4f4f9;color:#333;line-height:1.6;display:grid;place-content:center}main[data-astro-cid-5e67qqxv]{max-width:800px;background-color:#e2e2e2;padding:10px}h1[data-astro-cid-5e67qqxv],h2[data-astro-cid-5e67qqxv],h3[data-astro-cid-5e67qqxv]{color:#0056b3}h1[data-astro-cid-5e67qqxv]{font-size:2.5rem;text-align:center;margin-top:20px}h2[data-astro-cid-5e67qqxv]{font-size:1.8rem;margin-top:20px}h3[data-astro-cid-5e67qqxv]{font-size:1.4rem;margin-top:15px}p[data-astro-cid-5e67qqxv]{font-size:1rem;margin:10px 0}ul[data-astro-cid-5e67qqxv]{list-style-type:disc;margin:10px 0 20px 20px}a[data-astro-cid-5e67qqxv]{color:#0056b3;text-decoration:none}a[data-astro-cid-5e67qqxv]:hover{text-decoration:underline}.container[data-astro-cid-5e67qqxv]{max-width:800px;margin:0 auto;padding:20px;background-color:#fff;box-shadow:0 0 10px #0000001a;border-radius:8px}\n"}],"routeData":{"route":"/politicaprivacidad","isIndex":false,"type":"page","pattern":"^\\/PoliticaPrivacidad\\/?$","segments":[[{"content":"PoliticaPrivacidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/PoliticaPrivacidad.astro","pathname":"/PoliticaPrivacidad","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.HofTGZ5_.js"}],"styles":[{"type":"inline","content":"header[data-astro-cid-hpnw4vwy]{width:100%;position:sticky;top:0;height:70px;background-color:#fff;display:flex;justify-content:space-between;align-items:center;padding:0 10px;box-sizing:border-box;z-index:999;box-shadow:0 0 5px #333;.container-div-center-logo{display:flex;align-items:center}.nav-movil{background-color:#080808;width:100%;max-width:250px;height:100dvh;position:fixed;top:0;right:0;border-top-left-radius:8px;border-bottom-left-radius:8px;display:flex;opacity:0;align-items:start;transition:opacity .4s ease-in-out;box-shadow:0 2px 10px #0000004d;pointer-events:none;transform:translate(300px);transition:transform .5s cubic-bezier(.98,.03,0,1.01);ul{display:flex;justify-content:center;flex-direction:column;align-items:start;width:100%;margin-top:80px;gap:50px;list-style:none;li{width:100%;display:flex;justify-content:center;align-items:center;box-shadow:0 1px 1px #999;gap:5px;&:hover svg{stroke:#333}a{width:100%;color:#fff;text-decoration:none;font-size:20px;&:hover{text-decoration:underline}}}}}}.open-hamburger-movil[data-astro-cid-hpnw4vwy]{position:absolute;top:20px;background-color:none;display:flex;right:0;border:none;z-index:999}.closed-hamburger-movil[data-astro-cid-hpnw4vwy]{position:absolute;top:20px;right:0;display:none;border:none;z-index:999}.container-div-center-icons[data-astro-cid-hpnw4vwy]{position:absolute;width:100px;height:100%;right:20px;display:flex;justify-content:center;align-items:center}@media screen and (min-width: 768px){header[data-astro-cid-hpnw4vwy]{width:100%;position:sticky;top:0;height:70px;background-color:#fff;display:flex;justify-content:space-between;align-items:center;padding:0 10px;box-sizing:border-box;z-index:999;box-shadow:0 0 5px #333;.container-div-center{display:flex;width:100px;align-items:center;justify-content:center;img{width:50px;background-size:contain;background:#fff;border-radius:100px}}.nav-destok{background-color:transparent;max-width:none;width:50%;height:auto;position:relative;border-radius:0;opacity:1;justify-content:flex-end;align-items:center;box-shadow:none;transition:none;pointer-events:auto;transform:translate(0);ul{display:flex;justify-content:space-between;flex-direction:row;width:100%;margin-top:0;li{width:100%;display:flex;align-items:center;justify-content:center;box-shadow:none;svg{stroke:#0c0c0c}a{width:100%;text-align:initial;color:#222;text-decoration:none;font-size:17px;font-weight:500}}}}.open-hamburger-movil,.closed-hamburger-movil{display:none}}}footer[data-astro-cid-k2f5zb5c]{background-color:#212121;background-color:#000;color:#fff;padding:20px;text-align:center;overflow:hidden}footer[data-astro-cid-k2f5zb5c] a[data-astro-cid-k2f5zb5c]{color:#fff;text-decoration:none;margin:0 10px}footer[data-astro-cid-k2f5zb5c] a[data-astro-cid-k2f5zb5c]:hover{text-decoration:underline}html{font-family:system-ui,sans-serif;color-scheme:dark light}body{padding:0;margin:0;background-color:#080808}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}main{display:flex;flex-direction:column}\n"},{"type":"external","src":"/_astro/store.BVEkTF-F.css"}],"routeData":{"route":"/store","isIndex":false,"type":"page","pattern":"^\\/store\\/?$","segments":[[{"content":"store","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/store.astro","pathname":"/store","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B4_0I_a4.js"}],"styles":[{"type":"inline","content":"header[data-astro-cid-hpnw4vwy]{width:100%;position:sticky;top:0;height:70px;background-color:#fff;display:flex;justify-content:space-between;align-items:center;padding:0 10px;box-sizing:border-box;z-index:999;box-shadow:0 0 5px #333;.container-div-center-logo{display:flex;align-items:center}.nav-movil{background-color:#080808;width:100%;max-width:250px;height:100dvh;position:fixed;top:0;right:0;border-top-left-radius:8px;border-bottom-left-radius:8px;display:flex;opacity:0;align-items:start;transition:opacity .4s ease-in-out;box-shadow:0 2px 10px #0000004d;pointer-events:none;transform:translate(300px);transition:transform .5s cubic-bezier(.98,.03,0,1.01);ul{display:flex;justify-content:center;flex-direction:column;align-items:start;width:100%;margin-top:80px;gap:50px;list-style:none;li{width:100%;display:flex;justify-content:center;align-items:center;box-shadow:0 1px 1px #999;gap:5px;&:hover svg{stroke:#333}a{width:100%;color:#fff;text-decoration:none;font-size:20px;&:hover{text-decoration:underline}}}}}}.open-hamburger-movil[data-astro-cid-hpnw4vwy]{position:absolute;top:20px;background-color:none;display:flex;right:0;border:none;z-index:999}.closed-hamburger-movil[data-astro-cid-hpnw4vwy]{position:absolute;top:20px;right:0;display:none;border:none;z-index:999}.container-div-center-icons[data-astro-cid-hpnw4vwy]{position:absolute;width:100px;height:100%;right:20px;display:flex;justify-content:center;align-items:center}@media screen and (min-width: 768px){header[data-astro-cid-hpnw4vwy]{width:100%;position:sticky;top:0;height:70px;background-color:#fff;display:flex;justify-content:space-between;align-items:center;padding:0 10px;box-sizing:border-box;z-index:999;box-shadow:0 0 5px #333;.container-div-center{display:flex;width:100px;align-items:center;justify-content:center;img{width:50px;background-size:contain;background:#fff;border-radius:100px}}.nav-destok{background-color:transparent;max-width:none;width:50%;height:auto;position:relative;border-radius:0;opacity:1;justify-content:flex-end;align-items:center;box-shadow:none;transition:none;pointer-events:auto;transform:translate(0);ul{display:flex;justify-content:space-between;flex-direction:row;width:100%;margin-top:0;li{width:100%;display:flex;align-items:center;justify-content:center;box-shadow:none;svg{stroke:#0c0c0c}a{width:100%;text-align:initial;color:#222;text-decoration:none;font-size:17px;font-weight:500}}}}.open-hamburger-movil,.closed-hamburger-movil{display:none}}}footer[data-astro-cid-k2f5zb5c]{background-color:#212121;background-color:#000;color:#fff;padding:20px;text-align:center;overflow:hidden}footer[data-astro-cid-k2f5zb5c] a[data-astro-cid-k2f5zb5c]{color:#fff;text-decoration:none;margin:0 10px}footer[data-astro-cid-k2f5zb5c] a[data-astro-cid-k2f5zb5c]:hover{text-decoration:underline}html{font-family:system-ui,sans-serif;color-scheme:dark light}body{padding:0;margin:0;background-color:#080808}code{font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}main{display:flex;flex-direction:column}\n"},{"type":"external","src":"/_astro/index.suwFUih8.css"},{"type":"inline","content":".link-card[data-astro-cid-o5e7afhw]{width:auto;height:auto;background:#fff;padding:10px;box-sizing:border-box;border-radius:8px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;box-shadow:0 5px 10px #0000004d;.container-btn-group{.btn-add-product{text-decoration:none;color:#fff;padding:10px;background-color:#198bf5;display:flex;align-items:center;box-sizing:border-box;gap:5px;box-shadow:0 2px 5px #0000004d;text-align:center;font-size:15px;height:max-content;width:max-content;border-radius:10px;&:hover{background-color:#1da851}}.hover-green:hover{background-color:#004680}.width-200px{width:20px}}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://github.com/Alfmobr/PowerBuidilng.git","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/frede/Desktop/PortableGit/Gym/src/pages/404.astro",{"propagation":"none","containsHead":true}],["C:/Users/frede/Desktop/PortableGit/Gym/src/pages/PoliticaPrivacidad.astro",{"propagation":"none","containsHead":true}],["C:/Users/frede/Desktop/PortableGit/Gym/src/pages/CalorieCalculator.astro",{"propagation":"none","containsHead":true}],["C:/Users/frede/Desktop/PortableGit/Gym/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/frede/Desktop/PortableGit/Gym/src/pages/store.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/CalorieCalculator@_@astro":"pages/caloriecalculator.astro.mjs","\u0000@astro-page:src/pages/PoliticaPrivacidad@_@astro":"pages/politicaprivacidad.astro.mjs","\u0000@astro-page:src/pages/store@_@astro":"pages/store.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/frede/Desktop/PortableGit/Gym/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_CIyyircp.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DW8N3LEG.js","/astro/hoisted.js?q=1":"_astro/hoisted.HofTGZ5_.js","/astro/hoisted.js?q=2":"_astro/hoisted.B4_0I_a4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/ans.Dn7KJFv7.jpg","/_astro/puas.EMuGvIS4.png","/_astro/index.suwFUih8.css","/_astro/store.BVEkTF-F.css","/img/ans.jpg","/img/banner-Store.webp","/img/men.webp","/img/mujer.webp","/img/puas.png","/img/redGym.ico","/_astro/hoisted.B4_0I_a4.js","/_astro/hoisted.DW8N3LEG.js","/_astro/hoisted.HofTGZ5_.js","/img/Catalogo/bpi-SPORT-WHEY-HD.webp","/img/Catalogo/CREATINE-MONOHYDRATE.webp","/img/Catalogo/GOLD-STANDARD-WHEY.webp","/img/Catalogo/ISO-100.webp","/img/Catalogo/ISO-PHORM.webp","/img/Catalogo/METANDROSTENOLONA.webp","/img/Catalogo/OXANDROPLEX.webp","/img/Catalogo/PERFECT-BODY.webp","/img/Catalogo/TESTEX-Depot-250.webp"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, DEFAULT_404_ROUTE as D, Logger as L, default404Instance as d, ensure404Route as e, getEventPrefix as g, levels as l, manifest as m };
