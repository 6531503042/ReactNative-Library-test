import React from 'react';
import { ScrollView } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../NavigationParamList";

type ScreenOneProps = {
    route: RouteProp<MainStackParamList, "One">,
    navigation: FrameNavigationProp<MainStackParamList, "One">,
};

export function ScreenOne({ navigation }: ScreenOneProps) {
    const categories = [
        { id: 1, name: 'Fiction', icon: '📚' },
        { id: 2, name: 'Non-Fiction', icon: '📖' },
        { id: 3, name: 'Academic', icon: '🎓' },
        { id: 4, name: 'Journals', icon: '📰' },
    ];

    const featuredBooks = [
        {
            id: 1,
            title: 'Data Science Fundamentals',
            author: 'Dr. Sarah Chen',
            coverUrl: 'https://picsum.photos/200/300',
            rating: 4.8,
            available: true,
            category: 'Academic'
        },
        {
            id: 2,
            title: 'Machine Learning Basics',
            author: 'Prof. James Wilson',
            coverUrl: 'https://picsum.photos/200/301',
            rating: 4.6,
            available: true,
            category: 'Academic'
        }
    ];

    return (
        <gridLayout rows="*, auto">
            <scrollView row="0" className="bg-gray-50">
                <stackLayout className="p-4">
                    {/* Header */}
                    <label className="text-2xl font-bold text-gray-800 mb-4">
                        MFU Library
                    </label>

                    {/* Search Bar */}
                    <gridLayout 
                        className="bg-white rounded-lg p-3 shadow-sm mb-6"
                        rows="auto" 
                        columns="auto,*"
                    >
                        <label col="0" className="text-lg mr-2">🔍</label>
                        <textField
                            col="1"
                            hint="Search books, authors..."
                            className="text-gray-600"
                        />
                    </gridLayout>

                    {/* Categories */}
                    <label className="text-lg font-semibold text-gray-800 mb-3">
                        Categories
                    </label>
                    <scrollView orientation="horizontal" className="mb-6">
                        <stackLayout orientation="horizontal">
                            {categories.map((category) => (
                                <gridLayout
                                    key={category.id}
                                    className="bg-white mr-3 rounded-lg p-4 shadow-sm"
                                    rows="auto"
                                    columns="auto,auto"
                                    width="auto"
                                >
                                    <label col="0" className="text-xl mr-2">
                                        {category.icon}
                                    </label>
                                    <label col="1" className="text-sm font-medium text-gray-700">
                                        {category.name}
                                    </label>
                                </gridLayout>
                            ))}
                        </stackLayout>
                    </scrollView>

                    {/* Featured Books */}
                    <label className="text-lg font-semibold text-gray-800 mb-3">
                        Featured Books
                    </label>
                    <gridLayout rows="auto" className="mb-4">
                        <scrollView orientation="horizontal">
                            <stackLayout orientation="horizontal">
                                {featuredBooks.map((book) => (
                                    <gridLayout
                                        key={book.id}
                                        className="bg-white mr-4 rounded-lg shadow-sm"
                                        rows="auto,auto"
                                        width="160"
                                    >
                                        <image
                                            row="0"
                                            src={book.coverUrl}
                                            className="rounded-t-lg h-48 w-full"
                                            stretch="aspectFill"
                                        />
                                        <stackLayout row="1" className="p-3">
                                            <label className="font-medium text-sm mb-1">
                                                {book.title}
                                            </label>
                                            <label className="text-xs text-gray-500 mb-2">
                                                {book.author}
                                            </label>
                                            <gridLayout columns="auto,*,auto">
                                                <label col="0" className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                                    Available
                                                </label>
                                                <stackLayout col="2" orientation="horizontal">
                                                    <label className="text-yellow-400 mr-1">★</label>
                                                    <label className="text-xs">{book.rating}</label>
                                                </stackLayout>
                                            </gridLayout>
                                        </stackLayout>
                                    </gridLayout>
                                ))}
                            </stackLayout>
                        </scrollView>
                    </gridLayout>
                </stackLayout>
            </scrollView>

            {/* Bottom Navigation */}
            <gridLayout row="1" columns="*,*,*" className="bg-white border-t border-gray-200 p-2">
                <stackLayout col="0" className="text-center text-blue-600">
                    <label className="text-2xl">📚</label>
                    <label className="text-xs font-medium">Books</label>
                </stackLayout>
                <stackLayout col="1" className="text-center text-gray-600" onTap={() => navigation.navigate('Two', { message: '' })}>
                    <label className="text-2xl">🚪</label>
                    <label className="text-xs font-medium">Rooms</label>
                </stackLayout>
                <stackLayout col="2" className="text-center text-gray-600">
                    <label className="text-2xl">👤</label>
                    <label className="text-xs font-medium">Profile</label>
                </stackLayout>
            </gridLayout>
        </gridLayout>
    );
}