{ pkgs }: {
    deps = [
         pkgs.otherPackages
         pkgs.python39Packages.poetry
         pkgs.replitPackages.prybar-python39
    ];
}
