// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Voting is Initializable {
    address public owner;
    uint public maxPersonalityCreation;

    function initialize() public initializer {
        owner = msg.sender;
        maxPersonalityCreation = 5;
    }

    mapping(address => string[]) public createdPersonalities;

    struct Personality {
        string name;
        uint256 upvotes;
        uint256 downvotes;
    }

    event PersonalityCreated(string name, address creator);
    event PersonalityRemoved(string name);
    event VotingUpdated(
        string name,
        uint256 upvotes,
        uint256 downvotes,
        address voter,
        int256 vote
    );

    mapping(string => Personality) public personalities;
    mapping(address => mapping(string => int)) public votes;

    function createPersonality(string memory name) public {
        require(
            createdPersonalities[msg.sender].length < maxPersonalityCreation,
            "Maximum personality creation limit reached."
        );
        require(
            bytes(personalities[name].name).length == 0,
            "Personality already exists"
        );
        personalities[name] = Personality(name, 0, 0);
        createdPersonalities[msg.sender].push(name);

        emit PersonalityCreated(name, msg.sender);
    }

    function upvote(string memory name) public {
        require(
            bytes(personalities[name].name).length != 0,
            "Personality does not exist"
        );

        if (votes[msg.sender][name] == 1) {
            revert("Already upvoted");
        }

        if (votes[msg.sender][name] == -1) {
            personalities[name].downvotes -= 1;
        }
        personalities[name].upvotes += 1;
        votes[msg.sender][name] = 1;

        emit VotingUpdated(
            name,
            personalities[name].upvotes,
            personalities[name].downvotes,
            msg.sender,
            1
        );
    }

    function downvote(string memory name) public {
        require(
            bytes(personalities[name].name).length != 0,
            "Personality does not exist"
        );

        if (votes[msg.sender][name] == -1) {
            revert("Already downvoted");
        }

        if (votes[msg.sender][name] == 1) {
            personalities[name].upvotes -= 1;
        }
        personalities[name].downvotes += 1;
        votes[msg.sender][name] = -1;

        emit VotingUpdated(
            name,
            personalities[name].upvotes,
            personalities[name].downvotes,
            msg.sender,
            -1
        );
    }

    function removePersonality(string memory name) public {
        require(
            msg.sender == owner,
            "Only the owner can remove a personality."
        );
        require(
            bytes(personalities[name].name).length != 0,
            "Personality does not exist"
        );

        delete personalities[name];
        emit PersonalityRemoved(name);
    }
}
