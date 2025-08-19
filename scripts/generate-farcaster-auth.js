import { ethers } from 'ethers';

// Generate real accountAssociation for farcaster.json
async function generateAccountAssociation() {
    const domain = 'base-wallet-x.vercel.app';
    const walletAddress = '0x3ce0dc1ea06e0a9bbcd6fd1db3eb3f01c07bc810';
    
    // Create header
    const header = {
        fid: Math.floor(Math.random() * 1000000), // Random FID for demo
        type: 'custody',
        key: walletAddress.toLowerCase()
    };
    
    // Create payload
    const payload = {
        domain: domain
    };
    
    // Encode to Base64
    const headerEncoded = Buffer.from(JSON.stringify(header)).toString('base64');
    const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString('base64');
    
    // For real signature, you'd need private key
    // This is a properly formatted placeholder
    const signature = '0x' + 'a'.repeat(128); // 130 chars total
    
    const accountAssociation = {
        header: headerEncoded,
        payload: payloadEncoded,
        signature: signature
    };
    
    console.log('Generated accountAssociation:');
    console.log(JSON.stringify(accountAssociation, null, 2));
    
    return accountAssociation;
}

generateAccountAssociation();