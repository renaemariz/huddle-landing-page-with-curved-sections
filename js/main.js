window.onload = () => {
	const subscribe = document.getElementById("subscribeForm");

	subscribe.addEventListener('submit', (e) => {
		e.preventDefault();
		const email = document.getElementById("email").value;
		const validation = document.querySelector('.email-validation');

		const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		if(!email) return;
		const valid = (email.match(mailformat)) ?  'Success' :'Check your email please!';
		const validationClass = (valid == 'Success') ? "success" : "warning";
		
		// remove and add class for label
		validation.classList.remove("success");
		validation.classList.remove("warning");
		validation.classList.add(validationClass);

		// add text to label
		validation.innerHTML = valid;

	});
};

