import react from "@vitejs/plugin-react-swc";
import { createRequire } from "node:module";
import { fileURLToPath, URL } from "node:url";
import path from "path";
import { defineConfig, loadEnv } from "vite";

const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const _env = loadEnv(mode, process.cwd());

  const base = _env.VITE_BASE_URL;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@/others": fileURLToPath(
          new URL("./src/common/components/others", import.meta.url)
        ),
        "@/errors": fileURLToPath(
          new URL("./src/common/components/errors", import.meta.url)
        ),
        "@/controls": fileURLToPath(
          new URL("./src/common/components/controls", import.meta.url)
        ),
        "@/layouts": fileURLToPath(
          new URL("./src/common/components/layouts", import.meta.url)
        ),
        "@/modules": fileURLToPath(new URL("./src/modules", import.meta.url)),
        "@/funcs": fileURLToPath(new URL("./src/utils/funcs", import.meta.url)),
        "@/apis": fileURLToPath(new URL("./src/apis", import.meta.url)),
        "@/hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
        "@/axios": fileURLToPath(new URL("./src/utils/axios", import.meta.url)),
        "@/confirm": fileURLToPath(
          new URL("./src/utils/confirm", import.meta.url)
        ),
        "@/slices": fileURLToPath(
          new URL("./src/redux/slices", import.meta.url)
        ),
        "@/redux": fileURLToPath(new URL("./src/redux", import.meta.url)),
        "@/routes": fileURLToPath(new URL("./src/routes", import.meta.url)),
        "@/constants": fileURLToPath(
          new URL("./src/common/constants", import.meta.url)
        ),
        "@/assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@/types": fileURLToPath(new URL("./src/types", import.meta.url)),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      proxy: {
        "/cms": _env.VITE_API_URL,
      },
    },
    build: {
      base,
      assetsDir: "static",
      rollupOptions: {
        output: {
          chunkFileNames: "[hash].chunk.js",
          assetFileNames: "[hash].chunk.[ext]",
        },
      },
      chunkSizeWarningLimit: 1000,
    },
    // experimental: {
    //   renderBuiltUrl(
    //     filename: string,
    //     {
    //       hostId,
    //       hostType,
    //       type,
    //     }: {
    //       hostId: string;
    //       hostType: "js" | "css" | "html";
    //       type: "public" | "asset";
    //     }
    //   ) {
    //     if (type === "public") {
    //       return `public/${filename}`;
    //     } else {
    //       return `${base}/${filename}`;
    //     }
    //   },
    // },
    module: {
      rules: [
        {
          test: /\.svg$/,
          include: [path.resolve(__dirname, "./src/assets/svgs")],
          use: ["@svgr/webpack"],
        },
      ],
    },
  };
});
