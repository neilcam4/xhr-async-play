document.getElementById('button1').addEventListener('click', showRonaldo)

function showRonaldo(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true)

    xhr.onload = function(){
        if(this.status = 200){
            const result = JSON.parse(this.responseText);
            document.getElementById('output').innerHTML = result.name
        }
    }

    xhr.send()
}

document.getElementById('button2').addEventListener('click', showTennis)

function showTennis(){
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'tennis.json', true)

    xhr.onload = function(){
        if(this.status = 200){
            let output = ''
            let players = JSON.parse(this.responseText)
            players.forEach(element => {
                output += `<p>${element.name}</p>`
            });
            document.getElementById('tennis').innerHTML= output
        }
    }
    xhr.send()
}



// console.log("Hello")
// document.getElementById("button1")
// .addEventListener('click', showText)

// function showText(){
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'customer.json', true)
// xhr.onload = function(){
//     if(this.status === 200){
//         const result = JSON.parse(this.responseText)
//         document.getElementById('output').innerHTML = result.name
//     }
// }
// xhr.send()
// }

// document.getElementById('button2').addEventListener('click', showFed)
// function showFed(e) {
//     const xhr = new XMLHttpRequest();
  
//     xhr.open('GET', 'tennis.json', true);
  
//     xhr.onload = function(){
//       if(this.status === 200) {
//         // console.log(this.responseText);
  
//         const customers = JSON.parse(this.responseText);
  
//         let output = '';
//         console.log(customers)
//         customers.forEach(function(customer){
//           output += `
//           <ul>
//             <li>ID: ${customer.id}</li>
//             <li>Name: ${customer.name}</li>
//           </ul>
//         `;
//         });
  
//         document.getElementById('tennis').innerHTML = output;
//       }
//     }
  
//     xhr.send();
//   }
