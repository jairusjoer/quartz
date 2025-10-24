import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Jairus Joer",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "jairusjoer.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "local",
      cdnCaching: false,
      typography: {
        header: "JetBrainsMono Nerd Font",
        body: "JetBrainsMono Nerd Font",
        code: "JetBrainsMono Nerd Font",
      },
      colors: {
        lightMode: {
          light: "#eff1f5", // base
          lightgray: "#e6e9ef", // mantle
          gray: "#acb0be", // surface2
          darkgray: "#5c5f77", // subtext1
          dark: "#4c4f69", // text
          secondary: "#1e66f5", // blue
          tertiary: "#7287fd", // lavender
          highlight: "rgba(114, 135, 253, 0.15)", // lavender with transparency
          textHighlight: "#df8e1d88", // yellow with transparency
        },
        darkMode: {
          light: "#1e1e2e", // base
          lightgray: "#313244", // surface0
          gray: "#585b70", // surface2
          darkgray: "#bac2de", // subtext1
          dark: "#cdd6f4", // text
          secondary: "#89b4fa", // blue
          tertiary: "#b4befe", // lavender
          highlight: "rgba(180, 190, 254, 0.15)", // lavender with transparency
          textHighlight: "#f9e2af88", // yellow with transparency
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "catppuccin-latte",
          dark: "catppuccin-mocha",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
