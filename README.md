# erc20-instance

A package helps you to create an erc20 contract instance easily.

## Installation

```bash
npm install erc20-instance
```

## Usage

- Only use common ERC20 ABI:

  ```javascript
    import { ERC20ABI } from "erc20-instance";

    const erc20Token = new Contract(contractAddress, ERC20ABI, provider);
  ```

- Use erc20 ABI with `ERC20Contract` type:

  For my personal preference, I also introduce a pre-defined type `ERC20Contract` to help support typescript better. `ERC20Contract` is a type generated from a common ERC20 contract code with the tool [`Typechain`](https://www.npmjs.com/package/typechain).

  ```typescript
    import { createERC20Instance } from "erc20-instance";

    let erc20Token = createERC20Instance(contractAddress, provider);
  ```

  In this example, `erc20Token` is an `ERC20Contract` instance instead of a `Contract` instance.

## Contribute

Any contribution is welcomed to make it better.

If you have any questions, please create an [issue](https://github.com/0xWheelFactory/erc20-instance/issues).

## License

[MIT](LICENSE)
