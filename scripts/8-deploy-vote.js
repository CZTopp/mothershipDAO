import sdk from "./1-initialize-sdk.js"

// Grab the app module address.
const appModule = sdk.getAppModule("0x58630A83E5a26e863FDB573119458C158583B0d9")

;(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      // Give your governance contract a name.
      name: "MothershipDAO's Proposals",

      // This is the location of our governance token, our ERC-20 contract!
      votingTokenAddress: "0x632e02bDDDF6DCe97284FE0e1e0f6C07ef008785",

      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      proposalStartWaitTimeInSeconds: 0,

      // How long do members have to vote on a proposal when it's created?
      // Here, we set it to 24 hours (86400 seconds)
      proposalVotingTimeInSeconds: 24 * 60 * 60,

      // Will explain more below.
      votingQuorumFraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      minimumNumberOfTokensNeededToPropose: "0",
    })

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address
    )
  } catch (err) {
    console.error("Failed to deploy vote module", err)
  }
})()
