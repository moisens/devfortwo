import { SignUp } from "@clerk/nextjs";

const SingUppage = () => {
  return (
    <div className="flex justify-center items-center h-[100dvh] bg-white">
      <SignUp />
    </div>
  );
};
export default SingUppage;
