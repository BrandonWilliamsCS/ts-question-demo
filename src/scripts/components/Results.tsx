import * as React from 'react';

export interface ResultsProps {
    score: number;
}

export class Results extends React.PureComponent<ResultsProps, {}> {
    render() {
        return (
            <div className="Results">
                <span className="Results_text">Congrats! you scored: {this.props.score}</span>
            </div>
        );
    }
}