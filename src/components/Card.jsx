function Card(props) {
  return (
    <div className={`flex justify-center items-center mt-5 && ${props.bg}`}>
      <div className="flex-row">
        <img
          src={props.data.picture}
          alt="picture"
          className="block mx-auto rounded-full w-40 h-40"
        />
        <h2 className="text-xl mt-5 mb-2 font-semibold">
          {props.data.name ? props.data.name : "-"}
        </h2>
        <span className="text-sm text-slate-400">Background :</span>
        <h2 className="text-lg mb-2 text-slate-900">
          {props.data.background ? props.data.background : "-"}
        </h2>
        <span className="text-sm text-slate-400">Interest :</span>
        <h2 className="text-lg mb-2 text-slate-900">
          {props.data.interest ? props.data.interest : "-"}
        </h2>
        <span className="text-sm text-slate-400">Goals :</span>
        <h2 className="text-lg mb-2 text-slate-900">
          {props.data.goals ? props.data.goals : "-"}
        </h2>
        <span className="text-sm text-slate-400">Social Media :</span>
        <h2 className="text-lg mb-2 text-slate-900">
          {props.data.socialMedia ? props.data.socialMedia : "-"}
        </h2>
        <div className="mt-10">
          <i className="fa-solid fa-unlock text-2xl"></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
