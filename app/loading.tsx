import { CustomLoader } from "@/components/ui/custom-loader";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <CustomLoader size="lg" />
    </div>
  );
}
