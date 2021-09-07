import React from 'react'


const Header = (props) => {
  return (
    <div>
    <p><h1>{props.course}</h1></p>
    </div>
  )
}

const Part = (props) => {

  return (
    <div>
    <dt> Part{props.number}: {props.part} </dt>
    <dd>- Number of exercise {props.exercise} </dd>
    </div>
  )
}





const Content = (props) => {
  return (
    <div>
      <dl>
      <Part number={props.part.indexOf(props.part[0])} part={props.part[0]} exercise={props.exercise[0]}/>
      <br></br>
      <Part number={props.part.indexOf(props.part[1])}  part={props.part[1]} exercise={props.exercise[1]}/>
      <br></br>
      <Part number={props.part.indexOf(props.part[2])}  part={props.part[2]} exercise={props.exercise[2]}/>
      <br></br>
      <Part number={props.part.indexOf(props.part[3])}  part={props.part[3]} exercise={props.exercise[3]}/>
      </dl>
    </div>
  )
}

const Total = (props) => {
  const ex1 = parseInt(props.exercise[0])
  const ex2 = parseInt(props.exercise[1])
  const ex3 = parseInt(props.exercise[2])
  const ex4 = parseInt(props.exercise[3])

  const sum = ex1 + ex2 + ex3 + ex4 

  return (
    <div>
    <p> Total number of exercises: <b>{sum}</b> </p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'

//  const course_data = [
//    {id: 0 , part: 'Part0' , description: 'Fundamentals of Web apps' , exercise: 0} ,
//    {id: 1 , part: 'Part1' , description: 'Fundamentals of React' , exercise: 10} ,
//    {id: 2 , part: 'Part2' , description: 'Using props to pass data' , exercise: 7} ,
//    {id: 4 , part: 'Part3' , description: 'State of a component' , exercise: 14} 
//  ]

  const parts = ["Fundamentals of Web apps",
                    "Fundamentals of React",
                    "Using props to pass data",
                    "State of a component"
                  ]
  const exercises = ['0', '10', '7', '14']

  return (
    <div>
      <Header course={course} />
      <Content part={parts} exercise={exercises}/>
      <Total exercise={exercises}/>
    </div>
  )
}

export default App