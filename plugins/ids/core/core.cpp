#include "core.h"
#include <iostream>
#include <string>
#include <chrono>
#include <thread>

namespace ids {

Core::Core() {
    std::cout << "IDS Core constructed" << std::endl;
}

Core::~Core() {
    std::cout << "IDS Core destructed" << std::endl;
}

void Core::initialize() {
    std::cout << "IDS Initialized" << std::endl;
}

void Core::analyzeTraffic(const std::string& trafficData) {
    // Placeholder for traffic analysis logic
    std::cout << "Analyzing traffic data: " << trafficData << std::endl;
}

}

// Main loop for the IDS
int main() {
    ids::Core idsCore;
    idsCore.initialize();

    std::string trafficData = "GET / HTTP/1.1\\r\\nHost: starlopost.vercel.app\\r\\n\\r\\n";

    while (true) {
        idsCore.analyzeTraffic(trafficData);
        
        // Sleeps for 5 seconds before checking for more data
        std::this_thread::sleep_for(std::chrono::seconds(5));
    }

    return 0;
}
