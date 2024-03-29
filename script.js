// document.addEventListener('DOMContentLoaded', function() {
//   var key = "/NewMyceliumBlog/.__palette";
// var value = localStorage.getItem(key);
// var jsonString = value; // Example JSON string
// var jsonObject = JSON.parse(jsonString);

// console.log(jsonObject.index);
// if ( jsonObject.index == 0) {
//   toggleClasses2()
//     console.log("Value found in localStorage:", value);
    

// } else {
//   toggleClasses1()
//     console.log("Value not found in localStorage.");
// }
// });

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded')

  var element1 = document.getElementById('first');
  var element2 = document.getElementById('second');
  element1.style.display="none";
  element2.style.display="block";
})



document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded')

  var exampleDetailsElements = document.querySelectorAll("details.example");
  var exampleOutputsElements = document.querySelectorAll("details.output");
  let copyBtn = document.querySelectorAll(".copy-button");
  let allDropdowns = document.querySelectorAll(".drop-down-guides");
  // console.log('exampleDetailsElements : ', exampleDetailsElements)
  // console.log('copyBtn : ', copyBtn)

  exampleDetailsElements.forEach((details) => {
    details.setAttribute('style',`margin-bottom: 40px;`)
    details.removeAttribute("open");
    details.addEventListener('click', () => {
      details.addAttribute("open")
    })
  });

  exampleOutputsElements.forEach((details) => {
    details.setAttribute('style',`margin-bottom: 80px;`)
    details.removeAttribute("open");
    details.addEventListener('click', () => {
      details.addAttribute("open")
    })
  });

  copyBtn.forEach((button) => {
    button.addEventListener('click', () => {
      copyContentToClipboard(button)
    })
  })

  allDropdowns.forEach((dropdown, index) => {
    const element = dropdown;
    element.setAttribute('id',`dropdown-${index}`);
    element.value = 'python_guide'
    let preElm = element.parentNode
    let parentDivElm = preElm.parentNode
    let tables = parentDivElm.querySelectorAll('table.docutils')
    let methods = parentDivElm.querySelectorAll('details.method')
    let requests = parentDivElm.querySelectorAll('details.request')
    let headers = parentDivElm.querySelectorAll('details.header')
    let payloads = parentDivElm.querySelectorAll('details.payload')
    let payloadExamples = parentDivElm.querySelectorAll('details.payload-example')
    let outputs = parentDivElm.querySelectorAll('details.output')
    methods.forEach((method)=> method.setAttribute('style',`display: none; margin-bottom: 30px; margin-top: 30px;`))
    requests.forEach((request)=> request.setAttribute('style',`display: none; margin-bottom: 30px;`))
    headers.forEach((header)=> header.setAttribute('style',`display: none; margin-bottom: 30px;`))
    payloads.forEach((payload)=> payload.setAttribute('style',`display: none; margin-bottom: 30px;`))
    payloadExamples.forEach((payloadExample)=> payloadExample.setAttribute('style',`display: none; margin-bottom: 30px;`))
    outputs.forEach((output)=> output.setAttribute('style',`display: none; margin-bottom: 60px;`))
    // let pythonGuide = parentElement.querySelector('.python-guide')
    // let restGuide = parentElement.querySelector('.rest-guide')
    // restGuide.style.display = 'none'
    element.addEventListener('change', () => {
      changeGuide(element)
    })
  })

  function copyContentToClipboard(button) {
    let contentBlock = button.parentNode;
    let copyText = contentBlock.querySelector('.copy-text');
    let copiedText = contentBlock.querySelector('.copy-text[data-state="copied"]');
    // let pythonGuideElm = contentBlock.querySelector('.python-guide');
    // let restGuideElm = contentBlock.querySelector('.rest-guide');
    let content = contentBlock.innerText.trim() 

    // let content = pythonGuideElm.style.display === 'none' ? restGuideElm.innerText.trim() : pythonGuideElm.innerText.trim();
    console.log('content: ', content);
  
    navigator.clipboard.writeText(content).then(function () {
      copyText.style.display = 'block';
      copyText.innerText = "Copied"
  
      button.addEventListener('mouseleave', () => {
        copyText.style.display = 'none';
      });
  
    }).catch(function (error) {
      console.error('Failed to copy content:', error);
    });
  
    copyText.innerText = "Copied"
    copiedText.style.display = 'block';

    setTimeout(() => {
      copyText.style.display = 'block';
      copiedText.style.display = 'none';
    }, 2000);
  }
  
  function changeGuide(dropdown){
    // let parentElement = dropdown.parentNode
    // let pythonGuide = parentElement.querySelector('.python-guide')
    // let restGuide = parentElement.querySelector('.rest-guide')
    // console.log('DROPDOWN :', dropdown.value)
    let preElm = dropdown.parentNode
    let parentDivElm = preElm.parentNode
    console.log('preElm : ',preElm)
    console.log('parentDivElm : ',parentDivElm)
    let tables = parentDivElm.querySelectorAll('table.docutils')
    let examples = parentDivElm.querySelectorAll('details.example')
    let methods = parentDivElm.querySelectorAll('details.method')
    let requests = parentDivElm.querySelectorAll('details.request')
    let headers = parentDivElm.querySelectorAll('details.header')
    let payloads = parentDivElm.querySelectorAll('details.payload')
    let payloadExamples = parentDivElm.querySelectorAll('details.payload-example')
    let outputs = parentDivElm.querySelectorAll('details.output')
    
    if(dropdown.value === 'rest_guide'){
      tables.forEach((table)=> table.setAttribute('style',`display: none !important`))
      examples.forEach((example)=> example.style.display = 'none')
      methods.forEach((method)=> method.style.display = 'block')
      requests.forEach((request)=> request.style.display = 'block')
      headers.forEach((header)=> header.style.display = 'block')
      payloads.forEach((payload)=> payload.style.display = 'block')
      payloadExamples.forEach((payloadExample)=> payloadExample.style.display = 'block')
      outputs.forEach((output)=> output.style.display = 'block')
    }else{
      tables.forEach((table)=> table.setAttribute('style',`display: table !important`))
      examples.forEach((example)=> example.style.display = 'block')
      methods.forEach((method)=> method.style.display = 'none')
      requests.forEach((request)=> request.style.display = 'none')
      headers.forEach((header)=> header.style.display = 'none')
      payloads.forEach((payload)=> payload.style.display = 'none')
      payloadExamples.forEach((payloadExample)=> payloadExample.style.display = 'none')
      outputs.forEach((output)=> output.style.display = 'none')
    }
  }
});

// document.getElementById('searchInput').addEventListener('click', function() {
//   // Create a new div element
//   var newDiv = document.createElement('div');
  
//   // Add some content to the div
//   var divContent = document.createTextNode('This is a new div created on click');
//   newDiv.appendChild(divContent);
  
//   // Add styles to the new div
//   newDiv.classList.add('search-div');
  
//   // Append the new div to the search container
//   document.querySelector('.search-container').appendChild(newDiv);
// });


// const searchInput = document.querySelector('#searchInput');
// const searchIcon = document.querySelector('#hide');

// searchInput.addEventListener('focus', () => {
//   searchIcon.style.opacity = '0';
// });

// searchInput.addEventListener('blur', () => {
//   searchIcon.style.opacity = '1';
// });

function toggleClasses1() {
  var element1 = document.getElementById('first');
  var element2 = document.getElementById('second');
  // if (element.classList.contains('first')) {
  //     // element.classList.remove('first');
  //     // element.classList.add('second');
      element1.style.display="block";
      element2.style.display="none";

  // } else {
  //     element.classList.remove('second');
  //     element.classList.add('first');
  // }

}

function toggleClasses2() {
  var element1 = document.getElementById('first');
  var element2 = document.getElementById('second');
  // if (element.classList.contains('second')) {
  //     element.classList.remove('second');
  //     element.classList.add('first');
  // } else {
  //     element.classList.remove('first');
  //     element.classList.add('second');
  // }

  element1.style.display="none";
  element2.style.display="block";

}



