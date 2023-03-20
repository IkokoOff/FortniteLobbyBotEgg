{ pkgs }: {
    deps = [
         pkgs.python39Packages.poetry
         pkgs.replitPackages.prybar-python39
    ];
}
