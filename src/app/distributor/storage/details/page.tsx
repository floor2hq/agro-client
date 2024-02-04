import DistributorHeader from "@/components/component/distributor/DistributorHeader";
import DistributorStorageCard from "@/components/component/distributor/DistributorStorageCard";
import DistributorFarmerDetails from "@/components/component/distributor/DistributorFarmerDetails";
  
  export default function FarmCard({ farmId }: { farmId: string }) {
    return (
      <main className="py-8">
        <div>
            <DistributorHeader />
        </div>
        <div className="flex justify-between">
            <DistributorStorageCard />
            <DistributorFarmerDetails />
        </div>
        <div className="flex justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.133214666983!2d85.74082137469527!3d20.294752412584984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1907923fc9c557%3A0xd3b0b05336a9dfaa!2sInternational%20Institute%20of%20Information%20Technology%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1706950705976!5m2!1sen!2sin" width="100%" height="450"  loading="lazy"></iframe>
        </div>
      </main>
    );
  }  