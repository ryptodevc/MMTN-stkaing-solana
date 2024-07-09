import { twMerge } from 'tailwind-merge'

// TODO: should use React Portal
export default function ModelMask({
  className,
  open,
  onClick
}: {
  className?: string
  open?: boolean
  onClick?(): void
}) {
  return (
    <div
      className={twMerge(
        `fixed z-model-mask inset-0 backdrop-filter backdrop-blur bg-[rgba(20,27,35,0.5)] ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity`,
        className
      )}
      onClick={(ev) => {
        onClick?.()
        ev.stopPropagation()
        ev.preventDefault()
      }}
    ></div>
  )
}
