function hotelRoom(input) {
  let mounth = input[0];
  let numberNights = Number(input[1]);
  let Studio = 0;
  let Apartment = 0;

  switch (mounth) {
    case "May":
    case "October":
      Studio = 50.0 * numberNights;
      Apartment = 65.0 * numberNights;
      if (numberNights > 7 && numberNights <= 14) {
        Studio = Studio - Studio * 0.05;
      } else if (numberNights > 14) {
        Studio = Studio - Studio * 0.3;
        Apartment = Apartment - Apartment * 0.1;
      }
      break;

    case "June":
    case "September":
      Studio = 75.2 * numberNights;
      Apartment = 68.7 * numberNights;
      if (numberNights > 14) {
        Studio = Studio - Studio * 0.2;
        Apartment = Apartment - Apartment * 0.1;
      }
      break;

    case "July":
    case "August":
      Studio = 76.0 * numberNights;
      Apartment = 77.0 * numberNights;
      if (numberNights > 14) {
        Apartment = Apartment - Apartment * 0.1;
      }
      break;
  }

  {
    console.log(`Apartment: ${Apartment.toFixed(2)} lv.`);
  }
  {
    console.log(`Studio: ${Studio.toFixed(2)} lv.`);
  }
}

hotelRoom(["May", "15"]);
hotelRoom(["June", "14"]);
hotelRoom(["August", "20"]);
