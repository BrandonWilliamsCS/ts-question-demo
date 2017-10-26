import * as React from 'react';

import { Question } from '../model/Question';

import { TextQuestion } from './TextQuestion';
import { MultipleChoiceQuestion } from './MultipleChoiceQuestion';

export interface QuizPageProps {
    number: number;
    questions: Question[];
    handleSubmitPage: (number, formValues) => void;
}

interface QuizPageState {
    formValues: any;
}

export class QuizPage extends React.PureComponent<QuizPageProps, QuizPageState> {
    
    constructor(props) {
        super(props);
        this.state = { formValues: {} };
    }

    handleAnswerChange = (key, answer) => {
        this.setState(prevState  => ({ formValues: { ...prevState.formValues, [key]: answer } }));
    }

    handleSubmitPage = (formValues: any) => {
        this.props.handleSubmitPage(this.props.number, formValues);
    }

    render() {
        return (
            <form className="QuizPage">
                {this.props.questions.map(question => (
                    question.variant === 'text'
                        ? <TextQuestion id={question.key} prompt={question.prompt} answerChangeHandler={this.handleAnswerChange} />
                        : <MultipleChoiceQuestion id={question.key} prompt={question.prompt} choices={question.choices} answerChangeHandler={this.handleAnswerChange} />
                ))}
                <button type="button" onClick={this.handleSubmitPage}>Go on</button>
            </form>
        );
    }
}