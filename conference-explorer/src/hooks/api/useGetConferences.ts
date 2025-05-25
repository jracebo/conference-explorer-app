'use client';

import { useQuery } from '@apollo/client';
import { GET_ALL_CONFERENCES } from '@/api/queries/get';
import { Conferences } from '@/types/types';

export const useGetConferences = () => {
  return useQuery<Conferences>(GET_ALL_CONFERENCES);
};
