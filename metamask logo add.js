# Happy Summer Token update logo in metamask #

## Few steps here ##

##COPY THIS LINK AND GO TO URL##

https://vittominacori.github.io/watch-token/create/

# Select the Binance Smart Chain mainnet # 
# Paste Burnt Hair Token address # // 0x1634a20C575281c6a90D6Cd9FeDcbae471D6f4e5
# Finally paste this link #  // https://raw.githubusercontent.com/HappySummerHQ/Token/main/PNG%20(1).png







#javascript#

const tokenAddress = '0x1634a20C575281c6a90D6Cd9FeDcbae471D6f4e5';
const tokenSymbol = 'SUMMER';
const tokenDecimals = 8;
const tokenImage = 'https://raw.githubusercontent.com/HappySummerHQ/Token/main/PNG%20(1).png

';

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
