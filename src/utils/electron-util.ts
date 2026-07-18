// Adapted from electron-util

const isElectron = "electron" in process.versions;

const isUsingAsar =
  isElectron &&
  process.mainModule &&
  process.mainModule.filename.includes("app.asar");

function fixPathForAsarUnpack(path: string): string {
  return isUsingAsar ? path.replace("app.asar", "app.asar.unpacked") : path;
}

export default fixPathForAsarUnpack;
