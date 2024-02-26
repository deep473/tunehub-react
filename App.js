import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import ViewEmployees from "./pages/ViewEmployees";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Index />}/>
            <Route path="/viewEmployees" element={<ViewEmployees />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
