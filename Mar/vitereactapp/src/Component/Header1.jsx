//function is JS-Concept
export function greetName(name) {
    return `Hello ${name}`;
}

function headerComponent(props) {
    console.log('HeaderComponent',props,props.name);
    // function component will return only one single element or node

    // object destructuring
    let {name, age} = props;

    return (
        <div>
            <h1>Hello Header Component!</h1>
            <h1>UserName {name}!</h1>
            <h1>Age {age}!</h1>

        </div>
    );
}
export  {headerComponent};