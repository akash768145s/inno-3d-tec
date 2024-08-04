import React from "react";
import Image from "next/image";

export default function Card() {
    return (
        <>
            <h1 className="text-6xl mb-5 text-[#00DDEE]">Offered Services</h1>
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div
                    className="w-full max-w-6xl p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                    style={{ gap: "10px" }}
                >
                    {/* Box 1 */}
                    <div
                        className="w-80 p-4 rounded-[30px] bg-[#121212] shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        style={{ fontFamily: "Poppins" }}
                    >
                        {/* Card background color and rounded corners */}
                        <div className="relative w-full h-40">
                            <Image
                                className="rounded-t-[30px]"
                                alt="Card Image"
                                src="/image 8.png"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="p-2">
                            <h2
                                className="text-xl font-semibold text-center text-white"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Card Title
                            </h2>
                            <p
                                className="text-gray-400 text-justify"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                quis ante sit amet tellus ornare tincidunt.
                            </p>
                        </div>
                    </div>
                    {/* Box 2 */}
                    <div
                        className="w-80 p-4 rounded-[30px] bg-[#121212] shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        style={{ fontFamily: "Poppins" }}
                    >
                        {/* Card background color and rounded corners */}
                        <div className="relative w-full h-40">
                            <Image
                                className="rounded-t-[30px]"
                                alt="Card Image"
                                src="/image 6.png"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="p-2">
                            <h2
                                className="text-xl font-semibold text-center text-white"
                                style={{ fontFamily: "Poppins" }}
                            >
                                3D Printing Services
                            </h2>
                            <p
                                className="text-gray-400 text-justify"
                                style={{ fontFamily: "Poppins" }}
                            >
                                We specialize in custom designs, ensuring each project is
                                tailored to your unique needs. Using advanced technology and
                                high-quality materials, we deliver detailed and accurate 3D
                                models quickly and affordably.
                            </p>
                        </div>
                    </div>
                    {/* Box 3 */}
                    <div
                        className="w-80 p-4 rounded-[30px] bg-[#121212] shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        style={{ fontFamily: "Poppins" }}
                    >
                        {/* Card background color and rounded corners */}
                        <div className="relative w-full h-40">
                            <Image
                                className="rounded-t-[30px]"
                                alt="Card Image"
                                src="/image 4.png"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="p-2">
                            <h2
                                className="text-xl font-semibold text-center text-white"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Card Title
                            </h2>
                            <p
                                className="text-gray-400 text-justify"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                quis ante sit amet tellus ornare tincidunt.
                            </p>
                        </div>
                    </div>
                    {/* Box 4 */}
                    <div
                        className="w-80 p-4 rounded-[30px] bg-[#121212] shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        style={{ fontFamily: "Poppins" }}
                    >
                        {/* Card background color and rounded corners */}
                        <div className="relative w-full h-40">
                            <Image
                                className="rounded-t-[30px]"
                                alt="Card Image"
                                src="/image 9.png"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="p-2">
                            <h2
                                className="text-xl font-semibold text-center text-white"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Card Title
                            </h2>
                            <p
                                className="text-gray-400 text-justify"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                quis ante sit amet tellus ornare tincidunt.
                            </p>
                        </div>
                    </div>
                    {/* Box 5 */}
                    <div
                        className="w-80 p-4 rounded-[30px] bg-[#121212] shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        style={{ fontFamily: "Poppins" }}
                    >
                        {/* Card background color and rounded corners */}
                        <div className="relative w-full h-40">
                            <Image
                                className="rounded-t-[30px]"
                                alt="Card Image"
                                src="/image 7.png"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="p-2">
                            <h2
                                className="text-xl font-semibold text-center text-white"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Card Title
                            </h2>
                            <p
                                className="text-gray-400 text-justify"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                quis ante sit amet tellus ornare tincidunt.
                            </p>
                        </div>
                    </div>
                    {/* Box 6 */}
                    <div
                        className="w-80 p-4 rounded-[30px] bg-[#121212] shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
                        style={{ fontFamily: "Poppins" }}
                    >
                        {/* Card background color and rounded corners */}
                        <div className="relative w-full h-40">
                            <Image
                                className="rounded-t-[30px]"
                                alt="Card Image"
                                src="/image 5.png"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="p-2">
                            <h2
                                className="text-xl font-semibold text-center text-white"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Card Title
                            </h2>
                            <p
                                className="text-gray-400 text-justify"
                                style={{ fontFamily: "Poppins" }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                quis ante sit amet tellus ornare tincidunt.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
