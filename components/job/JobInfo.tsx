export type IconTextType = {
  icon: React.ReactNode;
  text: string;
};

const JobInfo = ({ icon, text }: IconTextType) => {
  return (
    <div className="flex gap-x-2 items-center">
      {icon} {text}
    </div>
  );
};

export default JobInfo;
