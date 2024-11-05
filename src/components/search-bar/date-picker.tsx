import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export const CustomDatePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <DatePicker
                selected={startDate}
                onChange={(date) => date && setStartDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="time"
                dateFormat="MMMM d, yyyy h:mm aa"
            />
        </div>
    )
}