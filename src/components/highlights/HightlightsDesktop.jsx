
import HighlightGrid from "./HighlightGrid";


import HighlightHeader from "./HighlightHeader";

const Hightlights = () => {
  return (
    <div className=" text-2xl w-full py-16 px-max overflow-x-clip">
      <HighlightHeader />
      <HighlightGrid />
    </div>
  );
};

export default Hightlights;
