'use client';

import { useQuery } from "@apollo/client";
import { GET_CONFERENCE_BY_ID } from "@/api/queries/get";
import { Conference } from "@/types/types";

export interface GetConferenceByIdResponse {
  conference: Conference;
}

interface GetConferenceByIdProps {
  id: string;
}

export const useGetConferenceById = (conferenceId: string) => {
  return useQuery<GetConferenceByIdResponse, GetConferenceByIdProps>(GET_CONFERENCE_BY_ID, {
    variables: { id: conferenceId },
    skip: !conferenceId,
  });
};
