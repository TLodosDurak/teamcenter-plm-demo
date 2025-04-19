
#include <iostream>
#include <string>
using namespace std;

class Part {
public:
    string id, name, status;
    string riskLevel;

    Part(string pid, string pname, string rlevel)
        : id(pid), name(pname), status("Draft"), riskLevel(rlevel) {}

    void review() {
        status = "In Review";
        cout << "Part " << name << " moved to review." << endl;
    }

    void approve() {
        if (riskLevel == "High") {
            cout << "High risk part requires further validation." << endl;
        } else {
            status = "Released";
            cout << "Part " << name << " approved and released." << endl;
        }
    }

    void printStatus() {
        cout << "Part ID: " << id << ", Status: " << status << endl;
    }
};

int main() {
    Part p("000310", "Torque Arm Extended", "Medium");
    p.printStatus();
    p.review();
    p.printStatus();
    p.approve();
    p.printStatus();
    return 0;
}
