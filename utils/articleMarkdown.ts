import MarkdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'
import anchor from 'markdown-it-anchor'
import GithubSlugger from 'github-slugger'

const markdownItAttrsOptions = {
  leftDelimiter: '{{{',
  rightDelimiter: '}}}',
  allowedAttributes: ['width', 'height']
}

export interface ArticleTocItem {
  id: string
  text: string
  level: number
}

/** Same image attribute delimiters as @kangc/v-md-editor base theme */
export function renderArticleMarkdown(text: string): { html: string; toc: ArticleTocItem[] } {
  const toc: ArticleTocItem[] = []
  const slugger = new GithubSlugger()

  const md = new MarkdownIt().use(markdownItAttrs, markdownItAttrsOptions).use(anchor, {
    slugify: (s: string) => slugger.slug(s),
    callback: (token, info) => {
      const level = Number(token.tag.slice(1))
      if (level >= 1 && level <= 6) {
        toc.push({ id: info.slug, text: info.title, level })
      }
    }
  })

  const html = md.render(text)
  return { html, toc }
}
