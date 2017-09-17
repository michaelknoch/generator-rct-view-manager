#import <smartphone-Swift.h>
#import "RN<%= name %>.h"

@implementation RN<%= name %>Manager

RCT_EXPORT_MODULE();

- (UIView *)view
{
    return [[<%= name %> alloc] init];
}

@end
