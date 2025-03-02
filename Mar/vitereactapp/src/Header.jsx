//2 Types of Components

/*
1. Functional Components
Functional Component: A JavaScript function that returns JSX.
Simpler & More Efficient: No need to extend a class, use lifecycle methods, or this.
Hooks (useState, useEffect, etc.): Functional components can use React Hooks to manage state and side effects.
*/

/*
2. Class Components
Class-based Component: A React component defined as a JavaScript class that extends Component from React.
Lifecycle Methods: Class components can have lifecycle methods (e.g., componentDidMount, componentDidUpdate, componentWillUnmount).
State & Props: Class components can manage state and receive props.
*/

/*
Note: Best Practices Recommendations Functional Components
Use Functional Components whenever possible because they are simpler and more optimized.
Use Class Components only if working with older React projects or complex logic requiring lifecycle methods (though Hooks can replace them).
*/

/*
Functional Components: Key Points
Functional Components are JavaScript functions that return React elements (JSX).
Functional Components can accept props as arguments and return UI elements.
Functional Components can manage state using Hooks (e.g., useState).
Functional Components can handle side effects using Hooks (e.g., useEffect).
Functional Components are easier to read, write, and test than Class Components.
Functional Components are preferred in modern React development due to their simplicity.
Functional Components do not require a constructor or this keyword.
Functional Components use Hooks instead of lifecycle methods (e.g., useEffect replaces componentDidMount).
Functional Components have better performance in many cases because they avoid the overhead of class instantiation.
Functional Components are also known as "Presentational Components" when they focus only on UI.
Functional Components can be memoized using React.memo() to prevent unnecessary re-renders.
Functional Components became more powerful after React 16.8 with the introduction of Hooks.
Functional Components support advanced features like Context API and Custom Hooks for better state management.
Functional Components can be written using both function declarations and arrow functions.
*/
/*
Class Components: Key Points
Class Components are ES6 classes that extend React.Component.
Class Components require a render() method to return UI elements.
Class Components manage state using this.state and update it using this.setState().
Class Components can access lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount.
Class Components use a constructor (constructor()) to initialize state and bind event handlers.
Class Components require this to access props and state (this.props, this.state).
Class Components are harder to read, write, and test compared to Functional Components.
Class Components have a slight performance overhead due to class instantiation.
Class Components were the only way to manage state before React 16.8.
Class Components can be converted into Functional Components using Hooks.
Class Components are still used in legacy codebases but are being replaced by Functional Components.
Class Components can be optimized using React.PureComponent to avoid unnecessary re-renders.
Class Components are also known as "Container Components" when they handle logic and state management.
Class Components are no longer recommended for new React projects, as Functional Components with Hooks provide the same functionality with less complexity.
*/

//Class Components Example
import React, { Component } from "react";
class HedderClassComponent extends Component {
    render() {
        return (
            <div>
                <h1>Hello Class Components example</h1>
            </div>
        );
    }
}
//Functional Components Example
function HedderFunctionalComponent() {
    return (
        <div>
            <h1>Hello Functional Components example</h1>
        </div>
    );
}
//Treditional way
const HedderFunctionalComponent1 = () => (
    <dev>
        <h1>Treditional Functional Components example</h1>
        <h2>When returning JSX with arrow functions, use parentheses () for better readability.</h2>
        <h2>When using { } after =Lambda, you must explicitly use return.</h2>
        <h2>If you need to return multiple elements, wrap them inside a or use a React Fragment.</h2>
        <h1>Best Practice: Always wrap JSX properly, either in parentheses () or with return</h1>

    </dev>

);

export { HedderClassComponent };
export { HedderFunctionalComponent };
export { HedderFunctionalComponent1 };
