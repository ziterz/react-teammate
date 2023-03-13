import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import ziadyPicture from "./../assets/myt-ziady.png";
import safikPicture from "./../assets/myt-safik.png";
import fajriPicture from "./../assets/myt-fajri.png";
import zidanPicture from "./../assets/myt-zidan.png";
import wahyuPicture from "./../assets/myt-wahyu.png";
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
		<div className="container mx-auto mb-4">
			<div className="w-screen px-3 py-3 bg-white flex justify-between items-center">
				<Link className="flex-col" to="/">
					&#8592; Back to Home
				</Link>
			</div>
			<h1 className="text-5xl mt-2 font-semibold">
				🙌 Meet our team of developers, designers and world-class problem solvers
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-20">
			<div>
          {loading ? (
            <Skeleton circle={true} height={192} width={192} />
          ) : (
            <img
              src={ziadyPicture}
              alt="picture"
              className="block text-center mx-auto w-48 h-48 object-cover border-2 border-black"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultProfilePicture;
              }}
            />
          )}
          <h2 className="text-xl mt-2 ml-2 font-semibold">
            {loading ? <Skeleton /> : "Ziady"}
          </h2>
          <h3 className="mb-2 ml-2">
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
              className="block text-center mx-auto w-48 h-48 object-cover border-2 border-black"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultProfilePicture;
              }}
            />
          )}
          <h2 className="text-xl mt-2 ml-2 font-semibold">
            {loading ? <Skeleton /> : "Safik"}
          </h2>
          <h3 className="mb-2 ml-2">
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
              className="block text-center mx-auto w-48 h-48 object-cover border-2 border-black"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultProfilePicture;
              }}
            />
          )}
          <h2 className="text-xl mt-2 ml-2 font-semibold">
            {loading ? <Skeleton /> : "Fajri"}
          </h2>
          <h3 className="mb-2 ml-2">
            {loading ? <Skeleton /> : "Developer"}
          </h3>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 mt-16">
				<div>
				{loading ? (
            <Skeleton circle={true} height={192} width={192} />
          ) : (
            <img
              src={zidanPicture}
              alt="picture"
              className="block text-center mx-auto w-48 h-48 object-cover border-2 border-black"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultProfilePicture;
              }}
            />
          )}
          <h2 className="text-xl mt-2 ml-2 font-semibold">
            {loading ? <Skeleton /> : "Zidan"}
          </h2>
          <h3 className="mb-2 ml-2">
            {loading ? <Skeleton /> : "Developer"}
          </h3>
				</div>
				<div>
				{loading ? (
            <Skeleton circle={true} height={192} width={192} />
          ) : (
            <img
              src={wahyuPicture}
              alt="picture"
              className="block text-center mx-auto w-48 h-48 object-cover border-2 border-black"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = defaultProfilePicture;
              }}
            />
          )}
          <h2 className="text-xl mt-2 ml-2 font-semibold">
            {loading ? <Skeleton /> : "Wahyu"}
          </h2>
          <h3 className="mb-2 ml-2">
            {loading ? <Skeleton /> : "Developer"}
          </h3>
				</div>
			</div>
		</div >
	);
}

export default OurTeam;
