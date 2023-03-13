import { memo, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import defaultProfilePicture from "./../assets/default-profile-picture.png";

const Card = (props) => {
  const [people, setPeople] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    if (props.lock) {
      setupData();
      return;
    }

    const timer = setTimeout(() => {
      setupData();
    }, 500);
    return () => clearTimeout(timer);
  }, [props, people]);

  const setupData = () => {
    setPeople(props.data);
    setLoading(true);
  }

  return (
    <div className={`flex justify-center items-center && ${props.bg}`}>
      {/* Desktop version*/}

      <div className="flex-row py-10 hidden md:block">
        {loading ? (
          <img
            src={people.picture || defaultProfilePicture}
            alt="picture"
            className="block mx-auto rounded-full w-40 h-40 object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultProfilePicture;
            }}
          />
        ) : (
          <Skeleton height={160} width={160} />
        )}
        <h2 className="text-xl mt-5 mb-2 font-semibold">
          {loading ? people.name : <Skeleton />}
        </h2>
        <span className="text-sm text-slate-400">Background :</span>
        <h2 className="text-md mb-2 text-slate-900">
          {loading ? people.background : <Skeleton />}
        </h2>
        <span className="text-sm text-slate-400">Interest :</span>
        <h2 className="text-md mb-2 text-slate-900">
          {loading ? people.interest : <Skeleton />}
        </h2>
        <span className="text-sm text-slate-400">Goals :</span>
        <h2 className="text-md mb-2 text-slate-900">
          {loading ? people.goals : <Skeleton />}
        </h2>
        <span className="text-sm text-slate-400">Social Media :</span>
        <h2 className="text-md mb-2 text-slate-900">
          {loading ? people.socialMedia : <Skeleton />}
        </h2>
        <div className="mt-10">
          <button onClick={props.onToggleLock} className={`fa-solid ${props.lock ? "fa-lock" : "fa-unlock"} text-2xl`} />
        </div>
      </div>
      {/* Mobile version*/}
      <div className="flex flex-row py-4 px-5 md:hidden gap-10 justify-between w-screen">
        <div className="min-w-[100px] grow-1">
          {loading ? (
            <img
              src={people.picture || defaultProfilePicture}
              alt="picture"
              className="block  text-center mx-auto rounded-full w-24 h-24 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultProfilePicture;
              }}
            />
          ) : (
            <Skeleton height={160} width={160} />
          )}
          <h2 className="text-lg mt-5 mb-2 font-semibold text-center mx-auto">
            {loading ? people.name : <Skeleton />}
          </h2>
          <button onClick={props.onToggleLock} className={`fa-solid ${props.lock ? "fa-lock" : "fa-unlock"} text-2xl`} />
        </div>
        <div className="text-center mx-auto grow-1">
          <span className="text-sm text-slate-400">Background :</span>
          <h2 className="text-sm mb-2 text-slate-900">
            {loading ? people.background : <Skeleton />}
          </h2>
          <span className="text-sm text-slate-400">Interest :</span>
          <h2 className="text-sm mb-2 text-slate-900">
            {loading ? people.interest : <Skeleton />}
          </h2>
          <span className="text-sm text-slate-400">Goals :</span>
          <h2 className="text-sm mb-2 text-slate-900">
            {loading ? people.goals : <Skeleton />}
          </h2>
          <span className="text-sm text-slate-400">Social Media :</span>
          <h2 className="text-sm mb-2 text-slate-900">
            {loading ? people.socialMedia : <Skeleton />}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default memo(Card, (prevProps, nextProps) => {
  console.log('[memo][Card][prevProps]', prevProps);
  console.log('[memo][Card][nextProps]', nextProps);
  return prevProps.lock === true && nextProps.lock === true;
});
