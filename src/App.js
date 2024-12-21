import React from 'react';
import { AuthProvider } from "./contexts/auth-context";
import { AppLayout } from "./components/app-layout";

function App() {
  return (
    <AuthProvider>
      <AppLayout />
    </AuthProvider>
  );
}

export default App;

