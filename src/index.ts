import * as childProcess from "child_process";
import * as fs from "fs";
import * as path from "path";
import * as tempy from "tempy";

function pdf2png(pdfFile: string, size: string = "640x480"): Promise<string> {
  const imagePath = tempy.directory();
  return new Promise<string>((resolve, reject) =>
    childProcess.execFile(
      "/usr/bin/convert",
      [
        "-density",
        "360",
        pdfFile,
        "+profile",
        "*",
        "-scale",
        size,
        path.join(imagePath, "%d.png")
      ],
      (error, stdout, stderr) => {
        if (error !== null) {
          reject(error);
        } else {
          console.debug(stdout, stderr);
          resolve(imagePath);
        }
      }
    )
  );
}
function listPngFiles(dir: string) {
  return fs
    .readdirSync(dir)
    .filter(each => each.endsWith(".png"))
    .map(each => path.join(dir, each));
}

function generateIndex(current: number, count: number) {
  const indices: number[] = [];
  
}

Promise.all([pdf2png("./ver1.pdf"), pdf2png("./ver2.pdf")])
  .then(([left, right]) => {

  })
  .catch(console.error);
