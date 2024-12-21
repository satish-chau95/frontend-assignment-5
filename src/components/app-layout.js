import React from "react";
import { useAuth } from "../contexts/auth-context";
import { LoginPage } from "./login-page";
import { Dashboard } from "./dashboard";

export function AppLayout() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      {isAuthenticated ? <Dashboard /> : <LoginPage />}
    </div>
  );
}

