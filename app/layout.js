import "../styles/globals.css";

export const metadata = {
  title: "FreeDojazdy",
  description: "Transport Warszawa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
