import sdk from "./1-initialize-sdk.js"

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule("0x58630A83E5a26e863FDB573119458C158583B0d9")

;(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "MothershipDAO Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "BEAM",
    })
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address
    )
  } catch (error) {
    console.error("failed to deploy token module", error)
  }
})()
