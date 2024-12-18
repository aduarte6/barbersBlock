// components/BarbershopAppointments.tsx

import { useEffect, useState } from 'react';

import { Calendar } from 'primereact/calendar';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
// import 'primeflex/primeflex.css';

interface Appointment {
    service: string;
    date: string;
    time: string;
}

interface Props {
    userName: string | null;
}

const ExampleLoginData: React.FC<Props> = ({ userName }) => {
    const [upcomingDate, setUpcomingDate] = useState<string>('');


    const [date, setDate] = useState(null);


    useEffect(() => {
        const date = new Date();
        date.setDate(date.getDate() + 3); // Set to 3 days from today
        const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
        setUpcomingDate(formattedDate);
    }, []);

    // Example data for the upcoming and past appointments
    const upcomingAppointments: Appointment[] = [
        { service: 'Haircut', date: upcomingDate, time: '2:00 PM' },
    ];

    const pastAppointments: Appointment[] = [
        { service: 'Shave', date: 'December 10, 2024', time: '1:00 PM' },
        { service: 'Haircut', date: 'November 15, 2024', time: '11:30 AM' },
    ];

    return (
        <div className="max-w-4xl justify-center m-auto  ">
            <h2 className="text-2xl font-bold mb-4">
                Hello, {userName || 'Guest'}!
            </h2>
            <div className="flex flex-col gap-12">
                {/* Upcoming Appointments Section */}
                <section >
                    <h3 className="text-xl font-semibold mb-2">Upcoming Appointments</h3>
                    <table className="min-w-full table-auto border-collapse bg-gray-50 shadow-md rounded-lg">
                        <thead>
                        <tr>
                            <th className="px-4 py-2 text-left border-b font-semibold">Service</th>
                            <th className="px-4 py-2 text-left border-b font-semibold">Date</th>
                            <th className="px-4 py-2 text-left border-b font-semibold">Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        {upcomingAppointments.map((appointment, index) => (
                            <tr key={index} className="border-b hover:bg-gray-100">
                                <td className="px-4 py-2">{appointment.service}</td>
                                <td className="px-4 py-2">{appointment.date}</td>
                                <td className="px-4 py-2">{appointment.time}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
                <section  >
                    <div className=" m-auto card flex justify-center">
                        <Calendar value={date} onChange={(e) => setDate(e.value)} inline showWeek/>
                    </div>
                </section>

                {/* Past Appointments Section */}
                <section>
                    <h3 className="text-xl font-semibold mb-2">Past Appointments</h3>
                    <table className="min-w-full table-auto border-collapse bg-gray-50 shadow-md rounded-lg">
                        <thead>
                        <tr>
                            <th className="px-4 py-2 text-left border-b font-semibold">Service</th>
                            <th className="px-4 py-2 text-left border-b font-semibold">Date</th>
                            <th className="px-4 py-2 text-left border-b font-semibold">Time</th>
                        </tr>
                        </thead>
                        <tbody>
                        {pastAppointments.map((appointment, index) => (
                            <tr key={index} className="border-b text-gray-400 hover:text-black hover:bg-gray-100">
                                <td className="px-4 py-2">{appointment.service}</td>
                                <td className="px-4 py-2">{appointment.date}</td>
                                <td className="px-4 py-2">{appointment.time}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>

            </div>

        </div>
    );
};

export default ExampleLoginData;
