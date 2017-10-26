import { Question, TextQuestion, MultipleChoiceQuestion } from '../model/Question';

export class Questionnaire {
    questionsByPage: Question[][] = [
        [
            new TextQuestion('name', 'What is your name?'),
            new TextQuestion('age', 'how old are you'),
        ],
        [
            new TextQuestion('math', 'What is 2+2?'),
            new TextQuestion('riddle', 'How much wood could a woodchuck chuck if a woodchuck could chuck wood?'),
        ],
        [
            new MultipleChoiceQuestion('team', 'Which Pokemon Go team are you?', ['valor', 'wisdom', 'instinct']),
            new MultipleChoiceQuestion('house', 'What Hogwards house are you?', ['Griffindor', 'Ravenclaw', 'Hufflepuff', 'Slitherin']),
        ],
    ];
}