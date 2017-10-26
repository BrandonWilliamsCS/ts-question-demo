import * as React from 'react';

export interface MultipleChoiceQuestionProps {
    id: string;
    prompt: string;
    choices: string[];
    answerChangeHandler?: (id: string, answer: string) => boolean | void;
}

interface MultipleChoiceQuestionState {
    answer: string;
}

export class MultipleChoiceQuestion extends React.PureComponent<MultipleChoiceQuestionProps, MultipleChoiceQuestionState> {

    constructor(props) {
        super(props);
        this.state = { answer: '' };
    }

    handleAnswerSelect = (changeEvent) => {
        const answer = changeEvent.target.value;
        if (!this.props.answerChangeHandler || this.props.answerChangeHandler(this.props.id, answer) !== false) {
            this.setState({ answer });
        }
    }

    render() {
        return (
            <div className="MultipleChoiceQuestion">
                <span className="MultipleChoiceQuestion_prompt">{this.props.prompt}</span>
                {this.props.choices.map(choice => 
                    <div className="MultipleChoiceQuestion_option">
                        <label>
                            <input
                                className="MultipleChoiceQuestion_radio"
                                type="radio"
                                value={choice}
                                checked={choice === this.state.answer}
                                onChange={this.handleAnswerSelect}
                            />
                            {choice}
                        </label>
                    </div>
                )}
            </div>
        );
    }
}