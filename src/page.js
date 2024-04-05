import fs from "fs/promises";
import { exec } from "child_process";

const root_path = process.cwd();
const command = `cd "${root_path}/node_modules/log-into-file" && npm start`;

async function printLogs() {
  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <link rel="stylesheet" href="src/css.css">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Log Viewer</title>
  </head>
  <body>`;
  try {
    const logFiles = await fs.readdir(`${root_path}/log`);
    for (let i = logFiles.length - 1; i >= 0; i--) {
      const file = logFiles[i];
      const logFilePath = `${root_path}/log/${file}`;
      const log = await fs.readFile(logFilePath, "utf-8");
      let lines = log.split("\n");
      html += `<h1>${file.slice(0, 10)}</h1><ul>`;
      lines.reverse().forEach((line) => {
        if (line) {
          const regex = /\[(.*?)\]/;
          let tag = line.match(regex);
          if (tag) {
            line = line.replace(tag[0], "");
            html += `<li class="tag ${tag[1].toLowerCase()}">
                      <span class="tag ${tag[1].toLowerCase()}">${tag[0].toUpperCase()}</span>
                      ${line}</li>`;
          } else {
            html += `<li class="default">
            <span class="tag default">[DEFAULT]</span>
            ${line}
            </li>`;
          }
        }
      });
      html += `</ul>`;
    }
  } catch (error) {
    console.error("Error reading log files:", error);
  }
  html += `</body></html>`;
  return html;
}

function runApp() {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    if (stderr) console.error(`stderr: ${stderr}`);
  });
}

export default async function create_page() {
  await fs.writeFile(
    `${root_path}/node_modules/log-into-file/index.html`,
    await printLogs()
  );
  runApp();
}
