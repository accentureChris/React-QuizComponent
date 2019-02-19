import React, { Component } from 'react';
import { QuizQuestion } from './QuizQuestions';

let quizData = require('./quiz_data.json');

export class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz_position: 1
        };
    }

    render() {
        return (<div>
            <div className='QuizQuestion'>
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
            </div>
        </div>);
    }

}

export default Quiz;