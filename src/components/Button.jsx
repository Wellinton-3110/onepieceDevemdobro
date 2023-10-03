export function Button(props) {
  return (
    <li>
      <button
        onClick={props.show}
        className="h-[70px] hover:h-[80px] w-[70px] hover:w-[80px] transition-all  mb-5 "
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
