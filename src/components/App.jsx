import React, { Component } from 'react';
import { Section } from './FeedbackContainer/FeedbackContainer';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countGoodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
        total: prevState.total + 1,
        percentage: (prevState.good / prevState.total) * 100,
      };
    });
  };

  countNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
        total: prevState.total + 1,
        percentage: (prevState.good / prevState.total) * 100,
      };
    });
  };

  countBadFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
        total: prevState.total + 1,
        percentage: (prevState.good / prevState.total) * 100,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = (good / total) * 100;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGoodBtn={this.countGoodFeedback}
            onNeutralBtn={this.countNeutralFeedback}
            onBadBtn={this.countBadFeedback}
          />
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            ></Statistics>
          ) : (
            <p
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              There is no feedback
            </p>
          )}
        </Section>
      </div>
    );
  }
}
