export default {
  AccountInfo: {
    miniProgram: 'MiniProgram',
    plugin: 'Plugin',
  },
  MiniProgram: {
    appId: 'string',
    envVersion: 'string',
    version: 'string',
  },
  Plugin: {
    appId: 'string',
    version: 'string',
  },
  GetBatteryInfoSyncResult: {
    isCharging: 'bool',
    level: 'int',
  },
  EnterOptionsGame: {
    apiCategory: 'string',
    query: 'object',
    referrerInfo: 'EnterOptionsGameReferrerInfo',
    scene: 'int',
    chatType: 'int',
    shareTicket: 'string',
  },
  EnterOptionsGameReferrerInfo: {
    appId: 'string',
    extraData: 'object',
    gameLiveInfo: 'GameLiveInfo',
  },
  GameLiveInfo: {
    streamerOpenId: 'string',
    feedId: 'string',
  },
  LaunchOptionsGame: {
    query: 'object',
    referrerInfo: 'EnterOptionsGameReferrerInfo',
    scene: 'int',
    chatType: 'int',
    shareTicket: 'string',
  },
  ClientRect: {
    bottom: 'int',
    height: 'int',
    left: 'int',
    right: 'int',
    top: 'int',
    width: 'int',
  },
  GetStorageInfoSyncOption: {
    currentSize: 'int',
    keys: 'string[]',
    limitSize: 'int',
  },
  SystemInfo: {
    SDKVersion: 'string',
    albumAuthorized: 'bool',
    benchmarkLevel: 'int',
    bluetoothEnabled: 'bool',
    brand: 'string',
    cameraAuthorized: 'bool',
    deviceOrientation: 'string',
    enableDebug: 'bool',
    fontSizeSetting: 'int',
    host: 'Host',
    language: 'string',
    locationAuthorized: 'bool',
    locationEnabled: 'bool',
    locationReducedAccuracy: 'bool',
    microphoneAuthorized: 'bool',
    model: 'string',
    notificationAlertAuthorized: 'bool',
    notificationAuthorized: 'bool',
    notificationBadgeAuthorized: 'bool',
    notificationSoundAuthorized: 'bool',
    phoneCalendarAuthorized: 'bool',
    pixelRatio: 'int',
    platform: 'string',
    safeArea: 'SafeArea',
    screenHeight: 'int',
    screenWidth: 'int',
    statusBarHeight: 'int',
    system: 'string',
    version: 'string',
    wifiEnabled: 'bool',
    windowHeight: 'int',
    windowWidth: 'int',
    theme: 'string',
  },
  Host: {
    appId: 'string',
  },
  SafeArea: {
    bottom: 'int',
    height: 'int',
    left: 'int',
    right: 'int',
    top: 'int',
    width: 'int',
  },
  OnCheckForUpdateCallbackResult: {
    hasUpdate: 'bool',
  },
  GeneralCallbackResult: {
    errMsg: 'string',
  },
  SetMessageToFriendQueryOption: {
    shareMessageToFriendScene: 'int',
  },
  AddCardRequestInfo: {
    cardExt: 'string',
    cardId: 'string',
  },
  AddCardSuccessCallbackResult: {
    cardList: 'AddCardResponseInfo[]',
    errMsg: 'string',
  },
  AddCardResponseInfo: {
    cardExt: 'string',
    cardId: 'string',
    code: 'string',
    isSuccess: 'bool',
  },
  AuthPrivateMessageSuccessCallbackResult: {
    encryptedData: 'string',
    errMsg: 'string',
    iv: 'string',
    valid: 'bool',
  },
  CheckIsUserAdvisedToRestSuccessCallbackResult: {
    result: 'bool',
    errMsg: 'string',
  },
  ChooseImageSuccessCallbackResult: {
    tempFilePaths: 'string[]',
    tempFiles: 'ImageFile[]',
    errMsg: 'string',
  },
  ImageFile: {
    path: 'string',
    size: 'int',
  },
  ChooseMediaSuccessCallbackResult: {
    tempFiles: 'MediaFile[]',
    type: 'string',
    errMsg: 'string',
  },
  MediaFile: {
    duration: 'int',
    fileType: 'string',
    height: 'int',
    size: 'int',
    tempFilePath: 'string',
    thumbTempFilePath: 'string',
    width: 'int',
  },
  ChooseMessageFileSuccessCallbackResult: {
    tempFiles: 'ChooseFile[]',
    errMsg: 'string',
  },
  ChooseFile: {
    name: 'string',
    path: 'string',
    size: 'int',
    time: 'int',
    type: 'string',
  },
  BluetoothError: {
    errMsg: 'string',
    errCode: 'int',
  },
  CreateBLEPeripheralServerSuccessCallbackResult: {
    server: 'BLEPeripheralServer',
    errMsg: 'string',
  },
  BLEPeripheralService: {
    characteristics: 'Characteristic[]',
    uuid: 'string',
  },
  Characteristic: {
    uuid: 'string',
    descriptors: 'Descriptor[]',
    permission: 'CharacteristicPermission',
    properties: 'CharacteristicProperties',
    value: 'ArrayBuffer[]',
  },
  Descriptor: {
    uuid: 'string',
    permission: 'DescriptorPermission',
    value: 'ArrayBuffer[]',
  },
  DescriptorPermission: {
    read: 'bool',
    write: 'bool',
  },
  CharacteristicPermission: {
    readEncryptionRequired: 'bool',
    readable: 'bool',
    writeEncryptionRequired: 'bool',
    writeable: 'bool',
  },
  CharacteristicProperties: {
    indicate: 'bool',
    notify: 'bool',
    read: 'bool',
    write: 'bool',
    writeNoResponse: 'bool',
  },
  OnCharacteristicReadRequestCallbackResult: {
    callbackId: 'int',
    characteristicId: 'string',
    serviceId: 'string',
  },
  OnCharacteristicSubscribedCallbackResult: {
    characteristicId: 'string',
    serviceId: 'string',
  },
  OnCharacteristicWriteRequestCallbackResult: {
    callbackId: 'int',
    characteristicId: 'string',
    serviceId: 'string',
    value: 'ArrayBuffer[]',
  },
  AdvertiseReqObj: {
    beacon: 'BeaconInfoObj',
    connectable: 'bool',
    deviceName: 'string',
    manufacturerData: 'ManufacturerData[]',
    serviceUuids: 'string[]',
  },
  BeaconInfoObj: {
    major: 'int',
    minor: 'int',
    uuid: 'string',
    measuredPower: 'int',
  },
  ManufacturerData: {
    manufacturerId: 'string',
    manufacturerSpecificData: 'ArrayBuffer[]',
  },
  FaceDetectSuccessCallbackResult: {
    angleArray: 'FaceAngel',
    confArray: 'FaceConf',
    detectRect: 'object',
    faceInfo: 'IAnyObject[]',
    pointArray: 'IAnyObject[]',
    x: 'int',
    y: 'int',
    errMsg: 'string',
  },
  FaceAngel: {
    pitch: 'int',
    roll: 'int',
    yaw: 'int',
  },
  FaceConf: {
    global: 'int',
    leftEye: 'int',
    mouth: 'int',
    nose: 'int',
    rightEye: 'int',
  },
  GetAvailableAudioSourcesSuccessCallbackResult: {
    errMsg: 'string',
  },
  GetBLEDeviceCharacteristicsSuccessCallbackResult: {
    characteristics: 'BLECharacteristic[]',
    errMsg: 'string',
  },
  BLECharacteristic: {
    properties: 'BLECharacteristicProperties',
    uuid: 'string',
  },
  BLECharacteristicProperties: {
    indicate: 'bool',
    notify: 'bool',
    read: 'bool',
    write: 'bool',
    writeDefault: 'bool',
    writeNoResponse: 'bool',
  },
  GetBLEDeviceRSSISuccessCallbackResult: {
    RSSI: 'int',
    errMsg: 'string',
  },
  GetBLEDeviceServicesSuccessCallbackResult: {
    services: 'BLEService[]',
    errMsg: 'string',
  },
  BLEService: {
    isPrimary: 'bool',
    uuid: 'string',
  },
  GetBLEMTUSuccessCallbackResult: {
    mtu: 'int',
    errMsg: 'string',
  },
  GetBatteryInfoSuccessCallbackResult: {
    isCharging: 'bool',
    level: 'int',
    errMsg: 'string',
  },
  BeaconError: {
    errMsg: 'string',
    errCode: 'int',
  },
  GetBeaconsSuccessCallbackResult: {
    beacons: 'BeaconInfo[]',
    errMsg: 'string',
  },
  BeaconInfo: {
    accuracy: 'int',
    major: 'int',
    minor: 'int',
    proximity: 'int',
    rssi: 'int',
    uuid: 'string',
  },
  GetBluetoothAdapterStateSuccessCallbackResult: {
    available: 'bool',
    discovering: 'bool',
    errMsg: 'string',
  },
  GetBluetoothDevicesSuccessCallbackResult: {
    devices: 'BlueToothDevice[]',
    errMsg: 'string',
  },
  BlueToothDevice: {
    RSSI: 'int',
    advertisData: 'ArrayBuffer[]',
    advertisServiceUUIDs: 'string[]',
    connectable: 'bool',
    deviceId: 'string',
    localName: 'string',
    name: 'string',
    serviceData: 'object',
  },
  GetChannelsLiveInfoSuccessCallbackResult: {
    description: 'string',
    feedId: 'string',
    headUrl: 'string',
    nickname: 'string',
    nonceId: 'string',
    status: 'int',
    errMsg: 'string',
  },
  GetChannelsLiveNoticeInfoSuccessCallbackResult: {
    headUrl: 'string',
    nickname: 'string',
    noticeId: 'string',
    reservable: 'bool',
    startTime: 'string',
    status: 'int',
    errMsg: 'string',
  },
  GetClipboardDataSuccessCallbackOption: {
    data: 'string',
  },
  GetConnectedBluetoothDevicesSuccessCallbackResult: {
    devices: 'BluetoothDeviceInfo[]',
    errMsg: 'string',
  },
  BluetoothDeviceInfo: {
    deviceId: 'string',
    name: 'string',
  },
  GetExtConfigSuccessCallbackResult: {
    extConfig: 'object',
    errMsg: 'string',
  },
  WxGetFileInfoSuccessCallbackResult: {
    digest: 'string',
    size: 'int',
    errMsg: 'string',
  },
  GetGroupEnterInfoSuccessCallbackResult: {
    cloudID: 'string',
    encryptedData: 'string',
    errMsg: 'string',
    iv: 'string',
  },
  GetLocalIPAddressSuccessCallbackResult: {
    errMsg: 'string',
    localip: 'string',
    netmask: 'string',
  },
  GetLocationSuccessCallbackResult: {
    accuracy: 'int',
    altitude: 'int',
    horizontalAccuracy: 'int',
    latitude: 'int',
    longitude: 'int',
    speed: 'int',
    verticalAccuracy: 'int',
    errMsg: 'string',
  },
  GetNetworkTypeSuccessCallbackResult: {
    hasSystemProxy: 'bool',
    networkType: 'string',
    signalStrength: 'int',
    errMsg: 'string',
  },
  GetScreenBrightnessSuccessCallbackOption: {
    value: 'int',
    errMsg: 'string',
  },
  GetSettingSuccessCallbackResult: {
    authSetting: 'AuthSetting',
    subscriptionsSetting: 'SubscriptionsSetting',
    miniprogramAuthSetting: 'AuthSetting',
    errMsg: 'string',
  },
  AuthSetting: {
  },
  SubscriptionsSetting: {
    mainSwitch: 'bool',
    itemSettings: 'object',
  },
  GetStorageInfoSuccessCallbackOption: {
    currentSize: 'int',
    keys: 'string[]',
    limitSize: 'int',
  },
  GetUserInfoSuccessCallbackResult: {
    cloudID: 'string',
    encryptedData: 'string',
    iv: 'string',
    rawData: 'string',
    signature: 'string',
    userInfo: 'UserInfo',
    errMsg: 'string',
  },
  UserInfo: {
    avatarUrl: 'string',
    city: 'string',
    country: 'string',
    gender: 'int',
    language: 'string',
    nickName: 'string',
    province: 'string',
  },
  GetUserInteractiveStorageFailCallbackResult: {
    errCode: 'int',
    errMsg: 'string',
  },
  GetUserInteractiveStorageSuccessCallbackResult: {
    cloudID: 'string',
    encryptedData: 'string',
    iv: 'string',
    errMsg: 'string',
  },
  GetWeRunDataSuccessCallbackResult: {
    cloudID: 'string',
    encryptedData: 'string',
    iv: 'string',
    errMsg: 'string',
  },
  JoinVoIPChatError: {
    errMsg: 'string',
    errCode: 'int',
  },
  MuteConfig: {
    muteEarphone: 'bool',
    muteMicrophone: 'bool',
  },
  JoinVoIPChatSuccessCallbackResult: {
    errCode: 'int',
    errMsg: 'string',
    openIdList: 'string[]',
  },
  LoginSuccessCallbackResult: {
    code: 'string',
    errMsg: 'string',
  },
  OnAccelerometerChangeCallbackResult: {
    x: 'int',
    y: 'int',
    z: 'int',
  },
  OnAddToFavoritesCallbackResult: {
    disableForward: 'bool',
    imageUrl: 'string',
    query: 'string',
    title: 'string',
  },
  OnBLECharacteristicValueChangeCallbackResult: {
    characteristicId: 'string',
    deviceId: 'string',
    serviceId: 'string',
    value: 'ArrayBuffer[]',
  },
  OnBLEConnectionStateChangeCallbackResult: {
    connected: 'bool',
    deviceId: 'string',
  },
  OnBLEMTUChangeCallbackResult: {
    deviceId: 'string',
    mtu: 'int',
  },
  OnBLEPeripheralConnectionStateChangedCallbackResult: {
    connected: 'bool',
    deviceId: 'string',
    serverId: 'string',
  },
  OnBeaconServiceChangeCallbackResult: {
    available: 'bool',
    discovering: 'bool',
  },
  OnBeaconUpdateCallbackResult: {
    beacons: 'BeaconInfo[]',
  },
  OnBluetoothAdapterStateChangeCallbackResult: {
    available: 'bool',
    discovering: 'bool',
  },
  OnBluetoothDeviceFoundCallbackResult: {
    devices: 'BlueToothDevice[]',
  },
  OnCompassChangeCallbackResult: {
    accuracy: 'int',
    direction: 'int',
  },
  OnCopyUrlCallbackResult: {
    query: 'string',
  },
  OnDeviceMotionChangeCallbackResult: {
    alpha: 'int',
    beta: 'int',
    gamma: 'int',
  },
  OnDeviceOrientationChangeCallbackResult: {
    value: 'string',
  },
  WxOnErrorCallbackResult: {
    message: 'string',
    stack: 'string',
  },
  OnGyroscopeChangeCallbackResult: {
    x: 'int',
    y: 'int',
    z: 'int',
  },
  OnHandoffCallbackResult: {
    query: 'string',
  },
  OnKeyDownCallbackResult: {
    code: 'string',
    key: 'string',
    timeStamp: 'int',
  },
  OnKeyboardInputCallbackResult: {
    value: 'string',
  },
  OnKeyboardHeightChangeCallbackResult: {
    height: 'int',
  },
  OnMemoryWarningCallbackResult: {
    level: 'int',
  },
  OnNetworkStatusChangeCallbackResult: {
    isConnected: 'bool',
    networkType: 'string',
  },
  OnNetworkWeakChangeCallbackResult: {
    networkType: 'string',
    weakNet: 'bool',
  },
  OnShareTimelineCallbackResult: {
    imageUrl: 'string',
    imagePreviewUrl: 'string',
    imagePreviewUrlId: 'string',
    imageUrlId: 'string',
    path: 'string',
    query: 'string',
    title: 'string',
  },
  OnShowCallbackResult: {
    query: 'object',
    referrerInfo: 'ResultReferrerInfo',
    scene: 'int',
    shareTicket: 'string',
  },
  ResultReferrerInfo: {
    appId: 'string',
    extraData: 'object',
  },
  SocketTaskOnCloseCallbackResult: {
    code: 'int',
    reason: 'string',
  },
  SocketTaskOnMessageCallbackResult: {
    data: 'string',
  },
  OnSocketOpenCallbackResult: {
    header: 'object',
  },
  OnTouchStartCallbackResult: {
    changedTouches: 'Touch[]',
    timeStamp: 'int',
    touches: 'Touch[]',
  },
  Touch: {
    clientX: 'int',
    clientY: 'int',
    force: 'int',
    identifier: 'int',
    pageX: 'int',
    pageY: 'int',
  },
  OnUnhandledRejectionCallbackResult: {
    promise: 'string',
    reason: 'string',
  },
  OnVoIPChatInterruptedCallbackResult: {
    errCode: 'int',
    errMsg: 'string',
  },
  OnVoIPChatMembersChangedCallbackResult: {
    errCode: 'int',
    errMsg: 'string',
    openIdList: 'string[]',
  },
  OnVoIPChatSpeakersChangedCallbackResult: {
    errCode: 'int',
    errMsg: 'string',
    openIdList: 'string[]',
  },
  OnVoIPChatStateChangedCallbackResult: {
    code: 'int',
    data: 'object',
    errCode: 'int',
    errMsg: 'string',
  },
  OnWindowResizeCallbackResult: {
    windowHeight: 'int',
    windowWidth: 'int',
  },
  OpenCardRequestInfo: {
    cardId: 'string',
    code: 'string',
  },
  OpenCustomerServiceConversationSuccessCallbackResult: {
    path: 'string',
    query: 'object',
    errMsg: 'string',
  },
  OpenSettingSuccessCallbackResult: {
    authSetting: 'AuthSetting',
    subscriptionsSetting: 'SubscriptionsSetting',
    errMsg: 'string',
  },
  MediaSource: {
    url: 'string',
    poster: 'string',
    type: 'string',
  },
  ReportUserBehaviorBranchAnalyticsOption: {
    branchId: 'string',
    eventType: 'int',
    branchDim: 'string',
  },
  MidasFriendPaymentError: {
    errMsg: 'string',
    errCode: 'int',
  },
  RequestMidasFriendPaymentSuccessCallbackResult: {
    cloudID: 'string',
    encryptedData: 'string',
    errMsg: 'string',
    iv: 'string',
  },
  MidasPaymentError: {
    errMsg: 'string',
    errCode: 'int',
  },
  RequestSubscribeMessageFailCallbackResult: {
    errCode: 'int',
    errMsg: 'string',
  },
  RequestSubscribeMessageSuccessCallbackResult: {
    anyKeyWord: 'string',
    errMsg: 'string',
  },
  RequestSubscribeSystemMessageSuccessCallbackResult: {
    anyKeyWord: 'string',
    errMsg: 'string',
  },
  ReserveChannelsLiveOption: {
    noticeId: 'string',
  },
  ScanCodeSuccessCallbackResult: {
    charSet: 'string',
    path: 'string',
    rawData: 'string',
    result: 'string',
    scanType: 'string',
    errMsg: 'string',
  },
  SetBLEMTUFailCallbackResult: {
    mtu: 'int',
  },
  SetBLEMTUSuccessCallbackResult: {
    mtu: 'int',
    errMsg: 'string',
  },
  KVData: {
    key: 'string',
    value: 'string',
  },
  ShareAppMessageOption: {
    imageUrl: 'string',
    imageUrlId: 'string',
    path: 'string',
    query: 'string',
    title: 'string',
    toCurrentGroup: 'bool',
  },
  ShowActionSheetSuccessCallbackResult: {
    tapIndex: 'int',
    errMsg: 'string',
  },
  ShowModalSuccessCallbackResult: {
    cancel: 'bool',
    confirm: 'bool',
    content: 'string',
    errMsg: 'string',
  },
  UpdatableMessageFrontEndTemplateInfo: {
    parameterList: 'UpdatableMessageFrontEndParameter[]',
  },
  UpdatableMessageFrontEndParameter: {
    name: 'string',
    value: 'string',
  },
  VibrateShortFailCallbackResult: {
    errMsg: 'string',
  },
  CheckGameLiveEnabledSuccessCallbackOption: {
    errMsg: 'string',
    isEnabled: 'bool',
  },
  OnGameLiveStateChangeCallbackResult: {
    state: 'string',
    feedId: 'string',
  },
  OnGameLiveStateChangeCallbackResponse: {
    query: 'string',
  },
  GameLiveState: {
    isLive: 'bool',
  },
  GetUserCurrentGameliveInfoSuccessCallbackOption: {
    feedIdList: 'string[]',
  },
  GetUserGameLiveDetailsSuccessCallbackOption: {
    encryptedData: 'string',
    iv: 'string',
    cloudID: 'string',
    feedIdList: 'string[]',
    errMsg: 'string',
  },
  GameClubDataType: {
    type: 'int',
    subKey: 'string',
    value: 'int',
  },
  getGameClubDataSuccessCallbackResult: {
    signature: 'string',
    encryptedData: 'string',
    iv: 'string',
    cloudID: 'string',
    errMsg: 'string',
  },
};
