const ON_LOADING = "ON/LOADING";
const OFF_LOADING = "OFF/LOADING";

export const onLoading = () => ({
  type: ON_LOADING,
});
export const offLoading = () => ({
  type: OFF_LOADING,
});

const initialState = {
  isLoading: true,
};

const loadingStore = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case OFF_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default loadingStore;