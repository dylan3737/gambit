const { app, BrowserWindow } = require("electron");
app.setName("Gambit");
app.setAppUserModelId("com.gambit.chess");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 460,
    height: 540,
    minWidth: 260,
    minHeight: 300,
    title: "Gambit",
    icon: path.join(__dirname, "casement.ico"),
    autoHideMenuBar: true,
    backgroundColor: "#14161a",
    webPreferences: { contextIsolation: true, nodeIntegration: false }
  });
  win.setMenuBarVisibility(false);
  win.loadFile(path.join(__dirname, "desk-chess.html"));
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
