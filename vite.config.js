import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        calcode: resolve(__dirname, "projects/calcode/index.html"),
        calcodePrivacy: resolve(__dirname, "projects/calcode/privacy.html"),
        calcodeSupport: resolve(__dirname, "projects/calcode/support.html")
      }
    }
  }
});
