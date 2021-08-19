export interface UpdateManager {
  applyUpdate?: Function,
  onCheckForUpdate?: Function,
  onUpdateReady?: Function,
  onUpdateFailed?: Function,
}

export interface RealtimeLogManager {
  info ?: Function,
  warn ?: Function,
  error ?: Function,
  setFilterMsg ?: Function,
  addFilterMsg ?: Function,
}

export interface LogManager {
  debug ?: Function,
  info ?: Function,
  log ?: Function,
  warn ?: Function,
}