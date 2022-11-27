//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.7;
import "hardhat/console.sol";

contract Placement {
    struct Student {
        string rollno; //0
        address payable student; //1
        string name; //2
        string password; // hash value
        string[1] ppi; //4
        string[1] spi;// 5
        // string percentage10;
        string percentage12; //6
        uint256 backLogs;// 7
        string resume; //8
        bool isPlaced;
        bool isInProgress;
        uint companyId;
        uint256 updateLeft;
        string LORStatus;
        // notApplied accepted rejceted recieved
    }
    struct Company {
        string name;
        address payable company;
        string password;
        string description;
        uint256 category; // 1-> A+ 2-> A 3-> B
        string ctc;
        string location;
        string branches;
        string[] finalSelectedStudents;
        string[] registeredStudents;
        // elgiblity criterion
        uint256 maxBackLogs;
        string minPPI;
        string status;

        // inProgress -> no more registration
        // openForRegistration
        // closed
    }
    struct Faculty {
        string name;
        address payable faculty;
        string password;
        string branch;

    }
    uint public totalStudents;
    uint public totalCompanies;
    uint public totalFaculties;

    // Roll number => student
    mapping(string => Student) public students;
    mapping(uint => Faculty) public faculties;
    mapping(uint => Company) public companies;

    
    // used address
    mapping(address=>bool) public studentAddress;
    mapping(address=>bool) public facultyAddress;
    mapping(address=>bool) public companyAddress;

    // Login activity
    mapping(address=>bool) public studentLoggedIn;
    mapping(address=>bool) public facultyLoggedIn;
    mapping(address=>bool) public companyLoggedIn;

    // address already used or not
   function doesAddressExists(address _userAddress) internal view returns  (bool) {
        console.log(_userAddress);
        return studentAddress[_userAddress] || facultyAddress[_userAddress] || companyAddress[_userAddress];
    }
    function compare(string memory s1,string memory s2) internal pure returns(bool){
        return keccak256(abi.encodePacked(s1)) == keccak256(abi.encodePacked(s2));
    }

   
    // ppi is cumulative
    // test- "19BCE269","Stuti","abc",["9"],["9.2"],"94.2",0
    function registerStudent(
        string memory _rollno,
        string memory _name,
        string memory _password,
        string[1] memory _ppi,
        string[1] memory _spi,
        // string memory _percentage10,
        string memory _percentage12,
        uint256 _backLogs
    ) public {
        // require(!doesAddressExists(payable(msg.sender)), "___Please use another address___");

        // require(compare(students[_rollno].rollno,""),"___Student already Registered___");
        totalStudents++;
        students[_rollno] = Student(
            _rollno,
            payable(msg.sender),
            _name,
            _password,
            _ppi,
            _spi,
            // _percentage10,
            _percentage12,
            _backLogs,
            "",
            false,
            false,
            0,
            2, // 2 updates available
            "notApplied"
        );

        studentAddress[msg.sender]=true;
        console.log("Student count: ",totalStudents);
        console.log("Student ppi: ",totalStudents);

    }

     // student registered with the same account
    function studentExists(string memory _rollno) public view returns (bool) {
        if(students[_rollno].student==msg.sender){
            return true;
        }
      
        console.log("Student not registered");
        return false;

    } 
    // id matches the psw
    function isValidStudent(string memory _rollno,string memory _password) public view returns (bool){
        if(compare(students[_rollno].password,_password)){
            return true;
        }
        return false;
    }

    function loginStudent(string memory _rollno, string memory _password)  public returns (bool){
        //student not registered
        require(studentExists(_rollno),"___Student not registered with this account___");

        // student credential invalid
        require(isValidStudent(_rollno,_password),"___Invalid credentials___");

        console.log("Successful login!");
        studentLoggedIn[msg.sender]=true;
        return true;
    }
    







    //  test
    // "Deutsche Bank", "sample description", "xyz",1, "19.63", ["pune","banglore"],0,"8",20
    function registerCompany(
        string memory _name,
        string memory _description,
        string memory _password,
        uint256 _category,
        string memory _ctc,
        string memory _location,
        uint256 _maxBackLogs,
        string memory _minPPI,
        string memory _branches
    
    ) public {
        require(!doesAddressExists(payable(msg.sender)), "___Please use another address___");

        totalCompanies++;
        string[] memory emptyArr;
        companies[totalCompanies] = Company(
            _name,
            payable(msg.sender),
            _password,
            _description,
            _category,
            _ctc,
            _location,
            _branches,
            emptyArr,
            emptyArr,
            _maxBackLogs,
            _minPPI,
            "closed"
        );
        companyAddress[msg.sender] = true;
        console.log("Company Id: ", totalCompanies);

    }

     // company registered
    function companyExists(uint _companyId) public view returns (bool) {
        if(companies[_companyId].company==msg.sender){
            return true;
        }
      
        console.log("Company not registered");
        return false;

    } 
    // id matches the psw
    function isValidCompany(uint _companyId,string memory _password) public view returns (bool){
        if(compare(companies[_companyId].password, _password)){
            return true;
        }
        return false;
    }

    function loginCompany(uint _companyId, string memory _password)  public returns (bool){
        // company not registered
        require(companyExists(_companyId),"___Company not registered with this account___");

        // company credential invalid
        require(isValidCompany(_companyId,_password),"___Invalid credentials___");

        console.log("Successful login!");
        companyLoggedIn[msg.sender]=true;
        return true;
    }
    

    function registerFaculty(string memory _name,string memory _branch,string memory _password) public {
        require(!doesAddressExists(payable(msg.sender)), "___Please use another address___");

        totalFaculties++;
        faculties[totalFaculties]=Faculty(
            _name,
            payable(msg.sender),
            _password,
            _branch
        );
        facultyAddress[msg.sender]=true;
    }

      // faculty registered
    function facultyExists(uint _facultyId) public view returns (bool) {
        if(faculties[_facultyId].faculty==msg.sender){
            return true;
        }
      
        console.log("Faculty not registered");
        return false;

    } 
    // id matches the psw
    function isValidFaculty(uint _facultyId,string memory _password) public view returns (bool){
        if(compare(faculties[_facultyId].password, _password)){
            return true;
        }
        return false;
    }

    function loginFaculty(uint _facultyId, string memory _password)  public returns (bool){
        // faculty not registered
        require(facultyExists(_facultyId),"___Faculty not registered with this account___");

        // faculty credential invalid
        require(isValidFaculty(_facultyId,_password),"___Invalid credentials___");

        console.log("Successful login!");
        facultyLoggedIn[msg.sender]=true;
        return true;
    }
    

    // start company Application
    function startRegistration(uint _companyId) public {
        // require(companies[_companyId].company==msg.sender,"Login to start registeration");
        companies[_companyId].status = "openForRegistration";
    }

    function endRegistration(uint _companyId) public {
        // require(companies[_companyId].company==msg.sender,"Login to end registeration");

        companies[_companyId].status = "inProgress";
    }

    function endCompanyProcess(uint _companyId) public {
        companies[_companyId].status = "closed";
    }

    function getCompanyStatus(uint _companyId)
        public
        view
        returns (string memory)
    {
        return companies[_companyId].status;
    }

    function getRegisteredStudents(uint _companyId) view public returns(string[] memory){
        return companies[_companyId].registeredStudents;
    }
    // Process

    // can only apply if they meet eligiblity criterion of the company
    function applyForCompany(
        uint _companyId,
        string memory _studentRollno
    ) public {
        string memory _status = "openForRegistration";

        // has company started registeration
        require(keccak256(abi.encodePacked(companies[_companyId].status)) == keccak256(abi.encodePacked(_status)), "___Not Open for Registration :(___");

        // check eligiblity
        require(
            isEligible(_companyId, _studentRollno),
            "___You are not eligible to apply for this company :(___"
        );

        // registered student in company
        companies[_companyId].registeredStudents.push(_studentRollno);
    }

    function isEligible(
        uint _companyId,
        string memory _studentRollno
    ) public view returns (bool) {
        if (students[_studentRollno].isPlaced == true) {
            // if cur company is of same category
            if (
                companies[_companyId].category <=
                companies[students[_studentRollno].companyId].category
            ) {
                return false;
            }
            // if company with higher category and update is left
            else if (students[_studentRollno].updateLeft < 0) {
                return false;
            }

            // back log criterion
            if (
                students[_studentRollno].backLogs >
                companies[_companyId].maxBackLogs
            ) return false;

            // ppi criterion todo - in frontendt
            // if(students[_studentRollno].ppi[7] < companies[_companyId].minPPI) return false;
            // if(isPPIgreater(students[_studentRollno].ppi[0],companies[_companyId].minPPI))return true;
            // return false;
            return true;
        }
        return true;
    }
   
   function getPPI(string memory _studentRollno) public view returns (string memory) {
        return students[_studentRollno].ppi[0];
    }

    function getSPI(string memory _studentRollno) public view returns (string memory){
        // return students[_studentRollno].spi[sem-1];
        return students[_studentRollno].spi[0];
    }


    function addSelected(
        uint _companyId,
        string memory _studentRollno
    ) public {
        companies[_companyId].finalSelectedStudents.push(_studentRollno);
        string memory _empty = "";
        if (
            keccak256(abi.encodePacked(students[_studentRollno].companyId)) ==
            keccak256(abi.encodePacked(_empty))
        ) {
            students[_studentRollno].updateLeft--;
        }
        students[_studentRollno].companyId = _companyId;
    }

    // function applyForLOR() public{

    // }
}
