# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?

Stateful components are keeping track of changing data, while stateless components print out what is given to them via props.

2. When does a componentWillMount function be called? What about a componentWillUpdate?

componentWillMount function is invoked immediately before mounting occurs.
componentWillUpdate function is called every time a re-render is required.

3. Define stateful logic.

Stateful logic is any code that uses state.

4. What are the three step of creating a successful test? What is done in each phase?

Arrange //the arrange method renders a React element into the DOM.
Act //the act method allows you to fire events to simulate user actions.
Assert// the assert method asserts that the code is correct.