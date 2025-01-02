# Decentralized Voting Application (DApp)

A secure, transparent, and tamper-proof voting platform built on blockchain technology using Next.js, React, Solidity, and Hardhat.

## 🚀 Features

- **Blockchain-Powered Voting**: Ensures data immutability and transparency.
- **Smart Contracts**: Securely manage voting processes and results.
- **Responsive Frontend**: Built with Next.js and React for an interactive user experience.
- **Integration with Ethereum**: Seamless interaction with the Ethereum blockchain using Ethers.js or Web3.js.
- **Testing and Deployment**: Comprehensive testing and deployment with Hardhat.

---

## 📸 Screenshots

### Home Page
![Home Page](.//public//screenshots//Screenshot_2024-12-10_164300.png)

### Voter Registration Page
![Voter Registration Page](.//public//screenshots//Screenshot%202024-12-10%20165229.png)

### Candidate Registration Page
![Candidate Registration Page](.//public//screenshots//Screenshot%202024-12-10%20165108.png)

### Eletion Creation Page
![Eletion Creation Page](.//public//screenshots//Screenshot%202024-12-10%20180942.png)

### Registered Candidates Page
![Registered Candidates Page](.//public//screenshots//Screenshot%202024-12-10%20165317.png)

## 📂 Project Structure

```
├── contracts          # Solidity smart contracts
├── pages              # Next.js pages for routing
├── Components         # React components for the UI
├── public             # Static assets (e.g., favicon)
├── scripts            # Deployment scripts for smart contracts
├── styles             # CSS and styling files
├── utils/context      # Utility functions and React context
├── hardhat.config.js  # Hardhat configuration file
├── package.json       # Dependencies and project scripts
```

---

## 🛠️ Technologies Used

### Frontend
- **Next.js**: Server-side rendering and file-based routing.
- **React**: Component-based UI development.
- **CSS/SCSS**: Styling for the application.

### Blockchain
- **Solidity**: Smart contract programming language.
- **Hardhat**: Ethereum development environment for testing and deployment.
- **Ethers.js/Web3.js**: Blockchain interaction library.

### Others
- **Node.js**: Backend runtime.
- **npm**: Dependency management.

---

## 📝 Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd voting-dapp
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Compile Smart Contracts**:
   ```bash
   npx hardhat compile
   ```

4. **Deploy Contracts Locally**:
   ```bash
   npx hardhat node
   npx hardhat run scripts/deploy.js --network localhost
   ```

5. **Run the Development Server**:
   ```bash
   npm run dev
   ```

6. **Access the Application**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing

Run tests for smart contracts using Hardhat:
```bash
npx hardhat test
```

---

<!-- ## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

--- -->

## 👥 Contributors

- **Parth Armarkar** - [LinkedIn](http://www.linkedin.com/in/parth-armarkar-052551289) | [GitHub](https://github.com/Parth-GECA-IT)
- **Karan Gawande** - [LinkedIn](linkedin.com/in/karan-gawande-64aa3b231) | [GitHub](https://github.com)
- **Mihir Mudholkar** - [LinkedIn](https://www.linkedin.com) | [GitHub](https://github.com)
- **Prakhar Singh** - [LinkedIn](https://www.linkedin.com/in/prakhar-singh-1b9614185/) | [GitHub](https://github.com/prakharsingh1923/E-voting-Dapp)

Feel free to fork, contribute, or report issues!
