import { ArrowRight } from "lucide-react";

export default function AuthButton({
  title,
  disabled,
}: {
  title: string;
  disabled: boolean;
}) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className="text-center cursor-pointer 
      rounded-xl p-2 bg-blue-600 text-white w-full h-fit"
    >
      <div className="flex gap-x-1 justify-center items-center group ">
        <p className="text-center">{title}</p>
        <ArrowRight
          className="transition-all group-hover:translate-x-1"
          size={16}
        />
      </div>
    </button>
  );
}
