//
//  PermissionsPlugin.h
//
//  Copyright (c) 2015 Acutulus Enterprises LLC. All rights reserved.
//  Please see the LICENSE included with this distribution for details.
//

#import <Cordova/CDVPlugin.h>

@interface PermissionsPlugin : CDVPlugin

- (void)microphone:(CDVInvokedUrlCommand*)command;
- (void)camera:(CDVInvokedUrlCommand*)command;
- (void)checkMicrophone:(CDVInvokedUrlCommand*)command;
- (void)checkCamera:(CDVInvokedUrlCommand*)command;

@end
