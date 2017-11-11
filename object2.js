var cars = {
  name: 'Enterprise Car Rentals',
  economyClass: 'Economy Class',
  economyCars: 150,
  economyRented: 140,
  midsizeClass: 'Midsize Class',
  midsizeCars: 125,
  midsizeRented: 122, 
  rentMid: function(){
    this.midCarsRented++;
    this.update();
  },
  rentEcon: function(){
    this.economyCarsRented++;
    this.update();
  },
  update: function (){
    document.getElementById('econCarsAvail').innerHTML = this.economyCarsTotal - this.economyCarsRented;
    document.getElementById('midCarsAvail').innerHTML = this.midCarsTotal - this.midCarsRented;
  }
};
  
  window.onload = function(){
  document.getElementById('businessName').innerHTML = cars.businessName;
  };
  document.getElementById('updateAvail').onclick = function(){
    cars.update();
  };
  document.getElementById('rentEcono').onclick = function(){
    cars.renEcon();
  };
  document.getElementById('rentMid').onclick = function(){
  cars.rentMid();
  };