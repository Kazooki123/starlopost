#include <string>
#ifndef CORE_H
#define CORE_H

namespace ids {

class Core {
public:
    Core();
    ~Core();

    void initialize();
    void analyzeTraffic(const std::string& trafficData);
};

}

#endif // CORE_H
