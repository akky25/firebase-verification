declare namespace NodeJS {
  // 環境変数名の定義
  interface ProcessEnv {
    /** 現在の Node.js 実行環境 */
    readonly NODE_ENV: "development" | "production" | "test";

    /** Firebase config */
    readonly REACT_APP_API_KEY: string;
    readonly REACT_APP_APIKEY: string;
    readonly REACT_APP_AUTHDOMAIN: string;
    readonly REACT_APP_DATABASEURL: string;
    readonly REACT_APP_PROJECT_ID: string;
    readonly REACT_APP_STORAGE_BUCKET: string;
    readonly REACT_APP_MESSAGING_SENDER_ID: string;
    readonly REACT_APP_APP_ID: string;
    readonly REACT_APP_MEASUREMENT_ID: string;
  }
}
