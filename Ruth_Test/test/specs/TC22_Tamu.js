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
  const el1 = await driver.$("id:com.example.hkbptarutung:id/edt_email");
await el1.click();
await el1.addValue("ruthsirait24@gmail.com");
const el2 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
await el2.click();
await el2.addValue("ruth123@gmail.com");
const el3 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
await el3.click();
const el4 = await driver.$("id:com.example.hkbptarutung:id/edt_password");
await el4.click();
await el4.addValue("ruth123");
const el5 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
await el5.click();
const el6 = await driver.$("id:com.example.hkbptarutung:id/iv_registrasi");
await el6.click();
const el7 = await driver.$("xpath://androidx.recyclerview.widget.RecyclerView[@resource-id=\"com.example.hkbptarutung:id/rv_registrasi\"]/android.widget.FrameLayout[4]");
await el7.click();
const el8 = await driver.$("id:com.example.hkbptarutung:id/edt_nik");
await el8.click();
await el8.addValue("12121610104002");
const el9 = await driver.$("id:com.example.hkbptarutung:id/edt_nama_jemaat");
await el9.click();
await el9.addValue("Edwaard Panjaitan");
const el10 = await driver.$("id:com.example.hkbptarutung:id/edt_tempat_lahir");
await el10.click();
await el10.addValue("Jakarta");
const el11 = await driver.$("id:com.example.hkbptarutung:id/ll_tanggal_lahir");
await el11.click();
const el12 = await driver.$("id:android:id/button1");
await el12.click();
const el13 = await driver.$("id:com.example.hkbptarutung:id/edt_tempat_martumpol");
await el13.click();
await el13.addValue("HKBP TAMBUNAN");
const el14 = await driver.$("id:com.example.hkbptarutung:id/edt_goldar");
await el14.click();
const el15 = await driver.$("id:com.example.hkbptarutung:id/btn_lanjut");
await el15.click();
const el16 = await driver.$("id:android:id/button1");
await el16.click();
const el17 = await driver.$("id:com.example.hkbptarutung:id/edt_goldar");
await el17.click();
await el17.addValue("O");
const el18 = await driver.$("id:com.example.hkbptarutung:id/btn_lanjut");
await el18.click();
const el19 = await driver.$("id:android:id/button1");
await el19.click();
const el20 = await driver.$("id:com.example.hkbptarutung:id/btn_lanjut");
await el20.click();
const el21 = await driver.$("id:android:id/button1");
await el21.click();
const el22 = await driver.$("id:com.example.hkbptarutung:id/ic_home");
await el22.click();
const el23 = await driver.$("id:com.example.hkbptarutung:id/footer");
await el23.click();
const el24 = await driver.$("accessibility id:default");
await el24.click();

  
  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();
