import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeScreen from "./app/(tabs)/index";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomeScreen />
    </QueryClientProvider>
  );
}
