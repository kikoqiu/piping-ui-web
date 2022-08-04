import type {KeyExchangeErrorCode} from "@/_piping-ui-auth";
import {VERSION} from "@/version";

const urlJoinAsync = () => import('url-join').then(p => p.default);
const utilsAsync = () => import('@/utils');

export function stringsByLang(language: string): typeof defaultStr {
  if(language.startsWith("en")) {
    return en;
  } else if(language.startsWith("ja")) {
    return ja;
  } else if(language.startsWith("zh-CN")) {
    return cn;
  }else {
    return defaultStr;
  }
}

const en = {
  language: 'Language',
  dark_theme: 'Dark Theme',
  pwa_update: 'Update',
  version: `Version: ${VERSION}`,
  view_on_github: 'View source code on GitHub',
  open_source_licenses: 'Open source licenses',
  close: "Close",
  send: 'Send',
  get: 'Get',
  text_mode: 'Text mode',
  text_placeholder: 'Text',
  server_url: 'Server URL',
  secret_path: 'Secret path',
  secret_path_placeholder: 'e.g. mypath374',
  drop_a_file_here_or_browse: 'Drop a file here or <span class=\'filepond--label-action\'>Browse</span>',
  protect_with_password: 'Protect with password',
  passwordless_protection: 'Passwordless',
  password: 'Password',
  password_is_required: 'Password is required',
  view: 'View',
  download: 'Download',
  error_file_not_selected: 'Error: File not selected',
  error_secret_path_not_specified: 'Error: Secret path not specified',
  upload: 'Upload',
  waiting_for_receiver: 'Waiting for receiver...',
  verification_code: 'Verification code',
  verify_and_send: 'Verify & Send',
  key_exchange_error: (errorCode: KeyExchangeErrorCode): string => {
    switch (errorCode) {
      case "invalid_parcel_format":
        return 'Parcel format is invalid.';
      case "different_key_exchange_version":
        return 'Key exchange versions are different. Please update your app or peer\'s app.'
      case "invalid_v1_parcel_format":
        return "Parcel is an invalid V1 parcel";
    }
  },
  sender_not_verified: 'Sender not verified',
  upload_url: 'Upload URL',
  compressing: 'Compressing...',
  encrypting: 'Encrypting...',
  data_uploader_xhr_onerror: async (p: {serverUrl: string}) => {
    const utils = await utilsAsync();
    const urlJoin = await urlJoinAsync();
    const versionUrl = urlJoin(p.serverUrl, "/version");
    return utils.sanitizeHtmlAllowingATag(`An error occurred. The server might be < 0.9.4. Please check <a href="${versionUrl}" target="_blank">${versionUrl}</a>`);
  },
  data_uploader_xhr_upload_onerror: 'An error occurred while uploading',
  cancel: 'Cancel',
  view_in_viewer: 'View',
  download_url: 'Download URL',
  waiting_for_sender: 'Waiting for sender...',
  decrypting: 'Decrypting...',
  copied: 'Copied',
  password_might_be_wrong: 'The password might be wrong',
  reinput_password: 'Reinput password',
  unlock: 'Unlock',
  view_raw: 'View raw',
  xhr_status_error: (p: {status: number, response: string}) => {
    return `Error (${p.status}): "${p.response}"`;
  },
  data_viewer_xhr_onerror: 'Download error',
  save: 'Save',
  record_server_url: 'Record server URL',
  record_secret_path: 'Record secret path',
  download_in_downloader: 'Download',
};
const defaultStr = en;


const ja: typeof defaultStr = {
  language: '言語 (Language)',
  dark_theme: 'ダークテーマ',
  pwa_update: 'Update',
  version: `バージョン: ${VERSION}`,
  view_on_github: 'GitHubでソースコードを見る',
  open_source_licenses: 'オープンソース ライセンス',
  close: "閉じる",
  send: '送信',
  get: '受信',
  text_mode: 'テキスト',
  text_placeholder: 'テキスト',
  server_url: 'サーバー',
  secret_path: '転送パス',
  secret_path_placeholder: '例: mypath374, あいう123',
  drop_a_file_here_or_browse: 'ファイルをドラッグするか<span class=\'filepond--label-action\'>開く</span>',
  protect_with_password: 'パスワードで保護',
  passwordless_protection: 'パスワードレス',
  password: 'パスワード',
  password_is_required: 'パスワードを入力してください',
  view: '見る',
  download: 'ダウンロード',
  error_file_not_selected: 'エラー: ファイルが選択されていません',
  error_secret_path_not_specified: 'エラー: 転送パスが指定されていません',
  upload: 'アップロード',
  waiting_for_receiver: '受信者を待機中...',
  verification_code: '確認コード',
  verify_and_send: '確認完了',
  key_exchange_error: (errorCode: KeyExchangeErrorCode): string => {
    switch (errorCode) {
      case "invalid_parcel_format":
        return 'パーセルのフォーマットが不正です。';
      case "different_key_exchange_version":
        return '鍵交換のバージョンが異なります。このアプリを更新するか通信相手のアプリを更新してください。';
      case "invalid_v1_parcel_format":
        return "V1のパーセルとして不正なフォーマットです。"
    }
  },
  sender_not_verified: '送信者が拒否しました',
  upload_url: 'アップロードURL',
  compressing: '圧縮中...',
  encrypting: '暗号化中...',
  data_uploader_xhr_onerror: async (p: {serverUrl: string}) => {
    const utils = await utilsAsync();
    const urlJoin = await urlJoinAsync();
    const versionUrl = urlJoin(p.serverUrl, "/version");
    return utils.sanitizeHtmlAllowingATag(`エラーが発生しました。サーバーが0.9.4より低い可能性があります。 <a href="${versionUrl}" target="_blank">${versionUrl}</a> でバージョンの確認できます。`);
  },
  data_uploader_xhr_upload_onerror: 'アップロード中にエラが発生しました',
  cancel: 'キャンセル',
  view_in_viewer: '表示',
  decrypting: '復号中...',
  download_url: 'ダウンロードURL',
  waiting_for_sender: '送信者を待機中...',
  copied: 'コピーされました',
  password_might_be_wrong: 'パスワードが間違っている可能性があります',
  reinput_password: 'パスワードを再入力',
  unlock: '解除',
  view_raw: '解除せずに見る',
  xhr_status_error: (p: {status: number, response: string}) => {
    return `エラー (${p.status}): "${p.response}"`;
  },
  data_viewer_xhr_onerror: 'ダウンロードエラー',
  save: '保存',
  record_server_url: 'サーバーURLを記憶',
  record_secret_path: '転送パスを記憶',
  download_in_downloader: 'ダウンロード',
} as const;



const cn : typeof defaultStr =  {
  language: 'Language',
  dark_theme: '黑暗模式',
  pwa_update: '更新',
  version: `Version: ${VERSION}`,
  view_on_github: 'GitHub',
  open_source_licenses: '许可证',
  close: "关闭",
  send: '发送',
  get: '下载',
  text_mode: '文本模式',
  text_placeholder: '文本',
  server_url: '服务器地址',
  secret_path: '秘密路径',
  secret_path_placeholder: '例如 mypath374',
  drop_a_file_here_or_browse: '拖到这里或者点击 <span class=\'filepond--label-action\'>浏览</span>',
  protect_with_password: '密码保护',
  passwordless_protection: '自动验证保护',
  password: '密码',
  password_is_required: '请输入密码',
  view: '查看',
  download: '下载',
  error_file_not_selected: '请选择文件',
  error_secret_path_not_specified: '秘密路径未输入',
  upload: '上传',
  waiting_for_receiver: '等待接收...',
  verification_code: '校验码',
  verify_and_send: '确认发送',
  key_exchange_error: (errorCode: KeyExchangeErrorCode): string => {
    switch (errorCode) {
      case "invalid_parcel_format":
        return 'Parcel format 无效.';
      case "different_key_exchange_version":
        return 'Key exchange versions are different. 请升级\'s app.'
      case "invalid_v1_parcel_format":
        return "Parcel is an 无效的 V1 parcel";
    }
  },
  sender_not_verified: '发送方校验失败',
  upload_url: '上传路径',
  compressing: '压缩中...',
  encrypting: '加密中...',
  data_uploader_xhr_onerror: async (p: {serverUrl: string}) => {
    const utils = await utilsAsync();
    const urlJoin = await urlJoinAsync();
    const versionUrl = urlJoin(p.serverUrl, "/version");
    return utils.sanitizeHtmlAllowingATag(`发送错误 The server might be < 0.9.4. Please check <a href="${versionUrl}" target="_blank">${versionUrl}</a>`);
  },
  data_uploader_xhr_upload_onerror: '上传错误',
  cancel: '取消',
  view_in_viewer: '查看',
  download_url: '下载 URL',
  waiting_for_sender: '等待发送方...',
  decrypting: '解密中...',
  copied: '已复制',
  password_might_be_wrong: '密码错误',
  reinput_password: '重新输入密码',
  unlock: '解锁',
  view_raw: '查看原始 raw',
  xhr_status_error: (p: {status: number, response: string}) => {
    return `Error (${p.status}): "${p.response}"`;
  },
  data_viewer_xhr_onerror: '下载错误',
  save: '保存',
  record_server_url: '记住服务器路径',
  record_secret_path: '记住 secret path',
  download_in_downloader: '下载',
} as const;
