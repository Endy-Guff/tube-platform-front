import { Menu, Youtube } from 'lucide-react'

export const SidebarHeader = () => {
  return (
    <div>
      <button>
        <Menu />
      </button>
      <span>
        <Youtube />
        <span>Tube Platform</span>
      </span>
    </div>
  )
}
