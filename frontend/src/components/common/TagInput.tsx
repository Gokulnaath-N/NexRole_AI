import { useState, KeyboardEvent } from 'react'
import { X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

interface TagInputProps {
  value: string[]
  onChange: (tags: string[]) => void
  placeholder?: string
  max?: number
}

export function TagInput({ value, onChange, placeholder = 'Type and press Enter', max = 30 }: TagInputProps) {
  const [input, setInput] = useState('')

  const addTag = () => {
    const tag = input.trim().toLowerCase()
    if (tag && !value.includes(tag) && value.length < max) {
      onChange([...value, tag])
      setInput('')
    }
  }

  const removeTag = (tag: string) => onChange(value.filter(t => t !== tag))

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { e.preventDefault(); addTag() }
    if (e.key === 'Backspace' && !input && value.length > 0) {
      removeTag(value[value.length - 1])
    }
  }

  return (
    <div className="flex flex-wrap gap-1.5 p-2 border rounded-md min-h-10 focus-within:border-blue-500 transition-colors">
      {value.map(tag => (
        <Badge key={tag} variant="secondary" className="gap-1 text-xs">
          {tag}
          <button onClick={() => removeTag(tag)} className="hover:text-red-500">
            <X className="h-3 w-3" />
          </button>
        </Badge>
      ))}
      <Input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={onKeyDown}
        onBlur={addTag}
        placeholder={value.length === 0 ? placeholder : ''}
        className="border-0 p-0 h-auto text-sm focus-visible:ring-0 flex-1 min-w-24"
      />
    </div>
  )
}
