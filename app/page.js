"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import CardItem from "./(home)/(routes)/browse/_components/CardItem";
// Assuming CardItem component for courses is already defined

const LandingPage = () => {
  const courses = [
    // Dummy courses data
    {
      id: 1,
      name: "Course 1",
      description: "Description 1",
      image: "cisco.jpg",
      total_chapter: 10,
      tag: "1",
    },
    {
      id: 2,
      name: "Course 2",
      description: "Description 2",
      image: "mikrotik.jpg",
      total_chapter: 8,
      tag: "2",
    },
    {
      id: 3,
      name: "Course 3",
      description: "Description 3",
      image: "mikrotik.jpg",
      total_chapter: 15,
      tag: "3",
    },
  ];

  return (
    <div>
      <header className="bg-purple-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Image src="/logo2.png" width={40} height={40} alt="Logo" />
          <nav className="flex space-x-4">
            <Link href="/browse" className="hover:text-gray-300">
              Courses
            </Link>
            <Link href="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
            <Link href="/profile" className="hover:text-gray-300">
              Profile
            </Link>
            <Link href="/login" className="hover:text-gray-300">
              Login
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="bg-white text-center py-20">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-4">Welcome to Saung IT</h1>
            <p className="text-gray-700 mb-8">
              Learn and grow with the best online courses
            </p>
            <Link href="/browse">
              <span className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-purple-700 transition-colors">
                Browse Courses
              </span>
            </Link>
          </div>
        </section>

        <section className="bg-gray-100 py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
            <div className="flex flex-wrap justify-around">
              <div className="w-full md:w-1/3 p-4 text-center">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    className="bi bi-badge-hd"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.396 11V5.001H6.209v2.44H3.687V5H2.5v6h1.187V8.43h2.522V11zM8.5 5.001V11h2.188c1.811 0 2.685-1.107 2.685-3.015 0-1.894-.86-2.984-2.684-2.984zm1.187.967h.843c1.112 0 1.622.686 1.622 2.04 0 1.353-.505 2.02-1.622 2.02h-.843z" />
                    <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  High Quality Courses
                </h3>
                <p className="text-gray-700">
                  Learn from industry experts with top-notch content
                </p>
              </div>
              <div className="w-full md:w-1/3 p-4 text-center">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-alarm"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9z" />
                    <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1zm1.038 3.018a6 6 0 0 1 .924 0 6 6 0 1 1-.924 0M0 3.5c0 .753.333 1.429.86 1.887A8.04 8.04 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5M13.5 1c-.753 0-1.429.333-1.887.86a8.04 8.04 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Flexible Learning
                </h3>
                <p className="text-gray-700">
                  Study at your own pace, anytime, anywhere
                </p>
              </div>
              <div className="w-full md:w-1/3 p-4 text-center">
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="currentColor"
                    class="bi bi-patch-check"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
                    />
                    <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Certificates</h3>
                <p className="text-gray-700">
                  Earn certificates to showcase your skills
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Popular Courses
            </h2>
            <div className="flex flex-wrap justify-around">
              {courses.map((course) => (
                <div className="w-full md:w-1/3 lg:w-1/4 p-4" key={course.id}>
                  <CardItem course={course} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-purple-600 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Saung IT. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-gray-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
