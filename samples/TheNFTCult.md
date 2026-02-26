## Forging

```solidity
/**
 * Forge tokens together to create new tokens.
 * Note: provided array are the owner's indexes of tokens, NOT tokenIds.
 * EX: Owner owns [ID#55, ID#99, ID#2012]
 * The owner token indexes might be [1, 3, 2] (My point: its unrelated to
 * the ID of the token.)
 */
function forgeCultTokens(uint256[] memory candidateOwnerIndexes, uint256 opCode)
    external
    nonReentrant
{
    require(forgingActive == true, "Forging not active");
    require(
        candidateOwnerIndexes.length < MAX_COMBINABLE_TOKENS,
        "Too many tokens"
    );

    require(opCode == 0 || opCode == 1 || opCode == 2, "Invalid opcode");

    uint256 idx;
    uint256[] memory tokenIdsToForge = new uint256[](
        candidateOwnerIndexes.length
    );

    for (idx = 0; idx < candidateOwnerIndexes.length; idx++) {
        // Validate existence and ownership.
        tokenIdsToForge[idx] = tokenOfOwnerByIndex(
            _msgSender(),
            candidateOwnerIndexes[idx]
        );
    }

    uint256 craftedTokenId = maxNftsForSale + 1;
    uint256 targetFlavor = 0;
    uint256 checkValue = 0;

    for (idx = 0; idx < tokenIdsToForge.length; idx++) {
        uint256 tokenFlavor = _tokenFlavors[tokenIdsToForge[idx]];

        if (opCode == 0) {
            // lateral forge [Must be same flavor]
            if (checkValue == 0) {
                checkValue = (tokenFlavor / 100) * 100;
            } else {
                require(
                    checkValue == (tokenFlavor / 100) * 100,
                    "Incompatible flavors"
                );
            }

            targetFlavor += tokenFlavor % 100;
        } else if (opCode == 1) {
            // vertical forge [Must be same color scheme]
            if (checkValue == 0) {
                checkValue = tokenFlavor % 100;
            } else {
                require(
                    checkValue == tokenFlavor % 100,
                    "Incompatible colors"
                );
            }

            targetFlavor += tokenFlavor / 100;
        } else if (opCode == 2) {
            // multiply forge
            targetFlavor = targetFlavor == 0
                ? tokenFlavor
                : targetFlavor * tokenFlavor;
        }

        // Keep track of the lowest id to use for the new mint.
        if (tokenIdsToForge[idx] < craftedTokenId) {
            craftedTokenId = tokenIdsToForge[idx];
        }
    }

    if (opCode == 0) {
        targetFlavor = targetFlavor + checkValue;
    } else if (opCode == 1) {
        targetFlavor = (targetFlavor * 100) + checkValue;
    }

    // Make sure the requested forge target exists.
    require(bytes(_flavorURIs[targetFlavor]).length > 0, "Forge impossible");

    // Now burn the pieces
    for (idx = 0; idx < tokenIdsToForge.length; idx++) {
        _burn(tokenIdsToForge[idx]);
    }

    // Make sure the slot is now free.
    require(!_exists(craftedTokenId), "Can't re-mint");
    require(craftedTokenId <= maxNftsForSale, "Bad token id");

    // Execute the mint.
    _safeMint(_msgSender(), craftedTokenId);
    _setTokenURI(craftedTokenId, targetFlavor);
}
```

## Burn minting (two functions)

```solidity
function burnMintCultToken(uint256 tokenId, uint256 desiredFlavor)
    external
    payable
    nonReentrant
{
    require(block.number > startingBlockNumber, "Not started");
    require(burnMintingActive, "Not active");
    require(!_exists(tokenId), "Token exists");
    require(_msgSender() == _tokenSlotOwners[tokenId], "Not owner");
    require(burnMintPricePerNft == msg.value, "Invalid price");
    require(_flavorEligibilityMap[desiredFlavor] == true, "Ineligible flavor");

    _burnMintCultTokens(_msgSender(), tokenId, desiredFlavor);
}

function _burnMintCultTokens(
    address minter,
    uint256 tokenId,
    uint256 desiredFlavor
) internal {
    require(minter != address(0), "Bad address");

    _safeMint(minter, tokenId);
    _setTokenURI(tokenId, desiredFlavor);

    delete _tokenSlotOwners[tokenId];
}
```

## Extensible Artwork

```solidity
// Bulk method to allow one single call to set up the contract.
function setFlavorURIBulk(
    uint256[] memory flavorIndex,
    string[] memory flavorUri,
    bool[] memory extendedFlavor,
    bool[] memory enableBurnMinting
) external onlyOwner {
    require(
        flavorIndex.length == flavorUri.length &&
            flavorIndex.length == extendedFlavor.length &&
            flavorIndex.length == enableBurnMinting.length,
        "Unmatched arrays"
    );

    uint256 idx;
    for (idx = 0; idx < flavorIndex.length; idx++) {
        _setFlavorUri(
            flavorIndex[idx],
            flavorUri[idx],
            extendedFlavor[idx],
            enableBurnMinting[idx]
        );
    }
}
```