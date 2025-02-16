import { Gateway, Wallets } from "fabric-network";
import fs from "fs";
import path from "path";

const ccpPath = path.resolve(__dirname, "..", "network", "connection.json");

export const storeCredential = async (candidateId, credentialHash) => {
    const wallet = await Wallets.newFileSystemWallet("./wallet");
    const gateway = new Gateway();

    try {
        await gateway.connect(ccpPath, {
            wallet,
            identity: "admin",
            discovery: { enabled: true, asLocalhost: true }
        });

        const network = await gateway.getNetwork("mychannel");
        const contract = network.getContract("credentials");

        await contract.submitTransaction("storeCredential", candidateId, credentialHash);
        return { success: true, message: "Credential stored successfully. "};
    } catch (error) {
        console.error("Error storing credential: ", error);
        return { success: false, message: error.message };
    } finally {
        gateway.disconnect();
    }
};