const list = document.getElementById("tasks");

function addTask() {
  const name = document.getElementById("taskName").value;
  const time = document.getElementById("time").value;

  if (!name || !time) return;

  const li = document.createElement("li");
  li.innerText = `${time} - ${name}`;
  list.appendChild(li);

  document.getElementById("taskName").value = "";
}
