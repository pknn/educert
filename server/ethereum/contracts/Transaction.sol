// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.4.16 <0.7.0;
pragma experimental ABIEncoderV2;
contract transactionContract {
  bytes32[] public recordsList;
  struct Transaction {
    string payload;
    uint listPointer;
  }

  event dataAdded(string dat);

  mapping(bytes32 => Transaction) public transactions;

  function create(bytes32 id, string memory payload) public {
    transactions[id].payload = payload;
    recordsList.push(id);
    transactions[id].listPointer = recordsList.length - 1;
  }

  function getAll() public view returns (string[] memory payloads) {
    string[] memory payloadss = new string[](recordsList.length);
    for (uint i = 0; i < recordsList.length; i++) {
      Transaction storage transaction = transactions[recordsList[i]];
      payloadss[i] = transaction.payload;
    }
    return payloadss;
  }
}