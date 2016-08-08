module question_scenes {

    export class Question_1 extends objects.Scene {
        constructor() {
            super("Canada",
                "USA", "China",
                "India", "USA", 1, 
                "In quale Paese è stato coltivato il mazzo\nd’aglio più pesante del mondo con un peso\n di 1,19 kg? "
                , "Garlic");               
        }

    }

        export class Question_2 extends objects.Scene {
        constructor() {
            super("Turkey",
                 "Germany","France",
                "Congo", "menu_back", "France", 2, "Quale Stato è il più grande produttore\n di zucchero ricavato dalla\n barbabietola? ", "barbabietola");               
        }

    }
}