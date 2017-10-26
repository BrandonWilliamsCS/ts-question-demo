import * as React from 'react';

import { Question } from '../model/Question';

import { Quiz } from './Quiz';
import { Results } from './Results';

export interface QuestionnaireProps {
    questionsByPage: Question[][];
    resultScore?: number;
    handleSubmitForm: (formValues: any) => void;
}

export class Questionnaire extends React.PureComponent<QuestionnaireProps, {}> {

    render() {
        return (
            (typeof this.props.resultScore === 'undefined')
                ? <Quiz questionsByPage={this.props.questionsByPage} handleSubmitForm={this.props.handleSubmitForm} />
                : <Results score={this.props.resultScore} />
        );
    }
}