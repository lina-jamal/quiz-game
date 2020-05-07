import React, { useState, useEffect } from "react";
import { CategoryData, DifficultyData } from "../Data";

function Category() {
  const [cat, setCat] = useState("");
  const [diff, setDiff] = useState("");
  const [questions, setQuestions] = useState([]);
  const [show, setShow] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (cat || diff) {
      fetch(
        `https://opentdb.com/api.php?amount=10&category=${cat}&difficulty=${diff}`
      )
        .then((res) => res.json())
        .then(({ results }) => setQuestions(results))
        .catch((error) => setError(error));
    }
  }, [cat, diff]);

  return (
    <div className="container">
      <div id="home" class="flex-center flex-column">
        <h1>Quick Quiz</h1>
        <form
          className="form-container flex-center flex-column"
          style={{ display: show ? "block" : "none" }}
        >
          <div className="quation-type">
            <div className="type-container">
              <label htmlFor="category">Select category: </label>
              <select
                id="category"
                name={cat}
                onChange={(e) => setCat(e.target.value)}
              >
                {CategoryData.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="type-container">
              <label htmlFor="difficulty"> select difficulty</label>
              <select
                id="difficulty"
                name={diff}
                onChange={(e) => setDiff(e.target.value)}
              >
                {DifficultyData.map((dif, index) => (
                  <option key={index} value={dif}>
                    {dif}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="btn"
              type="submit"
              onClick={(e) => {
                setShow(!show);
                e.preventDefault();
              }}
            >
              Go To Questions{" "}
            </button>
            {/* <a class="btn" href="/game.html">
          Play
        </a> */}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Category;
