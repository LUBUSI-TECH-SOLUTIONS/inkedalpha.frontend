import { RouterProvider } from "react-router-dom"
import { router } from "@/app/routes/routes"
import { Toaster } from "@/components/ui/sonner"

export const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    <Toaster />
    </>
  )
}

