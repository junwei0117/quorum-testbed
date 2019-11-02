import Web3 from 'web3';

export class Provider {
  public getProvider: () => Promise<unknown>;
  constructor(address) {
        this.getProvider = () => {
            const { WebsocketProvider } = Web3.providers;
            const provider = new WebsocketProvider(address);
            return new Promise((resolve, reject) => {
                provider.on('connect', () => resolve(provider));
            });
        };
    }
}
