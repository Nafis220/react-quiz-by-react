import _ from "lodash";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Analysis from "../Analysis";
import useAnswers from "../hooks/useAnswers";
import Summary from "../Summary";
export default function Result() {
  const { id } = useParams();
  const { state } = useLocation();
  const { loading, error, answers } = useAnswers(id);

  const { qna } = state;

  function calculate() {
    let score = 0;

    answers.forEach((question, index1) => {
      let correctIndexes = [],
        checkedIndexes = [];
      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }

        if (option.correct) correctIndexes.push(index2);
        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctIndexes, checkedIndexes)) {
        score = score + 5;
      }
    });
    return score;
  }
  const usersScore = calculate();
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error</div>}
      {answers && answers.length > 0 && (
        <>
          <Summary noq={answers.length} score={usersScore} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}
