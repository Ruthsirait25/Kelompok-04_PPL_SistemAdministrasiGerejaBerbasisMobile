// const { remote } = require('webdriverio');

// const opts = {
//   port: 2121,
//   capabilities: {
//     alwaysMatch: {
//         "platformName": "Android",
//         "appium:PlatformVersion": "11",
//         "appium:deviceName": "Palmarum",
//         "appium:app": "D:\\Proyek fix\\HKBP Palmarum Tarutung\\Sistem-Administrasi-Gereja-Berbasis-Mobile\\HKBP Palmarum.apk",
//         "appium:automationName": "UIAutomator2",
//         "appium:appPackage": "com.example.hkbptarutung",
//         "appium:noReset": true
//     },
//     firstMatch: [{}],
//   },
// };



// (async () => {
//   const driver = await remote(opts);
//   const el1 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
//   await el1.click();
//   await el1.addValue("ruthsirait24@gmail.com");
//   const el2 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
//   await el2.click();
//   await el2.addValue("ruth123");
//   const el3 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
//   await el3.click();
//   const el4 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
//   await el4.click();
//   const el5 = await driver.$("id:com.example.hkbptarutung:id/iv_history");
//   await el5.click();
//   const el6 = await driver.$("id:com.example.hkbptarutung:id/iv_acaraminggu");
//   await el6.click();
//   const el7 = await driver.$("id:com.example.hkbptarutung:id/iv_btn_back");
//   await el7.click();
//   const el8 = await driver.$("id:com.example.hkbptarutung:id/iv_WartaJemaat");
//   await el8.click();
//   const el9 = await driver.$("id:com.example.hkbptarutung:id/btn_ketentuan_sidi");
//   await el9.click();
//   const el10 = await driver.$("id:com.example.hkbptarutung:id/btn_register_now");
//   await el10.click();
//   const el11 = await driver.$("id:com.example.hkbptarutung:id/edt_namaLengkap");
//   await el11.click();
//   await driver.waitUntil(() => {
//     // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
//     return // kondisi yang harus dipenuhi
//  }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
//   await driver.deleteSession();
// })();