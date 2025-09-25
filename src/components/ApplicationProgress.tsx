import { Tagline } from "./ui/Typography";

interface ApplicationProgressProps {
  progress: number;
  completedRounds: number;
  totalRounds: number;
}

export default function ApplicationProgress({
  progress,
  completedRounds,
  totalRounds,
}: ApplicationProgressProps) {
  return (
    <div className="border border-gray-900 p-4 mt-8 rounded-2xl">
      {/* display application status here */}
      <p className="font-semibold text-sm">Progress Overview</p>
      <div className="flex justify-between items-center mt-2">
        <p className="text-gray-600 text-sm">Interview Progress</p>
        <p>{progress}%</p>
      </div>
      <div className="w-full bg-blue-200 rounded-full h-2.5 mt-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <Tagline className="!text-[0.75rem]">
        {completedRounds}/{totalRounds} rounds completed
      </Tagline>
    </div>
  );
}
