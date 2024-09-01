"use client";
import React from "react";
import GoogleButton from "@/components/googlebutton";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleGoToDashboard = () => {
    router.push("/dummy");
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        backgroundColor: "#000000",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} // Black background
    >
      {session ? (
        <>
          <div className="absolute top-4 right-4">
            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors duration-300"
            >
              Sign Out
            </button>
          </div>
          <div className="text-center">
            <Image
              src="/inno3.png" // Update the path to your logo image
              alt="Logo"
              width={250} // Increase the size of the logo
              height={250} // Increase the size of the logo
              className="-mt-16 mb-4" // Move the logo up with negative margin
              style={{ marginLeft: "20px" }} // Adjust the margin to move the image to the right
            />
            <button
              onClick={handleGoToDashboard}
              className="px-4 -mr-3 py-2 bg-[#004aad] text-white rounded hover:bg-[#004aad] transition-colors duration-300"
            >
              Go to Dashboard
            </button>
          </div>
        </>
      ) : (
        <div className="text-center">
          <Image
            src="/inno3.png" // Update the path to your logo image
            alt="Logo"
            width={250} // Increase the size of the logo
            height={250} // Increase the size of the logo
            className="-mt-24 mb-4" // Move the logo up with negative margin
            style={{ marginLeft: "20px" }} // Adjust the margin to move the image to the right
          />
          <GoogleButton />
        </div>
      )}
    </div>
  );
};

export default HomePage;
