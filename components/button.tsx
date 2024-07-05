import { useFormStatus } from "react-dom";

export default function FormButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <button className="bg-gray-300 text-black font-semibold rounded-full p-3 text-sm hover:bg-gray-400 transition-transform transform active:scale-95 active:bg-gray-300">
      {pending ? "Loading..." : text}
    </button>
  );
}
