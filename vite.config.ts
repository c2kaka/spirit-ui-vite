import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {
    external: ["vue", "vue-router"],
    output: {
        globals: {
            vue: "Vue",
        },
    },
};


export default defineConfig({
    plugins: [
        vue(),
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        })
    ],
    build: {
        rollupOptions,
        minify: false,
        lib: {
            entry: "./src/entry.ts",
            name: "SpiritUI",
            fileName: "spirit-ui",
            // 导出模块格式
            formats: ["es", "umd", "iife"],
        },
    },
})