function changeColumn1() {
    let newHeading1 = document.getElementById("input1").value;
    if (newHeading1.trim() !== "") {
      document.getElementById("heading1").innerText = newHeading1;
    }
    document.getElementById("column1").style.backgroundColor = "#3498db"; // Change background to blue
  }
  
  function changeColumn2() {
    let newHeading2 = document.getElementById("input2").value;
    if (newHeading2.trim() !== "") {
      document.getElementById("heading2").innerText = newHeading2;
    }
    document.getElementById("column2").style.backgroundColor = "#e74c3c"; // Change background to red
  }
  