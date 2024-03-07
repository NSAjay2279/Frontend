#include <iostream>
#include <fstream>
#include <string>
#include <cstdlib>

using namespace std;

// Function to generate HTML files for calculator operations
void generateHTMLFile(const string& operation) {
    ofstream file;
    file.open(operation + ".html");

    if (!file.is_open()) {
        cerr << "Error: Unable to create HTML file." << endl;
        return;
    }

    file << "<!DOCTYPE html>\n";
    file << "<html>\n";
    file << "<head>\n";
    file << "<title>" << operation << " Calculator</title>\n";
    file << "</head>\n";
    file << "<body>\n";
    file << "<h1>" << operation << " Calculator</h1>\n";
    file << "<form action=\"/\" method=\"post\">\n";
    file << "  <input type=\"text\" name=\"num1\" placeholder=\"Enter first number\">\n";
    file << "  <input type=\"text\" name=\"num2\" placeholder=\"Enter second number\">\n";
    file << "  <input type=\"submit\" value=\"Calculate\">\n";
    file << "</form>\n";
    file << "</body>\n";
    file << "</html>\n";

    file.close();
}

// Function to open HTML file in Chrome browser
void openHTMLFileInBrowser(const string& filename) {
    string command = "start chrome " + filename;
    system(command.c_str());
}

int main() {
    generateHTMLFile("addition");
    generateHTMLFile("subtraction");
    generateHTMLFile("multiplication");

    openHTMLFileInBrowser("addition.html");
    openHTMLFileInBrowser("subtraction.html");
    openHTMLFileInBrowser("multiplication.html");

    return 0;
}
