export function showLuffy() {
  const luffy = document.getElementById("luffy");
  const zoro = document.getElementById("main-zoro");
  if (luffy.classList.contains("hidden")) {
    luffy.classList.remove("hidden");
  }

  zoro.classList.add("hidden");
  console.log("oii");
}

export function showZoro() {
  const luffy = document.getElementById("luffy");
  const zoro = document.getElementById("main-zoro");
  zoro.classList.remove("hidden");
  luffy.classList.add("hidden");
}
