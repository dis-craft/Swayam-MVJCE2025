import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main
      style={{ backgroundImage: "url('/assets/Background.png')" }}
      className="min-h-screen bg-contain bg-center bg-fixed text-[#5F4A37]"
    >
      <NavBar />
    </main>
  );
}
