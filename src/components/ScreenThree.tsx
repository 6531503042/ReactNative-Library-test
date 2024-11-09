import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type ScreenThreeProps = {
    route: RouteProp<MainStackParamList, "Three">,
    navigation: FrameNavigationProp<MainStackParamList, "Three">,
};

export function ScreenThree({ navigation }: ScreenThreeProps) {
    const studentInfo = {
        id: '6531503055',
        email: '6531503055@lamduan.mfu.ac.th',
        name: 'John Doe',
        faculty: 'Information Technology',
        year: '3rd Year',
        avatar: 'https://picsum.photos/200'
    };

    const reservations = [
        {
            room: 'Multimedia Room 1',
            time: '16:30 - 17:30',
            date: 'Today',
            status: 'confirmed',
            icon: '🎥'
        },
        {
            room: 'Study Room 3',
            time: '10:30 - 11:30',
            date: 'Tomorrow',
            status: 'pending',
            icon: '📚'
        }
    ];

    const borrowedBooks = [
        {
            title: 'Data Structures and Algorithms',
            author: 'Robert Sedgewick',
            borrowDate: '09/11/2567 BE',
            dueDate: '23/11/2567 BE',
            canRenew: true,
            daysLeft: 5,
            coverUrl: 'https://picsum.photos/100/150',
            category: 'Computer Science'
        },
        {
            title: 'Machine Learning Basics',
            author: 'Andrew Ng',
            borrowDate: '15/11/2567 BE',
            dueDate: '29/11/2567 BE',
            canRenew: true,
            daysLeft: 11,
            coverUrl: 'https://picsum.photos/100/151',
            category: 'Artificial Intelligence'
        }
    ];

    const stats = [
        { label: 'Books Borrowed', value: '12', icon: '📚' },
        { label: 'Room Hours', value: '48', icon: '⏰' },
        { label: 'Active Reservations', value: '2', icon: '📅' }
    ];

    return (
        <gridLayout rows="*, auto">
            <scrollView row="0" className="bg-gray-50">
                <stackLayout className="p-4">
                    {/* Profile Header Card */}
                    <gridLayout className="bg-white rounded-xl p-6 mb-6" rows="auto, auto" columns="auto, *">
                        <image
                            row="0" col="0" rowSpan="2"
                            src={studentInfo.avatar}
                            className="w-24 h-24 rounded-xl mr-4"
                            stretch="aspectFill"
                        />
                        <stackLayout row="0" col="1">
                            <label className="text-xl font-bold text-gray-800">
                                {studentInfo.name}
                            </label>
                            <label className="text-sm text-gray-600">
                                ID: {studentInfo.id}
                            </label>
                        </stackLayout>
                        <stackLayout row="1" col="1" className="mt-2">
                            <label className="text-sm text-blue-600">
                                👨‍🎓 {studentInfo.faculty}
                            </label>
                            <label className="text-sm text-gray-500">
                                🎓 {studentInfo.year}
                            </label>
                        </stackLayout>
                    </gridLayout>

                    {/* Stats Grid */}
                    <gridLayout columns="*,*,*" className="mb-6">
                        {stats.map((stat, index) => (
                            <stackLayout
                                key={index}
                                col={index}
                                className="bg-white p-4 rounded-xl mx-1"
                            >
                                <label className="text-2xl text-center mb-2">{stat.icon}</label>
                                <label className="text-lg font-bold text-center text-gray-800">
                                    {stat.value}
                                </label>
                                <label className="text-xs text-center text-gray-600">
                                    {stat.label}
                                </label>
                            </stackLayout>
                        ))}
                    </gridLayout>

                    {/* Active Reservations */}
                    <gridLayout className="mb-6" rows="auto, auto">
                        <gridLayout columns="auto, *, auto" className="mb-3">
                            <label col="0" className="text-lg font-semibold">
                                📅 Active Reservations
                            </label>
                            <label col="2" className="text-sm text-blue-600">
                                View All →
                            </label>
                        </gridLayout>
                        <stackLayout className="bg-white rounded-xl shadow-sm p-4">
                            {reservations.map((reservation, index) => (
                                <gridLayout 
                                    key={index}
                                    className={`${index > 0 ? 'border-t border-gray-100 pt-3 mt-3' : ''}`}
                                    columns="auto, *, auto"
                                >
                                    <label col="0" className="text-2xl mr-3">
                                        {reservation.icon}
                                    </label>
                                    <stackLayout col="1">
                                        <label className="font-semibold text-gray-800">
                                            {reservation.room}
                                        </label>
                                        <label className="text-sm text-gray-600">
                                            {reservation.time} • {reservation.date}
                                        </label>
                                    </stackLayout>
                                    <label
                                        col="2"
                                        className={`text-sm px-3 py-1 rounded-full ${
                                            reservation.status === 'confirmed'
                                                ? 'bg-green-50 text-green-600'
                                                : 'bg-yellow-50 text-yellow-600'
                                        }`}
                                    >
                                        {reservation.status}
                                    </label>
                                </gridLayout>
                            ))}
                        </stackLayout>
                    </gridLayout>

                    {/* Borrowed Books */}
                    <gridLayout className="mb-6" rows="auto, auto">
                        <gridLayout columns="auto, *, auto" className="mb-3">
                            <label col="0" className="text-lg font-semibold">
                                📚 Borrowed Books
                            </label>
                            <label col="2" className="text-sm text-blue-600">
                                View All →
                            </label>
                        </gridLayout>
                        <stackLayout className="bg-white rounded-xl shadow-sm p-4">
                            {borrowedBooks.map((book, index) => (
                                <gridLayout
                                    key={index}
                                    className={`${index > 0 ? 'border-t border-gray-100 pt-3 mt-3' : ''}`}
                                    rows="auto, auto"
                                    columns="auto, *, auto"
                                >
                                    <image
                                        row="0" col="0" rowSpan="2"
                                        src={book.coverUrl}
                                        className="w-16 h-20 rounded-lg mr-3"
                                        stretch="aspectFill"
                                    />
                                    <stackLayout row="0" col="1">
                                        <label className="font-semibold text-gray-800">
                                            {book.title}
                                        </label>
                                        <label className="text-sm text-gray-600">
                                            {book.author}
                                        </label>
                                        <label className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full mt-1" style="width: fit-content">
                                            {book.category}
                                        </label>
                                    </stackLayout>
                                    {book.canRenew && (
                                        <button
                                            row="0" col="2"
                                            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
                                            onTap={() => console.log('Renew tapped')}
                                        >
                                            Renew
                                        </button>
                                    )}
                                    <stackLayout row="1" col="1" colSpan="2" className="mt-2">
                                        <gridLayout columns="auto,auto,*" className="bg-orange-50 p-2 rounded-lg">
                                            <label col="0" className="text-orange-600 text-sm">⏰</label>
                                            <label col="1" className="text-orange-600 text-sm ml-1">
                                                Due in {book.daysLeft} days
                                            </label>
                                            <label col="2" className="text-orange-600 text-xs text-right">
                                                {book.dueDate}
                                            </label>
                                        </gridLayout>
                                    </stackLayout>
                                </gridLayout>
                            ))}
                        </stackLayout>
                    </gridLayout>

                    {/* Logout Button */}
                    <button
                        className="bg-red-50 text-red-600 py-4 rounded-xl w-full mb-4"
                        onTap={() => console.log('Logout tapped')}
                    >
                        <gridLayout columns="auto,auto" className="justify-center">
                            <label col="0" className="text-xl mr-2">🚪</label>
                            <label col="1" className="font-medium">Logout</label>
                        </gridLayout>
                    </button>
                </stackLayout>
            </scrollView>

            {/* Bottom Navigation */}
            <gridLayout row="1" columns="*,*,*" className="bg-white border-t border-gray-200 p-2">
                <stackLayout col="0" className="text-center text-gray-600" onTap={() => navigation.navigate('One')}>
                    <label className="text-2xl">📚</label>
                    <label className="text-xs font-medium">Books</label>
                </stackLayout>
                <stackLayout col="1" className="text-center text-gray-600" onTap={() => navigation.navigate('Two', { message: '' })}>
                    <label className="text-2xl">🚪</label>
                    <label className="text-xs font-medium">Rooms</label>
                </stackLayout>
                <stackLayout col="2" className="text-center text-blue-600">
                    <label className="text-2xl">👤</label>
                    <label className="text-xs font-medium">Profile</label>
                </stackLayout>
            </gridLayout>
        </gridLayout>
    );
}