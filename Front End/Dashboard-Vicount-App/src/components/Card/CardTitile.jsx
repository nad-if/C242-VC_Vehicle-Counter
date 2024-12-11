const CardTitle = () => {
  return (
    <section className="bg-white mt-8 rounded-lg shadow">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-8 lg:px-8 rounded-xl">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Camera Traffic Detail
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-primary px-5 py-3 text-light transition hover:text-primary hover:border-primary hover:bg-light focus:outline-none focus:ring"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.75 4.75h4.5M7 7.5h10m-9.25 3.25h8.5m-10 3.5h11M9 16.25h6"
                />
              </svg>
              <span className="text-sm font-medium">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardTitle;
