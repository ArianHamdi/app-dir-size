'use client';

import { addSeconds, addMinutes, addHours, addDays, addWeeks, addMonths, addYears } from 'date-fns';

const Page = () => {

    const date = new Date();

    return (
        <div>
            <p>{addSeconds(date, 1).toString()}</p>
            <p>{addMinutes(date, 1).toString()}</p>
            <p>{addHours(date, 1).toString()}</p>
            <p>{addDays(date, 1).toString()}</p>
            <p>{addWeeks(date, 1).toString()}</p>
            <p>{addMonths(date, 1).toString()}</p>
            <p>{addYears(date, 1).toString()}</p>
        </div>
    )
}

export default Page;