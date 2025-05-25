/*
DEV NOTES:
 - Add GET queries here.
*/
import { gql } from "@apollo/client";

// Fetch ALL conferences.
export const GET_ALL_CONFERENCES = gql`
  query GetConferences {
    conferences {
      id
      name
      slogan
      startDate
      endDate
      locations {
        name
        about
        city
        address
        image {
          url
        }
      }
    }
  }
`;

// Fetch a specific conference by ID.
export const GET_CONFERENCE_BY_ID = gql`
  query GetConferenceById($id: ID!) {
    conference(id: $id) {
      id
      name
      slogan
      startDate
      endDate
      locations {
        name
        image {
          url
        }
        about
        city
        address
      }
      series {
        id
        name
      }
      organizer {
        name
        about
        image {
          url
        }
      }
      websiteUrl
    }
  }
`;
