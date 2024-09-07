import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1 style={{ color: "red" }}>hello from preact</h1>
      </div>
    </QueryClientProvider>
  );
}
