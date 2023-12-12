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

  const el14 = await driver.$("id:com.example.hkbptarutung:id/logohkbp");
  await el14.click();
  const el15 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
  await el15.click();
  await el15.addValue("admin1@gmail.com");
  const el16 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
  await el16.click();
  await el16.addValue("123123");
  const el17 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
  await el17.click();

  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();
