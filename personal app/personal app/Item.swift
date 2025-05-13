//
//  Item.swift
//  personal app
//
//  Created by 胡杰 on 2025/5/13.
//

import Foundation
import SwiftData

@Model
final class Item {
    var timestamp: Date
    
    init(timestamp: Date) {
        self.timestamp = timestamp
    }
}
