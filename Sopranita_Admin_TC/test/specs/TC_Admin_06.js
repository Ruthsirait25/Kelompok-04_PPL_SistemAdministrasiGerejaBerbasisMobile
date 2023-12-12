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

  const el1 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
  await el1.click();
  await el1.addValue("admin@gmail.com");
  const el2 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
  await el2.click();
  await el2.addValue("123123");
  const el3 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
  await el3.click();
  const el4 = await driver.$("id:com.example.hkbptarutung:id/iv_WartaJemaat");
  await el4.click();
  const el5 = await driver.$("id:com.example.hkbptarutung:id/btn_ubah_topik_minggu");
  await el5.click();
  const el6 = await driver.$("class name:android.widget.EditText");
  await el6.click();
  await el6.addValue("Rp. 5.000.000");
  const el7 = await driver.$("id:android:id/button1");
  await el7.click();
  const el8 = await driver.$("id:com.example.hkbptarutung:id/btn_pelean_ia");
  await el8.click();
  const el9 = await driver.$("class name:android.widget.EditText");
  await el9.click();
  await el9.addValue("Rp. 6.700.000");
  const el10 = await driver.$("id:android:id/button1");
  await el10.click();
  const el11 = await driver.$("id:com.example.hkbptarutung:id/btn_pelean_ib");
  await el11.click();
  const el13 = await driver.$("class name:android.widget.EditText");
  await el13.click();
  await el13.addValue("Rp. 9.000.000");
  const el14 = await driver.$("id:android:id/button1");
  await el14.click();
  const el15 = await driver.$("id:com.example.hkbptarutung:id/btn_ubah_pelean_ii");
  await el15.click();
  const el16 = await driver.$("class name:android.widget.EditText");
  await el16.click();
  await el16.addValue("Rp. 15.000.000");
  const el17 = await driver.$("id:android:id/button1");
  await el17.click();
  const el18 = await driver.$("id:com.example.hkbptarutung:id/btn_tambah");
  await el18.click();
  const el19 = await driver.$("id:android:id/button1");
  await el19.click();
  const el20 = await driver.$("xpath://android.widget.TextView[@text=\"Log out\"]");
  await el20.click();

  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();
