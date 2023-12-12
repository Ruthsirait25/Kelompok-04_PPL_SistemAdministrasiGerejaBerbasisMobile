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
  // mencari nama jemaat
  const el43 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
await el43.click();
await el43.addValue("admin@gmail.com");
const el44 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
await el44.click();
await el44.addValue("123123");
const el45 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
await el45.click();
const el46 = await driver.$("id:com.example.hkbptarutung:id/iv_registrasi");
await el46.click();
const el47 = await driver.$("xpath://androidx.recyclerview.widget.RecyclerView[@resource-id=\"com.example.hkbptarutung:id/rv_registrasi\"]/android.widget.FrameLayout[5]");
await el47.click();
const el48 = await driver.$("id:com.example.hkbptarutung:id/edt_cari_nama");
await el48.click();
await el48.addValue("andreas");
await driver.touchAction({
  action: 'tap', x: 990, y: 2045
});
const el49 = await driver.$("id:com.example.hkbptarutung:id/tv_person_name");
await el49.click();
const el50 = await driver.$("id:com.example.hkbptarutung:id/iv_btn_back");
await el50.click();
const el51 = await driver.$("accessibility id:default");
await el51.click();
const el52 = await driver.$("id:com.example.hkbptarutung:id/iv_btn_back");
await el52.click();

  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();
