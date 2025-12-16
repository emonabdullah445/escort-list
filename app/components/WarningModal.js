"use client";

export default function WarningModal({ onOk }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
      <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="flex flex-col items-center p-6 space-y-4 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-[#8B1A1A]">
            Warning
          </h2>

          <div className=" text-[15px] font-medium ">
            <p className="text-black">
              Your ad has <span className="text-green-500">13 bad reviews</span>{" "}
              and <span className="text-green-500">8 reports</span>,
            </p>
            <p className="text-black">so you are being warned.</p>
            <p className="text-black">
              You can delete the reviews from here to keep your Mega Personals
              safe.
            </p>
          </div>

          <a
            href="#"
            className="text-green-500 hover:text-green-600 font-medium text-sm transition-colors py-1 block"
          >
            Support Mega Personals
          </a>

          <button
            onClick={onOk}
            className="w-24 px-6 py-2 text-white transition-colors bg-[#4FAFEF] rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 mt-2"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
