module objects {
    export interface Asset {
        id: string;
        src: string;
    }

    export interface WrongAns {
        question_num: string;
        answer: string;
        question: string;
    }
}