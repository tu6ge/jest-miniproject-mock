export interface UpdateManager {
  applyUpdate?: Function,
  onCheckForUpdate?: Function;
  onUpdateReady?: Function;
  onUpdateFailed?: Function;
}
