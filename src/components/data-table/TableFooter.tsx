import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import * as React from 'react'
import { Button } from '@/components/ui/button'

interface TableFooterProps {
  rowCount: number
  showPagination: boolean
  pageIndex: number
  pageCount: number
  canPreviousPage: boolean
  canNextPage: boolean
  onPreviousPage: () => void
  onNextPage: () => void
  onShiftTabToTable: () => void
}

export const TableFooter = React.forwardRef<HTMLDivElement, TableFooterProps>(
  function TableFooter(
    { rowCount, showPagination, pageIndex, pageCount, canPreviousPage, canNextPage, onPreviousPage, onNextPage, onShiftTabToTable },
    ref
  ) {
    return (
      <div
        ref={ref}
        className="flex items-center justify-between"
        onKeyDown={(e) => {
          if (e.key === 'Tab' && e.shiftKey && rowCount > 0) {
            const focusables = Array.from(
              (ref as React.RefObject<HTMLDivElement>).current?.querySelectorAll<HTMLElement>('button:not([disabled]),[tabindex="0"]') ?? []
            )
            if (focusables[0] === document.activeElement) {
              e.preventDefault()
              e.stopPropagation()
              onShiftTabToTable()
            }
          }
        }}
      >
        <p className="text-xs text-foreground font-semibold text-center w-full">
          {rowCount} row{rowCount !== 1 ? 's' : ''}
        </p>
        {showPagination && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground whitespace-nowrap">
              Page {pageIndex + 1} of {Math.max(pageCount, 1)}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={onPreviousPage}
              disabled={!canPreviousPage}
            >
              <ChevronLeftIcon className="h-3.5 w-3.5" />
              <span className="sr-only">Previous page</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-7 w-7"
              onClick={onNextPage}
              disabled={!canNextPage}
            >
              <ChevronRightIcon className="h-3.5 w-3.5" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        )}
      </div>
    )
  }
)
