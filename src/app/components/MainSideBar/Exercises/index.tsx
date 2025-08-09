import React from 'react'
import LiquidButton from '../../LiquidButton';

interface Exercise {
  id: number;
  title: string;
  subExercises?: Exercise[];
}
const exercises: Exercise[] = [
    { id: 1, title: "React Fundamentals", subExercises: [] },
    { id: 2, title: "React Hooks", subExercises: [
        { id: 21, title: "State Management Complexity" },
        { id: 22, title: "Direct DOM Access and Memory Leaks" },
        { id: 23, title: "The Http Requests and Error Boundaries" },
    ] },
    { id: 3, title: "Advanced React Hooks", subExercises: [
        { id: 31, title: "Safely handling async operations" },
        { id: 32, title: "A simple fetch-and-cache pattern" },
        { id: 33, title: "Exposing properties to the parent" },
        { id: 34, title: "Adding debug labels to hooks" },
    ] },
    { id: 4, title: "Advanced React Patterns",subExercises: [
        { id: 41, title: "Context Module Functions" },
        { id: 42, title: "Flexible Compound Components" },
        { id: 43, title: "Prop Collections" },
        { id: 44, title: "Prop Getters" },
        { id: 45, title: "The State Reducer Pattern" },
        { id: 46, title: "Control Props, I" },
        { id: 47, title: "Control Props, II" },
    ] },
    { id: 5, title: "React Performance",subExercises: [
        { id: 41, title: "Context Module Functions" },
        { id: 42, title: "Flexible Compound Components" },
        { id: 43, title: "Prop Collections" },
        { id: 44, title: "Prop Getters" },
        { id: 45, title: "The State Reducer Pattern" },
        { id: 46, title: "Control Props, I" },
        { id: 47, title: "Control Props, II" },
    ] },
    { id: 6, title: "Testing React Apps" },
    { id: 7, title: "React Suspense" },
    { id: 8, title: "Build an Epic React App" },
];
const Exercises = () => {

  return (
    <div>
        <h1 className="text-2xl font-bold mb-4">Exercises</h1>
        <div className="list-disc pl-5">
            {exercises.map((exercise) => (
                <div key={exercise.id} className="mb-2">
                    <LiquidButton
                        text={exercise.title}
                        textColor="#D2042D"
                        textColor2="D2042D"
                        liquidColor="#D2042D"
                        baseColor="transparent"
                    />
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Exercises