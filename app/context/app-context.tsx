"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

type User = {
  name: string;
  email: string;
};

type AppContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;

  sidebarOpen: boolean;
  setSidebarOpen: React.Dispatch<
    React.SetStateAction<boolean>
  >;
};

const AppContext = createContext<AppContextType | null>(
  null
);

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const value = useMemo(
    () => ({
      user,
      setUser,
      sidebarOpen,
      setSidebarOpen,
    }),
    [user, sidebarOpen]
  );

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useAppContext must be used inside AppProvider"
    );
  }

  return context;
}