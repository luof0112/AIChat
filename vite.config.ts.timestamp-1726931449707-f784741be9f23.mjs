// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "file:///G:/%E6%A1%8C%E9%9D%A2%E6%96%87%E4%BB%B6/github/ai/chatVue/node_modules/vite/dist/node/index.js";
import vue from "file:///G:/%E6%A1%8C%E9%9D%A2%E6%96%87%E4%BB%B6/github/ai/chatVue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///G:/%E6%A1%8C%E9%9D%A2%E6%96%87%E4%BB%B6/github/ai/chatVue/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import compress from "file:///G:/%E6%A1%8C%E9%9D%A2%E6%96%87%E4%BB%B6/github/ai/chatVue/node_modules/vite-plugin-compression/dist/index.mjs";
import Components from "file:///G:/%E6%A1%8C%E9%9D%A2%E6%96%87%E4%BB%B6/github/ai/chatVue/node_modules/unplugin-vue-components/dist/vite.js";
import { AntDesignVueResolver } from "file:///G:/%E6%A1%8C%E9%9D%A2%E6%96%87%E4%BB%B6/github/ai/chatVue/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///G:/%E6%A1%8C%E9%9D%A2%E6%96%87%E4%BB%B6/github/ai/chatVue/vite.config.ts";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [
      vue(),
      vueJsx(),
      compress({
        verbose: true,
        // 是否在控制台输出压缩结果
        disable: false,
        // 是否禁用压缩
        algorithm: "gzip",
        // 压缩算法
        threshold: 10240,
        // 压缩阈值，小于该大小的文件将不会被压缩
        deleteOriginFile: false
        // 是否删除原文件
      }),
      Components({
        resolvers: [
          AntDesignVueResolver({
            importStyle: false
            // css in js
          })
        ]
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    server: {
      // proxy: {
      //   '/chat': {
      //     target: 'http://localhost:3000',
      //     changeOrigin: true,
      //     rewrite: path => path.replace(/^\/chat/, '')
      //   }
      // }
      // 是否开启自动刷新
      hmr: true,
      // 是否开启自动打开浏览器
      open: true,
      host: "0.0.0.0"
    },
    envPrefix: ["VITE", "VUE"],
    define: {
      __APP_ENV__: JSON.stringify(env.APP_ENV)
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxcdTY4NENcdTk3NjJcdTY1ODdcdTRFRjZcXFxcZ2l0aHViXFxcXGFpXFxcXGNoYXRWdWVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXFx1Njg0Q1x1OTc2Mlx1NjU4N1x1NEVGNlxcXFxnaXRodWJcXFxcYWlcXFxcY2hhdFZ1ZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRzovJUU2JUExJThDJUU5JTlEJUEyJUU2JTk2JTg3JUU0JUJCJUI2L2dpdGh1Yi9haS9jaGF0VnVlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcsIGxvYWRFbnYgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgY29tcHJlc3MgZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nO1xyXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJztcclxuaW1wb3J0IHsgQW50RGVzaWduVnVlUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnO1xyXG5cclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcblxyXG4gIC8vIFx1NTJBMFx1OEY3RFx1NUY1M1x1NTI0RFx1NzNBRlx1NTg4M1x1NzY4NFx1NTNEOFx1OTFDRlxyXG4gIGNvbnN0IGVudiA9IGxvYWRFbnYobW9kZSwgcHJvY2Vzcy5jd2QoKSwgJycpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICB2dWUoKSxcclxuICAgICAgdnVlSnN4KCksXHJcbiAgICAgIGNvbXByZXNzKHtcclxuICAgICAgICB2ZXJib3NlOiB0cnVlLCAvLyBcdTY2MkZcdTU0MjZcdTU3MjhcdTYzQTdcdTUyMzZcdTUzRjBcdThGOTNcdTUxRkFcdTUzOEJcdTdGMjlcdTdFRDNcdTY3OUNcclxuICAgICAgICBkaXNhYmxlOiBmYWxzZSwgLy8gXHU2NjJGXHU1NDI2XHU3OTgxXHU3NTI4XHU1MzhCXHU3RjI5XHJcbiAgICAgICAgYWxnb3JpdGhtOiAnZ3ppcCcsIC8vIFx1NTM4Qlx1N0YyOVx1N0I5N1x1NkNENVxyXG4gICAgICAgIHRocmVzaG9sZDogMTAyNDAsIC8vIFx1NTM4Qlx1N0YyOVx1OTYwOFx1NTAzQ1x1RkYwQ1x1NUMwRlx1NEU4RVx1OEJFNVx1NTkyN1x1NUMwRlx1NzY4NFx1NjU4N1x1NEVGNlx1NUMwNlx1NEUwRFx1NEYxQVx1ODhBQlx1NTM4Qlx1N0YyOVxyXG4gICAgICAgIGRlbGV0ZU9yaWdpbkZpbGU6IGZhbHNlLCAvLyBcdTY2MkZcdTU0MjZcdTUyMjBcdTk2NjRcdTUzOUZcdTY1ODdcdTRFRjZcclxuXHJcbiAgICAgIH0pLFxyXG4gICAgICBDb21wb25lbnRzKHtcclxuICAgICAgICByZXNvbHZlcnM6IFtcclxuICAgICAgICAgIEFudERlc2lnblZ1ZVJlc29sdmVyKHtcclxuICAgICAgICAgICAgaW1wb3J0U3R5bGU6IGZhbHNlLCAvLyBjc3MgaW4ganNcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pLFxyXG4gICAgXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIC8vIHByb3h5OiB7XHJcbiAgICAgIC8vICAgJy9jaGF0Jzoge1xyXG4gICAgICAvLyAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgICAgLy8gICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgLy8gICAgIHJld3JpdGU6IHBhdGggPT4gcGF0aC5yZXBsYWNlKC9eXFwvY2hhdC8sICcnKVxyXG4gICAgICAvLyAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBcdTY2MkZcdTU0MjZcdTVGMDBcdTU0MkZcdTgxRUFcdTUyQThcdTUyMzdcdTY1QjBcclxuICAgICAgaG1yOiB0cnVlLFxyXG4gICAgICAvLyBcdTY2MkZcdTU0MjZcdTVGMDBcdTU0MkZcdTgxRUFcdTUyQThcdTYyNTNcdTVGMDBcdTZENEZcdTg5QzhcdTU2NjhcclxuICAgICAgb3BlbjogdHJ1ZSxcclxuICAgICAgaG9zdDogXCIwLjAuMC4wXCJcclxuICAgIH0sXHJcbiAgICBlbnZQcmVmaXg6WydWSVRFJywgJ1ZVRSddLFxyXG4gICAgZGVmaW5lOiB7XHJcbiAgICAgIF9fQVBQX0VOVl9fOiBKU09OLnN0cmluZ2lmeShlbnYuQVBQX0VOViksXHJcbiAgICB9XHJcbiAgfTtcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UyxTQUFTLGVBQWUsV0FBVztBQUUxVSxTQUFTLGNBQWMsZUFBZTtBQUN0QyxPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sY0FBYztBQUNyQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDRCQUE0QjtBQVA4SCxJQUFNLDJDQUEyQztBQVlwTixJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUd4QyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFFM0MsU0FBTztBQUFBLElBQ0wsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBO0FBQUEsUUFDVCxTQUFTO0FBQUE7QUFBQSxRQUNULFdBQVc7QUFBQTtBQUFBLFFBQ1gsV0FBVztBQUFBO0FBQUEsUUFDWCxrQkFBa0I7QUFBQTtBQUFBLE1BRXBCLENBQUM7QUFBQSxNQUNELFdBQVc7QUFBQSxRQUNULFdBQVc7QUFBQSxVQUNULHFCQUFxQjtBQUFBLFlBQ25CLGFBQWE7QUFBQTtBQUFBLFVBQ2YsQ0FBQztBQUFBLFFBQ0g7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLE1BQ3REO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVNOLEtBQUs7QUFBQTtBQUFBLE1BRUwsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFdBQVUsQ0FBQyxRQUFRLEtBQUs7QUFBQSxJQUN4QixRQUFRO0FBQUEsTUFDTixhQUFhLEtBQUssVUFBVSxJQUFJLE9BQU87QUFBQSxJQUN6QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
