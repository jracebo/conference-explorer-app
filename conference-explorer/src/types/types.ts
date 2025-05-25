/*
v.1
Author: James Russell Acebo
*/

export type Series = {
  id: string;
  name: string;
}

export type Organizer = {
  name: string;
  about: string;
  image: Image;
}

export type Image = {
  url: string;
}

export type Location = {
  name: string;
  about: string;
  city: string;
  address: string;
  image: Image;
}

export type Conference = {
  id: string;
  name: string;
  slogan: string;
  startDate: string;
  endDate: string;
  locations: Location[];
  websiteUrl: string;
  organizer: Organizer;
  series: Series;
};


export type Conferences = {
  conferences: Conference[];
};

export enum ConferenceSortType {
  byDate = 'byDate',
  byLocation = 'byLocation'
}
