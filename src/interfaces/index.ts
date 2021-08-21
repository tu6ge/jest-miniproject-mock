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

export interface Animation {
  export ?: Function,
  step ?: Function,
  matrix ?: Function,
  matrix3d ?: Function,
  rotate ?: Function,
  rotate3d ?: Function,
  rotateX ?: Function,
  rotateY ?: Function,
  rotateZ ?: Function,
  scale ?: Function,
  scale3d ?: Function,
  scaleX ?: Function,
  scaleY ?: Function,
  scaleZ ?: Function,
  skew ?: Function,
  skewX ?: Function,
  skewY ?: Function,
  translate ?: Function,
  translate3d ?: Function,
  translateX ?: Function,
  translateY ?: Function,
  translateZ ?: Function,
  opacity ?: Function,
  backgroundColor ?: Function,
  width ?: Function,
  height ?: Function,
  left ?: Function,
  right ?: Function,
  top ?: Function,
  bottom ?: Function,
}

export interface RequestTask{
  abort ?: Function,
  onHeadersReceived ?: Function,
  offHeadersReceived ?: Function,
}

export interface DownloadTask extends RequestTask { 
  onProgressUpdate ?: Function,
  offProgressUpdate ?: Function,
}
export interface UploadTask extends DownloadTask {}

export interface SocketTask {
  send ?: Function,
  close ?: Function,
  onOpen ?: Function,
  onClose ?: Function,
  onError ?: Function,
  onMessage ?: Function,
}