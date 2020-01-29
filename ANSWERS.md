- [ ] Why would you use class component over function components (removing hooks from the question)?

I would use class components if I wanted to use the "this" keyword binding for the state hook variables. 

- [ ] Name three lifecycle methods and their purposes.

componentDidMount is a method that is called as part of the birth phase of a component. 

shouldComponentUpdate is a method that can optionally be called as part of the growth phase of a component. It can stop a component from calling render if necessary. 

componentWillUnmount is part of the death phase of component and can be used for any necessary cleanup.
 
- [ ] What is the purpose of a custom hook?

A custom hook allows us to more efficiently manage and bundle the non-visual behavior and stateful logic of components.

- [ ] Why is it important to test our apps?

Automated testing minimizes the risks of introducing bugs into production code. 
