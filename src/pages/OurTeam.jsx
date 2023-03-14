import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import ziadyPicture from "./../assets/fyt-ziady.png";
import safikPicture from "./../assets/fyt-safik.png";
import fajriPicture from "./../assets/fyt-fajri.png";
import zidanPicture from "./../assets/fyt-zidan.png";
import wahyuPicture from "./../assets/fyt-wahyu.png";
import defaultProfilePicture from "./../assets/default-profile-picture.png";
import { useEffect, useState } from "react";

function OurTeam() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="mx-auto mb-4">
      <div className="w-screen px-5 md:px-20 py-4 bg-white flex justify-between items-center">
        <Link
          className="flex-col hover:underline focus:underline hover:underline-offset-4 focus:underline-offset-4 2xl:mt-5 2xl:text-xl"
          to="/"
        >
          <i class="fa-solid fa-arrow-left mr-2"></i> Back to Home
        </Link>
      </div>
      <div className="w-full md:w-2/3 text-center md:text-left md:px-20 px-5">
        <h1 className="text-5xl md:text-6xl 2xl:text-8xl md:mt-20 font-semibold 2xl:mt-48">
          🙌 <br />
          Meet our team of <br />
          developers, designers
          <br /> and world-class problem solvers
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 mt-10 md:gap-24 px-20 2xl:mt-48">
        <div>
          {loading ? (
            <Skeleton circle={true} height={192} width={192} />
          ) : (
            <img
              src={ziadyPicture}
              alt="picture"
              className="block text-center mx-auto w-52 h-52 object-cover 2xl:w-60 2xl:h-60"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultProfilePicture;
              }}
            />
          )}
          <h2 className="text-2xl mt-2 ml-2 font-semibold 2xl:text-3xl">
            {loading ? <Skeleton /> : "Ziady"}
          </h2>
          <h3 className="mb-2 ml-2 text-lg 2xl:text-xl">
            {loading ? <Skeleton /> : "Developer"}
          </h3>
        </div>
        <div>
          {loading ? (
            <Skeleton circle={true} height={192} width={192} />
          ) : (
            <img
              src={safikPicture}
              alt="picture"
              className="block text-center mx-auto w-52 h-52 object-cover 2xl:w-60 2xl:h-60"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultProfilePicture;
              }}
            />
          )}
          <h2 className="text-2xl mt-2 ml-2 font-semibold 2xl:text-3xl">
            {loading ? <Skeleton /> : "Safik"}
          </h2>
          <h3 className="mb-2 ml-2 text-lg 2xl:text-xl">
            {loading ? <Skeleton /> : "Roamer"}
          </h3>
        </div>
        <div>
          {loading ? (
            <Skeleton circle={true} height={192} width={192} />
          ) : (
            <img
              src={fajriPicture}
              alt="picture"
              className="block text-center mx-auto w-52 h-52 object-cover 2xl:w-60 2xl:h-60"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultProfilePicture;
              }}
            />
          )}
          <h2 className="text-2xl mt-2 ml-2 font-semibold 2xl:text-3xl">
            {loading ? <Skeleton /> : "Fajri"}
          </h2>
          <h3 className="mb-2 ml-2 text-lg 2xl:text-xl">
            {loading ? <Skeleton /> : "Developer"}
          </h3>
        </div>
        <div>
          {loading ? (
            <Skeleton circle={true} height={192} width={192} />
          ) : (
            <img
              src={zidanPicture}
              alt="picture"
              className="block text-center mx-auto w-52 h-52 object-cover 2xl:w-60 2xl:h-60"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultProfilePicture;
              }}
            />
          )}
          <h2 className="text-2xl mt-2 ml-2 font-semibold 2xl:text-3xl">
            {loading ? <Skeleton /> : "Zidan"}
          </h2>
          <h3 className="mb-2 ml-2 text-lg 2xl:text-xl">
            {loading ? <Skeleton /> : "Offlaner"}
          </h3>
        </div>
        <div>
          {loading ? (
            <Skeleton circle={true} height={192} width={192} />
          ) : (
            <img
              src={wahyuPicture}
              alt="picture"
              className="block text-center mx-auto w-52 h-52 object-cover 2xl:w-60 2xl:h-60"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultProfilePicture;
              }}
            />
          )}
          <h2 className="text-2xl mt-2 ml-2 font-semibold 2xl:text-3xl">
            {loading ? <Skeleton /> : "Wahyu"}
          </h2>
          <h3 className="mb-2 ml-2 text-lg 2xl:text-xl">
            {loading ? <Skeleton /> : "Support"}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
