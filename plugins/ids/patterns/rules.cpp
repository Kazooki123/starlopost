#include "rules.h"
#include <iostream>

namespace ids {

Rules::Rules() {
    std::cout << "Rules starts" << std::endl;
}

Rules::~Rules() {
    std::cout << "Rules ended" << std::endl;
}

bool Rules::isSuspicious(const std::string& trafficData) {
    // Well add more logic - if needed
    return trafficData.find("DROP TABLE") != std::string::npos;
}

void Rules::blockIP(const std::string& ip) {
    // Placeholder for IP blocking logic
    std::cout << "Blocking IP...: " << ip << std::endl;
}

}

int main() {
    ids::Rules rules;

    std::string trafficData = "GET / HTTP/1.1\\r\\nHost: starlopost.vercel.app\\r\\n\\r\\n";
    std::string ip = "192.168.1.100";

    if (rules.isSuspicious(trafficData)) {
        rules.blockIP(ip);
    }

    return 0;
}
