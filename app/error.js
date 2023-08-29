"use client";

export default function Error({ reset }) {
	return (
		<div className="h-full w-full flex-center flex-col gap-5">
			<p className="text-3xl text-red-500">Something went wrong! </p>
			<button className="btn" onClick={() => reset()}>
				Retry
			</button>
		</div>
	);
}
