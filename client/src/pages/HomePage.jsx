import React from "react";
import UrlForm from "../components/UrlForm";
import LoginPopup from "../components/Login-Popup";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

const HomePage = () => {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoginPopupOpen(true);
    }, 1000); // Show popup after 1 second

    return () => clearTimeout(timer);
  }, []);

  const handleAuthNavigation = ()=>{
        setIsLoginPopupOpen(false);
    // Add a slight delay to ensure state is updated before navigation
    setTimeout(() => {
      navigate({ to: "/auth" });
    }, 0);
  }
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">URL Shortener</h1>
        <UrlForm />
      </div>
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={() => setIsLoginPopupOpen(false)}
        onContinueAsGuest={() => setIsLoginPopupOpen(false)}
        onLogin={handleAuthNavigation}
      />
    </div>
  );
};

export default HomePage;
