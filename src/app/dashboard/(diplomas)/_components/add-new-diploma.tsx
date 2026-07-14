'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function AddNewDiploma() {
    // Navigation
    const router =useRouter()
  return (
    <Button onClick={()=>{
router.push(`/dashboard/add`)
    }} className="w-full bg-emerald-500 hover:bg-emerald-600 md:w-fit">
      <Plus /> Add New Diploma
    </Button>
  );
}
