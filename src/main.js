import data from '/public/data.json';


// Use the imported JSON data directly
console.log("Imported Data:", data);
data.forEach(item => {
  console.log(`Name: ${item.name}, Artist: ${item.artist}`);
});
