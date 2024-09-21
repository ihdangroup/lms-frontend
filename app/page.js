"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
      <header className="flex items-center bg-[#f4f4f4] justify-around">
        <div>
          <p className="text-center py-4">
            Kembangkan skill tanpa mengeluarkan biaya sepeserpun
          </p>
        </div>
      </header>
      <main className="px-10 lg:px-24">
        <section id="navbar">
          <Navbar />
        </section>
        <section className="flex flex-wrap text-slate-800 pb-20">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 pt-0 lg:pt-24">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">
              Selamat Datang di Situs Pembelajaran Saung IT Bumiayu
            </h1>
            <p className="text-lg lg:text-xl mb-8">
              Tingkatkan Skill Digital Anda dengan Pelatihan Berkualitas
            </p>
            <div className="space-x-0 lg:space-x-4 flex text-center flex-wrap w-full">
              <a
                href="#kursus"
                className="w-full mt-4 lg:mt-0 px-0 border rounded bg-slate-800 text-white py-3 lg:px-6 lg:w-auto"
              >
                <span className=" rounded-md text-lg font-semibold   transition-colors">
                  Belajar Sekarang
                </span>
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 order-1 lg:order-2">
            <Image
              src="/images/homepage-hero.png"
              width="600"
              height="600"
              alt="banner"
            />
          </div>
        </section>

        <section
          id="kursus"
          className="bg-[#192474] rounded-lg text-center text-white py-20"
        >
          <div className="mx-auto">
            <h2 className="text-2xl lg:text-3xl  font-bold  mb-12">
              Pelatihan yang kami tawarkan
            </h2>
            <div className="container mx-auto flex flex-wrap justify-center justify-between">
              <div className="w-full lg:w-[23%]">
                <img
                  src="/icons/cisco.svg"
                  className="shadow-xl mt-1 p-6 bg-[#0e1339] rounded-full mx-auto"
                  width="75"
                  height="75"
                  alt=""
                />
                <h3 className="text-xl lg:text-2xl my-2">Mikrotik Training</h3>
                <p>
                  Pelajari konfigurasi dan manajemen jaringan dengan Mikrotik.
                </p>
              </div>
              <div className="w-full my-6 lg:my-0 lg:w-[23%]">
                <img
                  src="/icons/cisco.svg"
                  className="shadow-xl mt-1 mx-1 bg-[#0e1339] p-2 rounded-full mx-auto"
                  width="75"
                  height="75"
                  alt=""
                />
                <h3 className="text-xl lg:text-2xl my-2">
                  Cisco Packet Tracer
                </h3>
                <p>Kuasai simulasi jaringan dengan Cisco Packet Tracer.</p>
              </div>
              <div className="w-full lg:w-[23%]">
                <img
                  src="/icons/laravel.svg"
                  className="shadow-xl mt-1 p-6 bg-[#0e1339] rounded-full mx-auto"
                  width="75"
                  height="75"
                  alt=""
                />
                <h3 className="text-xl lg:text-2xl my-2">Web Development</h3>
                <p>Dari HTML hingga Full-Stack Development.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex flex-wrap py-20" id="tentang">
          <div className="lg:w-1/2 text-right ">
            <Image
              src="/images/banner2.png"
              width="400"
              height="400"
              alt="banner"
            />
          </div>
          <div className="w-full  lg:w-1/2 pt-0 lg:pt-24">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">
              Mengapa Saung IT Bumiayu?
            </h1>
            <p className=" lg:text-lg mb-8">
              Saung IT Bumiayu adalah CV yang berfokus pada pelatihan skill
              digital. Kami menyediakan berbagai pelatihan mulai dari Mikrotik,
              Cisco Packet Tracer, Web Development, Application Development,
              Multimedia, dan skill digital lainnya. Bergabunglah dengan kami
              untuk mengembangkan keterampilan digital Anda dan mencapai
              kesuksesan di dunia teknologi.
            </p>
            {/* <div className="hidden my-10 lg:flex space-x-6">
              <img src="/icons/cisco.svg" width="75" height="75" alt="" />
              <img src="/icons/laravel.svg" width="75" height="75" alt="" />
              <img src="/icons/photoshop.svg" width="75" height="75" alt="" />
            </div> */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
