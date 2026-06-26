import React from 'react'

import { cn } from '@/utils/cn'

type FieldBaseProps = {
  label?: string
  className?: string
}

const fieldClasses =
  'w-full rounded-xl border border-line bg-white/70 px-4 py-3 body-large text-ink outline-none transition-colors duration-200 placeholder:text-muted/70 focus:border-ink'

const Label = ({ label }: { label: string }) => (
  <span className="eyebrow text-muted">{label}</span>
)

type InputProps = FieldBaseProps &
  React.InputHTMLAttributes<HTMLInputElement>

export const Input = ({ label, className, ...rest }: InputProps) => (
  <label className="flex flex-col gap-2">
    {label && <Label label={label} />}
    <input className={cn(fieldClasses, className)} {...rest} />
  </label>
)

type TextareaProps = FieldBaseProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea = ({ label, className, ...rest }: TextareaProps) => (
  <label className="flex flex-col gap-2">
    {label && <Label label={label} />}
    <textarea
      className={cn(fieldClasses, 'min-h-32 resize-none', className)}
      {...rest}
    />
  </label>
)
