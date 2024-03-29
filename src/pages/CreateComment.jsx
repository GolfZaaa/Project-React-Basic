import React from "react";
import "../css/CreateComment.css";
import { NavLink } from "react-router-dom";

const CreateComment = () => {
  return (
    <>

<NavLink to="/products" >
      <button type="submit" className="buttonBackComment">
        Go Back
      </button>
</NavLink>

      <div className="CardCreateComment">
        <div className="comment-boxCreate">
          <div className="rating">
            <label htmlFor="star-1">
              <input
                type="radio"
                id="star-1"
                name="star-radio"
                defaultValue="star-1"
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength={360}
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                />
              </svg>
            </label>
            <label htmlFor="star-2">
              <input
                type="radio"
                id="star-2"
                name="star-radio"
                defaultValue="star-1"
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength={360}
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                />
              </svg>
            </label>
            <label htmlFor="star-3">
              <input
                type="radio"
                id="star-3"
                name="star-radio"
                defaultValue="star-1"
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength={360}
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                />
              </svg>
            </label>
            <label htmlFor="star-4">
              <input
                type="radio"
                id="star-4"
                name="star-radio"
                defaultValue="star-1"
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength={360}
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                />
              </svg>
            </label>
            <label htmlFor="star-5">
              <input
                type="radio"
                id="star-5"
                name="star-radio"
                defaultValue="star-1"
              />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  pathLength={360}
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                />
              </svg>
            </label>
          </div>
          <form action="#">
            <textarea
              name="comment"
              placeholder="Type your Comment..."
            ></textarea>
            <button type="submit" className="buttonCreatComment">
              Post Comment
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateComment;
