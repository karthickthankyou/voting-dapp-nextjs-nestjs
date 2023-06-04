// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Voting {
    struct Personality {
        string name;
        uint256 upvotes;
        uint256 downvotes;
    }

    event PersonalityCreated(string name, address creator);
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
            bytes(personalities[name].name).length == 0,
            "Personality already exists"
        );
        personalities[name] = Personality(name, 0, 0);
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
}
