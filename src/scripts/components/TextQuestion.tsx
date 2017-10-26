import * as React from 'react';

export interface TextQuestionProps {
    id: string;
    prompt: string;
    answerChangeHandler?: (id: string, answer: string) => boolean | void;
}

interface TextQuestionState {
    answer: string;
}

export class TextQuestion extends React.PureComponent<TextQuestionProps, TextQuestionState> {
    
    constructor(props) {
        super(props);
        this.state = { answer: '' };
    }

    answerChangeHandler = (changeEvent) => {
        const answer = changeEvent.target.value;
        if (!this.props.answerChangeHandler || this.props.answerChangeHandler(this.props.id, answer) !== false) {
            this.setState({ answer });
        }
    }

    render() {
        return (
            <div className="TextQuestion">
                <span className="TextQuestion_prompt">{this.props.prompt}</span>
                <input className="TextQuestion_answer" type="text" value={this.state.answer} onChange={this.answerChangeHandler} />
            </div>
        );
    }
}