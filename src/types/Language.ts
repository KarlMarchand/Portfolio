type Language = "EN" | "FR";

export const getUserLanguage = (): Language => {
	let language: Language;

	const storedLanguage: string | null = localStorage.getItem("language");
	const browserLanguage: string = navigator.language.slice(0, 2).toUpperCase();

	if (storedLanguage && isLanguage(storedLanguage)) {
		language = storedLanguage;
	} else if (isLanguage(browserLanguage)) {
		language = browserLanguage;
	} else {
		language = "EN";
	}

	return language;
};

export const isLanguage = (value: string): value is Language => {
	return value === "EN" || value === "FR";
};

export default Language;
