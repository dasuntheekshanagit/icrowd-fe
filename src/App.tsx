import { MainLayout } from "@/layout/main-layout"
import Home from "@/pages/home.tsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export function App() {
  const basename = import.meta.env.MODE === 'production' ? '/icrowd-fe' : '/'
  
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
