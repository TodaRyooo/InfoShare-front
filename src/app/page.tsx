import CustomSidebar from '@/components/composites/customSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

export default function Home() {
  return (
    <SidebarProvider>
      <CustomSidebar />
      <main className="">
        <SidebarTrigger />
      </main>
      <footer></footer>
    </SidebarProvider>
  )
}
