import sdk from "./1-initialize-sdk.js"

const bundleDrop = sdk.getBundleDropModule(
  "0xb77030a4eC3AC389A31E96BafC4B8Ad36Ed9ba21"
)

;(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory()
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      startTime: new Date(),
      maxQuantity: 50_000,
      maxQuantityPerTransaction: 1,
    })

    await bundleDrop.setClaimCondition(0, claimConditionFactory)
    console.log(
      "✅ Successfully set claim condition on bundle drop:",
      bundleDrop.address
    )
  } catch (error) {
    console.error("Failed to set claim condition", error)
  }
})()
