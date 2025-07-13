import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '../ui/sidebar'

const CustomSidebar = () => {
  console.log('')

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent></SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default CustomSidebar
