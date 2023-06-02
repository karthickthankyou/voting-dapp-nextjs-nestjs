// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Personality {
        string name;
        uint256 upvotes;
        uint256 downvotes;
    }

    event PersonalityCreated(string name);
    event VotingUpdated(string name, uint256 upvotes, uint256 downvotes);

    mapping(string => Personality) public personalities;
    mapping(address => mapping(string => bool)) public votes;

    function createPersonality(string memory name) public {
        require(
            bytes(personalities[name].name).length == 0,
            "Personality already exists"
        );
        personalities[name] = Personality(name, 0, 0);

        emit PersonalityCreated(name); // Emit event
    }

    function upvote(string memory name) public {
        require(
            bytes(personalities[name].name).length != 0,
            "Personality does not exist"
        );
        require(!votes[msg.sender][name], "You have already voted");

        personalities[name].upvotes += 1;
        votes[msg.sender][name] = true;

        emit VotingUpdated(
            name,
            personalities[name].upvotes,
            personalities[name].downvotes
        );
    }

    function downvote(string memory name) public {
        require(
            bytes(personalities[name].name).length != 0,
            "Personality does not exist"
        );
        require(!votes[msg.sender][name], "You have already voted");

        personalities[name].downvotes += 1;
        votes[msg.sender][name] = true;

        emit VotingUpdated(
            name,
            personalities[name].upvotes,
            personalities[name].downvotes
        );
    }
}
