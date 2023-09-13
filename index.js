document.getElementById("btn").onclick = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    // const movies = await response.json();
    console.log(response.json());
  } catch (error) {
    console.log(error);
  }
  console.log("pressed");

  //   getadvice();
};
// async function getadvice() {}
