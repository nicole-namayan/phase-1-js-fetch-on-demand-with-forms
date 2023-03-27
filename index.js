const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log(event);
  
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);

  const init = () => {
    const inputForm = document.querySelector('form');
  
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const input = document.querySelector('input#searchByID');
  
      console.log(input.value);
  
      fetch('http://localhost:3000/movies')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // LOG: (3) [{…}, {…}, {…}]
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', init);


  const formData = {
    name: "nicole",
    email: "nicolenamayan",
  };

  const submitData = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body:JSON.stringify(formData),
  };

fetch("http://localhost:3000/users",submitData)
.then(function(response) {
  return response.json();
})
.then(function(object) {
  console.log(object);
})
.catch(function (error) {
  alert("Bad things! Ragnarők!");
  console.log(error.message);
});