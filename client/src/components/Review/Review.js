import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuestions, postReview } from "../../actions";
import { useForm } from "react-hook-form";

const Review = (props) => {
    useEffect(() => {
        props.fetchQuestions();
    }, []);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        props.postReview(data);
    };
    console.log(errors);

    return (
        <div>
            <h1 className="mb-5">Project Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {props.questions.map((question, index) => {
                    return (
                        <div key={question._id}>
                            <p className="mb-2"><span>Question: </span>{question.description}</p>
                            <div className="mb-3"><span>Response: </span>{question.response}</div>
                            <div className="mb-4"><div className="form-check form-check-inline" key={index}>
                                <input
                                    name={question.description}
                                    id="1"
                                    className="form-check-input"
                                    type="radio"
                                    value="1"
                                    ref={register({ required: true })}
                                />
                                <label className="form-check-label" htmlFor="1">
                                    1
                            </label>
                            </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        name={question.description}
                                        id="2"
                                        className="form-check-input"
                                        type="radio"
                                        value="2"
                                        ref={register({ required: true })}
                                    />
                                    <label className="form-check-label" htmlFor="1">
                                        2
                            </label>
                                </div>
                                <div className="form-check form-check-inline" >
                                    <input
                                        name={question.description}
                                        id="3"
                                        className="form-check-input"
                                        type="radio"
                                        value="3"
                                        ref={register({ required: true })}
                                    />
                                    <label className="form-check-label" htmlFor="1">
                                        3
                            </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        name={question.description}
                                        id="4"
                                        className="form-check-input"
                                        type="radio"
                                        value="4"
                                        ref={register({ required: true })}
                                    />
                                    <label className="form-check-label" htmlFor="1">
                                        4
                            </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        name={question.description}
                                        id="5"
                                        className="form-check-input"
                                        type="radio"
                                        value="5"
                                        ref={register({ required: true })}
                                    />
                                    <label className="form-check-label" htmlFor="1">
                                        5
                            </label>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div>
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

function mapStateToProps({ questions, answers }) {
    return { questions, answers };
}
export default connect(mapStateToProps, { fetchQuestions, postReview })(
    Review
);
