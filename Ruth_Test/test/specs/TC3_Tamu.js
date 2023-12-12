const { remote } = require('webdriverio');

const opts = {
  port: 2121,
  capabilities: {
    alwaysMatch: {
      platformName: 'Android',
      'appium:PlatformVersion': '11',
      'appium:deviceName': 'Palmarum',
      'appium:app': 'D:\\Proyek fix\\HKBP Palmarum Tarutung\\Sistem-Administrasi-Gereja-Berbasis-Mobile\\HKBP Palmarum.apk',
      'appium:automationName': 'UIAutomator2',
      'appium:appPackage': 'com.example.hkbptarutung',
      'appium:noReset': true,
    },
    firstMatch: [{}],
  },
};

(async () => {
  const driver = await remote(opts);

  try {
    const el1 = await driver.$('id:com.example.hkbptarutung:id/btn_tamu');
    await el1.click();
    const el2 = await driver.$('id:com.example.hkbptarutung:id/btn_register');
    await el2.click();
    const el3 = await driver.$('id:com.example.hkbptarutung:id/btn_ketentuan_sidi');
    await el3.click();
    const el4 = await driver.$('id:com.example.hkbptarutung:id/btn_register_now');
    await el4.click();
    const el5 = await driver.$('id:com.example.hkbptarutung:id/edt_namaLengkap');
    await el5.click();
    await el5.addValue('Ruth Sirait');
    const el6 = await driver.$('id:com.example.hkbptarutung:id/edt_username');
    await el6.click();
    await el6.addValue('ruthsirait');
    const el7 = await driver.$('id:com.example.hkbptarutung:id/edt_email');
    await el7.click();
    await el7.addValue('ruthsirait@gmail.com');
    const el8 = await driver.$('id:com.example.hkbptarutung:id/edt_umur');
    await el8.click();
    await el8.addValue('15');
    const el9 = await driver.$('id:com.example.hkbptarutung:id/edt_nomorHP');
    await el9.click();
    await el9.addValue('081264086157');
    const el10 = await driver.$('id:com.example.hkbptarutung:id/sp_jekel');
    await el10.click();
    const el11 = await driver.$('xpath://android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Perempuan"]');
    await el11.click();
    const el12 = await driver.$('id:com.example.hkbptarutung:id/edt_alamat');
    await el12.click();
    await el12.addValue('Jl.Sutomo No.14');
    const el13 = await driver.$('id:com.example.hkbptarutung:id/edt_wijk');
    await el13.click();
    await el13.addValue('01');
    const el14 = await driver.$('id:com.example.hkbptarutung:id/edt_password');
    await el14.click();
    await el14.addValue('ruth1234');
    const el15 = await driver.$('id:com.example.hkbptarutung:id/edt_ulangiPassword');
    await el15.click();
    await el15.addValue('ruth1234');
    const el16 = await driver.$('id:com.example.hkbptarutung:id/btn_lanjut');
    await el16.click();
    const el17 = await driver.$('id:android:id/button1');
    await el17.click();

    await driver.waitUntil(async () => {
      // Tambahkan kondisi yang memeriksa apakah halaman sudah dimuat sepenuhnya
      // Misalnya, dapat menggunakan pengecekan pada elemen yang ada di halaman yang diharapkan
      const someElement = await driver.$("selector_of_some_element_on_loaded_page");
      return someElement !== null; // Ubah kondisi ini dengan kondisi yang sesuai
    }, { timeout: 15000, timeoutMsg: 'Halaman tidak dimuat sepenuhnya dalam 15 detik' });

  } catch (error) {
    console.error('Error occurred:', error);
  } finally {
    await driver.deleteSession();
  }
})();