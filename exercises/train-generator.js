function* getStop() {
  yield "A";
  yield "B";
  yield "C";
  yield "D";
  yield "E";
}

const nycTrainline = getStop();
const nexStopButton = document.querySelector("#next-stop");

nexStopButton.addEventListener("click", () => {
  let currStop = nycTrainline.next();
  if (currStop.done) {
    console.log("We made it!");
    nexStopButton.setAttribute("disabled", true);
  }
});
