import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Card(props) {
  return (
    <div className={`flex justify-center items-center mt-5 && ${props.bg}`}>
      <div className="flex-row">
        {props.data.picture ? (
          <img
            src={props.data.picture}
            alt="picture"
            className="block mx-auto rounded-full w-40 h-40 object-cover"
          />
        ) : (
          <Skeleton height={160} width={160} />
        )}

        <h2 className="text-xl mt-5 mb-2 font-semibold">
          {props.data.name || <Skeleton duration={1.5} />}
        </h2>
        <span className="text-sm text-slate-400">Background :</span>
        <h2 className="text-md mb-2 text-slate-900">
          {props.data.background || <Skeleton />}
        </h2>
        <span className="text-sm text-slate-400">Interest :</span>
        <h2 className="text-md mb-2 text-slate-900">
          {props.data.interest || <Skeleton />}
        </h2>
        <span className="text-sm text-slate-400">Goals :</span>
        <h2 className="text-md mb-2 text-slate-900">
          {props.data.goals || <Skeleton />}
        </h2>
        <span className="text-sm text-slate-400">Social Media :</span>
        <h2 className="text-md mb-2 text-slate-900">
          {props.data.socialMedia || <Skeleton />}
        </h2>
        <div className="mt-10">
          <i className="fa-solid fa-unlock text-2xl"></i>
        </div>
      </div>
    </div>
  );
}

export default Card;
