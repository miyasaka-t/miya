const fs = require('fs');
const path = require('path');

const nextConfig = {};

if (process.env.NODE_ENV === 'development') {
  const keyPath = path.join(__dirname, 'localhost-key.pem');
  const certPath = path.join(__dirname, 'localhost.pem');

  if (fs.existsSync(keyPath) && fs.existsSync(certPath)) {
    nextConfig.server = {
      https: {
        key: fs.readFileSync(keyPath),
        cert: fs.readFileSync(certPath),
      },
    };
  } else {
    console.warn('⚠️ HTTPS用の.pemファイルが見つかりません。HTTPモードで起動します。');
  }
}

module.exports = nextConfig;
