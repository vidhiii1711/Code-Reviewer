import { useEffect, useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"     
//  above line -> apply a dark theme with syntax highlighting colors to your code editor. It gives your code proper coloring similar to VS Code's dark theme.

import Editor from "react-simple-code-editor";
import prism from 'prismjs'
// PrismJS is used for syntax highlighting of code - it colors your code based on programming language to make it readable.

import Markdown from "react-markdown"
// React Markdown is used to render and display formatted markdown text - it converts your AI's markdown response into proper HTML with styling.

import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code,setCode]=useState(``)

  const [review,setReview]=useState(``)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    prism.highlightAll()
  }, [review])

  async function reviewCode() {
    setReview('')
    setIsLoading(true)
    
    try {
      const response = await axios.post('https://code-reviewer-e3yq.onrender.com/ai/get-review', { code })
      setReview(response.data.review)
    } catch (error) {
      console.error('Error reviewing code:', error)
      setReview('## Error\nFailed to review code. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }


  return (
    <>
     <main>
       <div className="left">
        <div className="code">
          <Editor
             value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
          />
        </div>
        
        <div
            onClick={reviewCode} 
             className={`review ${isLoading ? 'loading' : ''}`} /*
             
             review → Always applies the base CSS class
              
             ${isLoading ? 'loading' : ''} → Conditionally adds 'loading' class   (if isloading=true) 
             
             */
              disabled={isLoading}>        
              
              {/* Disables the button when loading */}
            
            {isLoading ? 'REVIEWING...' : 'REVIEW'}
            
            {/* Changes button text based on loading state

                Ternary operator (condition ? true : false):

                    If isLoading is true → Shows "REVIEWING..."
 
                    If isLoading is false → Shows "REVIEW""*/}

          </div>
        </div>
        
        <div className="right">
          {isLoading ? (
            <div className="simple-loading">
              <div className="loading-spinner"></div>
              <h3>Spotting improvement opportunities....</h3>
              <p>Please wait while we analyze your code</p>
            </div>
          ) : (
            <Markdown>{review}</Markdown>
          )}
        </div>
      </main>
    </>
  )
}

export default App
