import { BsInstagram, BsTwitter } from "react-icons/bs";

const Social = () => {
  return (
    <div className="hidden place-items-center lg:grid">
      <div className="absolute left-0 flex h-16 rotate-90 flex-row items-center gap-5">
        <a className="font-bold transition-transform hover:scale-[1.2]" href="">
          Follow us
        </a>

        <a href="" className="transition-transform hover:scale-[1.3]">
          <BsInstagram />
        </a>

        <a href="" className="transition-transform hover:scale-[1.4]">
          <BsTwitter />
        </a>
      </div>
    </div>
  );
};

export default Social;
