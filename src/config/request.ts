import Axios from 'axios'

const HTTPClient = Axios.create({
  baseURL: 'https://challenge-fielo.herokuapp.com/',
  timeout: 30000,
});

HTTPClient.interceptors.request.use(async config => {
  const token = localStorage.getItem('@FIELO:token')

  if (token) {
    config.headers = {
      'x-access-token': token
    }
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});

HTTPClient.interceptors.response.use(
	async response => {
		return response
	},
	async error => {
		const originalRequest = error.config

		if (error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true
			const { data, status } = await HTTPClient.post(`auth`)

			if (status === 200) {
				await localStorage.setItem('@FIELO:token', data.token)

				return HTTPClient({
					...originalRequest,
					headers: {
            ...originalRequest.headers,
            'x-access-token': data.token
					},
				})
			}
		}
		return Promise.reject(error)
	}
)

HTTPClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    console.log(error.response, 'error')
    return Promise.reject(error);
  }
);

export default HTTPClient;
