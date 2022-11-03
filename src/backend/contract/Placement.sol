//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.7;
contract Placement{
    struct Student{
        string rollno;
        string name;
        string password; // hash value
        string [8] ppi;
        string [8] spi;
        string percentage10;
        string percentage12; 
        uint backLogs;   
        string resume;
        bool isPlaced;
        bool isInProgress;
        string companyName;
        uint updateLeft;
        string LORStatus;
        // notApplied accepted rejceted recieved
    }

    // Roll number => student
    mapping(string=>Student) public students;
    // ppi is cumulative
    // test- "19BCE269","Stuti","abc",["9.2","9.17","9","8.9","9.1","8.8","8.7","9"],["9.2","9.1","8.9","8.6","9","8","8.9","9.2"],"95","94.2",0
    function registerStudent(string memory _rollno,string memory _name, string memory _password, string[8] memory _ppi, string[8] memory _spi,string memory _percentage10, string memory _percentage12,uint _backLogs) public{

        students[_rollno]=Student(
            _rollno,
            _name,
            _password,
            _ppi,
            _spi,
            _percentage10,
            _percentage12,
            _backLogs,
            "",
            false,
            false,
            "",
            2, // 2 updates available
            "notApplied"

        );

    }
    function getPPI(string memory _studentRollno, uint sem) view public returns(string memory){
        return students[_studentRollno].ppi[sem-1];
    }
     function getSPI(string memory _studentRollno, uint sem) view public returns(string memory){
        return students[_studentRollno].spi[sem-1];
    }

    struct faculty{
        string name;
        string branch;
    }
    struct Company{
        string name;
        string description;
        uint category; // 1-> A+ 2-> A 3-> B
        string ctc;
        string[] location;
        string[] finalSelectedStudents;
        string[] registeredStudents;

        // elgiblity criterion
        uint minBackLogs;
        string minPPI;
        uint minStudents;
        string status;

        // inProgress -> no more registration
        // openForRegistration
        // closed


    }
    mapping(string=>Company) public companies;
    //  test 
    // "Deutsche Bank", "sample description", 1, "19.63", ["pune","banglore"],0,"8",20
    function registerCompany(
        string memory _name,
        string memory _description,
        uint _category,
        string memory _ctc,
        string[] memory _location,
        uint _minBackLogs,
        string memory _minPPI,
        uint _minStudents) public{
            string[] memory emptyArr;
            companies[_name]=Company(
                _name,
                _description,
                _category,
                _ctc,
                _location,
                emptyArr,
                emptyArr,
                _minBackLogs,
                _minPPI,
                _minStudents,
                "closed"
            );

    }

    // start company Application
    function startRegistration(string memory _companyName)public {
        companies[_companyName].status="openForRegistration";
    }
    function endRegistration(string memory _companyName) public{
        companies[_companyName].status="inProgress";

    }
    function endCompanyProcess(string memory _companyName) public{
        companies[_companyName].status="closed";

    }
    function getCompanyStatus(string memory _companyName) public view returns (string memory){
        return companies[_companyName].status;
    }
    // Process 
    // function companyProcess(string memory _companyName)public{

    // }
    // can only apply if they meet eligiblity criterion of the company 
    function applyForCompany(string memory _companyName,string memory _studentRollno)public{
        string memory _status="openForRegistration";
        
        // has company started registeration
        require(keccak256(abi.encodePacked(companies[_companyName].status)) == keccak256(abi.encodePacked(_status)),"Not Open for Registration :(");
        
        // check eligiblity
        require(isEligible(_companyName,_studentRollno),"You are not eligible to apply for this comapny :(");
        
        // registered student in company
        companies[_companyName].registeredStudents.push(_studentRollno);
    }

    function isEligible(string memory _companyName,string memory _studentRollno) public view returns (bool){
        if(students[_studentRollno].isPlaced==true){

            // if cur company is of same category
            if(companies[_companyName].category <= companies[students[_studentRollno].companyName].category){
                return false;
            }
            // if company with higher category and update is left
            else if(students[_studentRollno].updateLeft<0){
                return false;
            }

            // back log criterion
            if(students[_studentRollno].backLogs > companies[_companyName].minBackLogs)
                return false;

            // ppi criterion todo
            // if(students[_studentRollno].ppi[7] < companies[_companyName].minPPI) return false;
        }
        return true;
    }

    function addSelected(string memory _companyName,string memory _studentRollno)public{
        companies[_companyName].finalSelectedStudents.push(_studentRollno);
        string memory _empty="";
        if(keccak256(abi.encodePacked(students[_studentRollno].companyName)) == keccak256(abi.encodePacked(_empty))){
            students[_studentRollno].updateLeft--;
        }
        students[_studentRollno].companyName=_companyName;
    }

    // function applyForLOR() public{

    // }
    
}