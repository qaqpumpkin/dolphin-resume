/**
 * @desc electron 主入口
 */
import path from 'path';
import { app, ipcMain, BrowserWindow, dialog, Menu } from 'electron';
import customMenu from './customMenu';

ipcMain.on('open-save-resume-path', (event, arg) => {
  dialog
    .showOpenDialog({
      properties: ['openDirectory'],
    })
    .then((result) => {
      event.reply('reply-save-resume-path', result.filePaths);
    })
    .catch((err) => {
      event.reply('reply-save-resume-path', err);
    });
});

function isDev() {
  return process.env.NODE_ENV === 'development';
}

export interface MyBrowserWindow extends BrowserWindow {
  uid?: string;
}

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true, // 注入node模块
    },
  });
  // 创建应用设置窗口
  const settingWindow: MyBrowserWindow = new BrowserWindow({
    width: 720,
    height: 240,
    show: false,
    frame: false,
    resizable: false,
    webPreferences: {
      devTools: true,
      nodeIntegration: true,
    },
  });
  settingWindow.uid = 'settingWindow';

  ipcMain.on('Electron:SettingWindow-hide-event', () => {
    if (settingWindow.isVisible()) {
      settingWindow.hide();
    }
  });
  ipcMain.on('Electron:SettingWindow-min-event', () => {
    if (settingWindow.isVisible()) {
      settingWindow.minimize();
    }
  });

  mainWindow.webContents.openDevTools();
  if (isDev()) {
    mainWindow.loadURL(`http://127.0.0.1:7001`);
    settingWindow.loadURL(`http://127.0.0.1:7001/setting.html`);
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../dist/index.html')}`);
    settingWindow.loadURL(`file://${path.join(__dirname, '../dist/setting.html')}`);
  }

  const ROOT_PATH = path.join(app.getAppPath(), '../');

  ipcMain.on('get-root-path', (event, args) => {
    event.reply('reply-root-path', isDev() ? ROOT_PATH : __dirname);
  });

  mainWindow.on('close', () => {
    app.quit();
  });
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
  const menu = Menu.buildFromTemplate(customMenu);
  Menu.setApplicationMenu(menu);
});
