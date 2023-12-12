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

  const el21 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
  await el21.click();
  await el21.addValue("admin@gmail.com");
  const el22 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
  await el22.click();
  await el22.addValue("123123");
  const el23 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
  await el23.click();
  const el24 = await driver.$("id:com.example.hkbptarutung:id/iv_acaraminggu");
  await el24.click();
  const el25 = await driver.$("id:com.example.hkbptarutung:id/btn_ubah_title");
  await el25.click();
  const el26 = await driver.$("class name:android.widget.EditText");
  await el26.click();
  await el26.addValue("Minggu, 10 Desember 2023");
  const el27 = await driver.$("id:android:id/button1");
  await el27.click();
  const el28 = await driver.$("id:com.example.hkbptarutung:id/btn_ubah_hohom");
  await el28.click();
  const el29 = await driver.$("class name:android.widget.EditText");
  await el29.click();
  await el29.addValue("45");
  const el30 = await driver.$("id:android:id/button1");
  await el30.click();
  const el31 = await driver.$("id:com.example.hkbptarutung:id/btn_ubah_votum");
  await el31.click();
  const el32 = await driver.$("class name:android.widget.EditText");
  await el32.click();
  await el32.addValue("54");
  const el33 = await driver.$("id:android:id/button1");
  await el33.click();
  const el34 = await driver.$("id:com.example.hkbptarutung:id/btn_ubah_patik");
  await el34.click();
  const el35 = await driver.$("class name:android.widget.EditText");
  await el35.click();
  await el35.addValue("76");
  const el36 = await driver.$("id:android:id/button1");
  await el36.click();
  const el37 = await driver.$("id:com.example.hkbptarutung:id/btn_ubah_manopoti");
  await el37.click();
  const el38 = await driver.$("class name:android.widget.EditText");
  await el38.click();
  await el38.addValue("32");
  const el39 = await driver.$("id:android:id/button1");
  await el39.click();
  const el40 = await driver.$("id:com.example.hkbptarutung:id/btn_ubah_epistel");
  await el40.click();
  const el41 = await driver.$("class name:android.widget.EditText");
  await el41.click();
  await el41.addValue("Yesaya 34 : 4 - 20");
  const el42 = await driver.$("id:android:id/button1");
  await el42.click();
  const el43 = await driver.$("id:com.example.hkbptarutung:id/btn_ubah_dosa");
  await el43.click();
  const el44 = await driver.$("class name:android.widget.EditText");
  await el44.click();
  await el44.addValue("235");
  const el45 = await driver.$("id:android:id/button1");
  await el45.click();
  const el46 = await driver.$("id:com.example.hkbptarutung:id/btn_ubah_tingting");
  await el46.click();
  const el47 = await driver.$("class name:android.widget.EditText");
  await el47.click();
  await el47.addValue("175");
  const el48 = await driver.$("id:android:id/button1");
  await el48.click();
  const el49 = await driver.$("id:com.example.hkbptarutung:id/btn_ubah_jamita");
  await el49.click();
  const el50 = await driver.$("class name:android.widget.EditText");
  await el50.click();
  await el50.addValue("94");
  const el51 = await driver.$("id:android:id/button1");
  await el51.click();
  const el52 = await driver.$("id:com.example.hkbptarutung:id/btn_tambah");
  await el52.click();
  const el53 = await driver.$("id:android:id/button1");
  await el53.click();
  const el54 = await driver.$("xpath://android.widget.TextView[@text=\"Log out\"]");
  await el54.click();

  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();
