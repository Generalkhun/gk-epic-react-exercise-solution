import React from 'react'

type Props = {}

const Title = (props: Props) => {
  return (
    <div className="flex items-start justify-start w-full gap-4 flex-col">
            <title className="text-3xl font-bold">
              Generalkhun Epic React Exercise Solution
            </title>
            <p className="text-lg">
              This is a solution to the{" "}
              <a
                className="text-[#D2042D] hover:underline hover:underline-offset-4"
                href="https://epic-react-exercises.vercel.app/react"
                target="_blank"
                rel="noopener noreferrer"
              >
                Epic React Exercises
              </a>{" "}
              by{" "}
              <a
                className="text-[#D2042D] hover:underline hover:underline-offset-4"
                href="https://github.com/Generalkhun"
                target="_blank"
                rel="noopener noreferrer"
              >
                @Generalkhun
              </a>
              .
            </p>
          </div>
  )
}

export default Title