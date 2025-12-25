export default function App() {
  return (
    <div className="min-h-screen bg-light-lavender/50 md:flex items-center justify-center">
      <div className="flex flex-col md:flex-row bg-white gap-2 md:rounded-3xl md:max-w-11/12">
        <section className="bg-linear-to-b from-slate-blue to-royal-blue flex flex-col items-center p-5 text-center text-white/70 rounded-b-3xl flex-1 space-y-3 md:space-y-5 md:rounded-3xl justify-evenly">
          <h1 className="md:text-xl font-medium">Your Result</h1>
          <div className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col rounded-full p-6 md:p-8 items-center justify-center bg-linear-to-b to-persian-blue from-violet-blue size-28 md:size-36">
              <span className="text-5xl font-extrabold text-white">76</span>
              <span className="font-medium">of 100</span>
            </div>
            <p className="text-white font-bold text-xl">Great</p>
          </div>
          <p>
            You scored higher than 65% of the people who have taken these tests
          </p>
        </section>
        <section className="space-y-4 bg-white flex-1 py-3 px-4 md:rounded-tr-3xl md:rounded-br-3xl md:py-5 md:px-6">
          <h1 className="font-medium md:text-xl">Summary</h1>
          <ul className="space-y-3 py-3">
            <li className="rounded-xl p-3.5 md:p-4 justify-between flex bg-light-red/5">
              <div className="flex gap-2">
                <img src="/images/icon-reaction.svg" alt="" />
                <span className="text-light-red font-medium">Reaction</span>
              </div>
              <div className="flex gap-1.5">
                <span className="font-medium">80</span>
                <span className="text-dark-gray-blue"> / 100</span>
              </div>
            </li>
            <li className="rounded-xl p-3.5 md:p-4 justify-between flex  bg-orange-yellow/5">
              <div className="flex gap-2">
                <img src="/images/icon-memory.svg" alt="" />
                <span className="text-orange-yellow font-medium">Memory</span>
              </div>
              <div className="flex gap-1.5">
                <span className="font-medium">92 </span>
                <span className="text-dark-gray-blue"> / 100</span>
              </div>
            </li>
            <li className="rounded-xl p-3.5 md:p-4 justify-between flex  bg-green-teal/5">
              <div className="flex gap-2">
                <img src="/images/icon-verbal.svg" alt="" />
                <span className="text-green-teal font-medium">Verbal</span>
              </div>
              <div className="flex gap-1.5">
                <span className="font-medium">61 </span>
                <span className="text-dark-gray-blue"> / 100</span>
              </div>
            </li>
            <li className="rounded-xl p-3.5 md:p-4 justify-between flex  bg-cobalt-blue/5">
              <div className="flex gap-2">
                <img src="/images/icon-visual.svg" alt="" />
                <span className="text-cobalt-blue font-medium">Visual</span>
              </div>
              <div className="flex gap-1.5">
                <span className="font-medium">73 </span>
                <span className="text-dark-gray-blue"> / 100</span>
              </div>
            </li>
          </ul>
          <button
            type="button"
            className="hover:bg-royal-blue rounded-full px-8 py-3 w-full text-white cursor-pointer bg-dark-gray-blue font-medium hover:border-royal-blue border-dark-gray-blue outline-dark-gray-blue hover:outline-royal-blue"
          >
            Continue
          </button>
        </section>
      </div>
    </div>
  );
}
