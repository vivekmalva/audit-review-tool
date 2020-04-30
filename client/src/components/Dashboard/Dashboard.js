import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestions } from "../../actions";
import './helper.css';

class Dashboard extends Component {
  constructor() {
    super();
    this.input = "";
    this.label = "";
  }
  componentDidMount() {
    this.props.fetchQuestions();
  }
  render() {
    const handleChange = () => {};
    const handleBlur = () => {};
    const handleSubmit = () => {};
    return (
      <div style={{ textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          {this.props.questions.map((question, index) => {
            this.label = (
              <label htmlFor={index} style={{ display: "block" }}>
                {question.description}
              </label>
            );

            if (question.responseType === "text") {
              this.input = (
                <input
                  id={index}
                  type="text"
                  value=""
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              );
            }
            if (question.responseType === "select" && question.responseOptions) {
              this.input = (
                <select id={index} onChange={handleChange} onBlur={handleBlur}>
                  <option value="">Choose Your Option</option>
                  {question.responseOptions.split(",").map((option) => {
                    return <option value={option}>{option}</option>;
                  })}
                </select>
              );
            }
            return [this.label, this.input];
          })}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return { questions };
}
export default connect(mapStateToProps, { fetchQuestions })(Dashboard);
