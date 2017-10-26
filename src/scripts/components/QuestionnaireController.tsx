import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Questionnaire } from '../model/Questionnaire';
import { QuizApiPayload } from '../model/QuizApiPayload';

import { Questionnaire as QuestionnaireView, QuestionnaireProps } from './Questionnaire';

export interface QuestionnaireControllerState {
    model: Questionnaire;
    resultScore?: number;
}

export class QuestionnaireController extends React.PureComponent<{}, QuestionnaireControllerState> {

    constructor(props) {
        super(props);
        this.state = { model: new Questionnaire() }
    }

    handleSubmitForm = (formValues) => {
        const payload = {
            name: formValues.name,
            age: formValues.age,
            math: formValues.math,
            riddle: formValues.riddle,
            team: formValues.team,
            house: formValues.house,
        };
        const resultScore = this.fakeServerCall(payload);
        this.setState({ resultScore });
    }

    fakeServerCall(payload: QuizApiPayload): number {
        return Math.floor(Math.random() * 100) + 1;
    }

    render() {
        return (
            <QuestionnaireView questionsByPage={this.state.model.questionsByPage} resultScore={this.state.resultScore} handleSubmitForm={this.handleSubmitForm} />
        );
    }
}