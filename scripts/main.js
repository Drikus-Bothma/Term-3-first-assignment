// When the document loads
const plants = [

  {"name": "Fikus Tree",
  "price": 350,
  "description": "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
  "image": "plant1.png"},

{
  "name": "White Sprite Succulent",
  "price": 200,
  "description": "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
  "image": "plant2.png"
},
{
  "name": "Snake Plant",
  "price": 400,
  "description": "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
  "image": "plant3.png"
},
{
  "name": "Parlour Palm",
  "price": 350,
  "description": "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
  "image": "plant4.png"
},
{
  "name": "Japanese Maple",
  "price": 1200,
  "description": "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
  "image": "plant5.png"
}
  
];


$(document).ready(function(){

    console.log("Hello");
    

    // -----------------------------------------
    // Home Page

    // When the document loads, animate the hero image upwards
    $(".hero-image").animate({top: '-=100px'});

    // -----------------------------------------
    // Browse Page

    // Hide all description text from the plant cards
    $("#descriptionText").hide();

    loadPlants();
  });  

      function loadPlants () {
          for (let i = 0; i < plants.length; i++) {
              // console.log(plants[i]);
      
              $("#plantsContainer").append($("#plantCardTemplate").html());
      
              let currentChild = $("#plantsContainer").children().eq(i+1);
              $(currentChild).find(".card-img-top").attr('src','assets/' + plants[i].image);
              $(currentChild).find("#nameText").text(plants[i].name);
              $(currentChild).find("#priceText").text('R ' + plants[i].price);
              $(currentChild).find("#descriptionText").text(plants[i].description);
              $(currentChild).find("#descriptionText").hide(); 
          }
      }
      
      $("#plantsContainer").on('click', '.card', function(){
      
        // Toggle the price & description text
        $(this).find("#priceText").toggle();
        $(this).find("#descriptionText").toggle();
      
        // Resize the image to fit the additional content
        $(this).find(".card-img-top").toggleClass("small");

    }); 


  


  // When the card is clicked
  $(".card").click(function(){

    // Toggle the price & description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit the additional content
    $(".card-img-top").toggleClass("small");

  });

$("#headingOne").click(function () {
  $("#collapseOne").toggle().collapse();
});

$("#headingTwo").click(function () {
  $("#collapseTwo").toggle().collapse();
});

$("#headingThree").click(function () {
  $("#collapseThree").toggle().collapse();
});



$("#removeBtn1").click(function(){
  $("#tableRow1").remove();
});

$("#removeBtn2").click(function(){
  $("#tableRow2").remove();
});

$("#removeBtn3").click(function(){
  $("#tableRow3").remove();
});

$("#removeBtn4").click(function(){
  $("#tableRow4").remove();
});
