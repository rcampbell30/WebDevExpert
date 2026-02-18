import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
/**
 * GitHub Pages:
 * - Default project pages URL: https://<user>.github.io/<repo>/
 * - For that URL, Vite must be built with base="/<repo>/".
 * - For custom domains or local file/preview, "./" works well.
 *
 * This config supports both by reading BASE_PATH at build time.
 */
export default defineConfig(() => {
  const base = process.env.BASE_PATH ?? './'

  return {
    base,
    plugins: [inspectAttr(), react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
