const { app, BrowserWindow } = require('electron');

// creating app window
const createWindow = () => {
  // app window configs
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    autoHideMenuBar: true,
  });

  // loading react page in window
  win.loadURL('http://localhost:3000');

  // opening the devtools
  // win.webContents.openDevTools();
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
