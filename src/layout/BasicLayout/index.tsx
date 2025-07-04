
import type { Metadata, Viewport } from "next"
export interface BaseLayoutProps {
    children: React.ReactNode,
    viewport?: Viewport,
    metadata?: Metadata,
}
export default function BasicLayout({ children }: { children: React.ReactNode }):JSX.Element {
  return (
    <div>
      {children}
    </div>
  )
}
