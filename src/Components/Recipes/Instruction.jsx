import React from 'react'
import { parseHtmlToString } from './utils'

function Instruction({ instructions, analyzedInstructions }) {

  let content;
  debugger
  if (analyzedInstructions.length > 0) {
    if (analyzedInstructions[0].steps.length > 0) {
      console.log(analyzedInstructions);
      content =
        <ol className="insturctionSteps">
          {analyzedInstructions[0].steps.map(step => {
            return <li key={`instructionStep${step.number}`} className="instructionStep">
              {/* <div className="stepBtn">{step.number}</div> */}
              <p className="stepText">{step.step}</p>
            </li>
          })}
        </ol>
    }
  }
  else if (instructions.length > 0) {
    content = parseHtmlToString(instructions);
  }
  else {
    content = "There are no instruction available for this recipe."
  }

  return (
    <div className="recipeInstructions">
      <h1 className="insturctionsTitle">INSTRUCTIONS</h1>
      {content}
    </div>
  )
}

export default Instruction
