import { QuizApiPayload } from './QuizApiPayload';

type QuestionKey = keyof QuizApiPayload;

export type Question = TextQuestion | MultipleChoiceQuestion;

export class TextQuestion {
    readonly variant = 'text';
    constructor(public key: QuestionKey, public prompt: string) {}
}

export class MultipleChoiceQuestion {
    readonly variant = 'multipleChoice';
    constructor(
        public key: QuestionKey,
        public prompt: string,
        public choices: string[],
    ) {}
}