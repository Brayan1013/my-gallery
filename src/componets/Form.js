import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addImagesFetch } from "../actions/imageAction";

export const Form = () => {
  const initialState = "";
  const dispatch = useDispatch();
  const [term, setTerm] = useState(initialState);
  const handleChanges = (e) => {
    setTerm(e.target.value);
  };
  const handleSubmits = (e) => {
    e.preventDefault();
    if (term.length > 0) {
      dispatch(addImagesFetch(term));
      setTerm("");
    }
  };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmits}>
        <input name="term" value={term} onChange={handleChanges} />
        <button>Search</button>
      </form>
    </div>
  );
};
