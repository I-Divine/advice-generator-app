let theData;
const advice = document.getElementById("advice");
const adviceId = document.getElementById("advice_id");
document.getElementById("advice-btn").onclick = async () => {
  advice.textContent = "...";
  adviceId.textContent = `ADVICE -`;
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    response
      .json()
      .then((data) => {
        theData = data;
        console.log(theData);
        console.log(theData.slip.advice);
        advice.textContent = `"${theData.slip.advice}"`;
        adviceId.textContent = `ADVICE ${theData.slip.id}`;
      })
      .catch((err) => console.log(err));
    // console.log(theData);
  } catch (error) {
    console.log(error);
  }
};
