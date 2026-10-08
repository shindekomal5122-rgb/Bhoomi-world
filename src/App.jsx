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
import DealerList from "./pages/DealerList"
import DealerDetail from "./pages/DealerDetail"
import PropertyDocuments from "./pages/PropertyDocuments"
import LandBank from "./pages/LandBank"
import Consultancy from "./pages/Consultancy"
import BuyProperty from "./pages/BuyProperty"
import SellProperty from "./pages/SellProperty"
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
            <Route path="marketplace/:use/:dealerId" element={<DealerDetail />} />
            <Route path="marketplace/:use" element={<DealerList />} />
            <Route path="property-documents" element={<PropertyDocuments />} />
            <Route path="land-bank" element={<LandBank />} />
            <Route path="consultancy" element={<Consultancy />} />
            <Route path="buy" element={<BuyProperty />} />
            <Route path="sell" element={<SellProperty />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
