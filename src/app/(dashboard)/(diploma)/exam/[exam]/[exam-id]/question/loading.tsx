import Spinner from "@/components/loaders/Spinner";

export default function Loading() {
  return (
    <div className="flex h-full items-center justify-center">
      <Spinner color="text-blue-600" />
    </div>
  );
}
