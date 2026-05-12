import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { CopyButton } from './CopyButton'

export function RichMarkdown({ content }: { content: string }) {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-code:text-blue-600 prose-pre:bg-slate-900 prose-pre:text-slate-100">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          pre({ children, ...props }) {
            return (
              <div className="relative group">
                <pre {...props} className="overflow-x-auto rounded-lg p-4 bg-slate-900 text-sm">
                  {children}
                </pre>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CopyButton text={String(children)} />
                </div>
              </div>
            )
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
