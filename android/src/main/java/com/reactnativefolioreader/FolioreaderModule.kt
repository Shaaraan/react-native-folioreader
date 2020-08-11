package com.reactnativefolioreader

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.folioreader.Config
import com.folioreader.FolioReader

class FolioreaderModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

  @ReactMethod
  fun openEpub(epubPath: String?) {
    val folioReader: FolioReader = FolioReader.get()
    val config: Config = Config()
      .setAllowedDirection(Config.AllowedDirection.VERTICAL_AND_HORIZONTAL)
      .setDirection(Config.Direction.HORIZONTAL)
    folioReader
      .setConfig(config, true)
      .openBook(epubPath)
  }


  override fun getName(): String {
    return "Folioreader"
  }

  // Example method
  // See https://facebook.github.io/react-native/docs/native-modules-android
  @ReactMethod
  fun multiply(a: Int, b: Int, promise: Promise) {

    promise.resolve(a * b)

  }
}
