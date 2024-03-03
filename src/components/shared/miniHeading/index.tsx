interface Props {
  text: string;
}

const MiniHeading = ({ text }: Props) => {
  return (
    <div className="flex flex-row items-center gap-5">
      <div className="h-[1px] w-20 shrink-0 origin-left bg-primary md:h-0.5" />
      <p className="font-quicksand text-sm font-bold uppercase tracking-[0.25rem] text-primary md:text-base">
        {text}
      </p>
    </div>
  );
};

export default MiniHeading;
