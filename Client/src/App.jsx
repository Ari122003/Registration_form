import React from "react";

function App() {
	const submit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData.entries());
		console.log(data);
	};
	return (
		<div className="flex content-center items-center flex-col mt-5">
			<h1 className="text-white text-4xl">Sign up</h1>
			<div class="relative py-3 sm:max-w-xl sm:mx-auto my-5">
				<div class="relative px-4 py-10 form mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
					<form class="max-w-md mx-auto text-white" onSubmit={submit} id="form">
						<div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
							<div>
								<label
									class="font-semibold text-sm text-white pb-1 block"
									for="fullname">
									Full Name
								</label>
								<input
									class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
									type="text"
									name="name"
									id="fullname"
								/>
							</div>
							<div>
								<label
									class="font-semibold text-sm text-white pb-1 block"
									for="email">
									Email
								</label>
								<input
									class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
									type="email"
									name="email"
									id="email"
								/>
							</div>
							<div>
								<label
									class="font-semibold text-sm text-white pb-1 block"
									for="username">
									Contact no.
								</label>
								<input
									class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
									type="tel"
									name="contact"
									id="username"
								/>
							</div>
							<div>
								<label
									class="font-semibold text-sm text-white pb-1 block"
									for="password">
									Password
								</label>
								<input
									class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
									type="password"
									name="pass"
									id="password"
								/>
							</div>
						</div>
						<div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
							<div>
								<label
									class="font-semibold text-sm text-white pb-1 block"
									for="dob">
									Date of Birth
								</label>
								<input
									class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
									type="date"
									name="dob"
									id="dob"
								/>
							</div>
							<div>
								<label
									class="font-semibold text-sm text-white pb-1 block"
									for="gender">
									Gender
								</label>
								<select
									class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
									id="gender"
									name="gender">
									<option value="male">Male</option>
									<option value="female">Female</option>
									<option value="other">Other</option>
								</select>
							</div>
						</div>

						<div class="mt-5">
							<button
								class="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
								type="submit">
								Sign up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
