


function filterMusic(num) {

    var showAll = document.getElementById("musicFilters_ShowAll");
    var country = document.getElementById("musicFilters_Country");
    var rock = document.getElementById("musicFilters_Rock");

    var musicComponent1 = document.getElementById("musicComponent1");
    var musicComponent2 = document.getElementById("musicComponent2");
    var musicComponent3 = document.getElementById("musicComponent3");
    var musicComponent4 = document.getElementById("musicComponent4");
    var musicComponent5 = document.getElementById("musicComponent5");
    var musicComponent6 = document.getElementById("musicComponent6");
    var musicComponent7 = document.getElementById("musicComponent7");
    var musicComponent8 = document.getElementById("musicComponent8");
    var musicComponent9 = document.getElementById("musicComponent9");
    var musicComponent10 = document.getElementById("musicComponent10");
    var musicComponent11 = document.getElementById("musicComponent11");
    var musicComponent12 = document.getElementById("musicComponent12");
    var musicComponent13 = document.getElementById("musicComponent13");

    
    if (num == 1) {

    if (showAll.checked == true && country.checked == true && rock.checked == true){
      musicComponent1.style.display = "flex";
      musicComponent2.style.display = "flex";
      musicComponent3.style.display = "flex";
      musicComponent4.style.display = "flex";
      musicComponent5.style.display = "flex";
      musicComponent6.style.display = "flex";
      musicComponent7.style.display = "flex";
      musicComponent8.style.display = "flex";
      musicComponent9.style.display = "flex";
      musicComponent10.style.display = "flex";
      musicComponent11.style.display = "flex";
      musicComponent12.style.display = "flex";
      musicComponent13.style.display = "flex";
    
      showAll.classList.remove('selected');
    }
    if (showAll.checked == true && country.checked == true && rock.checked == false){
      musicComponent1.style.display = "flex";
      musicComponent2.style.display = "flex";
      musicComponent3.style.display = "none";
      musicComponent4.style.display = "flex";
      musicComponent5.style.display = "none";
      musicComponent6.style.display = "flex";
      musicComponent7.style.display = "none";
      musicComponent8.style.display = "none";
      musicComponent9.style.display = "flex";
      musicComponent10.style.display = "none";
      musicComponent11.style.display = "none";
      musicComponent12.style.display = "flex";
      musicComponent13.style.display = "flex";
    
      showAll.classList.remove('selected');
    }
    if (showAll.checked == true && country.checked == false && rock.checked == true){
      musicComponent1.style.display = "none";
      musicComponent2.style.display = "none";
      musicComponent3.style.display = "flex";
      musicComponent4.style.display = "none";
      musicComponent5.style.display = "flex";
      musicComponent6.style.display = "none";
      musicComponent7.style.display = "flex";
      musicComponent8.style.display = "flex";
      musicComponent9.style.display = "none";
      musicComponent10.style.display = "flex";
      musicComponent11.style.display = "flex";
      musicComponent12.style.display = "none";
      musicComponent13.style.display = "none";
    
      showAll.classList.remove('selected');
    }
    if (showAll.checked == true && country.checked == false && rock.checked == false){
      musicComponent1.style.display = "none";
      musicComponent2.style.display = "none";
      musicComponent3.style.display = "none";
      musicComponent4.style.display = "none";
      musicComponent5.style.display = "none";
      musicComponent6.style.display = "none";
      musicComponent7.style.display = "none";
      musicComponent8.style.display = "none";
      musicComponent9.style.display = "none";
      musicComponent10.style.display = "none";
      musicComponent11.style.display = "none";
      musicComponent12.style.display = "none";
      musicComponent13.style.display = "none";
    
      showAll.classList.remove('selected');
    }


    if (showAll.checked == false && country.checked == true && rock.checked == true){
      musicComponent1.style.display = "flex";
      musicComponent2.style.display = "flex";
      musicComponent3.style.display = "flex";
      musicComponent4.style.display = "flex";
      musicComponent5.style.display = "flex";
      musicComponent6.style.display = "flex";
      musicComponent7.style.display = "flex";
      musicComponent8.style.display = "flex";
      musicComponent9.style.display = "flex";
      musicComponent10.style.display = "flex";
      musicComponent11.style.display = "flex";
      musicComponent12.style.display = "flex";
      musicComponent13.style.display = "flex";
    
      showAll.classList.add('selected');
    }
    if (showAll.checked == false && country.checked == false && rock.checked == true){
      musicComponent1.style.display = "flex";
      musicComponent2.style.display = "flex";
      musicComponent3.style.display = "flex";
      musicComponent4.style.display = "flex";
      musicComponent5.style.display = "flex";
      musicComponent6.style.display = "flex";
      musicComponent7.style.display = "flex";
      musicComponent8.style.display = "flex";
      musicComponent9.style.display = "flex";
      musicComponent10.style.display = "flex";
      musicComponent11.style.display = "flex";
      musicComponent12.style.display = "flex";
      musicComponent13.style.display = "flex";
    
      showAll.classList.add('selected');
    }
    if (showAll.checked == false && country.checked == true && rock.checked == false){
      musicComponent1.style.display = "flex";
      musicComponent2.style.display = "flex";
      musicComponent3.style.display = "flex";
      musicComponent4.style.display = "flex";
      musicComponent5.style.display = "flex";
      musicComponent6.style.display = "flex";
      musicComponent7.style.display = "flex";
      musicComponent8.style.display = "flex";
      musicComponent9.style.display = "flex";
      musicComponent10.style.display = "flex";
      musicComponent11.style.display = "flex";
      musicComponent12.style.display = "flex";
      musicComponent13.style.display = "flex";
    
      showAll.classList.add('selected');
    }
    if (showAll.checked == false && country.checked == false && rock.checked == false){
      musicComponent1.style.display = "flex";
      musicComponent2.style.display = "flex";
      musicComponent3.style.display = "flex";
      musicComponent4.style.display = "flex";
      musicComponent5.style.display = "flex";
      musicComponent6.style.display = "flex";
      musicComponent7.style.display = "flex";
      musicComponent8.style.display = "flex";
      musicComponent9.style.display = "flex";
      musicComponent10.style.display = "flex";
      musicComponent11.style.display = "flex";
      musicComponent12.style.display = "flex";
      musicComponent13.style.display = "flex";
    
      showAll.classList.add('selected');
    }
  }




    if (num == 2) {

      if (showAll.checked == true && country.checked == true && rock.checked == true){
        musicComponent1.style.display = "flex";
        musicComponent2.style.display = "flex";
        musicComponent3.style.display = "flex";
        musicComponent4.style.display = "flex";
        musicComponent5.style.display = "flex";
        musicComponent6.style.display = "flex";
        musicComponent7.style.display = "flex";
        musicComponent8.style.display = "flex";
        musicComponent9.style.display = "flex";
        musicComponent10.style.display = "flex";
        musicComponent11.style.display = "flex";
        musicComponent12.style.display = "flex";
        musicComponent13.style.display = "flex";
      
        country.classList.add('selected');
      }
      if (showAll.checked == true && country.checked == true && rock.checked == false){
        musicComponent1.style.display = "flex";
        musicComponent2.style.display = "flex";
        musicComponent3.style.display = "none";
        musicComponent4.style.display = "flex";
        musicComponent5.style.display = "none";
        musicComponent6.style.display = "flex";
        musicComponent7.style.display = "none";
        musicComponent8.style.display = "none";
        musicComponent9.style.display = "flex";
        musicComponent10.style.display = "none";
        musicComponent11.style.display = "none";
        musicComponent12.style.display = "flex";
        musicComponent13.style.display = "flex";
      
        country.classList.add('selected');
      }
      if (showAll.checked == true && country.checked == false && rock.checked == true){
        musicComponent1.style.display = "none";
        musicComponent2.style.display = "none";
        musicComponent3.style.display = "flex";
        musicComponent4.style.display = "none";
        musicComponent5.style.display = "flex";
        musicComponent6.style.display = "none";
        musicComponent7.style.display = "flex";
        musicComponent8.style.display = "flex";
        musicComponent9.style.display = "none";
        musicComponent10.style.display = "flex";
        musicComponent11.style.display = "flex";
        musicComponent12.style.display = "none";
        musicComponent13.style.display = "none";
      
        country.classList.remove('selected');
      }
      if (showAll.checked == true && country.checked == false && rock.checked == false){
        musicComponent1.style.display = "none";
        musicComponent2.style.display = "none";
        musicComponent3.style.display = "none";
        musicComponent4.style.display = "none";
        musicComponent5.style.display = "none";
        musicComponent6.style.display = "none";
        musicComponent7.style.display = "none";
        musicComponent8.style.display = "none";
        musicComponent9.style.display = "none";
        musicComponent10.style.display = "none";
        musicComponent11.style.display = "none";
        musicComponent12.style.display = "none";
        musicComponent13.style.display = "none";
      
        country.classList.remove('selected');
      }
  
  
      if (showAll.checked == false && country.checked == true && rock.checked == true){
        musicComponent1.style.display = "flex";
        musicComponent2.style.display = "flex";
        musicComponent3.style.display = "flex";
        musicComponent4.style.display = "flex";
        musicComponent5.style.display = "flex";
        musicComponent6.style.display = "flex";
        musicComponent7.style.display = "flex";
        musicComponent8.style.display = "flex";
        musicComponent9.style.display = "flex";
        musicComponent10.style.display = "flex";
        musicComponent11.style.display = "flex";
        musicComponent12.style.display = "flex";
        musicComponent13.style.display = "flex";
      
        country.classList.add('selected');
      }
      if (showAll.checked == false && country.checked == false && rock.checked == true){
        musicComponent1.style.display = "flex";
        musicComponent2.style.display = "flex";
        musicComponent3.style.display = "flex";
        musicComponent4.style.display = "flex";
        musicComponent5.style.display = "flex";
        musicComponent6.style.display = "flex";
        musicComponent7.style.display = "flex";
        musicComponent8.style.display = "flex";
        musicComponent9.style.display = "flex";
        musicComponent10.style.display = "flex";
        musicComponent11.style.display = "flex";
        musicComponent12.style.display = "flex";
        musicComponent13.style.display = "flex";
      
        country.classList.remove('selected');
      }
      if (showAll.checked == false && country.checked == true && rock.checked == false){
        musicComponent1.style.display = "flex";
        musicComponent2.style.display = "flex";
        musicComponent3.style.display = "flex";
        musicComponent4.style.display = "flex";
        musicComponent5.style.display = "flex";
        musicComponent6.style.display = "flex";
        musicComponent7.style.display = "flex";
        musicComponent8.style.display = "flex";
        musicComponent9.style.display = "flex";
        musicComponent10.style.display = "flex";
        musicComponent11.style.display = "flex";
        musicComponent12.style.display = "flex";
        musicComponent13.style.display = "flex";
      
        country.classList.add('selected');
      }
      if (showAll.checked == false && country.checked == false && rock.checked == false){
        musicComponent1.style.display = "flex";
        musicComponent2.style.display = "flex";
        musicComponent3.style.display = "flex";
        musicComponent4.style.display = "flex";
        musicComponent5.style.display = "flex";
        musicComponent6.style.display = "flex";
        musicComponent7.style.display = "flex";
        musicComponent8.style.display = "flex";
        musicComponent9.style.display = "flex";
        musicComponent10.style.display = "flex";
        musicComponent11.style.display = "flex";
        musicComponent12.style.display = "flex";
        musicComponent13.style.display = "flex";
      
        country.classList.remove('selected');
      }
  }

  if (num == 3) {

    if (showAll.checked == true && country.checked == true && rock.checked == true){
      musicComponent1.style.display = "flex";
      musicComponent2.style.display = "flex";
      musicComponent3.style.display = "flex";
      musicComponent4.style.display = "flex";
      musicComponent5.style.display = "flex";
      musicComponent6.style.display = "flex";
      musicComponent7.style.display = "flex";
      musicComponent8.style.display = "flex";
      musicComponent9.style.display = "flex";
      musicComponent10.style.display = "flex";
      musicComponent11.style.display = "flex";
      musicComponent12.style.display = "flex";
      musicComponent13.style.display = "flex";
    
      rock.classList.add('selected');
    }
    if (showAll.checked == true && country.checked == true && rock.checked == false){
      musicComponent1.style.display = "flex";
      musicComponent2.style.display = "flex";
      musicComponent3.style.display = "none";
      musicComponent4.style.display = "flex";
      musicComponent5.style.display = "none";
      musicComponent6.style.display = "flex";
      musicComponent7.style.display = "none";
      musicComponent8.style.display = "none";
      musicComponent9.style.display = "flex";
      musicComponent10.style.display = "none";
      musicComponent11.style.display = "none";
      musicComponent12.style.display = "flex";
      musicComponent13.style.display = "flex";
    
      rock.classList.remove('selected');
    }
    if (showAll.checked == true && country.checked == false && rock.checked == true){
      musicComponent1.style.display = "none";
      musicComponent2.style.display = "none";
      musicComponent3.style.display = "flex";
      musicComponent4.style.display = "none";
      musicComponent5.style.display = "flex";
      musicComponent6.style.display = "none";
      musicComponent7.style.display = "flex";
      musicComponent8.style.display = "flex";
      musicComponent9.style.display = "none";
      musicComponent10.style.display = "flex";
      musicComponent11.style.display = "flex";
      musicComponent12.style.display = "none";
      musicComponent13.style.display = "none";
    
      rock.classList.add('selected');
    }
    if (showAll.checked == true && country.checked == false && rock.checked == false){
      musicComponent1.style.display = "none";
      musicComponent2.style.display = "none";
      musicComponent3.style.display = "none";
      musicComponent4.style.display = "none";
      musicComponent5.style.display = "none";
      musicComponent6.style.display = "none";
      musicComponent7.style.display = "none";
      musicComponent8.style.display = "none";
      musicComponent9.style.display = "none";
      musicComponent10.style.display = "none";
      musicComponent11.style.display = "none";
      musicComponent12.style.display = "none";
      musicComponent13.style.display = "none";
    
      rock.classList.remove('selected');
    }
  
  
    if (showAll.checked == false && country.checked == true && rock.checked == true){
      musicComponent1.style.display = "flex";
      musicComponent2.style.display = "flex";
      musicComponent3.style.display = "flex";
      musicComponent4.style.display = "flex";
      musicComponent5.style.display = "flex";
      musicComponent6.style.display = "flex";
      musicComponent7.style.display = "flex";
      musicComponent8.style.display = "flex";
      musicComponent9.style.display = "flex";
      musicComponent10.style.display = "flex";
      musicComponent11.style.display = "flex";
      musicComponent12.style.display = "flex";
      musicComponent13.style.display = "flex";
    
      rock.classList.add('selected');
    }
    if (showAll.checked == false && country.checked == false && rock.checked == true){
      musicComponent1.style.display = "flex";
      musicComponent2.style.display = "flex";
      musicComponent3.style.display = "flex";
      musicComponent4.style.display = "flex";
      musicComponent5.style.display = "flex";
      musicComponent6.style.display = "flex";
      musicComponent7.style.display = "flex";
      musicComponent8.style.display = "flex";
      musicComponent9.style.display = "flex";
      musicComponent10.style.display = "flex";
      musicComponent11.style.display = "flex";
      musicComponent12.style.display = "flex";
      musicComponent13.style.display = "flex";
    
      rock.classList.add('selected');
    }
    if (showAll.checked == false && country.checked == true && rock.checked == false){
      musicComponent1.style.display = "flex";
      musicComponent2.style.display = "flex";
      musicComponent3.style.display = "flex";
      musicComponent4.style.display = "flex";
      musicComponent5.style.display = "flex";
      musicComponent6.style.display = "flex";
      musicComponent7.style.display = "flex";
      musicComponent8.style.display = "flex";
      musicComponent9.style.display = "flex";
      musicComponent10.style.display = "flex";
      musicComponent11.style.display = "flex";
      musicComponent12.style.display = "flex";
      musicComponent13.style.display = "flex";
    
      rock.classList.remove('selected');
    }
    if (showAll.checked == false && country.checked == false && rock.checked == false){
      musicComponent1.style.display = "flex";
      musicComponent2.style.display = "flex";
      musicComponent3.style.display = "flex";
      musicComponent4.style.display = "flex";
      musicComponent5.style.display = "flex";
      musicComponent6.style.display = "flex";
      musicComponent7.style.display = "flex";
      musicComponent8.style.display = "flex";
      musicComponent9.style.display = "flex";
      musicComponent10.style.display = "flex";
      musicComponent11.style.display = "flex";
      musicComponent12.style.display = "flex";
      musicComponent13.style.display = "flex";
    
      rock.classList.remove('selected');
    }
  }
}



const  selectMoviePoster = (num) => {
    const movieDesc1 = document.getElementById('movieDesc1');
    const movieDescRevert1 = document.getElementById('movieRevert1');
    const movieText1 = document.getElementById('moviePoster1_Text');

    switch (num) {
    case (1):
      movieDesc1.style.display = 'flex';
      movieText1.style.display = 'none';
      movieDescRevert1.style.display = 'flex';
    break;
    case (2):

      break;
    case (3):
 
      break;
   case (4):

      break;      
  }
}



function revealMovies() {
  var reveals = document.querySelectorAll(".reveal")

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealMovies);


function revealAllMusic() {
  var reveals = document.querySelectorAll(".reveal2")

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealAllMusic);

