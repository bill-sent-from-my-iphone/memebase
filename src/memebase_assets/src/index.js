import { memebase } from "../../declarations/memebase";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with memebase actor, calling the greet method
  const greeting = await memebase.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
