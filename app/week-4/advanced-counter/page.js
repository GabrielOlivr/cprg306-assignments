"use client" //directive

import { useState } from "react";
import AdvCounter from "./adv-counter";
import CounterDisplay from "./counter-display";

export default function AdvCounterPage() {

    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        if( count < 10) {
            setCount(count + 1);
        }
    }

    const resetCounter = () => {
        setCount(0)
    }

    return (
        <main className="p-5">
            <AdvCounter
                currentCount={count}
                incrementCounterFunction={incrementCounter}
                resetCounterFunction={resetCounter}
            />
        </main>
    );
}