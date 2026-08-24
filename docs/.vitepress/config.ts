import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressSidebarOptions = {
  documentRootPath: '/docs',
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  sortMenusByFrontmatterOrder: true,
  removePrefixAfterOrdering: true,
  prefixSeparator: '-',
  collapsed: false,
}

// https://vitepress.dev/reference/site-config
export default defineConfig(
  withSidebar(
    {
      title: "SHOU生存指北",
      description: "上海海洋大学校园生活与进阶指南",
      lang: 'zh-CN',
      lastUpdated: true,
      cleanUrls: true,

      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '主页', link: '/' },
          { text: '指北', link: '/00-intro/about' },
        ],

        lastUpdated: {
          text: '最后更新于',
          formatOptions: {
          dateStyle: 'full',
          timeStyle: 'medium'
          }
        },

        editLink: {
          // 替换为你的 GitHub 仓库地址和分支名，:path 会自动替换为对应的 .md 文件路径
          pattern: 'https://github.com/Douglassgs/shou-guide/edit/main/docs/:path',
          text: '一起完善该手册！'
        },

        search: {
          provider: 'local',
          options: {
            locales: {
              root: {
                translations: {
                  button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档'
                  },
                  modal: {
                    noResultsText: '无法找到相关结果',
                    resetButtonTitle: '清除查询条件',
                    footer: {
                      selectText: '选择',
                      navigateText: '切换',
                      closeText: '关闭'
                    }
                  }
                }
              }
            }
          }
        },

        outline: {
          level: [2, 3],
          label: '本页目录'
        },

        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },

        footer: {
          message: 'Released under the CC-BY-NC-SA 4.0 License.',
          copyright: 'Copyright © 2026 SHOU Guide Contributors'
        },

        socialLinks: [
          { icon: 'github', link: 'https://github.com/Douglassgs/shou-guide' }
        ]
      }
    },
    vitePressSidebarOptions
  )
)
