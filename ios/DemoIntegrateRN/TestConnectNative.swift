import Foundation
import React

@objc(TestConnectNativeModule)
class TestConnectNativeModule: NSObject {
   weak var navigationController: UINavigationController?

   private var token = "JWTTOKEN";

    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
    
    @objc
    func sendMessageToNative(_ rnMessage: String) {
        print("This log is from swift: \(rnMessage)")
    }
    
    @objc
    func sendCallbackToNative(_ rnCallback: RCTResponseSenderBlock) {
        rnCallback(["A greeting from swift"])
    }

    @objc
    func getToken(
        _ resolve: RCTPromiseResolveBlock,
        rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
        resolve(token)
    }
    
    @objc
    func goToSecondViewController (_ reactTag: NSNumber) {
        DispatchQueue.main.async {
            if let view = RNViewManager.sharedInstance.bridge?.uiManager.view(forReactTag: reactTag) {
                let storyBoard : UIStoryboard = UIStoryboard(name: "Main", bundle:nil)
                let secondVC = storyBoard.instantiateViewController(withIdentifier: "SecondView") as! SecondViewController
                secondVC.modalPresentationStyle = .fullScreen

                let reactNativeVC: UIViewController! = view.reactViewController()
                reactNativeVC.present(secondVC, animated: true, completion: nil)
            }
        }
    }
    
    @objc
    func dismissViewController (_ reactTag: NSNumber) {
        DispatchQueue.main.async {
            if let view = RNViewManager.sharedInstance.bridge?.uiManager.view(forReactTag: reactTag) {
                let reactNativeVC: UIViewController! = view.reactViewController()
                reactNativeVC.dismiss(animated: true, completion: nil)
            }
        }
    }
}
