console.log("Hello world!")
//? Does line 1 show up in your console, if it does not
//? check the HTML and make sure the script is linked correctly

//! Create an object that contains five movies. Each of these
//! movies will have a title, and an image url
//* Note: Find images in google and click on "copy image address"
//* in the drop down when doing a two finger click on the image
//* paste this into your image url

const movies = [
    { 
        title : "Ted",
         img :  "https://upload.wikimedia.org/wikipedia/en/d/d4/Ted_%28film%29.png"

    },

    {
       title : "Home Alone",
        img  : "https://www.tvguide.com/a/img/catalog/provider/1/2/1-9441893422.jpg"
    },

    {
    
       title : "Iron Man",
         img : "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg"
    }
        ,
    {
      title : "Batman",
        img : "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg"

    },
    {
        title : "Titantic",
          img : "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg"
    }
]



//! In the HTML, there is an id associated with a div element
//TODO: Get the element with the id of "body"
document.getElementById("body");
////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
//TODO: Iterate throgh the object using forEach
////////////////////////////////////////////////////////
//fill this in */.forEach(data => {
//TODO: Create an "h3" and "img" tag that will contain your
//TODO: movies object's title and image url
//! REMEMBER, you want to create these HTML tags FOR EACH
//! movie inside your object 
////////////////////////////////////////////////////////
movies.forEach(data => {
    const title = document.createNewElement("h3")
    title.innerText = data.title;
    const img = document.createNewElelemnt("img")
    img.src = data.img
    img.addEventListner("click", function () {
        title.innerText = "updated";
    })
})



////////////////////////////////////////////////////////
//TODO: Modify the inner text of the elements created
//TODO: to match your movies object
////////////////////////////////////////////////////////



////////////////////////////////////////////////////////
//! Bonus
//TODO: create a "click" event that changes the title
//TODO: of the movie when you click the image
////////////////////////////////////////////////////////



////////////////////////////////////////////////////////
//* Keep in mind that I purposed kept all of this code 
//* inside the for each iteration so we won't run into 
//* scope problems


