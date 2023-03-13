import { memo, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import defaultProfilePicture from "./../assets/default-profile-picture.png";
import instagram from "./../assets/instagram.png";
import linkedin from "./../assets/linkedin.png";
import twitter from "./../assets/twitter.png";

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
  };

  return (
    <div className={`flex justify-center items-center && ${props.bg}`}>
      {/* Desktop version*/}

      <div className="flex-row py-10 hidden md:block px-10">
        {loading ? (
          <img
            src={people?.picture || defaultProfilePicture}
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
          {loading ? people?.name : <Skeleton />}
        </h2>
        <span className="text-sm text-slate-400">Background :</span>
        <h2 className="text-md mb-2 text-slate-900">
          {loading ? people?.background : <Skeleton />}
        </h2>
        <span className="text-sm text-slate-400">Interest :</span>
        <h2 className="text-md mb-2 text-slate-900">
          {loading ? people?.interest : <Skeleton />}
        </h2>
        <span className="text-sm text-slate-400">Goals :</span>
        <h2 className="text-md mb-2 text-slate-900">
          {loading ? people?.goals : <Skeleton />}
        </h2>
        <span className="text-sm text-slate-400">Social Media :</span>
        {loading ? (
          <div className="mt-2 flex justify-center gap-2">
            {people?.instagram ? (
              <a href={people?.instagram} target="_blank">
                <img
                  src={instagram}
                  alt="instagram"
                  className="rounded-md w-6 h-6 mx-auto"
                  width={24}
                  height={24}
                />
              </a>
            ) : (
              ""
            )}

            {people?.linkedin ? (
              <a href={people?.linkedin} target="_blank">
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="rounded-md w-6 h-6 mx-auto"
                  width={24}
                  height={24}
                />
              </a>
            ) : (
              ""
            )}

            {people?.twitter ? (
              <a href={people?.twitter} target="_blank">
                <img
                  src={twitter}
                  alt="twitter"
                  className="rounded-md w-6 h-6 mx-auto"
                  width={24}
                  height={24}
                />
              </a>
            ) : (
              ""
            )}
          </div>
        ) : (
          <Skeleton />
        )}
        <div className="mt-10">
          <button
            onClick={props.onToggleLock}
            className={`fa-solid ${
              props.lock ? "fa-lock" : "fa-unlock"
            } text-2xl`}
          />
        </div>
      </div>
      {/* Mobile version*/}
      <div className="flex flex-row py-4 px-5 md:hidden gap-10 justify-between w-screen">
        <div className="min-w-[100px] basis-1/2">
          {loading ? (
            <img
              src={people?.picture || defaultProfilePicture}
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
            {loading ? people?.name : <Skeleton />}
          </h2>
          <button
            onClick={props.onToggleLock}
            className={`fa-solid ${
              props.lock ? "fa-lock" : "fa-unlock"
            } text-2xl`}
          />
        </div>
        <div className="text-center mx-auto basis-1/2">
          <span className="text-sm text-slate-400">Background :</span>
          <h2 className="text-sm mb-2 text-slate-900">
            {loading ? people?.background : <Skeleton />}
          </h2>
          <span className="text-sm text-slate-400">Interest :</span>
          <h2 className="text-sm mb-2 text-slate-900">
            {loading ? people?.interest : <Skeleton />}
          </h2>
          <span className="text-sm text-slate-400">Goals :</span>
          <h2 className="text-sm mb-2 text-slate-900">
            {loading ? people?.goals : <Skeleton />}
          </h2>
          <span className="text-sm text-slate-400">Social Media :</span>
          {loading ? (
            <div className="mt-2 flex justify-center gap-2">
              {people?.instagram ? (
                <a href={people?.instagram} target="_blank">
                  <img
                    src={instagram}
                    alt="instagram"
                    className="rounded-md w-6 h-6 mx-auto"
                    width={24}
                    height={24}
                  />
                </a>
              ) : (
                ""
              )}

              {people?.linkedin ? (
                <a href={people?.linkedin} target="_blank">
                  <img
                    src={linkedin}
                    alt="linkedin"
                    className="rounded-md w-6 h-6 mx-auto"
                    width={24}
                    height={24}
                  />
                </a>
              ) : (
                ""
              )}

              {people?.twitter ? (
                <a href={people?.twitter} target="_blank">
                  <img
                    src={twitter}
                    alt="twitter"
                    className="rounded-md w-6 h-6 mx-auto"
                    width={24}
                    height={24}
                  />
                </a>
              ) : (
                ""
              )}
            </div>
          ) : (
            <Skeleton />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(Card, (prevProps, nextProps) => {
  console.log("[memo][Card][prevProps]", prevProps);
  console.log("[memo][Card][nextProps]", nextProps);
  return prevProps.lock === true && nextProps.lock === true;
});
