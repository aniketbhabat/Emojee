
function filterEmoji() {
    let input = document.getElementById("emoji").value;
    displayEmoji(input);
  }
  
  function displayEmoji(query = "") {

    let filteredData = emojiList.filter((e) => {
      if (e.description.indexOf(query) != -1) {
        return true;
      }
      if (e.tags.some((ele) => ele.startsWith(query))) {
        return true;
      }
      if (e.aliases.some((ele) => ele.startsWith(query))) {
        return true;
      }
    });

    let tbody = document.getElementById("tabelData");
  
    tbody.innerHTML= "";
  
    filteredData.forEach((e) => {

      let new_row = document.createElement("div");
      let new_emoji = document.createElement("p");
      new_emoji.innerText = e.emoji;
      new_row.classList.add("emojibox");
      new_emoji.classList.add("emojiline");
      
      new_row.append(new_emoji);
      tbody.appendChild(new_row);
    });
  }
  
  let inputValue = document.getElementById("emoji");
  inputValue.addEventListener("keyup", filterEmoji);
  
  window.onload = () => displayEmoji();


  



 







