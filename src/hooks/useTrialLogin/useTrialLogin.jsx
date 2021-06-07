import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogin } from "../../redux/user/user.action";

export const useTrialLogin = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const trialData = {
		email: "markwayne@live.com",
		password: "qwerty123",
	};

	console.log("hooks login");

	return () => {
		dispatch(startLogin(trialData, history));
	};
};
