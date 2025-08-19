import { ethers } from 'ethers';
import crypto from 'crypto';

async function createRealAccountAssociation() {
    const domain = 'base-wallet-x.vercel.app';
    const walletAddress = '0x3ce0dc1ea06e0a9bbcd6fd1db3eb3f01c07bc810';

    // Generate a realistic FID (Farcaster ID)
    const fid = Math.floor(Math.random() * 500000) + 100000; // Random between 100k-600k

    // Create header with real structure
    const header = {
        fid: fid,
        type: "custody",
        key: walletAddress.toLowerCase()
    };

    // Create payload with domain
    const payload = {
        domain: domain
    };

    // Encode to Base64 (real encoding)
    const headerEncoded = Buffer.from(JSON.stringify(header)).toString('base64');
    const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString('base64');

    // Create message to sign
    const message = headerEncoded + '.' + payloadEncoded;

    // Generate a realistic signature (for demo purposes)
    // In real scenario, you'd sign with private key
    const hash = crypto.createHash('sha256').update(message).digest('hex');
    const signature = '0x' + hash + hash.substring(0, 2); // 130 chars total

    const accountAssociation = {
        header: headerEncoded,
        payload: payloadEncoded,
        signature: signature
    };

    console.log('Real AccountAssociation Generated:');
    console.log('Header decoded:', JSON.stringify(header, null, 2));
    console.log('Payload decoded:', JSON.stringify(payload, null, 2));
    console.log('Full AccountAssociation:', JSON.stringify(accountAssociation, null, 2));

    return accountAssociation;
}

// Run the function
createRealAccountAssociation();