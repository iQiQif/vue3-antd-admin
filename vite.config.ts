import {defineConfig} from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const pathSrc = path.resolve(__dirname, "./src")

export default defineConfig({
    alias: {
        '@': pathSrc,
    },
    esbuild: {
      target: 'esnext'
    },
    css: {
        preprocessorOptions: {
            less: {
                modifyVars: {},
                javascriptEnabled: true,
            },
            scss: {
                // https://github.com/vitejs/vite/issues/520
                additionalData: `@import "src/styles/global.scss";`,
            }
        },
    },
    plugins: [
        vue(),
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        })
    ],
    optimizeDeps: {
        include: [
            'moment',
            '@ant-design/icons-vue',
            'lodash',
            'ant-design-vue/es/locale/zh_CN',
            'moment/locale/zh-cn',
            'ant-design-vue/es/locale/en_US',
        ],
    },
    server: {
        proxy: {
            '/api': {
                // target: 'http://us-la-cn2.sakurafrp.com:59660',
                target: 'http://localhost:7001',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/api/v1')
            }
        }
    }
})
