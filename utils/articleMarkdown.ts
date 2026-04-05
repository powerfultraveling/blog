import MarkdownIt from 'markdown-it'
import markdownItAttrs from 'markdown-it-attrs'

/** Same image attribute delimiters as @kangc/v-md-editor base theme */
export const articleMarkdown = new MarkdownIt().use(markdownItAttrs, {
  leftDelimiter: '{{{',
  rightDelimiter: '}}}',
  allowedAttributes: ['width', 'height']
})

export function renderArticleMarkdown(text: string) {
  return articleMarkdown.render(text)
}
