import { HTMLAttributes, JSX, PropsWithChildren } from 'react'

export type TJustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between'
export type TAlignItems = 'flex-start' | 'center' | 'flex-end'
export type TDirection = 'row' | 'column'

type AllowedBlockTags = keyof Pick<
  JSX.IntrinsicElements,
  'div' | 'section' | 'nav' | 'main' | 'article' | 'header' | 'footer' | 'aside'
>

export interface IBox extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  as?: AllowedBlockTags
  className?: string
  gap?: number | string
  justifyContent?: TJustifyContent
  alignItems?: TAlignItems
  direction?: TDirection
}
