import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuestions, postAnswers } from "../../actions";
import { useForm } from 'react-hook-form';


const Dashboard = (props) => {

  useEffect(() => {
    props.fetchQuestions();
  }, [])
  var input;
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data =>{
     console.log(data);
     props.postAnswers(data);
    }
  console.log(errors);

  return (
    <div>
    <h1 className="mb-5">Project Admin Dashboard</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      {props.questions.map((question, index) => {
        if (question.responseType === "text") {
          input =
          <div key={question._id}>
            <label htmlFor={question._id} >{question.description}</label>

            <input id={question._id} type="text" className="form-control"  name={question.description} ref={register({ required: true, maxLength: 200 })} />
          </div>
        }

        if (question.responseType === "select") {
          input =
            <div key={question._id}>
              <label htmlFor={question._id} >{question.description}</label>
              <select id={question._id} className="form-control" name={question.description} ref={register({ required: true })}>
                {question.responseOptions.split(",").map((option) => {
                  return <option value={option}>{option}</option>;
                })}
              </select>
            </div>
        }
        if (question.responseType === "radio") {
          input =
            <div key={question._id}>
               <p>{question.description}</p>
              {question.responseOptions.split(",").map((option, index) => {
                return (
                  <div className="form-check form-check-inline" key={index}>
                    <input name={question.description} id={question._id} className="form-check-input" type="radio" value={option} ref={register({ required: true })} />
                    <label className="form-check-label" htmlFor={question._id}>{option}</label>
                  </div>
                )
              })}

            </div>
        }
        return input
      })}
      <div>
        <input type="submit" className="btn btn-primary" />
      </div>
    </form>
    </div>
  );
}

function mapStateToProps( { questions, answers }) {
  return { questions, answers };
}
export default connect(mapStateToProps, { fetchQuestions,postAnswers })(Dashboard);
