var newScores = [document.getElementById("newscore1"), document.getElementById("newscore2"), document.getElementById("newscore3"), document.getElementById("newscore4"), document.getElementById("newscore5"), document.getElementById("newscore6"), document.getElementById("newscore7"), document.getElementById("newscore8")];
var scores = [document.getElementById("score1"), document.getElementById("score2"), document.getElementById("score3"), document.getElementById("score4"), document.getElementById("score5"), document.getElementById("score6"), document.getElementById("score7"), document.getElementById("score8")];
var updateButton = document.getElementById("updateScores");

function updateClick()
{
  updateButton.onclick = function(e)
  {
    for (var i = 0; i < 8; i++)
    {
      if (!isNaN(parseInt(newScores[i].value)))
      {
        scores[i].innerText = String(parseInt(scores[i].innerText) + parseInt(newScores[i].value))

      }
      newScores[i].value = "";
    }
  }
}


function update()
{
  requestAnimationFrame(update);
  updateClick();
  
}
update();