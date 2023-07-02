import React from 'react';

class ValidParentheses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: false
    };
  }

  render() {
    return (
      <div className='container-fluid'>
        <h2>Valid Parentheses</h2>
        <p>Given a string containing just the characters (, ), {"{, }"}, [ and ], determine
        if the input string is valid.

        An input string is valid if:</p>

        <ul className="ml-5">
          <li>Open brackets must be closed by the same type of brackets.</li>
          <li>Open brackets must be closed in the correct orde  r.</li>
          <li>Note that an empty string is also considered valid.</li>
        </ul>

        <label htmlFor='parentheses'>Enter a string of parentheses: </label><br />
        <input type="text" value={this.state.input} onChange={(e) => this.setState({input: e.target.value})} />
        <button onClick={() => this.setState({output: this.parentheses(this.state.input)})}>Submit</button>
        <div>{this.state.output.toString()}</div>
      </div>
    )
  }

  parentheses(input) {
    let stack = [];
    let map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }

    for (let i = 0; i < input.length; i++) {
      if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
        stack.push(input[i]);
      } else if (input[i] === ')' || input[i] === ']' || input[i] === '}') {
        let last = stack.pop();
        if (input[i] !== map[last]) {
          return false;
        }
      }
    }
    if (stack.length !== 0) {
      return false;
    }
    return true;
  }
}

export default ValidParentheses;