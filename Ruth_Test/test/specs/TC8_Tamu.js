const { remote } = require('webdriverio');

const opts = {
  port: 2121,
  capabilities: {
    alwaysMatch: {
      "platformName": "Android",
      "appium:PlatformVersion": "11",
      "appium:deviceName": "Palmarum",
      "appium:app": "D:\\Proyek fix\\HKBP Palmarum Tarutung\\Sistem-Administrasi-Gereja-Berbasis-Mobile\\HKBP Palmarum.apk",
      "appium:automationName": "UIAutomator2",
      "appium:appPackage": "com.example.hkbptarutung",
      "appium:noReset": true
    },
    firstMatch: [{}],
  },
};

(async () => {
  const driver = await remote(opts);
  try {
    // Lakukan langkah-langkah login dan navigasi lainnya
    // ...
    
    // Lakukan tindakan klik pada elemen yang ingin Anda klik
    const el7 = await driver.$("id:com.example.hkbptarutung:id/edt_nik");
    await el7.click();
    await el7.addValue("123456");

    const el8 = await driver.$("id:com.example.hkbptarutung:id/edt_nama_Lengkap");
    await el8.click();
    await el8.addValue("Ruth Sirait");

    const el9 = await driver.$("id:com.example.hkbptarutung:id/edt_nomorHP");
    await el9.click();
    await el9.addValue("081264086157");

    const el10 = await driver.$("id:com.example.hkbptarutung:id/edt_nama_ayah");
    await el10.click();
    await el10.addValue("Rudy Sirait");

    const el11 = await driver.$("id:com.example.hkbptarutung:id/edt_nama_ibu");
    await el11.click();
    await el11.addValue("Melda Silitonga");

    const el12 = await driver.$("id:com.example.hkbptarutung:id/edt_Tempat_Lahir");
    await el12.click();
    await el12.addValue("medan");

    const el13 = await driver.$("id:com.example.hkbptarutung:id/edt_tanggal_lahir");
    await el13.click();
    const el14 = await driver.$("accessibility id:13 December 2023");
    await el14.click();
    const el15 = await driver.$("id:android:id/button1");
    await el15.click();

    // ... Langkah-langkah selanjutnya

    await driver.waitUntil(async () => {
      // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
      return // kondisi yang harus dipenuhi
    }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

    await driver.deleteSession();
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
    await driver.deleteSession(); // Tutup sesi driver jika terjadi kesalahan
  }
})();