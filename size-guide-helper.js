function showSizeGuide() {
  var helmetSizeInput = parseFloat(
    document.getElementById("helmetSizeInput").value
  );
  var gloveSizeInput = parseFloat(
    document.getElementById("gloveSizeInput").value
  );
  var sleeveSizeInput = parseFloat(
    document.getElementById("sleeveSizeInput").value
  );
  var jerseySizeInput = parseFloat(
    document.getElementById("jerseySizeInput").value
  );
  var sockSizeInput = parseFloat(
    document.getElementById("sockSizeInput").value
  );

  var helmetSizeOutput,
    gloveSizeOutput,
    sleeveSizeOutput,
    jerseySizeOutput,
    sockSizeOutput;

  const helmetSizeHandler = () => {
    if (helmetSizeInput >= 55.0 && helmetSizeInput <= 56.4) {
      helmetSizeOutput = "S";
    } else if (helmetSizeInput >= 56.5 && helmetSizeInput <= 58.4) {
      helmetSizeOutput = "M";
    } else if (helmetSizeInput >= 58.5 && helmetSizeInput <= 60.4) {
      helmetSizeOutput = "L";
    } else if (helmetSizeInput >= 60.5 && helmetSizeInput <= 62.0) {
      helmetSizeOutput = "XL";
    } else {
      helmetSizeOutput = "Invalid";
    }
    return helmetSizeOutput;
  };

  const gloveSizeHandler = () => {
    if (gloveSizeInput >= 7.5 && gloveSizeInput <= 7.9) {
      gloveSizeOutput = "M";
    } else if (gloveSizeInput >= 7.9 && gloveSizeInput <= 8.3) {
      gloveSizeOutput = "L";
    } else if (gloveSizeInput >= 8.3 && gloveSizeInput <= 8.7) {
      gloveSizeOutput = "XL";
    } else {
      gloveSizeOutput = "Invalid";
    }
    return gloveSizeOutput;
  };

  const sleeveSizeHandler = () => {
    if (sleeveSizeInput == 10) {
      sleeveSizeOutput = "S/M";
    } else if (sleeveSizeInput == 13) {
      sleeveSizeOutput = "L/XL";
    } else {
      sleeveSizeOutput = "Invalid";
    }
    return sleeveSizeOutput;
  };

  const jerseySizeHandler = () => {
    if (jerseySizeInput >= 14.0 && jerseySizeInput <= 14.9) {
      jerseySizeOutput = "S";
    } else if (jerseySizeInput >= 15.0 && jerseySizeInput <= 15.9) {
      jerseySizeOutput = "M";
    } else if (jerseySizeInput >= 16.0 && jerseySizeInput <= 16.9) {
      jerseySizeOutput = "L";
    } else if (jerseySizeInput >= 17.0 && jerseySizeInput <= 17.9) {
      jerseySizeOutput = "XL";
    } else if (jerseySizeInput >= 18.0 && jerseySizeInput <= 18.9) {
      jerseySizeOutput = "2XL";
    } else if (jerseySizeInput >= 19.0 && jerseySizeInput <= 19.9) {
      jerseySizeOutput = "3XL";
    } else {
      jerseySizeOutput = "Invalid";
    }
    return jerseySizeOutput;
  };

  const sockSizeHandler = () => {
    if (sockSizeInput >= 6.5 && sockSizeInput <= 9.0) {
      sockSizeOutput = "M";
    } else if (sockSizeInput >= 9.5 && sockSizeInput <= 12.0) {
      sockSizeOutput = "L";
    } else {
      sockSizeOutput = "Invalid";
    }
    return sockSizeOutput;
  };

  if (helmetSizeInput.toString().trim() == "") {
    helmetSizeOutput = "";
  } else {
    helmetSizeOutput = helmetSizeHandler();
  }

  if (gloveSizeInput.toString().trim() == "") {
    gloveSizeOutput = "";
  } else {
    gloveSizeOutput = gloveSizeHandler();
  }

  if (sleeveSizeInput.toString().trim() == "") {
    sleeveSizeOutput = "";
  } else {
    sleeveSizeOutput = sleeveSizeHandler();
  }

  if (jerseySizeInput.toString().trim() == "") {
    jerseySizeOutput = "";
  } else {
    jerseySizeOutput = jerseySizeHandler();
  }

  if (sockSizeInput.toString().trim() == "") {
    sockSizeOutput = "";
  } else {
    sockSizeOutput = sockSizeHandler();
  }

  var finalResult =
    "<p>" +
    "<span>Helmets:</span> " +
    helmetSizeOutput +
    "<br>" +
    " " +
    "<span>Gloves:</span> " +
    gloveSizeOutput +
    "<br>" +
    " " +
    "<span>Arm Sleeves:</span> " +
    sleeveSizeOutput +
    "<br>" +
    " " +
    "<span>Jerseys:</span> " +
    jerseySizeOutput +
    "<br>" +
    " " +
    "<span>Socks:</span> " +
    sockSizeOutput +
    "</p>";

  var finalResultParagraph = document.createElement("div");
  finalResultParagraph.id = "finalResult";
  finalResultParagraph.innerHTML = finalResult;

  var sizeGuideHelperResult = document.getElementById(
    "size-guide-helper-result"
  );
  sizeGuideHelperResult.innerHTML = "";
  sizeGuideHelperResult.appendChild(finalResultParagraph);
}
