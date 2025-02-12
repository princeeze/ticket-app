import { Navbar } from "@/components/navbar";
import { TicketSelection } from "@/components/ticket-selection";

export default function Page() {
  return (
    <div
      style={{
        background:
          "radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2) 0%, rgba(36, 160, 181, 0) 100%), #02191D",
      }}
      className="min-h-screen pt-6"
    >
      <div>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {/* <TicketSelection /> */}
        </main>
      </div>
    </div>
  );
}
