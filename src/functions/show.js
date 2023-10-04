export function showLuffy() {
  const luffy = document.getElementById("luffy");
  const zoro = document.getElementById("main-zoro");
  const sanji = document.getElementById("main-sanji");
  const nami = document.getElementById("main-nami");
  const chopper = document.getElementById("main-chopper");
  const franky = document.getElementById("main-franky");
  const brook = document.getElementById("main-brook");

  if (luffy.classList.contains("hidden")) {
    luffy.classList.remove("hidden");
  }
  brook.classList.add("hidden");
  nami.classList.add("hidden");
  chopper.classList.add("hidden");
  zoro.classList.add("hidden");
  sanji.classList.add("hidden");
  franky.classList.add("hidden");

  console.log("oii");
}

export function showZoro() {
  const luffy = document.getElementById("luffy");
  const zoro = document.getElementById("main-zoro");
  const sanji = document.getElementById("main-sanji");
  const nami = document.getElementById("main-nami");
  const chopper = document.getElementById("main-chopper");
  const franky = document.getElementById("main-franky");
  const brook = document.getElementById("main-brook");
  brook.classList.add("hidden");
  franky.classList.add("hidden");
  chopper.classList.add("hidden");
  nami.classList.add("hidden");
  luffy.classList.add("hidden");
  sanji.classList.add("hidden");
  zoro.classList.remove("hidden");
}

export function showSanji() {
  const luffy = document.getElementById("luffy");
  const zoro = document.getElementById("main-zoro");
  const sanji = document.getElementById("main-sanji");
  const nami = document.getElementById("main-nami");
  const chopper = document.getElementById("main-chopper");
  const franky = document.getElementById("main-franky");
  const brook = document.getElementById("main-brook");
  brook.classList.add("hidden");
  franky.classList.add("hidden");
  chopper.classList.add("hidden");
  nami.classList.add("hidden");
  zoro.classList.add("hidden");
  luffy.classList.add("hidden");
  sanji.classList.remove("hidden");
}

export function showNami() {
  const luffy = document.getElementById("luffy");
  const zoro = document.getElementById("main-zoro");
  const sanji = document.getElementById("main-sanji");
  const nami = document.getElementById("main-nami");
  const chopper = document.getElementById("main-chopper");
  const franky = document.getElementById("main-franky");
  const brook = document.getElementById("main-brook");
  brook.classList.add("hidden");
  franky.classList.add("hidden");
  chopper.classList.add("hidden");
  zoro.classList.add("hidden");
  luffy.classList.add("hidden");
  sanji.classList.add("hidden");
  nami.classList.remove("hidden");
}

export function showChopper() {
  const luffy = document.getElementById("luffy");
  const zoro = document.getElementById("main-zoro");
  const sanji = document.getElementById("main-sanji");
  const nami = document.getElementById("main-nami");
  const chopper = document.getElementById("main-chopper");
  const franky = document.getElementById("main-franky");
  const brook = document.getElementById("main-brook");
  brook.classList.add("hidden");
  franky.classList.add("hidden");
  nami.classList.add("hidden");
  zoro.classList.add("hidden");
  luffy.classList.add("hidden");
  sanji.classList.add("hidden");
  chopper.classList.remove("hidden");
}
export function showFranky() {
  const luffy = document.getElementById("luffy");
  const zoro = document.getElementById("main-zoro");
  const sanji = document.getElementById("main-sanji");
  const nami = document.getElementById("main-nami");
  const chopper = document.getElementById("main-chopper");
  const franky = document.getElementById("main-franky");
  const brook = document.getElementById("main-brook");
  brook.classList.add("hidden");
  franky.classList.remove("hidden");
  nami.classList.add("hidden");
  zoro.classList.add("hidden");
  luffy.classList.add("hidden");
  sanji.classList.add("hidden");
  chopper.classList.add("hidden");
}

export function showBrook() {
  const luffy = document.getElementById("luffy");
  const zoro = document.getElementById("main-zoro");
  const sanji = document.getElementById("main-sanji");
  const nami = document.getElementById("main-nami");
  const chopper = document.getElementById("main-chopper");
  const franky = document.getElementById("main-franky");
  const brook = document.getElementById("main-brook");
  brook.classList.remove("hidden");
  franky.classList.add("hidden");
  nami.classList.add("hidden");
  zoro.classList.add("hidden");
  luffy.classList.add("hidden");
  sanji.classList.add("hidden");
  chopper.classList.add("hidden");
}
