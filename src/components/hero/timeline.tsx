const TimelineButtons = () => {
  return (
    <div className="hidden flex-col md:flex">
      {["Start", "01", "02", "03"].map((item) => (
        <div
          key={item}
          className="group flex transform cursor-pointer flex-row items-center justify-end gap-4 font-quicksand font-bold opacity-50 transition-opacity hover:opacity-100"
        >
          <span className="transform transition-transform group-hover:scale-125">
            {item}
          </span>
          <div className="h-12 w-[3px] transform bg-white transition-colors" />
        </div>
      ))}
    </div>
  );
};

export default TimelineButtons;
