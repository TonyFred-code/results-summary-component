import CountUp from "./components/countUp.jsx";
import useResults from "./hooks/useResults.jsx";

export default function App() {
  const { loading, error, results } = useResults();
  const COUNT_UP_DURATION = 1.3;

  const average =
    results.length > 0
      ? Math.floor(
          results.reduce((total, current) => current.score + total, 0) /
            results.length
        )
      : 0;

  const themeClassesByCategory = {
    reaction: {
      bg: "bg-light-red/5",
      text: "text-light-red",
    },
    memory: {
      bg: "bg-orangey-yellow/5",
      text: "text-orangey-yellow",
    },
    verbal: {
      bg: "bg-green-teal/5",
      text: "text-green-teal",
    },
    visual: {
      bg: "bg-cobalt-blue/5",
      text: "text-cobalt-blue",
    },
  };

  if (error) return <div>A very very unexpected error occurred</div>;

  return (
    <div
      className={`min-h-screen bg-light-lavender/50 md:flex items-center justify-center relative ${loading && "opacity-50"}`}
    >
      {loading && (
        <div className="w-full h-1 bg-gray-800 overflow-hidden fixed top-0 z-50 left-0">
          <div className="h-full w-2/5 bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
        </div>
      )}
      <div className="flex flex-col md:flex-row bg-white gap-2 md:rounded-3xl md:max-w-11/12">
        <section className="bg-linear-to-b from-slate-blue to-royal-blue flex flex-col items-center p-5 text-center text-white/70 rounded-b-3xl flex-1 space-y-3 md:space-y-5 md:rounded-3xl justify-evenly">
          <h1 className="md:text-xl font-medium">Your Result</h1>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col rounded-full p-6 md:p-8 items-center justify-center bg-linear-to-b to-persian-blue from-violet-blue size-28 md:size-36">
              <CountUp
                className="text-5xl font-extrabold text-white"
                startWhen={!loading}
                from={0}
                to={average}
                duration={COUNT_UP_DURATION}
              />
              <span className="font-medium">of 100</span>
            </div>
            <p className="text-white font-bold text-xl">Great</p>
          </div>
          <p>
            You scored higher than{" "}
            <CountUp
              to={65}
              startWhen={!loading}
              duration={COUNT_UP_DURATION}
            />
            % of the people who have taken these tests
          </p>
        </section>
        <section className="space-y-4 bg-white flex-1 py-3 px-4 md:rounded-tr-3xl md:rounded-br-3xl md:py-5 md:px-6">
          <h1 className="font-medium md:text-xl">Summary</h1>
          <ul className="space-y-3 py-3">
            {results.map((result, index) => {
              const { category, score, icon } = result;

              const normalizedCategory = category.toLowerCase();

              const themeClasses = themeClassesByCategory[
                normalizedCategory
              ] || {
                bg: "",
                text: "",
              };
              return (
                <li
                  key={normalizedCategory}
                  className={`rounded-xl p-3.5 md:p-4 justify-between flex ${themeClasses.bg}`}
                >
                  <div className="flex gap-2">
                    <img src={icon} alt="" />
                    <span className={`font-medium ${themeClasses.text}`}>
                      {category}
                    </span>
                  </div>
                  <div className="flex gap-1.5">
                    <CountUp
                      className="font-medium"
                      to={score}
                      delay={COUNT_UP_DURATION + index * 0.01}
                      duration={COUNT_UP_DURATION}
                    />
                    <span className="text-dark-gray-blue"> / 100</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            disabled={loading}
            className="hover:bg-royal-blue rounded-full px-8 py-3 w-full text-white cursor-pointer bg-dark-gray-blue font-medium hover:border-royal-blue border-dark-gray-blue outline-dark-gray-blue hover:outline-royal-blue disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </section>
      </div>
    </div>
  );
}
