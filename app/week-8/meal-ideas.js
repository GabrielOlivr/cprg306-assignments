"use client"

import { useEffect, useState } from "react"

export default function MealIdeas({ingredient}){

    const [meals, setMeals] = useState([]);

    const fetchMealsIdeas = async (ingredient) => {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            if (response.ok) {
                const data = await response.json();
                return data.meals || [];
            } else {
                console.error("Error fetching meal ideas");
                return [];
            }
        } catch (error) {
            console.error("Error: ", error);
            return [];
        }
    };

    const loadMealIdeas = async () => {
        const mealData = await fetchMealsIdeas(ingredient);
        setMeals(mealData);
    };

    useEffect (() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
        <div>
            <h2 className="font-bold text-lg mt-2">Meal Ideas</h2>
                {ingredient ? (
                    meals.length > 0 ? (
                        <>
                            <p>Here are some meal ideas using {ingredient}:</p>
                                <ul>
                                    {meals.map((meal) => (
                                        <li key={meal.idMeal} className="bg-slate-900 max-w-sm p-2 m-1 hover:bg-yellow-700">
                                            <p>{meal.strMeal}</p>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                    <p>No meals found for {ingredient}</p>
                )
            ) : (
        <p>Select an item to see meal ideas</p>
    )}
        </div>
    );
};