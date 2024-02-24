import UIKit
import React
import Foundation

class SencondViewController: UIViewController {
    @IBAction func btnBackToReactScreen(_ sender: Any) {
        dismiss(animated: true, completion: nil)
    }


    // override func loadView() {
    //     loadReactNativeView()
    // }

     func loadReactNativeView() {
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")!
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "DemoIntegrateRN",
            initialProperties: ["page": "router1"]
        )
        self.view = rootView

        //  let rootView = RNViewManager.sharedInstance.viewForModule(
        //     "DemoIntegrateRN",
        //     initialProperties: ["page": "router1"])
        
        // let reactNativeVC = UIViewController()
        // reactNativeVC.view = rootView
        // reactNativeVC.modalPresentationStyle = .fullScreen
        // present(reactNativeVC, animated: true)
    }
}
