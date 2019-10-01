var input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];
dataHandling2(input);

function dataHandling2(arr) {
  arr.splice(1, 1, "Roman Alamsyah Elsharawy");
  arr.splice(2, 1, "Provinsi Bandar Lampung");
  arr.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(arr);

  var bulan = arr[3].split("/")[1];
  // alternar
  switch (bulan) {
    case "01":
      bulan = "Januari";
      break;
    case "02":
      bulan = "Februari";
      break;
    case "03":
      bulan = "Maret";
      break;
    case "04":
      bulan = "April";
      break;
    case "05":
      bulan = "Mei";
      break;
    case "06":
      bulan = "Juni";
      break;
    case "07":
      bulan = "Juli";
      break;
    case "08":
      bulan = "Agustus";
      break;
    case "09":
      bulan = "September";
      break;
    case "10":
      bulan = "Oktober";
      break;
    case "11":
      bulan = "November";
      break;
    case "12":
      bulan = "Desember";
      break;
  }
  console.log(bulan);
  console.log(
    arr[3].split("/").sort(function(a, b) {
      return Number(b) - Number(a);
    })
  );
  console.log(arr[3].split("/").join("-"));
  console.log(arr[1].toString().slice(0, 14));
}

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
