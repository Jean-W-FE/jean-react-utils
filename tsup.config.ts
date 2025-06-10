import { defineConfig } from 'tsup'

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    outDir: 'dist',
    sourcemap: true,
    target: 'es2020',
    external: [
        'react',
        'react-dom',
        'next',
        'framer-motion',
        '@emotion/is-prop-valid'
    ],
})