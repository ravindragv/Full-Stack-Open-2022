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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course courses={courses} />
}

export default App