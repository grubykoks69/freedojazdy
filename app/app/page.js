import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>FreeDojazdy 🚀</h1>
      <Map />
    </main>
  );
}
