import pkg from "electron";
const { app, BrowserWindow } = pkg;

function createWindow() {
  const win = new BrowserWindow({
    title: "Log viewer",
    icon: ``,
    frame: false,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile(`${process.cwd()}/index.html`);
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});
