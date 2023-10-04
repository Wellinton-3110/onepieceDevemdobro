export function Button(props) {
  return (
    <li>
      <button
        onClick={props.show}
        className="h-[70px] md:h-[50px] sm:h[30px]  md:w-[50px] sm:w-[30px] hover:h-[80px] w-[70px] hover:w-[80px] transition-all  mb-5 md:mb-0 sm:mb-0 md:mr-3 sm:mr-3 "
      >
        <img
          className="object-cover rounded-[50%]"
          src={props.tripulacao}
          alt=""
        />
      </button>
    </li>
  );
}
