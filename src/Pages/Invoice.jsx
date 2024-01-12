import React from 'react'


function Invoice() {
  return (
    <main>
    {/* Header*/}
      <header>
        <div> <h2>Invoicer</h2></div>
        <div>
          <ul>
            <li>
                Print
            </li>
            <li>
                Download
            </li>
            <li>
                Send
            </li>
          </ul>
        </div>
      </header>


      {/* End of Header*/}


{/* Your details*/}

      <section>
        <input type="text" name="text" id="text" placeholder = "Enter your name" />
      </section>


{/* End of Your details*/}

    </main>
  )
}

export default Invoice