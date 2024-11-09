import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

// Helper components for reuse
const StatCard = ({ label, value, icon }: { label: string, value: string, icon: string }) => (
  <stackLayout className="bg-white p-4 rounded-xl mx-2 shadow-md">
    <label className="text-2xl text-center mb-2">{icon}</label>
    <label className="text-lg font-bold text-center text-gray-800">{value}</label>
    <label className="text-xs text-center text-gray-600">{label}</label>
  </stackLayout>
);

const ReservationCard = ({ reservation }: { reservation: { room: string, time: string, date: string, status: string, icon: string } }) => (
  <gridLayout
    className="border-t border-gray-200 pt-3 mt-3"
    columns="auto, *, auto"
  >
    <label col="0" className="text-2xl mr-3">{reservation.icon}</label>
    <stackLayout col="1">
      <label className="font-semibold text-gray-800">{reservation.room}</label>
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
);

const BorrowedBookCard = ({ book }: { book: any }) => {
  const title = book.title || "Untitled Book";
  const author = book.author || "Unknown Author";
  const dueDate = book.dueDate || "N/A";
  const coverUrl = book.coverUrl || 'https://via.placeholder.com/100x150';
  const category = book.category || "Uncategorized";
  const daysLeft = book.daysLeft ?? 0;

  return (
    <gridLayout
      className="border-t border-gray-200 pt-3 mt-3"
      rows="auto, auto"
      columns="auto, *, auto"
    >
      <image
        row="0" col="0" rowSpan="2"
        src={coverUrl}
        className="w-16 h-20 rounded-lg mr-3"
        stretch="aspectFill"
      />
      <stackLayout row="0" col="1">
        <label className="font-semibold text-gray-800">{title}</label>
        <label className="text-sm text-gray-600">{author}</label>
        <label
          className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full mt-1"
          style={{ width: 'fit-content' }}
        >
          {category}
        </label>
      </stackLayout>
      <stackLayout row="1" col="1" colSpan="2" className="mt-2">
        <gridLayout columns="auto, auto, *" className="bg-orange-50 p-2 rounded-lg">
          <label col="0" className="text-orange-600 text-sm">⏰</label>
          <label col="1" className="text-orange-600 text-sm ml-1">
            Due in {daysLeft} days
          </label>
          <label col="2" className="text-orange-600 text-xs text-right">
            {dueDate}
          </label>
        </gridLayout>
      </stackLayout>
    </gridLayout>
  );
};

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
    avatar: 'https://picsum.photos/200',
  };

  const reservations = [
    {
      room: 'Multimedia Room 1',
      time: '16:30 - 17:30',
      date: 'Today',
      status: 'confirmed',
      icon: '🎥',
    },
    {
      room: 'Study Room 3',
      time: '10:30 - 11:30',
      date: 'Tomorrow',
      status: 'pending',
      icon: '📚',
    },
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
      category: 'Computer Science',
    },
    {
      title: 'Machine Learning Basics',
      author: 'Andrew Ng',
      borrowDate: '15/11/2567 BE',
      dueDate: '29/11/2567 BE',
      canRenew: true,
      daysLeft: 11,
      coverUrl: 'https://picsum.photos/100/151',
      category: 'Artificial Intelligence',
    },
  ];

  const stats = [
    { label: 'Books Borrowed', value: '12', icon: '📚' },
    { label: 'Room Hours', value: '48', icon: '⏰' },
    { label: 'Active Reservations', value: '2', icon: '📅' },
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
              <StatCard key={index} label={stat.label} value={stat.value} icon={stat.icon} />
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
                <ReservationCard key={index} reservation={reservation} />
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
                <BorrowedBookCard key={index} book={book} />
              ))}
            </stackLayout>
          </gridLayout>

          {/* Logout Button */}
          <button
            className="bg-red-50 text-red-600 py-4 rounded-xl w-full mb-6"
            onTap={() => console.log('Logout tapped')}
          >
            Profile
          </button>
        </stackLayout>
      </scrollView>
    </gridLayout>
  );
}
