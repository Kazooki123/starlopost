#ifndef RULES_H
#define RULES_H

#include <string>
#include <vector>

namespace ids {

class Rules {
public:
    Rules();
    ~Rules();

    bool isSuspicious(const std::string& trafficData);
    void blockIP(const std::string& ip);
};

}

#endif // RULES_H
