import React from 'react';

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({ course }) => {
    const sum = course.parts.reduce((acc, part) => acc + part.exercises, 0)
    return (
        <strong>Number of exercises {sum}</strong>
    )
}

const Part = ({ part }) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    );
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => {
                return <Part part={part} key={part.id} />;
            })}
        </div>
    );
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    );
}

export default Course;