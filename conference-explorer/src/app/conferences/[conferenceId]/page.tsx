'use client';

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { FALLBACK_IMAGE_CONFERENCE } from "@/constants";

// Hooks
import { useGetConferenceById } from "@/hooks/api/useGetConferenceById";

// Styles and Utils
import { useImageFallback } from "@/hooks/features/useImageFallback";
import styles from "./Conference.module.scss";
import DateDisplayCard from "@/components/DateDisplayCard/DateDisplayCard";

const ConferenceDetailsPage = () => {
    const params = useParams();
    const router = useRouter();
    const { conferenceId } = params;
    const { data: conferenceData } = useGetConferenceById(conferenceId as string);

    console.log("RATEST", conferenceData);

    const imageSource =
        conferenceData?.conference.locations.find((loc) => loc.image?.url)?.image.url;
    const imageSrc = useImageFallback(imageSource as string, FALLBACK_IMAGE_CONFERENCE);

    const locations = conferenceData?.conference?.locations ?? [];

    const handleBackButton = () => {
        router.back();
    }

    return (
        <div className={styles.detailsPageContainer}>
            <div className={styles.titleContainer} tabIndex={0}>
                <h1 className={styles.name}>{conferenceData?.conference.name}</h1>
                <h2 className={styles.slogan}>{conferenceData?.conference.slogan}</h2>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.conferenceBanner} src={imageSrc} alt="Image of the conference venue"/>
            </div>
            <div className={styles.conferenceBody}>
                <div className={styles.dateContainer}>
                    <DateDisplayCard
                        label="Start Date:"
                        date={conferenceData?.conference.startDate as string}
                    />
                    <DateDisplayCard
                        label="End Date:"
                        date={conferenceData?.conference.endDate as string}
                    />
                </div>
                {locations.length > 0 && (
                    <div className={styles.locationGroup} tabIndex={0}>
                        <p className={styles.label}>Locations:</p>
                        {locations.map((location) => (
                            <div className={styles.locationCard} key={location.address}>
                                <p className={styles.loc}><strong>Name:</strong> {location.name}</p>
                                <p className={styles.loc}><strong>City:</strong> {location.city}</p>
                                <p className={styles.loc}><strong>Address:</strong> {location.address}</p>
                            </div>
                        ))}
                    </div>
                )}
                <div className={styles.organizerContainer} tabIndex={0}>
                    <p className={styles.label}>Organizer:</p>
                    <p className={styles.organizerName}>{conferenceData?.conference.organizer.name}</p>
                </div>

                <div className={styles.websiteContainer} tabIndex={0}>
                    <p className={styles.label}>Link to Website:</p>
                    <a className={styles.link} href={conferenceData?.conference.websiteUrl}>
                        {conferenceData?.conference.websiteUrl}
                    </a>
                </div>

                <div className={styles.btnContainer}>
                    <button className={styles.ctaButton} onClick={handleBackButton}>BACK TO CONFERENCE LIST</button>
                </div>
            </div>
        </div>
    )
}

export default ConferenceDetailsPage;