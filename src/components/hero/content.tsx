import MiniHeading from "../shared/miniHeading";
import { GoArrowDown } from "react-icons/go";

function Content() {
  return (
    <div className="flex flex-col gap-4">
      <MiniHeading text="A hiker's guide" />
      <h2 className="font-lora text-3xl font-bold capitalize text-white md:text-4xl lg:text-5xl">
        Be prepared for the <br /> mountains and beyond!
      </h2>
      <button className="group mt-10 flex origin-left flex-row items-center gap-2 transition-all hover:font-bold">
        scroll down <GoArrowDown id="arrow" color="white" size={24} />
      </button>
    </div>
  );
}

export default Content;
