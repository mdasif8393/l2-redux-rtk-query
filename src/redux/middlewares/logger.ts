import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (state) => (next) => (action) => {
  console.log(state.getState());
  console.log(action);
  return next(action);
};

export default logger;
