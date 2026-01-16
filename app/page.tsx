import Hero from "@/components/hero";
import FeatureGrid from "@/components/feature-grid";
import PricingTable from "@/components/pricing-table";
import CTA from "@/components/cta";

export default function LandingPage() {
    return (
        <div className="relative isolate overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full -z-10" />
            <div className="absolute top-[40%] right-[-5%] w-[30%] h-[30%] bg-accent/20 blur-[100px] rounded-full -z-10" />

            <Hero />
            <FeatureGrid />
            <PricingTable />
            <CTA />
        </div>
    );
}
