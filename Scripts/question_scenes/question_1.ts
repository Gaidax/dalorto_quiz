module question_scenes {

    export class Question_1 extends objects.Scene {
        constructor() {
            super("Canada",
                "USA", "China",
                "India", "q_1_back", "USA", 1, "Question", "garlic");               
        }

    }

        export class Question_2 extends objects.Scene {
        constructor() {
            super("Canada",
                 "China","USA",
                "India", "q_1_back", "USA", 1, "Question", "garlic");               
        }

    }
}