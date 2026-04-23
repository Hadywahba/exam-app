import React from 'react';
import { GetAllExams } from './[exam]/_hooks/get-all-exam';
import Link from 'next/link';
import { Timer, BookOpen } from 'lucide-react';
import ListError from '@/components/error/list-error';

export default async function page() {
  const { data, error } = await GetAllExams();
  console.log(data);
  return (
    <main className="flex flex-col gap-6 p-6">
      <h1 className="text-xl font-semibold text-gray-800 md:text-2xl">
        All Exams
      </h1>

      <ListError isError={!!error} message={error!}>
        {(!data || data.length === 0) && !error && (
          <p className="text-center text-sm text-gray-500">
            No exams available
          </p>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {data?.map((exam) => (
            <Link
              key={exam.id}
              href={{
                pathname: `/exam/${exam.diploma.id}/${exam.id}/question`,
                query: { title: exam.title },
              }}
            >
              <section className="flex flex-col gap-3 border border-gray-100 bg-white p-4 hover:bg-blue-50">
                <h2 className="text-base font-semibold text-blue-600 sm:text-lg">
                  {exam.title}
                </h2>
                <p className="line-clamp-2 text-xs text-gray-500 sm:text-sm">
                  {exam.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-gray-400" />
                    <span className="text-xs text-gray-500">
                      {exam._count?.questions} Questions
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Timer className="h-4 w-4 text-gray-400" />
                    <span className="text-xs text-gray-500">
                      {exam.duration} min
                    </span>
                  </div>
                </div>
              </section>
            </Link>
          ))}
        </div>
      </ListError>
    </main>
  );
}
