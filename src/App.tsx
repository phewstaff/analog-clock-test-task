import { useTime } from "./hooks/useTime";

const Clock = () => {
  const time = useTime();

  return (
    <>
      <div className="min-h-screen min-w-screen flex items-center justify-center bg-slate-700">
        <div className="clock h-96 w-96 border-green-300 rounded-full border flex items-center justify-center">
          <div
            style={{ transform: `rotate(${time.hours}deg)` }}
            className="hour h-2 w-1 bg-slate-500 absolute top-1/2 left-1/2 after:h-20 after:w-1 after:bg-teal-500 after:absolute after:bottom-0"
          ></div>
          <div
            style={{ transform: `rotate(${time.minutes}deg)` }}
            className="minute h-1 w-1 bg-slate-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:h-28 after:w-1 after:bg-teal-50 after:absolute after:bottom-0"
          ></div>
          <div
            style={{ transform: `rotate(${time.seconds}deg)` }}
            className="second h-0.5 w-0.5 bg-slate-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 after:h-36 after:w-0.5 after:bg-teal-50 after:absolute after:bottom-0"
          ></div>
        </div>

        {/* task 2 ./index.css */}
        <div className="semi-circle"></div>
      </div>
    </>
  );
};

export default Clock;
