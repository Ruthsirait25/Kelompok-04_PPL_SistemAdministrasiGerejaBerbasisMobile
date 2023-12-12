const { remote } = require('webdriverio');

const opts = {
  port: 4723,
  capabilities: {
    alwaysMatch: {
      'appium:platformName': 'Android',
      'appium:platformVersion': '11',
      'appium:deviceName': 'palmarum',
      'appium:app': 'D:\\IT DEL\\SEMESTER 5\\Matakuliah\\PPL\\Proyek\\Sistem-Administrasi-Gereja-Berbasis-Mobile\\HKBP Palmarum.apk',
      'appium:automationName': 'UiAutomator2',
      'appium:appPackage': 'com.example.hkbptarutung',
      'appium:noReset': true,
      'appium:newCommandTimeout': '3600',
    },
    firstMatch: [{}],
  },
};



(async () => {
  const driver = await remote(opts);

  const el12 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
await el12.click();
await el12.addValue("admin@gmail.com");
const el13 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
await el13.click();
await el13.addValue("123123");
const el14 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
await el14.click();
const el15 = await driver.$("id:com.example.hkbptarutung:id/iv_registrasi");
await el15.click();
const el16 = await driver.$("xpath://android.widget.TextView[@resource-id=\"com.example.hkbptarutung:id/tv_rv_regislanding_title\" and @text=\"Registrasi baptis\"]");
await el16.click();
const el17 = await driver.$("xpath:(//android.widget.TextView[@resource-id=\"com.example.hkbptarutung:id/tv_person_name\"])[1]");
await el17.click();
const el18 = await driver.$("id:com.example.hkbptarutung:id/btn_lanjut");
await el18.click();
const el19 = await driver.$("id:android:id/button1");
await el19.click();
const el20 = await driver.$("accessibility id:default");
await el20.click();
const el21 = await driver.$("id:com.example.hkbptarutung:id/iv_btn_back");
await el21.click();
const el22 = await driver.$("id:com.example.hkbptarutung:id/ic_logout");
await el22.click();

  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();
