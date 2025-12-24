import Footer from "./Footer"; 
import Navbar from "./Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />  
    </BrowserRouter>
  );
}

export default App;
