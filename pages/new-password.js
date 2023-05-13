import AppLayout from "../components/layout/AppLayout";
import { useState } from "react";

const NewPasswordPage = () => {
	const [type, setType] = useState("password");
	const toggleType = () => {
		if (type === "text") {
			setType("password");
		} else {
			setType("text");
		}
	};

	return (
		<div className="new-password">
			<div className="container">
				<div className="new-password-left">
					<div className="new-pass-img">
					<img src="/assets/login-from/new-password.png" alt="" />
					</div>
				</div>
				<div className="new-password-right">
				<h1 className="heading">
                Reset Password
				</h1>
				<form className="new-password-form">
					
					<div className="form-field">
						<label htmlFor="email">New Password</label>
						<div className="password-field">
							<input
								type={type}
								name="password"
								id="password"
								placeholder="Enter Your New Password"
							/>
							<span className="typechange" onClick={toggleType}>
								{type === "password" ? (
									<svg
										width="20"
										height="18"
										viewBox="0 0 20 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M18.521 0.292786C18.1305 -0.0975955 17.4975 -0.0975955 17.107 0.292786L1.48 15.9218C1.22004 16.1729 1.11579 16.5447 1.2073 16.8943C1.29882 17.2439 1.57186 17.517 1.92149 17.6085C2.27112 17.7 2.64293 17.5957 2.894 17.3358L18.52 1.70679C18.9104 1.31629 18.9104 0.683286 18.52 0.292786H18.521ZM3.108 12.3128L5.668 9.75279C5.59501 9.44539 5.5571 9.13072 5.555 8.81479C5.555 6.43579 7.545 4.50579 10 4.50579C10.286 4.50579 10.564 4.53779 10.835 4.58779L12.038 3.38579C11.3644 3.27419 10.6828 3.21734 10 3.21579C3.44 3.21479 0 8.04579 0 8.81479C0 9.23779 1.057 10.9048 3.108 12.3118V12.3128ZM14.333 7.87979L16.895 5.31979C18.944 6.72479 20 8.39079 20 8.81479C20 9.58079 16.56 14.4138 10 14.4138C9.283 14.4138 8.609 14.3478 7.967 14.2438L9.171 13.0408C9.44 13.0898 9.716 13.1218 10 13.1218C12.455 13.1218 14.444 11.1938 14.444 8.81479C14.444 8.49279 14.402 8.18179 14.333 7.87979Z"
											fill="#565656"
										/>
									</svg>
								) : (
									<svg
										width="21"
										height="18"
										viewBox="0 0 21 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0.0906035 6.16123C-0.03875 5.90299 -0.0290678 5.5987 0.116259 5.34909C1.50003 2.9724 5.49132 -0.85906 12.1823 0.172585C14.2365 0.683024 18.5305 2.41236 19.9297 5.35375C20.0472 5.60065 20.0328 5.88692 19.8977 6.12461C18.5396 8.51371 14.5588 12.4065 7.81569 11.4009C5.86928 11.0017 1.71635 9.40692 0.0906035 6.16123ZM10.1952 10.3873C12.779 10.3873 14.8737 8.29263 14.8737 5.70878C14.8737 3.12492 12.779 1.03029 10.1952 1.03029C7.61133 1.03029 5.5167 3.12492 5.5167 5.70878C5.5167 8.29263 7.61133 10.3873 10.1952 10.3873Z"
											fill="#565656"
										/>
									</svg>
								)}
							</span>
						</div>
					</div>
					<div className="form-field">
						<label htmlFor="email">Confirm Password</label>
						<div className="password-field">
							<input
								type={type}
								name="password"
								id="password"
								placeholder="Confirm Password"
							/>
							<span className="typechange" onClick={toggleType}>
								{type === "password" ? (
									<svg
										width="20"
										height="18"
										viewBox="0 0 20 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M18.521 0.292786C18.1305 -0.0975955 17.4975 -0.0975955 17.107 0.292786L1.48 15.9218C1.22004 16.1729 1.11579 16.5447 1.2073 16.8943C1.29882 17.2439 1.57186 17.517 1.92149 17.6085C2.27112 17.7 2.64293 17.5957 2.894 17.3358L18.52 1.70679C18.9104 1.31629 18.9104 0.683286 18.52 0.292786H18.521ZM3.108 12.3128L5.668 9.75279C5.59501 9.44539 5.5571 9.13072 5.555 8.81479C5.555 6.43579 7.545 4.50579 10 4.50579C10.286 4.50579 10.564 4.53779 10.835 4.58779L12.038 3.38579C11.3644 3.27419 10.6828 3.21734 10 3.21579C3.44 3.21479 0 8.04579 0 8.81479C0 9.23779 1.057 10.9048 3.108 12.3118V12.3128ZM14.333 7.87979L16.895 5.31979C18.944 6.72479 20 8.39079 20 8.81479C20 9.58079 16.56 14.4138 10 14.4138C9.283 14.4138 8.609 14.3478 7.967 14.2438L9.171 13.0408C9.44 13.0898 9.716 13.1218 10 13.1218C12.455 13.1218 14.444 11.1938 14.444 8.81479C14.444 8.49279 14.402 8.18179 14.333 7.87979Z"
											fill="#565656"
										/>
									</svg>
								) : (
									<svg
										width="21"
										height="18"
										viewBox="0 0 21 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M0.0906035 6.16123C-0.03875 5.90299 -0.0290678 5.5987 0.116259 5.34909C1.50003 2.9724 5.49132 -0.85906 12.1823 0.172585C14.2365 0.683024 18.5305 2.41236 19.9297 5.35375C20.0472 5.60065 20.0328 5.88692 19.8977 6.12461C18.5396 8.51371 14.5588 12.4065 7.81569 11.4009C5.86928 11.0017 1.71635 9.40692 0.0906035 6.16123ZM10.1952 10.3873C12.779 10.3873 14.8737 8.29263 14.8737 5.70878C14.8737 3.12492 12.779 1.03029 10.1952 1.03029C7.61133 1.03029 5.5167 3.12492 5.5167 5.70878C5.5167 8.29263 7.61133 10.3873 10.1952 10.3873Z"
											fill="#565656"
										/>
									</svg>
								)}
							</span>
						</div>
					</div>
					<button type="submit">SEND</button>
				</form>
			
				</div>
			</div>
		</div>
	);
};

NewPasswordPage.layout = AppLayout;
NewPasswordPage.title = "Signup in now!";

export default NewPasswordPage;
