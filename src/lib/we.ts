import { readable} from 'svelte/store';

let weatherData:any;

export const time = readable(new Date(), function start(set) {
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});


type UserData = {
    id: string;
    temp: number;
  windspeed: number;
}


const initialData: UserData = {id: '123', temp: 0, windspeed: 10};

  export const user = readable(initialData, (set) => {
    const userApiInterval = setInterval(() => {

        const apiKey = '2e2c07124ff011e5ab856c62cc184da2';
        const city = 'Manila';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


      fetch(apiUrl)
  
      .then((data) => data.json())
      .then(({ main, wind }) => {
        const windspeed = wind ? wind.speed : '';
        const temp = main ? main.temp : '';
        const newUser: UserData = {
          id: initialData.id,
          temp: temp,
          windspeed: windspeed,
        };
        set(newUser);
      })



        .catch((ex) => {
          // Set to an empty UserData object or a suitable fallback value
          const emptyUserData: UserData = {
            id: '',
          temp: 0,
          windspeed: 0,
          };
          set(emptyUserData);
        });
    }, 5000);
  
    return () => clearInterval(userApiInterval);
  });
  






