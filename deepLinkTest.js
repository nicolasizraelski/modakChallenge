const { exec } = require('child_process');

function testDeepLink(url) {
  console.log(`Testing deep link: ${url}`);

  // For iOS
  exec(`xcrun simctl openurl booted "${url}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error testing iOS deep link: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`iOS stderr: ${stderr}`);
      return;
    }
    console.log(`iOS deep link result: ${stdout}`);
  });

  // For Android
  exec(
    `adb shell am start -W -a android.intent.action.VIEW -d "${url}" com.modakchallenge`,
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error testing Android deep link: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Android stderr: ${stderr}`);
        return;
      }
      console.log(`Android deep link result: ${stdout}`);
    }
  );
}

// Test category deep link
testDeepLink('modakchallenge://products?categoryId=electronics');

// Test product deep link
testDeepLink('modakchallenge://products/1');
