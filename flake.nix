{
  description = "NixOS flake with Chromium for Puppeteer";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.11";
  };

  outputs = {
    self,
    nixpkgs,
  }: {
    devShells.x86_64-linux.default = (import nixpkgs {system = "x86_64-linux";}).mkShell {
      buildInputs = with (import nixpkgs {system = "x86_64-linux";}); [
        nodejs
        chromium
      ];

      PUPPETEER_SKIP_CHROMIUM_DOWNLOAD = "true";
      PUPPETEER_EXECUTABLE_PATH = "${(import nixpkgs {system = "x86_64-linux";}).chromium}/bin/chromium";
    };
  };
}
