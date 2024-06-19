#ifndef PARSER_H
#define PARSER_H

#include <string>

namespace ids {

class Parser {
public:
    Parser();
    ~Parser();

    void Parsing(const std::string& parsing);
};

}

#endif