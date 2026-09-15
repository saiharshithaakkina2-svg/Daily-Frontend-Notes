
const container = document.getElementById("dom-container")


// create the h1,p,button for small indarction

const heading = document.createElement('h2')
 heading.textContent = "Harhitha"
 container.appendChild(heading)
 
// Create paragraph
 const para = document.createElement("p")
 para.textContent = "I am learning JavaScript DOM" 
 container.appendChild(para)

// Create button
 const btn = document.createElement('button')
 btn.textContent = "click"

  //Now we manipulate this content
 btn.addEventListener ("click" , function () {
    heading.innerText = "I am Harshitha"
    para.innerText = "I am looking for a job"
  })
 container.appendChild(btn)

