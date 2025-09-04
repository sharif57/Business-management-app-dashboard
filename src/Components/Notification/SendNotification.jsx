

import { ArrowLeft, Clock9, Send } from 'lucide-react';
import  { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useInfluencerDetailsQuery } from '../../redux/features/influencerSlice';
import { useSendNotificationMutation } from '../../redux/features/notificationSlice';
import toast from 'react-hot-toast';

export default function SendNotification() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id"); // "68a008cc80542be03c7a0101"

    const navigate = useNavigate();
    const {data} = useInfluencerDetailsQuery(id);
    console.log(data, 'details')

    const [sendNotification] = useSendNotificationMutation();

    const [showSchedule, setShowSchedule] = useState(false);
    const [date, setDate] = useState('');
    const [body, setBody] = useState('');
    const [title, setTitle] = useState('');
    const [type, setType] = useState('HARD'); 
    const [time, setTime] = useState('');

    const handleSendNotification = async (e) => {
        e.preventDefault();
        try {
            const formattedType = type.toUpperCase();
            
            const notificationData = {
                influencerId: id, 
                type: formattedType, 
                title, 
                body
            };
            
            if (date && time) {
                notificationData.scheduledAt = `${date} ${time}`;
            }
            
            const res = await sendNotification(notificationData).unwrap();
            console.log(res,'=================/');
            console.log(res?.message,'===========');

            if (res?.success === true) {
                toast.success(res?.message || "Notification sent successfully");
                navigate(-1);
            } else {
                toast.error(res?.error?.data?.message || "Notification failed");
            }

        } catch (error) {
            console.log(error);
        }
    };

    const toggleSchedule = () => {
        setShowSchedule(!showSchedule);
    };

    const clearSchedule = () => {
        setDate('');
        setTime('');
    };

    const IMAGE = import.meta.env.VITE_IMAGE_API;

    return (
        <div className=''>
            <div onClick={() => navigate(-1)} className='text-white flex items-center gap-4 mb-6 cursor-pointer' >
                <ArrowLeft />
                <h2 className="text-xl ">Send Notification</h2>
            </div>

            <form onSubmit={handleSendNotification} className=" text-[#969D9F] font-sans p-6 bg-[#19262b] border border-[#495559] max-w-xl  rounded-lg">
                <div className="mb-4 flex items-center gap-6">
                    <label className="block mb-2">Notification To</label>
                    <div className='flex items-center gap-4 border border-[#969D9F] px-2 py-2 rounded-lg'>
                        <img src={`${IMAGE}${data?.data?.avatar}`} alt="Notification" className="size-8 rounded-lg" />
                        <h1>{data?.data?.name}</h1>
                    </div>
                </div>
                <div className="mb-4">
                    <select 
                        onChange={(e) => setType(e.target.value)} 
                        value={type}
                        placeholder='Notification Type' 
                        className="w-full bg-[#19262b] border-b border-gray-700 py-4 focus:outline-none focus:border-gray-500"
                    >
                        <option value="HARD">Hard Reminder</option>
                        <option value="SOFT">Soft Reminder</option>
                    </select>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder='Notification Title'
                        className="w-full bg-[#19262b] border-b border-gray-700 py-4 focus:outline-none focus:border-gray-500"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder='Notification Body'
                        className="w-full bg-[#19262b] border-b border-gray-700 py-4 focus:outline-none focus:border-gray-500"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <div className='flex items-end justify-end'>
                        <button
                            type="button"
                            onClick={toggleSchedule}
                            className="bg-[#fecaca] flex items-center gap-3 border border-[#F87171] text-[#DC2626] px-4 py-2 rounded hover:bg-red-700"
                        >
                            <Clock9 />
                            Schedule for Later
                        </button>
                    </div>
                    {showSchedule && (
                        <>
                            <div className="mt-4 flex w-full gap-6">
                                {/* Date Picker */}
                                <div className="flex flex-col w-1/2">
                                    <label className="mb-2 text-sm">Pick Date</label>
                                    <input
                                        type="date"
                                        value={date}
                                        onChange={(e) => setDate(e.target.value)}
                                        className="w-full bg-[#19262b] border-b border-gray-700 py-3 px-2 rounded focus:outline-none focus:border-gray-500"
                                    />
                                </div>

                                {/* Time Picker */}
                                <div className="flex flex-col w-1/2">
                                    <label className="mb-2 text-sm">Pick Time</label>
                                    <input
                                        type="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="w-full bg-[#19262b] border-b border-gray-700 py-3 px-2 rounded focus:outline-none focus:border-gray-500"
                                    />
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={clearSchedule}
                                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 mt-2"
                            >
                                Clear
                            </button>
                        </>
                    )}
                </div>
                <div className='flex items-center justify-end mt-12'>
                    <button type="submit" className="bg-[#DC2626] flex items-center justify-center gap-3 w-1/2 mx-auto text-white px-4 py-2 rounded hover:bg-red-700">
                        <Send />
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}