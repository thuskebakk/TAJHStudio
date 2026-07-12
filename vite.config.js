import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "vite";

const partialsDirectory = resolve(__dirname, "src/partials");

function htmlPartials() {
  return {
    name: "html-partials",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        const withPartials = html.replace(/<!--\s*include:\s*([\w-]+\.html)\s*-->/g, (_match, filename) => {
          return readFileSync(resolve(partialsDirectory, filename), "utf8").trim();
        });

        return withPartials.replaceAll("{{buildYear}}", String(new Date().getFullYear()));
      }
    },
    handleHotUpdate({ file, server }) {
      if (file.startsWith(partialsDirectory)) {
        server.ws.send({ type: "full-reload" });
        return [];
      }
    }
  };
}

export default defineConfig({
  plugins: [htmlPartials()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        calcode: resolve(__dirname, "projects/calcode/index.html"),
        calcodePrivacy: resolve(__dirname, "projects/calcode/privacy.html"),
        calcodeSupport: resolve(__dirname, "projects/calcode/support.html"),
        calcodeTerms: resolve(__dirname, "projects/calcode/terms.html")
      }
    }
  }
});
