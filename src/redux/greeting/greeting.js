const GET_GREETING = 'hello-react-front-end/greeting/GET_GREETING';

const initialState = '';

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default greetingReducer;

export const getGreeting = (payload) => ({
  type: GET_GREETING,
  payload,
});

export const getGreetingAsync = () => async(dispatch) => {
  const res = await fetch('http://127.0.0.1:8000/v1/greeting');
  const data = await res.json();
  dispatch(getGreetingAsync(data.message));
};
