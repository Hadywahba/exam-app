import HomeHeader from '@/components/features/dashboard/diplomas/home-header';
import { GetSubjects } from './_hooks/get-subjects';
import DiplomaCard from './_components/diploma-card';

export default async function Home() {
  const { data, error } = await GetSubjects();
  console.log(data);
  return (
    <main className="flex flex-col">
      {/* Header Section */}
      <div>
        <HomeHeader />
      </div>
        {/* Card Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 pb-8 bg-slate-50 ">
        {data?.subjects.map((data) => {
          return (
            <DiplomaCard key={data._id} name={data.name} icon={data.icon} />
          );
        })}
      </div>
    </main>
  );
}
