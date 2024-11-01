"use client"

import { useStatem, useEffect, useState } from "react"

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
            <h2>Meal Ideas</h2>
            <p>Here are some meal ideas using {ingredient}:</p>
            <ul>
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <p>{meal.strMeal}</p>
                        </li>
                    ))
             ) : (
                    <p>No meal ideas</p>
                )}
            </ul>
        </div>
    );
};