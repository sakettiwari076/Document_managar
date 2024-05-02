import React from "react";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <><Navbar /><div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
          <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
          <p className="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p>
          <div className="w-full">
              <div className="flex flex-col w-full mb-10 sm:flex-row">
                  {/* <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
        <div className="relative h-full ml-0 mr-0 sm:mr-10">
            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
            <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                <div className="flex items-center -mt-1">
                    <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">DAPP Development</h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                <p className="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface.</p>
            </div>
        </div>
    </div> */}
                  <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                      <div className="relative h-full ml-0 mr-0 sm:mr-10">
                          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                          <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                              <div className="flex items-center -mt-1">
                                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Document Storage</h3>
                              </div>
                              <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                              <p className="mb-2 text-gray-600">This service allows you to securely store your office documents in a centralized location. It eliminates the need for physical filing cabinets and provides easy access to your files from anywhere with an internet connection.

                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                      <div className="relative h-full ml-0 mr-0 sm:mr-10">
                          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                          <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                              <div className="flex items-center -mt-1">
                                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Version Control</h3>
                              </div>
                              <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                              <p className="mb-2 text-gray-600">With version control, you can keep track of different versions of your documents. It helps prevent confusion and ensures that everyone is working with the most up-to-date version. You can easily view and restore previous versions if needed</p>
                          </div>
                      </div>
                  </div>

                  <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                      <div className="relative h-full ml-0 mr-0 sm:mr-10">
                          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                          <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                              <div className="flex items-center -mt-1">
                                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Collaboration Features</h3>
                              </div>
                              <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                              <p className="mb-2 text-gray-600">This service enables multiple users to work together on the same document simultaneously. You can collaborate in real-time, make edits, leave comments, and track changes. It promotes teamwork and enhances productivity.

                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                      <div className="relative h-full ml-0 mr-0 sm:mr-10">
                          <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-indigo-500 rounded-lg"></span>
                          <div className="relative h-full p-5 bg-white border-2 border-indigo-500 rounded-lg">
                              <div className="flex items-center -mt-1">
                                  <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">Search Functionality</h3>
                              </div>
                              <p className="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                              <p className="mb-2 text-gray-600">Searching for specific documents becomes effortless with the search feature. You can quickly locate files based on keywords, file names, or metadata. It saves time and eliminates the frustration of manually searching through numerous folders.
                              </p>
                          </div>
                      </div>
                  </div>
                  {/* Repeat similar structure for other service items */}
              </div>
              {/* Repeat similar structure for other rows of service items */}
          </div>
      </div></>

  );
};
export default Services; 