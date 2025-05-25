import React, { useState } from "react";

// NEXT
import { useRouter } from "next/navigation";

// Types Definition
import { Conference } from "@/types/types";
import { FALLBACK_IMAGE_CONFERENCE } from "@/constants";

// Stlyes and Utils
import { formatDate } from "@/utils";
import { useImageFallback } from "@/hooks/features/useImageFallback";
import styles from './ConferenceCard.module.scss';

interface ConferenceCardProps {
  conferenceData: Conference;
}

const ConferenceCard = ({ conferenceData }: ConferenceCardProps) => {
  const router = useRouter();
  const imageSource =
    conferenceData.locations.find((loc) => loc.image?.url)?.image.url;
  const imageSrc = useImageFallback(imageSource as string, FALLBACK_IMAGE_CONFERENCE);

   const handleKnowMoreClick = () => {
    router.push(`/conferences/${conferenceData.id}`);
  };

  const displayLocations = conferenceData.locations.map((location) => {
    return (
      <div className={styles.location} key={location.address}>
        <p>{location.name}</p> -
        <p>{location.city}</p>
      </div>
    )
  })

  return (
    <div className={styles.cardContainer} tabIndex={0}>
      <img className={styles.cardImage} src={imageSrc}
        alt="Photo of a conference venue."
      />
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{conferenceData.name}</h2>
        <div className={styles.dateGroup}>
          <p>{formatDate(conferenceData.startDate)}</p> -
          <p>{formatDate(conferenceData.endDate)}</p>
        </div>
        {displayLocations}
        <p>{conferenceData.slogan}</p>
      </div>
      <div className={styles.btnContainer}>
        <button
          className={styles.ctaButton}
          type="button"
          onClick={handleKnowMoreClick}
        >KNOW MORE</button>
      </div>
    </div>
  )
}

export default ConferenceCard;