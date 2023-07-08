import React from 'react';
import Modal from '../modal';
import Buttons from '../buttons';

class ValidParentheses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: true,
      showResult: false
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({showResult: true});
    this.setState({output: this.parentheses(this.state.input)});
  }

  clear = () => {
    this.setState({input: '', output: true, showResult: false});
  }

  modalContent() {
    return (
      <div>
        <p className="text-secondary">Every opening parentheses must be followed by a closing parentheses of the same type or by another open parentheses of any type. So essentially you can simply add the corresponding closing parentheses to a stack whenever an open parentheses is encountered. When a closing parentheses is encountered, it must match the last item on the stack.</p>
        <pre>
          <code>
            {
`let stack = [];
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
}`
            }
          </code>
        </pre>
      </div>
    )
  }

  render() {
    return (
      <div className='container-fluid section' id='validParentheses'>
        <div className='algo-background'>
          <div className='p-3'></div>
          <h2 className='section-heading'>Valid Parentheses</h2>
          <p>Given a string containing just the characters (, ), {"{, }"}, [ and ], determine
          if the input string is valid.

          An input string is valid if:</p>

          <ul className="ml-5">
            <li>Open brackets must be closed by the same type of brackets.</li>
            <li>Open brackets must be closed in the correct orde  r.</li>
            <li>Note that an empty string is also considered valid.</li>
          </ul>

          <label htmlFor='parentheses'>Enter a string of parentheses: </label><br />
          <div className='input-group mb-3'>
            <input className='form-control' type="text" value={this.state.input} onChange={(e) => this.setState({input: e.target.value})} />
          </div>
          <div className='section-heading'> 
            {this.state.showResult ? <div><h2>{this.state.output.toString()}</h2></div> : null}
            <Buttons runAlgo={this.onSubmit} clear={this.clear} code='#validParenthesesModal' />
            <div
              className="modal fade"
              id="validParenthesesModal"
              tabIndex="-1"
              aria-labelledby="validParenthesesLabel"
              aria-hidden="true"
              >
              <Modal content={this.modalContent} />
            </div>
          </div>
        </div>
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