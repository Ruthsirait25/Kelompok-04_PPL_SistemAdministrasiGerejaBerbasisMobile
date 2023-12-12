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
await el2.addValue("ruth123");
const el3 = await driver.$("id:com.example.hkbptarutung:id/btn_login");
await el3.click();
const el4 = await driver.$("id:com.example.hkbptarutung:id/iv_registrasi");
await el4.click();
const el5 = await driver.$("xpath://androidx.recyclerview.widget.RecyclerView[@resource-id=\"com.example.hkbptarutung:id/rv_registrasi\"]/android.widget.FrameLayout[3]");
await el5.click();
const el6 = await driver.$("id:com.example.hkbptarutung:id/edt_nik");
await el6.click();
await el6.addValue("1212016101040002");
const el7 = await driver.$("id:com.example.hkbptarutung:id/edt_nama_lakilaki");
await el7.click();
await el7.addValue("Edward Panjaitan");
const el8 = await driver.$("id:com.example.hkbptarutung:id/edt_nomorHP");
await el8.click();
await el8.addValue("082163235820");
const el9 = await driver.$("id:com.example.hkbptarutung:id/edt_alamat");
await el9.click();
await el9.addValue("Tambunan");
const el10 = await driver.$("id:com.example.hkbptarutung:id/edt_gereja");
await el10.click();
await el10.addValue("HKBP Tambunan");
const el11 = await driver.$("id:com.example.hkbptarutung:id/edt_nama_ayah");
await el11.click();
await el11.addValue("H. Sipahutar");
const el12 = await driver.$("id:com.example.hkbptarutung:id/edt_nama_ibu");
await el12.click();
await el12.addValue("L.Sihombing");
const el13 = await driver.$("id:com.example.hkbptarutung:id/btn_lanjut");
await el13.click();
const el14 = await driver.$("id:android:id/button1");
await el14.click();
const el15 = await driver.$("id:com.example.hkbptarutung:id/edt_alamat");
await el15.click();
await el15.addValue("Parsoburan");
const el16 = await driver.$("id:com.example.hkbptarutung:id/edt_alamat");
await el16.click();
await el16.addValue("Parsoburan");
await el16.addValue("");
const el17 = await driver.$("id:com.example.hkbptarutung:id/edt_gereja");
await el17.click();
await el17.addValue("HKBP PARSOBURAN");
const el18 = await driver.$("id:com.example.hkbptarutung:id/edt_nama_ayah");
await el18.click();
await el18.addValue("B. Panjaitan");
const el19 = await driver.$("id:com.example.hkbptarutung:id/edt_nik_perempuan");
await el19.click();
await el19.addValue("1212010601040002");
const el20 = await driver.$("id:com.example.hkbptarutung:id/edt_nama_perempuan");
await el20.click();
await el20.addValue("Silvany Sipahutar");
const el21 = await driver.$("id:com.example.hkbptarutung:id/edt_nomorHP_girl");
await el21.click();
await el21.addValue("081238192033");
const el22 = await driver.$("id:com.example.hkbptarutung:id/btn_lanjut");
await el22.click();
const el23 = await driver.$("id:com.example.hkbptarutung:id/btn_lanjut");
await el23.click();
const el24 = await driver.$("id:android:id/button1");
await el24.click();
const el25 = await driver.$("xpath://android.widget.TextView[@text=\"Home\"]");
await el25.click();
const el26 = await driver.$("xpath://android.widget.TextView[@text=\"Log out\"]");
await el26.click();

  
  await driver.waitUntil(() => {
    // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
    return // kondisi yang harus dipenuhi
 }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

 
  await driver.deleteSession();
})();
