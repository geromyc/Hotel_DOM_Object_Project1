var eprise = {
  name: 'Enterprise Car Rentals',
  economyClass: 'Economy Class',
  economyCars: 150,
  economyRented: 140,
  midsizeClass: 'Midsize Class',
  midsizeCars: 125,
  midsizeRented: 122, 
  
    economyAvailable: function(){
        return this.economyCars - this.economyRented;
    },
    midsizeAvailable: function(){
        return this.midsizeCars - this.midsizeRented;
    },
    bookEcon: function (){
        return this.economyRented++;
    },
    bookMid: function (){
        return this.midsizeRented++;
    }
};

  function update() {
    document.getElementById("name").innerHTML = eprise.name;
    document.getElementById("econ").innerHTML = eprise.economyClass;
    document.getElementById("midsize").innerHTML = eprise.midsizeClass;
    document.getElementById("econAvail").innerHTML = eprise.economyAvailable();
    document.getElementById("midsizeAvail").innerHTML = eprise.midsizeAvailable();
  };
  function economyClass() {
      if (eprise.economyAvailable()>0){
            document.getElementById("econAvail").innerHTML = eprise.bookEcon();
            document.getElementById("econAvail").innerHTML = eprise.economyAvailable();
      } else alert ("GFY");
  };
 
  function midsizeClass() {
      if (eprise.midsizeAvailable()>0){
            document.getElementById("midsizeAvail").innerHTML = eprise.bookMid();
            document.getElementById("midsizeAvail").innerHTML = eprise.midsizeAvailable();
      } else alert ("GFY");
  };