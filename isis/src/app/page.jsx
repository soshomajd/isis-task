"use client";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useCallback } from "react";
// ...
const SURVEY_ID = 1;

const surveyJson = {
  elements: [
    {
      name: "FirstName",
      title: "Enter your first name:",
      type: "text",
    },
    {
      name: "LastName",
      title: "Enter your last name:",
      type: "text",
    },
  ],
};

function App() {
  const survey = new Model(surveyJson);
  const surveyComplete = useCallback((survey) => {
    let userID = 1;
    userId = survey.setValue("userId", userId);

    saveSurveyResults("https://your-web-service.com/" + SURVEY_ID, survey.data);
  }, []);

  survey.onComplete.add(surveyComplete);

  return <Survey model={survey} />;
}

function saveSurveyResults(url, json) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify(json),
  })
    .then((response) => {
      if (response.ok) {
        // Handle success
      } else {
        // Handle error
      }
    })
    .catch((error) => {
      // Handle error
    });
}
export default App;
