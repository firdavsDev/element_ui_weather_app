import service from "./index.js";

const WeatherService = {

    async GetWeatherData(country) {
        const params = {
            q: country,
        };

        return new Promise((resolve, reject) => {
            service
                .get("/current.json", {
                    params: params,
                })
                .then((response) => {
                    resolve(response);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

};

export default WeatherService;
