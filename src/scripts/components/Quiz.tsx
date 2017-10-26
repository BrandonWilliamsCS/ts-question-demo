import * as React from 'react';

import { Question } from '../model/Question';

import { QuizPage } from './QuizPage';

export interface QuizProps {
    questionsByPage: Question[][];
    handleSubmitForm: (formValues: any) => void;
}

interface QuizState {
    formValues: any;
    currentPage: number;
}

export class Quiz extends React.PureComponent<QuizProps, QuizState> {
    
    constructor(props) {
        super(props);
        this.state = { formValues: {}, currentPage: 0 };
    }

    handleSubmitPage = (number, formValues) => {
        this.setState(prevState  => ({ formValues: { ...prevState.formValues, ...formValues } }));
        if (number === this.props.questionsByPage.length - 1) {
            this.props.handleSubmitForm(this.state.formValues);
        } else {
            this.setState(prevState  => ({ currentPage: prevState.currentPage + 1 }));
        }
    }

    render() {
        const questionList = this.props.questionsByPage[this.state.currentPage];
        return (
            <div className="Quiz">
                <QuizPage key={this.state.currentPage} number={this.state.currentPage} questions={questionList} handleSubmitPage={this.handleSubmitPage} />
            </div>
        );
    }
}