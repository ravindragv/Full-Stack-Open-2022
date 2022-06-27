import React from 'react'

const Header = ({ course }) => <h1>{course.name}</h1>

const Total = ({ sum }) => <p><b>Total of {sum} exercises</b></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => <Part key={part.id} part={part}/>)}
    </div>
  )
}

const Course = ({ courses }) => {
  const totalExercise = function(sum, part) {
    return sum += part.exercises
  }

  const courseContent = function(course) {
    return (
      <div key={course.id}>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total sum={course.parts.reduce(totalExercise, 0)}/>
      </div>
    )
  }

  return (
    <div>
      {courses.map(courseContent)}
    </div>
  )
}

export default Course