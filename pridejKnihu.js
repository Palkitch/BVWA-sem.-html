$(document).ready(function () {
  $.getJSON("./knihy.json", function (data) {
    $.each(data, function (key, value) {
      var bookDiv = $("<div class='kniha'></div>");
      var imageDiv = $("<div class='fotka'></div>");
      var image = $("<img src='" + value.image + "' alt=''>");
      var descriptionDiv = $("<div class='popis'></div>");
      var availabilityDiv = $("<div class='dostupnost'></div>");
      var title = $("<h3>" + value.title + "</h3>");
      var description = $("<p>" + value.description + "</p>");
      var availability = $(
        value.availability
          ? "<p style='color:green'>Dostupné</p>"
          : "<p style='color:darkred'>Nedostupné</p>"
      );

      imageDiv.append(image);
      descriptionDiv.append(title);
      descriptionDiv.append(description);
      descriptionDiv.append(availability);

      bookDiv.append(imageDiv);
      bookDiv.append(descriptionDiv);
      bookDiv.append(availabilityDiv);
      $("main").append(bookDiv);
    });
  });

  function saveData(bookData, bookElement) {
    var jsonData = JSON.stringify(bookData);
    $.ajax({
      url: "knihy.json",
      type: "PUT",
      data: jsonData,
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function () {
        console.log("Data saved successfully.");
        bookElement.remove(); // Remove the book element from the page
      },
    });
  }
});
