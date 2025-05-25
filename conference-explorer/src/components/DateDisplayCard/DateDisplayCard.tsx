import React from 'react';
import { formatDate } from '@/utils';
import { Conference } from '@/types/types';
import styles from './DateDisplayCard.module.scss';

interface DateDisplayCardProps {
    label: string;
    date: string;
}

const DateDisplayCard = ({ label, date }: DateDisplayCardProps) => {
    return (
        <div className={styles.dateCard} tabIndex={0}>
            <strong className={styles.label}>{label}</strong>
            <p className={styles.startDate}>{formatDate(date as string)}</p>
        </div>
    )
}

export default DateDisplayCard;