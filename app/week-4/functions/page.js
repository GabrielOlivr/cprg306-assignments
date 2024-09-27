export default function FunctionsPage(){

    function helloWorld(username, dayOfWeek){
      //return "Hello World! Welcome back " + username + ", today is " + dayOfWeek;
        return `Hello World! Welcome back ${username}, today is ${dayOfWeek}`;
    }
        
    //implied return
    const helloWorld2 = (username, dayOfWeek) => {
        return `Hello World! Welcome back ${username}, today is ${dayOfWeek}`;
    }

    const helloWorld3 = (username) => `Hello ${username}!`;
    const helloMath = (a, b) => a + b;

    const louder = (textFunc, username) => {
        //validation
        //check that textFunc is actually a function
        // check to make sure the logic is consistent with our function 
        let thisText = textFunc(username);
        return `${thisText.toUpperCase()}!!!`
    }
    
    const multiplyBy = (num1) => {
        return (num2) => num1 * num2
    }

    const multiplyByThree = multiplyBy(3);
    const multiplyByTen = multiplyBy(10);



    return (
        <main className="p-5">
            <h1>Functions</h1>
            <p>{helloWorld("Alice", "Friday")}</p>
            <p>{helloWorld2("Frank", "Thursday")}</p>
            <p>{helloWorld3("Claire")}</p>
            <p>{helloMath(3,4)}</p>
            <h2>Higher Order Functions</h2>
            <p>{louder(helloWorld3, "Tom")}</p>
            <p>{louder (helloWorld2, "Anne")}</p>
            <p>{multiplyByThree(7)}</p>
            <p>{multiplyByTen(5)}</p>
        </main>
    );
}