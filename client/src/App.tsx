import { Routes, Route } from "react-router-dom";
import ClientesForm from "./pages/ClientesTable";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientesForm />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
