import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

function OurTeam() {

	return (
		<div className="container mx-auto">
			<div className="w-screen px-3 py-3 bg-white flex justify-between items-center">
				<Link to="/" className="hover:underline focus:underline">back to Home</Link>
			</div>
			<h1 className="text-5xl font-semibold">Meet Our Team</h1>
			<div className="grid grid-cols-3 mt-16 gap-20">
				<div>
					<Skeleton height={160} width={160} />
					<Skeleton width={160} className="mt-5" />
				</div>
				<div>
					<Skeleton height={160} width={160} />
					<Skeleton width={160} className="mt-5" />
				</div>
				<div>
					<Skeleton height={160} width={160} />
					<Skeleton width={160} className="mt-5" />
				</div>
			</div>
			<div className="grid grid-cols-2 mt-16 ">
				<div>
					<Skeleton height={160} width={160} />
					<Skeleton width={160} className="mt-5" />
				</div>
				<div>
					<Skeleton height={160} width={160} />
					<Skeleton width={160} className="mt-5" />
				</div>
			</div>
		</div>
	);
}

export default OurTeam;
