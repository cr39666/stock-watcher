<script setup lang="ts">
import { computed } from 'vue'
import DOMPurify from 'dompurify'

const props = withDefaults(defineProps<{ content?: string }>(), {
  content: ''
})

const sanitizedHtml = computed(() => {
  if (!props.content.trim()) return ''
  return DOMPurify.sanitize(markdownToHtml(props.content), {
    ALLOWED_TAGS: [
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'p',
      'br',
      'hr',
      'ul',
      'ol',
      'li',
      'a',
      'strong',
      'b',
      'em',
      'i',
      'code',
      'pre',
      'blockquote',
      'del',
      's',
      'span',
      'div'
    ],
    ALLOWED_ATTR: ['href', 'target', 'rel', 'class']
  })
})

function markdownToHtml(md: string): string {
  return md
    .split('\n')
    .map((line) => {
      if (line.startsWith('### ')) return `<h4>${inlineFormat(line.slice(4))}</h4>`
      if (line.startsWith('## ')) return `<h3>${inlineFormat(line.slice(3))}</h3>`
      if (line.startsWith('# ')) return `<h2>${inlineFormat(line.slice(2))}</h2>`
      if (line.startsWith('- ') || line.startsWith('* '))
        return `<li>${inlineFormat(line.slice(2))}</li>`
      if (!line.trim()) return ''
      return `<p>${inlineFormat(line)}</p>`
    })
    .join('')
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/~~(.+?)~~/g, '<del>$1</del>')
}
</script>

<template>
  <div class="markdown-body" v-html="sanitizedHtml"></div>
</template>

<style scoped>
.markdown-body {
  line-height: 1.6;
}

.markdown-body :deep(h2),
.markdown-body :deep(h3),
.markdown-body :deep(h4) {
  margin: 6px 0 3px;
  color: #2ecc71;
}

.markdown-body :deep(h2) {
  font-size: 14px;
}

.markdown-body :deep(h3) {
  font-size: 13px;
}

.markdown-body :deep(h4) {
  font-size: 12px;
}

.markdown-body :deep(p) {
  margin: 3px 0;
}

.markdown-body :deep(li) {
  margin: 2px 0 2px 12px;
  list-style-type: disc;
}

.markdown-body :deep(code) {
  padding: 1px 4px;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0.08);
  font-family: Consolas, Monaco, monospace;
  font-size: 0.9em;
}

.markdown-body :deep(a) {
  color: #3498db;
  text-decoration: none;
}

.markdown-body :deep(a:hover) {
  text-decoration: underline;
}

.markdown-body::-webkit-scrollbar {
  width: 4px;
}

.markdown-body::-webkit-scrollbar-track {
  background: transparent;
}

.markdown-body::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
}

.markdown-body::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
