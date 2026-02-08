import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  base: "https://silvanopuccini.github.io/ReactJS-Ejercicios",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ejercicio1: resolve(__dirname, "js_ejercicio_1.html"),
        ejercicio2: resolve(__dirname, "js_ejercicio_2.html"),
        ejercicio3: resolve(__dirname, "js_ejercicio_3.html"),
        ejercicio4: resolve(__dirname, "js_ejercicio_4.html"),
        ejercicio5: resolve(__dirname, "js_ejercicio_5.html"),
        ejercicio6: resolve(__dirname, "js_ejercicio_6.html"),
        ejercicio7: resolve(__dirname, "js_ejercicio_7.html"),
        ejercicio8: resolve(__dirname, "js_ejercicio_8.html"),
        ejercicio9: resolve(__dirname, "js_ejercicio_9.html")
      }
    }
  }
});
