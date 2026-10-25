code for spreaddsheet

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse data JSON yang dikirim dari HTML
    var data = JSON.parse(e.postData.contents);
    
    // Tambahkan baris baru ke Google Sheets
    sheet.appendRow([
      new Date(),             // Kolom A: Waktu
      data.nama,              // Kolom B: Nama Siswa
      data.skorPG,            // Kolom C: Skor PG (0-100)
      data.jawabanPgDetails,  // Kolom D: Rincian Pilihan Ganda (cth: S1:A, S2:B, ...)
      data.uraian6,           // Kolom E: Uraian Soal 6
      data.uraian7,           // Kolom F: Uraian Soal 7
      data.uraian8            // Kolom G: Uraian Soal 8
    ]);

    // Response Sukses
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}


function doGet(e) {
  return ContentService.createTextOutput("Web App Google Apps Script Aktif!");
}

https://script.google.com/macros/s/AKfycbwiFvjbMdE38NtdTeEPzaWa212nawgqrjqn_m7cz7wZnkivVh5WXDV8Nmg-ssebeg/exec