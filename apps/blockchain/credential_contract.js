import { Contract } from "fabric-contract-api";

export class CredentialContract extends Contract {
  async storeCredential(ctx, candidateId, credentialHash) {
    const credential = { candidateId, credentialHash, verified: false };
    await ctx.stub.putState(
      candidateId,
      Buffer.from(JSON.stringify(credential)),
    );
    return "Credential stored successfully.";
  }

  async verifyCredential(ctx, candidateId) {
    const credentialBytes = await ctx.stub.getState(candidateId);
    if (!credentialBytes || credentialBytes.length == 0) {
      throw new Error(`Credential not found for Candidate ID: ${candidateId}`);
    }

    const credential = JSON.parse(credentialBytes.toString());
    credential.verified = true;
    await ctx.stub.putState(
      candidateId,
      Buffer.from(JSON.stringify(credential)),
    );

    return "Credential verified successfully.";
  }

  async revokeCredential(ctx, candidateId) {
    await ctx.stub.deleteState(candidateId);
    return "Credential revoked successfully.";
  }
}
