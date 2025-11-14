 export const BotonCorfirmar = ({ texto, onclick }) => {
  return (
    <button
      onClick={onclick}
      className="bg-red-600 text-white p-4 rounded-full w-full cursor-pointer hover:bg-red-400 transition-colors"
    >
      {texto}
    </button>
  );
};

 
