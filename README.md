## Secure e-Degree Vault using Blockchain

**Abstract**

This project represents a crucial component of the B.Tech (Information Technology) degree requirement. It consists of two essential parts: the development of a decentralized application and the technical documentation, both centered around Blockchain technology research.

One of the significant challenges in higher education is the proliferation of counterfeit education certificates and fake degrees. To address this issue, a tamper-proof and confidential repository for certificates is required, where multiple certified authorities can verify and store issued certificates in immutable repositories while ensuring data privacy. Additionally, an efficient mechanism for retrieving authentic certificates should be in place, minimizing costs and time.

The chosen solution revolves around leveraging Blockchain technology, specifically the Ethereum Blockchain, along with technologies like Solidity, Node.js, HTML, and JavaScript. Blockchain offers the advantage of being a distributed database with chronologically sorted blocks, ensuring data integrity and immutability. By creating a link between blocks, any attempts at alteration become practically impossible. The proposed project is an analysis of a use case applying this technology.

**"Confidential e-Degree Vault using Blockchain"** aims to provide a decentralized and transparent system for managing the degree issuing and validation process. This system is intended for universities with multiple affiliated colleges or any entity responsible for managing degrees or certificates. It enables storing degree/certificate validation proofs on a blockchain, specifically the Ethereum blockchain tested on the Ropsten Testnet. Once a degree is recorded on the blockchain, anyone can easily verify the authenticity of a submitted degree, thereby mitigating the risk of encountering fake credentials.

**Getting Started**

To set up the project on your local machine, follow these steps. The project comprises a decentralized web application that allows deploying and validating degree records.

**Prerequisites**

Before starting, ensure you have the following installed:

* NodeJs
* MySQL
* Express Server
* Ropsten Testnet account with some test ethers

**Installation**

1. Download dependencies or copy them from the `node_modules` folder.
2. Create a Ropsten Testnet account and request some test ethers from the vault.
3. Set up 3 MySQL tables as per the instructions provided in the `mysql.md` file.

**Running the Decentralized Web Application**

To run the decentralized web application, follow these steps:

1. Open the command prompt and type:
   * `node server.js`
   * `node validate.js`

2. Then, visit the following URLs in your web browser:
   * `http://localhost:3000` - For deployment
   * `http://localhost:3001` - For validation

With these steps completed, the Secure e-Degree Vault using Blockchain project will be up and running on your local machine, offering a robust solution for managing and verifying academic certificates while ensuring data confidentiality and integrity.