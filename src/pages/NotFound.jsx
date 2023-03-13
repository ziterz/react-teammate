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
      <div className="w-full md:w-2/3 text-center md:text-left md:px-20 px-5 h-screen flex items-center">
        <div>
          <h1 className="text-7xl font-semibold">
            🤦🏻 <br />
            404 <br /> Page Not Found
          </h1>
          <div className="mt-10">
            <Link
              className="flex-col hover:underline focus:underline hover:underline-offset-4 focus:underline-offset-4"
              to="/"
            >
              <i class="fa-solid fa-arrow-left mr-2"></i> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
