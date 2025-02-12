import { Navbar } from "@/components/navbar";
import { TicketSelection } from "@/components/ticket-selection";

export default function Page() {
  return (
    <div className="min-h-screen px-4 pt-8">
      <div>
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <TicketSelection />
        </main>
      </div>
    </div>
  );
}
