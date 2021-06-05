with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "node-16-with-chrome";
  buildInputs = [
    nodejs_latest
    google-chrome
  ];

  PUPPETEER_EXECUTABLE_PATH = "${google-chrome}/bin/google-chrome-stable";
}
