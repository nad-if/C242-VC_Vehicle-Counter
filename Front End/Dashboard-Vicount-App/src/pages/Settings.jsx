import React from "react";
import FormAccount from "../components/Form/FormAccount";

const Settings = () => {
  return (
    <>
      <section className="bg-white rounded-xl shadow">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-8 lg:px-8 rounded-xl">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Settings
              </h1>
            </div>
          </div>
        </div>
      </section>
  
    </>
  );
};

export default Settings;
