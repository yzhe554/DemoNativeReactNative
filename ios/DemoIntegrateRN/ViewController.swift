import UIKit
import React
import Foundation

class ViewController: UIViewController {
    @IBOutlet weak var textField: UITextField!
    
    @IBAction func BtnGoReactView(_ sender: Any) {
//        let messageFromNative: String = textField.text!
        goToRNView(messageFromNative: textField.text!);
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.hideKeyboardWhenTappedAround()
        goToRNView();
    }

    func goToRNView(messageFromNative: String? = "") {
        
        //        We'll don't init RCTRootView through bundleURL but by bridge for using dismiss later
        //        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        //        let rootView = RCTRootView(
        //            bundleURL: jsCodeLocation!,
        //            moduleName: "DemoIntegrateRN",
        //            initialProperties: ["message_from_native": messageFromNative],
        //            launchOptions: nil)
        
        let rootView = RNViewManager.sharedInstance.viewForModule(
            "DemoIntegrateRN",
            initialProperties: ["message_from_native": messageFromNative ?? "test messaage", "page": "router1"])
        
        let reactNativeVC = UIViewController()
        reactNativeVC.view = rootView
        reactNativeVC.modalPresentationStyle = .fullScreen
        present(reactNativeVC, animated: true)
    }

     func loadReactNativeView() {
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")!
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "DemoIntegrateRN",
            initialProperties: ["page": "router1"]
        )
        self.view = rootView
        //  let reactNativeVC = UIViewController()
        // reactNativeVC.view = rootView
        // reactNativeVC.modalPresentationStyle = .fullScreen
        // present(reactNativeVC, animated: true)

        //  let rootView = RNViewManager.sharedInstance.viewForModule(
        //     "DemoIntegrateRN",
        //     initialProperties: ["page": "router1"])
        
        // let reactNativeVC = UIViewController()
        // reactNativeVC.view = rootView
        // reactNativeVC.modalPresentationStyle = .fullScreen
        // present(reactNativeVC, animated: true)
    }
    
    func hideKeyboardWhenTappedAround() {
        let tap = UITapGestureRecognizer(target: self.view, action: #selector(UIView.endEditing))
        tap.cancelsTouchesInView = false
        view.addGestureRecognizer(tap)
    }
}
