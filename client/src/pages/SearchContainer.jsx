import React from "react";
import "./SearchContainer.css";
import { ARTICLE_DISPLAY } from "../../../utils/constants";
import { SubmitButton } from "../components";
import { Link, useSubmit } from "react-router-dom";
import { useAllArticlesContext } from "./AllArticles";

const SearchContainer = () => {
  const {searchValues} = useAllArticlesContext();
  const {search, sort } = searchValues;
  const submit = useSubmit();



const debounce = (onChange) => {
  let timeout
  return (e) => {
    const form = e.currentTarget.form;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
    onChange(form)
    }, 2000)
  };
};



  return (
    <div>
      <form>
        <input
          type="search"
          id="search"
          className="search"
          name="q"
          placeholder="Search..."
          defaultValue={search}
          onChange={debounce((form) => {
            submit(form);
          }

          )}
        />

        <label>Search by Sorting Order</label>
        <select
          id="display"
          name="display"
          labelText="Display"
          defaultValue={sort}
          list={[...Object.values(ARTICLE_DISPLAY)]}
          onChange={(e) => {
  submit(e.currentTarget.form);
          }}
        >
          <option value="newest">newest</option>
          <option value="oldest">oldest</option>
        </select>
        <SubmitButton />
        <Link to="/dashboard/all-articles" className="btn btn-block form-btn">
          Reset Search Values
        </Link>
      </form>
    </div>
  );
};

export default SearchContainer;
