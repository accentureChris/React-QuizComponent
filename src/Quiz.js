import React, { Component } from 'react';
import { QuizQuestion } from './QuizQuestion';
import { QuizEnd } from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz_position: 1
        };
    }

    render() {
        if (this.state.quiz_position - 1 === quizData.quiz_questions.length) {
            const isQuizEnd = true;
        } else {
            const isQuizEnd = false;
        }

        return (<div>
            <div className='QuizQuestion'>
                <QuizEnd />
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
            </div>
        </div>);
    }

}

export default Quiz;