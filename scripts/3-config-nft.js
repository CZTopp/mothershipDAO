import sdk from "./1-initialize-sdk.js"
import { readFileSync } from "fs"

const bundleDrop = sdk.getBundleDropModule(
  "0xb77030a4eC3AC389A31E96BafC4B8Ad36Ed9ba21"
)

;(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "The Mothership",
        description: "This NFT will give you access to MothershipDAO!",
        image: readFileSync("scripts/assets/mothership.jpeg"),
      },
    ])
    console.log("✅ Successfully created a new NFT in the drop!")
  } catch (error) {
    console.error("failed to create the new NFT", error)
  }
})()
