import { defineConfig } from 'tsup'
import path from 'path'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  publicDir: path.join(process.cwd(), 'src', 'managers', 'Report', 'views'),
})
