import { SignIn } from "@clerk/nextjs";

const SingInpage = () => {
  return (
    <div className="flex justify-center items-center h-[100dvh] bg-white">
      <SignIn />
    </div>
  );
};

export default SingInpage;
