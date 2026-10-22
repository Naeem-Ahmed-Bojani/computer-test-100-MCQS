const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function createWindow() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({ width: 1100, height: 800, title: 'Career Building Academy Shahdadkot', autoHideMenuBar: true });
  win.maximize();
  win.loadFile(path.join(__dirname, 'www', 'index.html'));
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
