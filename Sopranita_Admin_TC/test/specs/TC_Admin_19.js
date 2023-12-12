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

  const el14 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
  await el14.click();
  await el14.addValue("admin@gmail.com");
  const el15 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
  await el15.click();
  await el15.addValue("123123");
  const el16 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
  await el16.click();
  const el17 = await driver.$("id:com.example.hkbptarutung:id/iv_registrasi");
  await el17.click();
  const el18 = await driver.$("xpath://android.widget.TextView[@resource-id=\"com.example.hkbptarutung:id/tv_rv_regislanding_title\" and @text=\"Registrasi martupol\"]");
  await el18.click();
  const el19 = await driver.$("xpath://android.widget.TextView[@resource-id=\"com.example.hkbptarutung:id/tv_person_name\" and @text=\"Marudut Tampubolon\"]");
  await el19.click();
  const el20 = await driver.$("id:com.example.hkbptarutung:id/btn_batal");
  await el20.click();
  const el21 = await driver.$("id:android:id/button1");
  await el21.click();
  const el22 = await driver.$("accessibility id:default");
  await el22.click();
  const el23 = await driver.$("xpath://android.widget.TextView[@text=\"Home\"]");
  await el23.click();
  const el24 = await driver.$("xpath://android.widget.TextView[@text=\"Log out\"]");
  await el24.click();

  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();
