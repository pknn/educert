const path = require('path')
const fs = require('fs')
const Web3 = require('web3')
const solc = require('solc')
const { v4: uuidv4 } = require('uuid')

const provider = new Web3.providers.WebsocketProvider('http://localhost:8545')
const web3 = new Web3(provider)

const contractPath = path.join(__dirname, 'contracts', 'Transaction.sol')

const Transaction = () => {
  let isDeployed = false
  let deployedContract
  let account
  this.deploy = async function() {
    if (isDeployed) return
    const contractFile = fs.readFileSync(contractPath).toString()
    const input = {
      language: 'Solidity',
      sources: {
        Transaction: {
          content: contractFile
        }
      },
      settings: {
        outputSelection: {
          '*': {
            '*': ['*']
          }
        }
      }
    }
    const output = JSON.parse(solc.compile(JSON.stringify(input)))
    const { transactionContract } = output.contracts.Transaction
    const bytecode = transactionContract.evm.bytecode.object
    const abi = transactionContract.abi
    const contract = new web3.eth.Contract(abi)
    account = (await web3.eth.getAccounts())[0]
    const { gasLimit } = await web3.eth.getBlock('latest')
    const contractInstance = await contract
      .deploy({ data: '0x' + bytecode })
      .send({
        from: account,
        gas: gasLimit,
        gasPrice: '0'
      })
    deployedContract = contractInstance
    isDeployed = true
  }
  this.create = async function(recordId, issuerId, transactionType) {
    const id = uuidv4().slice(0, 8)
    const newTx = JSON.stringify({
      id,
      recordId,
      issuerId,
      transactionType,
      createdAt: Date.now()
    })
    const idToAdd = web3.utils.fromAscii(uuidv4().slice(0, 8))
    const { gasLimit } = await web3.eth.getBlock('latest')
    await deployedContract.methods.create(idToAdd, newTx).send({
      from: account,
      gas: gasLimit,
      gasPrice: '0'
    })
  }
  this.getAll = async function() {
    const result = await deployedContract.methods.getAll().call()
    return result.map((r) => JSON.parse(r))
  }
  return this
}

const transaction = Transaction()

module.exports = transaction
