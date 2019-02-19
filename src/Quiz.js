import React, { Component } from 'react';
import { QuizQuestion } from './QuizQuestion';
import { QuizEnd } from './QuizEnd';

let quizData = require('./quiz_data.json');

export class Quiz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quiz_position: 1
        };
    }

    render() {
        const isQuizEnd = this.state.quiz_position - 1 === quizData.quiz_questions.length ? true : false;

        return (<div>
            <div className='QuizQuestion'>
                <QuizEnd />
                <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}/>
            </div>
        </div>);
    }

}

export default Quiz;