import { RefObject, useEffect, useRef, useState } from 'react'

type UseGridColumns = (
  minColumnWidth: number,
  gap: number | string
) => {
  gridRef: RefObject<HTMLDivElement | null>
  columns: number
}

const parseRelativeUnit = (value: string | number) => {
  if (typeof value === 'number') return value

  if (value.endsWith('rem')) {
    const remValue = parseFloat(value)
    return remValue * parseFloat(getComputedStyle(document.documentElement).fontSize)
  }

  if (value.endsWith('px')) {
    return parseFloat(value)
  }

  return 0
}

export const useGridColumns: UseGridColumns = (minColumnWidth, initialGap = 16) => {
  const gridRef = useRef<HTMLDivElement>(null)
  const [columns, setColumns] = useState(1)

  const gap = parseRelativeUnit(initialGap)

  useEffect(() => {
    if (!gridRef.current) return

    const calculateColumns = () => {
      const grid = gridRef.current!
      const width = grid.clientWidth
      const columns = Math.floor((width + gap) / (minColumnWidth + gap))
      setColumns(Math.max(1, columns)) // минимум 1 колонка
    }

    calculateColumns()

    const observer = new ResizeObserver(calculateColumns)
    observer.observe(gridRef.current)

    return () => observer.disconnect()
  }, [minColumnWidth, gap])

  return { gridRef, columns }
}
