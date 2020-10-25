// SPDX-License-Identifier: MIT
pragma solidity "0.5.12";

/** Imports */
import "./IERC721.sol";
import "./Ownable.sol";

/** Contract */
contract CatsoContract is IERC721, Ownable{

/** State Variables */
    string public constant name = "Catso Tokens";
    string public constant symbol = "CAT";
    
    /** - Varables related to the birth of a new kitten */
    uint256 public constant LIMIT_OF_GEN0 = 10;
    uint256 public gen0Counter;


/** Events */
    event Birth(address owner, uint256 newCatsoId, uint256 mumId, uint256 dadId, uint256 genes);

/** Structs */
    /** Defines the Kitty struct */
    struct Kitty {
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

/** Arrays */ 

    /** - Kitty array containes individual kitties*/
    Kitty[] kitties;


/** Mappings */

    /*@Dev -  CatsoId => owners address */
    mapping (uint256 => address) public catIndexToOwner;

    /*@Dev - Owners address => number of kitties */
    mapping (address => uint256) ownershipTokenCount;

    /*@Dev - CatIndex => approved address */
    mapping (uint256 => address) public catIndexToApproved;

    mapping (address => mapping (address => bool)) private _operatorApprovals;


/** Functions setters */

    function transferFrom (address _from, address _to, uint256 _tokenId) public {
        require(_to != address(0));
        require(msg.sender == _from || _approvedFor(msg.sender, _tokenId) || isApprovedForAll(_from, msg.sender));
        require(_owns(_from, _tokenId));
        require(tokenId < kitties.length);

        _transfer(_from, _to, _tokenId);
    }


    function approve(address _to, uint256 _tokenId) public {
        require(_owns(msg.sender, _tokenId));

        _approve(_tokenId, _to);
        emit Approval(msg.sender, _to, _tokenId);
    }

    function setApprovalForAll(address operator, bool approved) public {
        require(operator != msg.sender);

        _operatorApprovals[msg.sender][operator] = approved;
        emit ApprovalForAll(msg.sender, operator, approved);
    }

    /** - Wrapper function to create generation ZERO kitties */
    function createCatsoGen0(uint256 _genes)public onlyOwner returns (uint256) {
        require(gen0Counter < LIMIT_OF_GEN0, "The limit of Generation 0 catsos is reached!");

        gen0Counter++;

        /* - call the _createCatso(mumId, dadId, _generation, _genes, adddress of msg.sender) */
        return _createCatso(0, 0, 0, _genes, msg.sender);
    }

    /** - function to Breed a new Catso, returns the newCatsoId */
    function _createCatso( uint256 _mumId, uint256 _dadId, uint256 _generation, uint256 _genes, address _owner) private returns (uint256) {
       /* - Creates the kitty struct */
        Kitty memory _kitty = Kitty({
            genes: _genes,
            birthTime: uint64(now),
            mumId: uint32(_mumId),
            dadId: uint32(_dadId),
            generation: uint16(_generation)
        });

        /* - add the newly created _kitty struct to the array of kitties */
        /* - bind the index of the added _kitty to the variable newCatsoId */
        uint256 newCatsoId = kitties.push(_kitty) -1;

        emit Birth(_owner, newCatsoId, _mumId, _dadId, _genes);

        /* - call the function _transfer(address _from, address _to, tokenId) */
        _transfer(address(0), _owner, newCatsoId);

        return newCatsoId;
    }

    function transfer(address _to,uint256 _tokenId) external {
        require(_to != address(0));
        require(_to != address(this));
        require(_owns(msg.sender, _tokenId));

        _transfer(msg.sender, _to, _tokenId);
    }

    function _transfer(address _from, address _to, uint256 _tokenId) internal {
        ownershipTokenCount[_to]++;

        catIndexToOwner[_tokenId] = _to;

        if (_from != address(0)) {
            ownershipTokenCount[_from]--;
            delete catIndexToApproved[_tokenId];
        }

        emit Transfer(_from, _to, _tokenId);
    }


/** Function getters */
    
    function isApprovedForAll(address _owner, address operator) public view returns (bool) {
        return _operatorApprovals[_owner][operator];
    }


    function getCatsoByOwner(address _owner) external view returns (uint[] memory ) {
        uint[] memory result = new uint[](ownershipTokenCount[_owner]);
        uint counter = 0;
        for (uint i = 0; i < kitties.length; i++) {
            if (catIndexToOwner[i] == _owner) {
                result[counter] = i;
                counter++;
            }
        }
    }


    function getApproved(uint256 tokenId) public view returns (address) {
        require(tokenId < kitties.length); // Token must exist.
        
        return catIndexToApproved[tokenId];
    } 


    function getCatso(uint256 _id) external view returns (uint256 genes, uint256 birthTime, uint256 mumId, uint256 dadId, uint256 generation) {
        Kitty storage kitty = kitties[_id];
        
        birthTime = uint256(kitty.birthTime);
        mumId = uint256(kitty.mumId);
        dadId = uint256(kitty.dadId);
        generation = uint256(kitty.generation);
        genes = kitty.genes;
    }


    function balanceOf(address _owner) external view returns (uint256 balance) {
        return ownershipTokenCount[_owner];
    }


    function totalSupply() public view returns (uint) {
        return kitties.length;
    }


    function ownerOf(uint256 _tokenId) external view returns (address) {
        return catIndexToOwner[_tokenId];
    }


    function _owns(address _claimant, uint256 _tokenId) internal view returns (bool){
        return catIndexToOwner[_tokenId] == _claimant;
    }

    function _approve(uint256 _tokenId, address _approved) internal {
        catIndexToApproved[_tokenId] = _approved;
    }

/** - Smart Contract end */
}

