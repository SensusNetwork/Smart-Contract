
async function addValidators({
  arrayOfAddresses,
  proxyStorageMock,
  keysManager,
  SensusNetworkMock
}) {
  arrayOfAddresses = arrayOfAddresses || arrayOfHundredAddresses;
  await proxyStorageMock.setVotingContractMock(masterOfCeremony);
  for(let validator of arrayOfAddresses){
    await keysManager.addMiningKey(validator).should.be.fulfilled;
  }
  await SensusNetworkMock.setSystemAddress(masterOfCeremony);
  await SensusNetwork.finalizeChange().should.be.fulfilled;
}
