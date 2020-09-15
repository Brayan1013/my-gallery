import React from "react";
import { Provider } from "react-redux";
import { Cards } from "./componets/Cards";
import { Form } from "./componets/Form";
import { store } from "./store/store";

export const Home = () => {
  return (
    <Provider store={store}>
      <div>
        <Form />
        <Cards />
      </div>
    </Provider>
  );
};
