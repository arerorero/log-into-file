import fs from "fs/promises";

const root_path = process.cwd();

export default async function logMessage(message, tag = null) {
  await checkFolder();
  await gitIgnore();
  const timestamp = getTime();
  const logFilePath = `${root_path}/log/${timestamp.slice(0, 10)}.log`;
  let log = "";
  if (tag) {
    log += `[${tag.toUpperCase()}] `;
  }
  log += `${message} - ${timestamp.slice(11, 20)} \n`;

  fs.appendFile(logFilePath, log, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
}

function getTime() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(now.getDate()).padStart(2, "0")} ${String(
    now.getHours()
  ).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(
    now.getSeconds()
  ).padStart(2, "0")}`;
}

async function checkFolder() {
  const logFolderPath = root_path + "/log/";
  try {
    await fs.access(logFolderPath);
  } catch (error) {
    fs.mkdir(logFolderPath);
  }
}

async function gitIgnore() {
  const path = `${root_path}.gitignore`;
  try {
    const content = await fs.readFile(path, "utf-8");
    if (!content.includes("/log")) {
      await fs.appendFile(path, "/log\n", (err) => {
        if (err) {
          console.error("Error writing to .gitignore file:", err);
        }
      });
    }
  } catch (error) {
    await fs.writeFile(path, "/log\n", (err) => {
      if (err) {
        console.error("Error writing to .gitignore file:", err);
      }
    });
  }
}
