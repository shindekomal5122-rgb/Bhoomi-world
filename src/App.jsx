import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Listings from "./pages/Listings"
import ListingDetail from "./pages/ListingDetail"
import Regions from "./pages/Regions"
import Projects from "./pages/Projects"
import Insights from "./pages/Insights"
import InsightDetail from "./pages/InsightDetail"
import About from "./pages/About"
import Visit from "./pages/Visit"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="listings" element={<Listings />} />
            <Route path="listings/:id" element={<ListingDetail />} />
            <Route path="regions" element={<Regions />} />
            <Route path="projects" element={<Projects />} />
            <Route path="insights" element={<Insights />} />
            <Route path="insights/:slug" element={<InsightDetail />} />
            <Route path="about" element={<About />} />
            <Route path="visit" element={<Visit />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
