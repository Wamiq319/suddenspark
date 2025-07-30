"use client";
import eventIdeas from "@/data/event-ideas.json";

export const EventIdeasScroller = () => {
  return (
    <>
      {/* Event Ideas Grid */}
      <section className="mt-24 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 py-20 px-4 rounded-xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            100+ Community Event Ideas
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(eventIdeas).map(([category, ideas], i) => {
              const borderVariants = [
                "border-yellow-400",
                "border-pink-400",
                "border-green-400",
                "border-purple-400",
                "border-orange-400",
                "border-red-400",
              ];
              const border = borderVariants[i % borderVariants.length];

              return (
                <div
                  key={i}
                  className={`rounded-xl border-l-4 ${border} p-5 shadow-lg backdrop-blur-md bg-white/50 text-gray-800 text-left transition-all hover:shadow-xl`}
                >
                  <h3 className="text-lg font-semibold mb-3">{category}</h3>
                  <div className="max-h-72 overflow-y-auto pr-2 custom-scroll">
                    <ul className="text-sm space-y-1 list-disc list-inside opacity-90">
                      {ideas.map((idea, idx) => (
                        <li key={idx}>{idea}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          .custom-scroll::-webkit-scrollbar {
            display: none;
          }
          .custom-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        `}</style>
      </section>
    </>
  );
};
