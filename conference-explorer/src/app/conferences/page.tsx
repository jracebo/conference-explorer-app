"use client";

import React, { useMemo, useState } from 'react';
import { useGetConferences } from '@/hooks/api/useGetConferences';
import ConferenceCard from '@/components/ConferenceCard/ConferenceCard';
import { ConferenceSortType } from '@/types/types';
import styles from './Conferences.module.scss';

const ConferencesPage = () => {
  const { data: conferencesData } = useGetConferences();

  // Track the selected sort option
  const [selectedSort, setSelectedSort] = useState<ConferenceSortType>(ConferenceSortType.byDate);

  // Compute the selected sorting.
  const sortedConferences = useMemo(() => {

    // Fallback to no conferences safely. Null check first.
    if (!conferencesData?.conferences) return [];
    const conferences = [...conferencesData.conferences];

    switch (selectedSort) {
      case 'byDate':
        // Doing .slice to create a shallow version of the array to avoid tampering the original data.
        return conferences.slice().sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

      case 'byLocation':
        // Choosing the name of the location as the sorting parameter here.
        return conferences.slice().sort((a, b) => {
          const aLocation = a.locations[0]?.name ?? '';
          const bLocation = b.locations[0]?.name ?? '';
          return aLocation.localeCompare(bLocation);
        });
      default:
        return conferences;
    }
  }, [conferencesData, selectedSort]);



  return (
    <div className={styles.pageBody}>
      <section className={styles.headingGroup} tabIndex={0}>
        <h1 className={styles.pageHeading}>Conf-Explore</h1>
        <h2 className={styles.pageSubHeading}>Find conferences quickly.</h2>
      </section>

      <section className={styles.sortingGroup}>
        <label className={styles.label} htmlFor='sortingOptions'>Sort conferences:</label>
        <select
          className={styles.select}
          name="sort"
          id="sortingOptions"
          value={selectedSort}
          onChange={(e) => setSelectedSort(e.target.value as ConferenceSortType)}
        >
          <option value="byDate">Sort By Latest Date</option>
          <option value="byLocation">Sort By Location</option>
        </select>
      </section>

      <section className={styles.cardGroup}>
        {sortedConferences && sortedConferences.length > 0 ? (
          sortedConferences.map((conference) => (
            <ConferenceCard key={conference.id} conferenceData={conference} />
          ))
        ) : (
          <h1>No conference available yet...</h1>
        )}
      </section>
    </div>
  );
};

export default ConferencesPage;
