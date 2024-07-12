import AuthProvider from "./context/ContextToken";
import Routes from "./pages/Routes";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
