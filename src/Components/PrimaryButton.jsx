
const PrimaryButton = ({ children }) => {
  return (
    <button className="btn bg-gradient-to-r from-[#19D3AE] to-[#0FCFEC] font-semibold text-white uppercase border-transparent	hover:border-transparent">
      {children}
    </button>
  );
};

export default PrimaryButton;
