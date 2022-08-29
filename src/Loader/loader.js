import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Loader() {
	return (
		<SkeletonTheme>
			<div className="grid grid-flow-row grid-cols-1 lg:grid-cols-5 gap-5">
				<div className="lg:col-span-6 grid grid-flow-row grid-cols-1 gap-0.5">
					<Skeleton height={400} />
				</div>
				<div className="lg:col-span-6 grid grid-flow-row grid-cols-2 gap-0.5">
					<Skeleton height={500} />
					<Skeleton height={500} />
				</div>
				<div className="lg:col-span-6 grid grid-flow-row grid-cols-3 gap-0.5">
					<Skeleton height={300} />
					<Skeleton height={300} />
					<Skeleton height={300} />
				</div>
				<div className="lg:col-span-6 grid grid-flow-row grid-cols-1 gap-0.5">
					<Skeleton height={700} />
				</div>
				<div className="lg:col-span-6 grid grid-flow-row grid-cols-1 gap-0.5">
					<Skeleton height={700} />
				</div>
				<div className="lg:col-span-6 grid grid-flow-row grid-cols-2 gap-0.5">
					<Skeleton height={300} />
					<Skeleton height={300} />
				</div>
				<div className="lg:col-span-6 grid grid-flow-row grid-cols-1 gap-0.5">
					<Skeleton height={300} />
				</div>
			</div>
		</SkeletonTheme>
	);
}

export default Loader;
