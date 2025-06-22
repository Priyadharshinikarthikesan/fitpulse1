function register() {
  alert("Welcome to FitPulse! Let's get started on your fitness journey!");
}

function Personal() {
  alert("Welcome to Personal Trainers vlogs....");
}

function Workout() {
  alert("Welcome to Workout Plan section....");
}

function Nutrition() {
  alert("Welcome to Nutrition Guide lines....");
}
function handleSubmit(event) {
  event.preventDefault();
  alert("Thank you for contacting FitPulse! We'll reach out to you shortly.");
  return false;
}


function addEntry(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const exercise = document.getElementById("exercise").value;
  const time = document.getElementById("time").value;

  const outputList = document.getElementById("outputList");

  const newItem = document.createElement("li");
  newItem.textContent = `${name} scheduled ${exercise} at ${time}`;
  outputList.appendChild(newItem);

  // Optional: clear form after submit
  document.getElementById("entryForm").reset();
  return false;
}
