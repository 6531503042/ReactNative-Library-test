import React, { useState } from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type ScreenTwoProps = {
    route: RouteProp<MainStackParamList, "Two">,
    navigation: FrameNavigationProp<MainStackParamList, "Two">,
};

export function ScreenTwo({ navigation }: ScreenTwoProps) {
    const [selectedFloor, setSelectedFloor] = useState('All Floors');
    const [selectedTime, setSelectedTime] = useState('8:30 - 9:30');

    const floors = ['All Floors', 'Floor 3', 'Floor 4', 'Floor 5'];
    const timeSlots = ['8:30 - 9:30', '9:30 - 10:30', '10:30 - 11:30'];
    const rooms = [
        { id: 1, name: 'Multimedia Room 1', capacity: 6, facilities: ['Projector', 'Whiteboard'] },
        { id: 2, name: 'Multimedia Room 2', capacity: 8, facilities: ['Smart TV', 'Whiteboard'] },
        { id: 3, name: 'Multimedia Room 3', capacity: 4, facilities: ['Projector'] },
        { id: 4, name: 'Multimedia Room 4', capacity: 10, facilities: ['Projector', 'Sound System'] },
    ];

    return (
        <gridLayout rows="*, auto">
            <scrollView row="0" className="bg-gray-50">
                <stackLayout className="p-4">
                    {/* Header */}
                    <label className="text-2xl font-bold text-blue-600 mb-4">
                        Room Reservation
                    </label>

                    {/* Info Card */}
                    <gridLayout className="bg-blue-50 rounded-xl p-4 mb-6">
                        <stackLayout>
                            <label className="font-semibold text-blue-800 mb-2">Reservation Hours</label>
                            <label className="text-blue-600">6:00 A.M. - 11:00 P.M.</label>
                            <stackLayout className="mt-3">
                                <label className="text-xs text-blue-600">• Reservations can be made 1 day in advance</label>
                                <label className="text-xs text-blue-600">• 15 minutes grace period for check-in</label>
                            </stackLayout>
                        </stackLayout>
                    </gridLayout>

                    {/* Floor Selection */}
                    <label className="text-lg font-semibold mb-3">Select Floor</label>
                    <scrollView orientation="horizontal" className="mb-6">
                        <stackLayout orientation="horizontal">
                            {floors.map((floor) => (
                                <gridLayout
                                    key={floor}
                                    className={`mr-3 rounded-xl px-4 py-2 ${
                                        selectedFloor === floor 
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-white text-gray-700'
                                    }`}
                                    onTap={() => setSelectedFloor(floor)}
                                >
                                    <label className="text-sm font-medium">{floor}</label>
                                </gridLayout>
                            ))}
                        </stackLayout>
                    </scrollView>

                    {/* Time Selection */}
                    <label className="text-lg font-semibold mb-3">Select Time</label>
                    <scrollView orientation="horizontal" className="mb-6">
                        <stackLayout orientation="horizontal">
                            {timeSlots.map((time) => (
                                <gridLayout
                                    key={time}
                                    className={`mr-3 rounded-xl px-4 py-2 ${
                                        selectedTime === time 
                                            ? 'bg-blue-600 text-white' 
                                            : 'bg-white text-gray-700'
                                    }`}
                                    onTap={() => setSelectedTime(time)}
                                >
                                    <label className="text-sm font-medium">{time}</label>
                                </gridLayout>
                            ))}
                        </stackLayout>
                    </scrollView>

                    {/* Available Rooms */}
                    <label className="text-lg font-semibold mb-3">Available Rooms</label>
                    <stackLayout>
                        {rooms.map((room) => (
                            <gridLayout
                                key={room.id}
                                className="bg-white rounded-xl shadow-sm mb-4 p-4"
                                rows="auto, auto"
                                columns="*, auto"
                            >
                                <stackLayout row="0" col="0">
                                    <label className="font-semibold text-gray-800">{room.name}</label>
                                    <label className="text-sm text-gray-600">Capacity: {room.capacity} people</label>
                                </stackLayout>
                                <label row="0" col="1" className="text-green-600 text-sm">Available</label>
                                <stackLayout row="1" col="0" colSpan="2" className="mt-2">
                                    <wrapLayout>
                                        {room.facilities.map((facility, index) => (
                                            <label
                                                key={index}
                                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full mr-2"
                                            >
                                                {facility}
                                            </label>
                                        ))}
                                    </wrapLayout>
                                </stackLayout>
                            </gridLayout>
                        ))}
                    </stackLayout>
                </stackLayout>
            </scrollView>

            {/* Bottom Navigation */}
            <gridLayout row="1" columns="*,*,*" className="bg-white border-t border-gray-200 p-2">
                <stackLayout col="0" className="text-center text-gray-600" onTap={() => navigation.navigate('One')}>
                    <label className="text-2xl">📚</label>
                    <label className="text-xs font-medium">Books</label>
                </stackLayout>
                <stackLayout col="1" className="text-center text-blue-600">
                    <label className="text-2xl">🚪</label>
                    <label className="text-xs font-medium">Rooms</label>
                </stackLayout>
                <stackLayout col="2" className="text-center text-gray-600" onTap={() => navigation.navigate('Three')}>
                    <label className="text-2xl">👤</label>
                    <label className="text-xs font-medium">Profile</label>
                </stackLayout>
            </gridLayout>
        </gridLayout>
    );
}