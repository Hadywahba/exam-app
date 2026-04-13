import React from 'react';
import { GetAllExams } from './[exam]/_hooks/get-all-exam';

export default async function page() {
  const { data } = await GetAllExams();
  console.log(data);
  return <div>gd</div>;
}
