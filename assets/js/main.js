fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    alert(data[0].name); // Use `data` here
  });
