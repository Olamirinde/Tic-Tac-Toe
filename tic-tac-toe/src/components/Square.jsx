const Square = ({ value }) => {
  return (
    <button className="float-left mr-[-1px] mt-[-1px] h-[100px] w-[100px] cursor-pointer border border-red-700 p-0 text-center text-[40px]">
      {value}
    </button>
  );
};

export default Square;
