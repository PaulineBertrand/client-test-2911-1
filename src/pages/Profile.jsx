import React, { useEffect } from "react";
import axios from 'axios'

const Profile = () => {
	useEffect(() => {
		axios.get('http://localhost:3000')
	})
	return (
		<div>
			<p>This is a protected profile</p>
		</div>
	);
};

export default Profile;
