# Registering Tokens with Users
# Binance Smart Chain Mainnet

When a user opens their MetaMask, they are shown a variety of assets, including tokens. By default, MetaMask auto-detects some major popular tokens and auto-displays them, but for most tokens, the user will need to add the token themselves.

While this is possible using our UI with the `Add Token` button, that process can be cumbersome, and involves the user interacting with contract addresses, and is very error prone.

You can greatly improve the security and experience of users adding your token to their MetaMask by taking advantage of the `wallet_watchAsset` API as defined in [EIP-747](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-747.md).

## Code-free Example

Here are a couple live web applications that let you enter your token details, and then share them with a simple web link:

- [Watch Token] (https://vittominacori.github.io/watch-token/create/)


## Example

If you'd like to integrate suggesting a token into your own web app, you can follow this code snippet to implement it:

```javascript
const tokenAddress = '0x1634a20C575281c6a90D6Cd9FeDcbae471D6f4e5';
const tokenSymbol = 'SUMMER';
const tokenDecimals = 8;
const tokenImage = 'https://raw.githubusercontent.com/HappySummerHQ/Token/main/PNG%20(1).png';

try {
  // wasAdded is a boolean. Like any RPC method, an error may be thrown.
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', // Initially only supports ERC20, but eventually more!
      options: {
        address: tokenAddress, // The address that the token is at.
        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
        decimals: tokenDecimals, // The number of decimals in the token
        image: tokenImage, // A string url of the token logo
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('Your loss!');
  }
} catch (error) {
  console.log(error);
}
```
